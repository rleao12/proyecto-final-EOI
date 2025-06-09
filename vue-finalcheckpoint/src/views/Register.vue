<script setup>

</script>

<template>
<main>
  <div class="register-box">
    <h1>REGISTER</h1>
    <form @submit.prevent="">
      <div>
        <label>Email</label>
        <input id="email" placeholder="Dirección de correo" type="text" required />
      </div>
      <div>
        <label>Contraseña</label>
        <input id="password" placeholder="Contraseña" type="password" required />
      </div>
      <button class="register-btn">REGISTRAR</button>
    </form>
  </div>
</main>
</template>

<style scoped>
main {
  width: auto;
  padding: 20px;
  margin-top: 3rem;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  background-color: #0e0e27da;
}
.register-box {
  margin: auto;
  padding: 1rem;
  border: 2px solid #f1c40f;
  border-radius: 10px;
  color: #f1c40f;
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
.register-btn {
  border: none;
  border-radius: 10px;
  color: #0d0d2b;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #e0b712;
  margin-top: 1.6rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 4rem;
}
</style>