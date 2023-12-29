const TodoList = ({ task, date, handleDelete }) => {
  return (
    <div className="bg-yellow-200 flex justify-center gap-10 py-3 my-5 items-center">
      <span className="text-lg font-bold mx-16">{task}</span>
      <span className="text-lg mx-16">{date}</span>
      <button
        className="bg-red-600 py-2 px-2 mx-16"
        onClick={() => handleDelete(task)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoList;
