import { of } from "rxjs";
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

test("downloadEpic on success", done => {
  const handle = "h1";

  const action$ = of(downloadActions.downloadFile({ handle }));

  downloadEpic(action$).subscribe(actions => {
    expect(actions).toEqual(downloadActions.downloadSuccess({ handle }));
    done();
  });
});
