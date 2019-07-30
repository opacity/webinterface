import { of } from "rxjs";
import { MasterHandle } from "opaque";

import renameActions from "../actions/rename-actions";
import renameEpic from "./rename-epic";

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
    renameActions.renameFile({ name, newName, folder, masterHandle })
  );

  renameEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      renameActions.renameFileSuccess({ masterHandle, folder })
    );
    done();
  });
});
