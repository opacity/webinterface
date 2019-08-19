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
  const directory = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    removeActions.removeFileByVersion({
      name,
      version,
      directory,
      masterHandle
    })
  );

  removeEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      removeActions.removeFileSuccess({ masterHandle, directory, version })
    );
    done();
  });
});

test("removeFileByVersionEpic on failure", done => {
  const name = "n1";
  const version = { handle: "h1" };
  const directory = "/";
  const error = new Error("foobar");
  const masterHandle = {
    deleteVersion: jest.fn().mockRejectedValue(error)
  };

  const action$ = of(
    removeActions.removeFileByVersion({
      name,
      version,
      directory,
      masterHandle
    })
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
  const directory = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    removeActions.removeFiles({ files, masterHandle, directory })
  );
  const expected = files.map(({ name, version }) =>
    removeActions.removeFileByVersion({
      name,
      version,
      masterHandle,
      directory
    })
  );

  removeEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});
