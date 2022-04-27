import { useDrag } from "react-dnd";
import classNames from "classnames";

function File({ file }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "file",
    item: file,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const customClassname = classNames("file", { "-dragging": isDragging });

  return (
    <div className={customClassname} ref={drag}>
      <h4>{file.label}</h4>
    </div>
  );
}

export default File;
