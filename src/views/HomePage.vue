<template>
  <div class="landing-page">
    <h1>Let's watch some cool animes</h1>
    <router-link :to="{ name: 'animes' }">
      <button>Search</button>
    </router-link>
  </div>
</template>
<style>
.landing-page {
  padding-top: 150px;
  font-size: 38px;
  padding-bottom: 150px;
}
button {
  background-color: rgb(196, 74, 26);
  font-size: 30px;
  color: rgb(185, 177, 193);
  opacity: 80%;
  height: 80px;
  width: 200px;
  border: 1.5px solid white;
}
</style>
