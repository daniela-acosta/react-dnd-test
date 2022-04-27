import { useDrop } from "react-dnd";
import classNames from "classnames";

function Card({ card }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "file",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const customClassname = classNames("card", {
    "-droppable": isOver && canDrop,
  });

  return (
    <div className={customClassname} ref={drop}>
      <h4>{card.label}</h4>
    </div>
  );
}

export default Card;
