<script setup lang="ts">
import { ref } from "vue";
import axiosInstance from "@/helpers/axios";

const email = ref<string>("");
const password = ref<string>("");

const submitForm = async () => {
  try {
    const payload = {
      email: email.value,
      password: password.value,
    };

    const response = await axiosInstance.post("/users/login", payload);

    console.log("API response:", response.data);
    alert("Login successful!");
  } catch (error) {
    console.error("API error:", error);
    alert("Login failed!");
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <h3>Login Form</h3>
      <div>
        <p>Email:</p>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" v-model="password" required />
      </div>
      <br>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  overflow: hidden;
}
.form-container form{
  padding: 25px;
  width: 25%;
  background-color: white;
  border-radius: 15px;
}
.form-container h3{
  text-align: center;
}
.form-container form input{
  border: 1px #dadada solid;
  border-radius: 10px;
  height: 35px;
  width: 100%;
}
.form-container form button{
  border: 1px #dadada solid;
  border-radius: 10px;
  height: 35px;
  width: 100%;
  cursor: pointer;
}
.form-container form button:hover{
  background-color: #dadada;
}
</style>
