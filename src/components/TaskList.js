import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newTask) => {
    dispatch(editTask(id, newTask));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            ...styles.listItem,
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span style={styles.taskText} onClick={() => handleToggle(task.id)}>
            {task.text}
          </span>
          <button
            class="btn btn-success"
            onClick={() => handleEdit(task.id, prompt("Edit task:", task.text))}
            style={styles.editButton}
          >
            Edit
          </button>
          <button
            class="btn btn-danger"
            onClick={() => handleDelete(task.id)}
            style={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  taskText: {
    flexGrow: 1,
    cursor: "pointer",
  },
  editButton: {
    marginRight: "10px",
    cursor: "pointer",
  },
  deleteButton: {
    cursor: "pointer",
  },
};

export default TaskList;
