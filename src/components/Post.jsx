import TodoList from "./todoList";

const Post = ({ todoItem, handleDelete }) => {
  return (
    <div>
      {todoItem.map((item) => {
        return (
          <TodoList
            task={item.task}
            date={item.date}
            key={item.task}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default Post;
