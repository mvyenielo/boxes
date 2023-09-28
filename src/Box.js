/**
 * Box: renders Box componenet and delete button
 *
 * Props:
 * - color
 * - width
 * - height
 * - handleDeleteClick
 *
 * App => BoxList => Box
 *                => NewBoxForm
 */
function Box({ color, width, height, handleDeleteClick }) {
  //TODO: move box styles into variable
  return (
    <>
      <div className="Box"
        style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}>
      </div>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default Box;