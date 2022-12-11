import axios from "axios";

const apiURL = "https://one0x-node-todo-api.onrender.com/api/todo";

export function getTasks() {
  return axios.get(apiURL + "s");
}

export async function addTask(task) {
  try {
    let response;
    await axios.post(apiURL + "/create", task).then((res) => {
      response = res.data;
    });
    return response;
  } catch (error) {
    console.error("ERROR:-" + error.message);
  }
}

export async function updateTask(id, task) {
    try {
        let response;
        await axios.put(apiURL + "/" + id + "/update", task).then((res) => {
          response = res.data;
        });
        return response;
      } catch (error) {
        console.error("ERROR:-" + error.message);
      }
}

export function deleteTask(id) {
  return axios.delete(apiURL + "/" + id + "/delete");
}
