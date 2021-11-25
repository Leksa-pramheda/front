import http from '@/netClient/config'

export async function doRegister(login, password, email){
    try{
        const response = await http.post('/auth/registration', {
            email,
            login,
            password,
        })

        return response.data;
    } catch(error) {
        console.error({error})
        throw error;
    }
}