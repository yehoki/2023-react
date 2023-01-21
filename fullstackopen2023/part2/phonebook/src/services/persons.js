import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

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
  console.log(deleteUrl);
  const request =  axios.delete(deleteUrl);≈   

  return request;
}

const exportedObject = {
  getAll,
  create,
  deleteUser
}

export default exportedObject;
