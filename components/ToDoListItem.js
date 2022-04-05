import styled from "styled-components";

export const ToDoListItem = ({ toDos }) => {
  return (
    <>
      {toDos.map((toDoItem) => (
        <li key={toDoItem.index}>{toDoItem.newToDoItem}</li>
      ))}
    </>
  );
};
