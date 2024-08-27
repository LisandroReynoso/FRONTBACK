const URL = 'http://localhost:3000/api/users'

export const getUsers = async () => {
     const response = await fetch(URL)
    const data = await response.json() 
    return data.payload

} 