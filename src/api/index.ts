import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
  baseURL: 'https://jobs.github.com/positions.json',
  cancelToken: axios.CancelToken.source().token,
})

export default api