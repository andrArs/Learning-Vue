<script setup>
  import { ref } from 'vue'
  import '@mdi/font/css/materialdesignicons.css'
  import { useRouter } from 'vue-router'

  const form = ref()


  const username = ref('')
  const usernameRules = ref([
    v => !!v || 'Username is required',
    v => (v && v.length <= 15) || 'Username must be 15 characters or less',
  ])

    const password = ref('')
    const passwordRules = ref([p => !!p || 'Password is required'])
    const showPassword = ref(false)

  const router = useRouter()

  async function validate () {
    const { valid } = await form.value.validate()
    if(valid){
    if(username.value==='andreea'&& password.value==='123a'){
        alert('Login successfully')
        router.push('/about')
    }else{
      alert('Invalid credentials')
      form.value.reset()
      
    }}

    
    

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
        :counter="10"
        :rules="usernameRules"
        label="Username"
        required
        density="compact"
        class="mb-2"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPassword = !showPassword"
        density="compact"
        class="mb-2"
        required
      ></v-text-field>

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