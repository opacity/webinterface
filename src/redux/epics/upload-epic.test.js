import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { EventEmitter } from "events";

import uploadActions from "../actions/upload-actions";
import uploadEpic from "./upload-epic";

test("uploadFilesEpic", done => {
  const files = ["foo", "bar"];
  const masterHandle = "m1";

  const action$ = of(uploadActions.uploadFiles({ files, masterHandle }));
  const expected = files.map(file =>
    uploadActions.uploadFile({ file, masterHandle })
  );

  uploadEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

test("uploadFileEpic on success", done => {
  const file = { name: "f1" };
  const upload = new EventEmitter();
  upload.handle = "h1";

  const masterHandle = {
    uploadFile: jest.fn(() => upload)
  };

  const action$ = of(uploadActions.uploadFile({ file, masterHandle }));

  uploadEpic(action$).subscribe(actions => {
    expect(actions).toEqual(uploadActions.uploadSuccess({ masterHandle }));
    done();
  });

  upload.emit("finish");
});

test("uploadFileEpic on failure", done => {
  const file = { name: "f1" };
  const upload = new EventEmitter();
  upload.handle = "h1";
  const error = new Error("foobar");

  const masterHandle = {
    uploadFile: jest.fn(() => upload)
  };

  const action$ = of(uploadActions.uploadFile({ file, masterHandle }));

  uploadEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      uploadActions.uploadError({ handle: "h1", filename: "f1", error })
    );
    done();
  });

  upload.emit("error", error);
});
