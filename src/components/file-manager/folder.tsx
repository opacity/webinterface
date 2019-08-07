import React from "react";
import { useDrop } from "react-dnd";

import { DROP_TYPES } from "../../config";

const Folder = ({ name, location, currentFolder, push, children }) => {
  const [{}, drop] = useDrop({
    accept: DROP_TYPES.FILE,
    drop: (result?) => {
      console.log(result);
      console.log(name);
    }
  });

  return (
    <tr
      ref={drop}
      key={location}
      onClick={() =>
        push(
          `/file-manager${currentFolder === "/" ? "" : currentFolder}/${name}`
        )
      }
    >
      {children}
    </tr>
  );
};

export default Folder;
