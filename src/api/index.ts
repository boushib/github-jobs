import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jobs.github.com/positions.json',
  cancelToken: axios.CancelToken.source().token,
})

export default api