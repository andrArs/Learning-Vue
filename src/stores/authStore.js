import {ref} from 'vue'

import {defineStore} from 'pinia'

export const useAuthStore= defineStore('auth',()=>{
    const token=ref(localStorage.getItem('auth_token') || null)
    

    function setToken(newToken){
        token.value=newToken
        localStorage.setItem('auth_token',newToken)
    }

    return{token,setToken}
})