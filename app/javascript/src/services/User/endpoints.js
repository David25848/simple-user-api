import AxiosWrapper from '../../utils/AxiosWrapper'

export const createUserEndpoint = (payload) =>
    AxiosWrapper.post('/api/v1/users', payload)