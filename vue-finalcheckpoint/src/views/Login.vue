<script setup>

</script>

<template>
<main>
  <div class="login-box">
    <h1>LOGIN</h1>
    <form @submit.prevent="">
      <div>
        <label>Email</label>
        <input id="email" placeholder="Dirección de correo" type="text" required />
      </div>
      <div>
        <label>Contraseña</label>
        <input id="password" placeholder="Contraseña" type="password" required />
      </div>
      <button class="login-btn">LOGIN</button>
    </form>
    <div class="registry-box">
      <h3>¿Todavía no tienes una cuenta?</h3>
      <router-link to="/register" class="register-btn">REGISTRAR</router-link>
    </div>
      <button class="remember-password">He olvidado mi contraseña</button>
  </div>
</main>
</template>

<style scoped>
main {
  width: auto;
  padding: 20px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  background-color: #0e0e27da;
}
.login-box {
  max-width: auto;
  margin: auto;
  padding: 1rem;
  border: 2px solid #f1c40f;
  border-radius: 10px;
  color: #f1c40f;
  margin-bottom: 0;
}
label {
  display: block;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  font-weight: bold;
}
input {
  width: auto;
  padding: 0.5rem;
  border: 1px;
  border-radius: 15px;
}
input::placeholder {
  font-size: 0.8rem;
}
.register-btn, .remember-password, .login-btn {
  border: none;
  border-radius: 10px;
  color: #0d0d2b;
}

.remember-password {
  padding: 0.4rem 0.4rem;
  font-size: 10px;
  margin-top: 0.8rem;
  color: #0d0d2b;
  background-color:rgb(247, 247, 247)
}
.register-btn, .login-btn {
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top:0.5rem;
  background-color: #e0b712;
  padding: 0.5rem 0.5rem;
}
.login-btn {
  margin-top: 1rem;
  padding: 0.5rem 4.3rem;
}
.register-btn{
  text-decoration: none;
  margin-top: 0.5rem;
  display: inline-block;
}
h3 {
  margin-top: 0.9rem;
  font-size: 12px;
}
</style>