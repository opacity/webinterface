import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { MasterHandle } from "opaque";

import removeActions from "../actions/remove-actions";
import removeEpic from "./remove-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

test("removeFilesEpic", done => {
  const files = [{ handle: "h1", name: "n1" }, { handle: "h2", name: "n2" }];
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(removeActions.removeFiles({ files, masterHandle }));
  const expected = files.map(({ name, handle }) =>
    removeActions.removeFileByHandle({ name, handle, masterHandle })
  );

  removeEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

test("removeFileByHandleEpic on success", done => {
  const name = "n1";
  const handle = "h1";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    removeActions.removeFileByHandle({ name, handle, masterHandle })
  );

  removeEpic(action$).subscribe(actions => {
    expect(actions).toEqual(removeActions.removeSuccess({ masterHandle }));
    done();
  });
});

test("removeFileByHandleEpic on failure", done => {
  const name = "n1";
  const handle = "h1";
  const error = new Error("foobar");
  const masterHandle = {
    deleteVersion: jest.fn().mockRejectedValue(error)
  };

  const action$ = of(
    removeActions.removeFileByHandle({ name, handle, masterHandle })
  );

  removeEpic(action$).subscribe(actions => {
    expect(actions).toEqual(removeActions.removeError({ error }));
    done();
  });
});
