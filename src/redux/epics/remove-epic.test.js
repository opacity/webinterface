import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { MasterHandle } from "opaque";

import removeActions from "../actions/remove-actions";
import removeEpic from "./remove-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

test("removeFileByVersionEpic on success", done => {
  const name = "n1";
  const version = { handle: "h1" };
  const folder = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    removeActions.removeFileByVersion({ name, version, folder, masterHandle })
  );

  removeEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      removeActions.removeFileSuccess({ masterHandle, folder, version })
    );
    done();
  });
});

test("removeFileByVersionEpic on failure", done => {
  const name = "n1";
  const version = { handle: "h1" };
  const folder = "/";
  const error = new Error("foobar");
  const masterHandle = {
    deleteVersion: jest.fn().mockRejectedValue(error)
  };

  const action$ = of(
    removeActions.removeFileByVersion({ name, version, folder, masterHandle })
  );

  removeEpic(action$).subscribe(actions => {
    expect(actions).toEqual(removeActions.removeFileError({ error }));
    done();
  });
});

test("removeFilesEpic", done => {
  const files = [
    { version: { handle: "h1" }, name: "n1" },
    { version: { handle: "h2" }, name: "n2" }
  ];
  const folder = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    removeActions.removeFiles({ files, masterHandle, folder })
  );
  const expected = files.map(({ name, version }) =>
    removeActions.removeFileByVersion({ name, version, masterHandle, folder })
  );

  removeEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});
