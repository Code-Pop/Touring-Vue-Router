import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient
      .get('/events?_limit=' + perPage + '&_page=' + page)
      .then(sleeper(2000))
  },
  getEvent(id) {
    return apiClient.get('/events/' + id).then(sleeper(2000))
  }
}

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}
