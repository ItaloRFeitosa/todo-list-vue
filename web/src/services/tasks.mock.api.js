export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks ? tasks : [];
};

export const setTasks = tasks => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
