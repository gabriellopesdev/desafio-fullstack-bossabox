import api from '../api'

function getToken() {
    return localStorage.getItem('@vuttr-app/token')
}

async function getNewToken(user, password) {
    return await api.post('auth', {      
        login: user,
        pwd: password        
      })
      .then((response) => {
            localStorage.setItem('@vuttr-app/token', response.data.token)
            return localStorage.getItem('@vuttr-app/token')    
        })
    
}

export { getToken, getNewToken }