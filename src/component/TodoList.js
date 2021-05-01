import React, { useMemo, useState } from "react";
import { removeAccents } from "../ult/common";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks = [], onDelete, onUpdate, onDeleteMultiple }) => {
  const [search, setSearch] = useState("");
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const onSelect = (index) => (value) => {
    const dataProcess = [...selectedIndexes];
    if (value) dataProcess.push(index);
    else dataProcess.splice(index, 1);
    setSelectedIndexes(dataProcess);
  };

  const onRemoveMultiple = () => onDeleteMultiple(selectedIndexes);

  const onRemove = (index) => () => onDelete(index);
  const onUpdateTask = (index) => (task) => onUpdate(index, task);

  const tasksFilter = useMemo(() => {
    if (search)
      return tasks.filter(
        (task) =>
          removeAccents(task?.name)
            .replace(/\s/g, "")
            .search(search.replace(/\s/g, "")) > -1
      );
    return tasks;
  }, [tasks, search]);

  return (
    <div className="flex-col h-full">
      <div className="flex-col p-50 flex-1 overflow-hidden">
        <p className="text-header text-center">To Do List</p>

        <input
          required
          value={search}
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-20"
        />

        <div className="flex-1 overflow-y-auto">
          {tasksFilter.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onUpdate={onUpdateTask(index)}
              onSelect={onSelect(index)}
              onRemove={onRemove(index)}
              isSelected={selectedIndexes.includes(index)}
            />
          ))}
        </div>
      </div>

      <div className="footer-list flex">
        <p className="flex-1">Bulk Action</p>
        <button className="btn bg-blue text-white">Done</button>
        <button className="btn bg-red text-white" onClick={onRemoveMultiple}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default TodoList;
