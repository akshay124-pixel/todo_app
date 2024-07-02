let nextTaskId = 0;

export const addTask = (text) => ({
  type: "ADD_TASK",
  id: nextTaskId++,
  text,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  id,
});

export const editTask = (id, newText) => ({
  type: "EDIT_TASK",
  id,
  newText,
});
export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  id,
});
