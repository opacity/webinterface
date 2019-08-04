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
  const newName = "/";
  const masterHandle = {
    renameFile: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.renameFile({ name, newName, folder, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.renameFileSuccess({ masterHandle, folder })
    );
    done();
  });
});
