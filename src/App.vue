<template>
  <header>
    <div class="header-menu">
      <router-link class="plain-link" to="/">Home</router-link> |
      <router-link class="plain-link" to="/animes">Animes</router-link> |
    </div>
  </header>
  <hr />
  <main>
    <router-view />
  </main>
  <footer>My nice footer | Ariel Cruz 2022</footer>
</template>

<style scoped></style>
