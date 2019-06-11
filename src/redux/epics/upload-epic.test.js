import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { EventEmitter } from "events";

import uploadActions from "../actions/upload-actions";
import uploadEpic from "./upload-epic";

test("uploadFilesEpic filesActions.UPLOAD_FILES", done => {
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
