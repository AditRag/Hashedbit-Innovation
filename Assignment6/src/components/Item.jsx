function Item({ TodoName, TodoDate, onDelete }) {
  return (
    <div className="row items">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger my-button"
          onClick={() => onDelete(TodoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
