import Item from "./Item.jsx";

const Items = ({ todoItems, onDelete }) => {
  let i = 0;
  return (
    <>
      {todoItems.map((item) => (
        <Item
          onDelete={onDelete}
          key={item.Name}
          TodoName={item.Name}
          TodoDate={item.dueDate}
        ></Item>
      ))}
    </>
  );
};
export default Items;
