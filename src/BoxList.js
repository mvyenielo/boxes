import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {

    let newBox = {...box, id: uuid()};

    console.log("...boxes",[...boxes]);
    setBoxes(boxes => [...boxes, newBox]);
    console.log("boxes",boxes);
  }

  function renderItems() {
    return (
      <ul>
        {boxes.map(box => (
          <li key={box.id}>
            <Box color={box.color} width={box.width} height={box.height}/>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderItems()};
    </div>
  )


}

export default BoxList;