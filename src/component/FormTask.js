import React, { useState } from "react";

const initialState = {
  name: "",
  description: "",
  dueDate: "",
  priority: "normal",
};

const FormTask = ({ value, onChange, isUpdate }) => {
  const [data, setData] = useState({
    ...initialState,
    ...value,
  });

  const onChangeValue = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onChange(data);
    if (!isUpdate) setData({ ...initialState });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        required
        value={data.name}
        placeholder="Add new task ..."
        onChange={onChangeValue("name")}
        className="w-full mb-20"
      />

      <div className="mb-20">
        <p className="text-label">Description</p>
        <textarea
          required
          value={data.description}
          onChange={onChangeValue("description")}
          className="w-full"
          rows={10}
        ></textarea>
      </div>

      <div className="flex gap-20 mb-20">
        <div className="flex-1">
          <p className="text-label">Due Date</p>

          <input
            type="date"
            required
            value={data.dueDate}
            onChange={onChangeValue("dueDate")}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <p className="text-label">Priority</p>

          <select
            required
            value={data.priority}
            onChange={onChangeValue("priority")}
            className="w-full"
          >
            <option value="normal">Normal</option>
            <option value="hight">Hight</option>
          </select>
        </div>
      </div>

      <button className="btn bg-green w-full text-white">
        {isUpdate ? "Update" : "Add"}
      </button>
    </form>
  );
};
export default FormTask;
