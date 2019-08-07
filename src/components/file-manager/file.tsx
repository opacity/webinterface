import React from "react";
import { useDrag } from "react-dnd";

import { DROP_TYPES } from "../../config";

const File = ({ name, i, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: DROP_TYPES.FILE },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <tr key={name ? name : i} ref={drag} style={{ opacity }}>
      {children}
    </tr>
  );
};

export default File;
