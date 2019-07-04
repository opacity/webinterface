import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { Download } from "opaque";
import { EventEmitter } from "events";

import downloadActions from "../actions/download-actions";
import downloadEpic from "./download-epic";

jest.mock("opaque", () => ({
  Download: jest.fn()
}));

jest.mock("file-saver", () => ({
  saveAs: jest.fn()
}));

const download = new EventEmitter();
download.metadata = jest.fn().mockResolvedValue({ name: "f1" });
download.toFile = jest.fn().mockResolvedValue(new File([""], "foobar"));

Download.mockImplementation(() => download);

test("downloadFilesEpic", done => {
  const files = ["foo", "bar"];

  const action$ = of(downloadActions.downloadFiles({ files }));
  const expected = files.map(handle =>
    downloadActions.downloadFile({ handle })
  );

  downloadEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

test("downloadFileEpic on success", done => {
  const handle = "h1";

  const action$ = of(downloadActions.downloadFile({ handle }));

  downloadEpic(action$).subscribe(actions => {
    expect(actions).toEqual(downloadActions.downloadSuccess({ handle }));
    done();
  });
});
