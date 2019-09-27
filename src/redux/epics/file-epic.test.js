import { of } from "rxjs";
import { MasterHandle } from "opaque";

import fileActions from "../actions/file-actions";
import fileEpic from "./file-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

test("renameFile on success", done => {
  const name = "n1";
  const folder = "/";
  const to = "/";
  const masterHandle = {
    renameFile: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.renameFile({ name, to, folder, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.renameFileSuccess({ masterHandle, folder })
    );
    done();
  });
});

test("moveFile on success", done => {
  const folder = "n1";
  const file = "/";
  const to = "/";
  const masterHandle = {
    moveFile: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.moveFile({ file, to, folder, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.moveFileSuccess({ masterHandle, file })
    );
    done();
  });
});
