<script setup>

</script>

<template>
  <header>
    <router-link to="/">
      <img class="main-logo" src="/img/logo.png" alt="Logo de Final Checkpoint" />
    </router-link>
    <nav>
     <router-link to="/">HOME</router-link>
      <router-link to="/games">GAMES</router-link>
      <router-link to="/login">LOGIN</router-link>
      <router-link to="/register">REGISTER</router-link>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid #f1c40f;
  background-color: #0e0e27;
  margin-left: 2rem;
  margin-right: 2rem;
}
.main-logo {
 width: 150px;
}
nav a {
  color: #ffffff;
  margin-left: 2rem;
  text-decoration: none;
  font-weight: bold;
}
nav a.router-link-active {
  text-decoration: underline;
}
@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-left: 0;
    margin-right: 0;
  }

  .main-logo {
    width: 120px;
    margin-bottom: 1rem;
  }

  nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  nav a {
    margin-left: 0;
    font-size: 1rem;
  }
}
</style>
