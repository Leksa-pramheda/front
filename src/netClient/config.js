import axios from "axios"

const netClient = axios.create({
    baseUrl: 'http://localhost:3000/api',
    timeout: 10000,
})
console.log('axios')
console.log('nC: ', netClient)
export default netClient;