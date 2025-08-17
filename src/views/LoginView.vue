<script setup>
  import { ref } from 'vue'
  import '@mdi/font/css/materialdesignicons.css'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  

  const form = ref()
  const username = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const rememberMe = ref(false)

  const usernameRules = ref([v => !!v || 'Username is required'])
  const passwordRules = ref([p => !!p || 'Password is required'])


  const router = useRouter()

  async function validate () {
    const  valid = await form.value.validate()
    if(!valid)return
   
    try{
    const response=await axios.get('http://localhost:3000/users', {
      params:{
      username: username.value,
      password: password.value}
    })
    console.log('Login successfully', response.data[0])
    const token=response.data[0].token

if(rememberMe.value){
    localStorage.setItem('token',response.data[0].token)
  }
  else{
    sessionStorage.setItem('token',response.data[0].token)
  }


    router.push('/about')

  }catch(error){
    console.log('Login failed', error);
    alert('Invalid credentials')
    form.value.reset()
  }
  }


  
</script>

<template>

 <v-card 
   class="mx-auto  glass_card"
    width="500px"
    height="400px"
    
    >

    <v-card-title class="d-flex justify-center align-center" style="margin-bottom: 1rem; background: rgba(239, 239, 239, 0.26); color: #d1cd00; font-weight: bold; font-size: 1.8rem;">
      Getting Started
    </v-card-title>

<v-card-text class="pa-5">
    <v-form ref="form">
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
        density="compact"
        class="mb-2"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPassword = !showPassword"
        density="compact"
        class="mb-2"
        required
      ></v-text-field>

      <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>


      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="#d1cd00" block @click="validate">
          Sign in
        </v-btn>
      </div>
    </v-form>
      </v-card-text>

  </v-card>
</template>

<style>
.glass_card{
  background: rgba(239, 239, 239, 0.26);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 30px #d1cd00;
}
</style>