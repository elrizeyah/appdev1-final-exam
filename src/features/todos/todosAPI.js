import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodosAPI = async function () {
  const res = await axios.get(`${API_URL}?_limit=10`);
  return res.data;
};

export const addTodoAPI = async function (todo) {
  const res = await axios.post(API_URL, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const updateTodoAPI = async function (todo) {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const deleteTodoAPI = async function (id) {
  await axios.delete(`${API_URL}/${id}`);
  return id; // keep same behavior as fetch version
};
