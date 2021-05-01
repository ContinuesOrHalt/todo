import React, { useState } from "react";
import FormTask from "./FormTask";

const TodoItem = ({ task, onUpdate, onRemove, isSelected, onSelect }) => {
  const onChangeSelect = (e) => onSelect(e.target.checked);
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div className="todo-item">
      <div className="header-item">
        <input type="checkbox" checked={isSelected} onChange={onChangeSelect} />

        <p className="flex-1">{task.name}</p>

        <button className="btn bg-blue text-white" onClick={() => setIsShowDetail(!isShowDetail)}>
          {isShowDetail ? "Hide" : "Detail"}
        </button>

        <button className="btn bg-red text-white" onClick={onRemove}>
          Remove
        </button>
      </div>

      {isShowDetail && (
        <div className=" body-item">
          <FormTask value={task} onChange={onUpdate} isUpdate />
        </div>
      )}
    </div>
  );
};
export default TodoItem;
