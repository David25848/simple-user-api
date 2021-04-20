import {createUserEndpoint} from './endpoints'
import {toast} from 'react-toastify'

export const createUser = async (payload) => {
  try {
    const resp = await createUserEndpoint(payload)
    toast.success("User created succesfully")
    return resp
  }catch (error) {
    switch(error.message){
      case "Request failed with status code 401":
        toast.error("Error was ocurred")
        break
      default:
        toast.error("Something went wrong.")
    }
  }
}
