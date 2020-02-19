import {login, logout} from './AuthService'

export const LoginWebService = ({user}) => {
    try {
        user.username === 'cassia11' && user.password === 'cassia11' ? login(user.username)  : logout()
        const reponse = user.username === 'cassia11' && user.password === 'cassia11' ? 'ok'  : 'error'
        return reponse
    } catch (err) {
        console.log(`😱 Failed: ${err}`)
    }
}