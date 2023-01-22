import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";


const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
}


/*
const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject);
  const response = await request;
  return response.data;
};

const deleteUser = async (id) => {
  const deleteUrl = `${baseUrl}/${id}`;
  axios.delete(deleteUrl).then(() => {});
};

const updateUser = async (name, number) => {
  const userInfo = await axios.get(baseUrl);
  const findUserByName = userInfo.data.filter((user) => user.name === name)
  const updateUrl = `${baseUrl}/${findUserByName[0].id}`
  const newUser = {name: findUserByName[0].name,
                   number: number,
                   id: findUserByName[0].id}
  const request = await axios.put(updateUrl, newUser)
  return request.data;
};
*/


const exportedObject = {
  getAll,
  /*create,
  deleteUser,
  updateUser,*/
};

export default exportedObject;
