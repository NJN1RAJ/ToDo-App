import { useRef } from "react";

const CreatePost = ({ addNewItem }) => {
  const postDet = useRef();
  const dateDet = useRef();

  const handleClick = () => {
    let task = postDet.current.value;
    let date = dateDet.current.value;

    console.log(date, task);

    addNewItem(task, date);

    postDet.current.value = "";
    dateDet.current.value = "";
  };

  return (
    <div className="flex justify-center">
      <span className="text-xl mr-2 py-1">Enter your task: </span>
      <input
        type="text"
        className="outline py-1 px-1 mr-2"
        name="Task"
        ref={postDet}
        placeholder="Enter your task"
      />
      <span className="text-xl mr-2 ml-12 py-1">Enter date: </span>
      <input
        type="date"
        className="outline py-1 px-1"
        name="Task"
        ref={dateDet}
        placeholder="Enter Date"
      />
      <button className="bg-green-500 mx-16 px-5 py-2" onClick={handleClick}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
