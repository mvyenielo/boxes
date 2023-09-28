import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/**
 * BoxList: manages boxes on the list
 *
 * State:
 * - boxes: [{color: blue, width: "10", height: "10"},...]
 *
 * App => BoxList => Box
 *                => NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** adds new box to box list */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  //TODO: get rid of ul and li
  /** render box list */
  function renderItems() {
    return (
      boxes.map(box => (
        <Box
          key={box.id}
          color={box.color}
          width={box.width}
          height={box.height}
          handleDeleteClick={() => deleteBox(box.id)} />
      ))
    );
  }

  /** deletes box from list */
  function deleteBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  // /** grabs id of box that will be deleted  */
  // function handleDeleteClick(event) {
  //   const clickedBoxId = event.target.closest("li").id;
  //   deleteBox(clickedBoxId);
  // }

  //TODO: move renderItems to right before return/or put in return statement
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderItems()}
    </div>
  );


}

export default BoxList;