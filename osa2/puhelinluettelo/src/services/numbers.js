import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const delPerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const createPerson = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const updatePerson = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll,
  delPerson: delPerson,
  updatePerson: updatePerson,
  createPerson: createPerson,
}