<script setup lang="ts">
import { ref } from 'vue'
const showCurtain = ref(false)
const showSearch = ref(false)

function toggleBox() {
  showCurtain.value = !showCurtain.value
}
function handleAnimationEnd(){
  showSearch.value = !showSearch.value
}
</script>

<template>
  <main>
    <div v-if="showSearch">
    <Search/>
    </div>
    <div :class="{ toggleCurtain: showCurtain }" @animationend="handleAnimationEnd">
    <div class="landing-content">
      <div class="left-side">
        <img src="/images/background.jpeg" alt="image" class="main__bg">
      </div>
      <div class="right-middle">
        <h1>Looking for a new car?</h1>
        <button @click="toggleBox" class="ghost-button">Run</button>
      </div>
    </div>
  </div>
  
  </main>
</template>


<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  box-shadow: 0 2px 16px hsla(230, 75%, 32%, .15);
  z-index: var(--z-fixed);
}

.nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav__logo {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  transition: color .4s;
  margin-right: 60%;
}

.nav__actions {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-right: 1.9%;
}

.nav__search,
.nav__login,
.nav__toggle,
.nav__close {
  font-size: 1.25rem;
  color: var(--title-color);
  cursor: pointer;
  transition: color .4s;
}

:is(.nav__logo, .nav__search, .nav__login, .nav__toggle, .nav__link):hover {
  color: var(--first-color);
}

/* Navigation for mobile devices */
@media screen and (max-width: 1023px) {
  .nav__menu {
    align-content: right;
    position: fixed;
    top: -100%;
    left: 0;
    background-color: var(--body-color);
    box-shadow: 0 8px 16px hsla(230, 75%, 32%, .15);
    width: 100%;
    padding-block: 4.5rem 4rem;
    transition: top .4s;
  }
}

.nav__list {
  display: flex;
  flex-direction: row;
  row-gap: 2.5rem;
  text-align: center;

}

.nav__link {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  transition: color .4s;
}

.nav__close {
  position: absolute;
  top: 1.15rem;
  right: 1.5rem;
}

/* Show menu */
.show-menu {
  top: 0;
}

.landing-content {
  display: flex;
  font-size: 0;
  text-align: center;
  height: 100vh;
  width: 100vw;
}

.left-side {
  display: inline-block;
  width: 50%;
  height: 100%;
}

.left-side img {
  height: 100%;
  width: 100%;
}

.right-middle {
  background-color: #320000;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;

}

.right-middle h1 {
  color: white;
  font-size: 3.6rem;
  align-content: center;
}

.ghost-button {
  margin-top: 5%;
  align-self: center;
  display: inline-block;
  width: 150px;
  padding: 8px;
  color: #fff;
  border: 2px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  font-size: 1.6rem;
}

.ghost-button:hover,
.ghost-button:active {
  background-color: #fff;
  color: #000;
  transition: background-color 0.7s
}

.icon {
  align-self: baseline;
  height: 3px;
  margin-right: auto;
  font-size: xx-large;
  color: #320000;
  margin-left: 2%;
}

.image-icon {
  height: 55px;
  overflow: hidden;
  transform: scale(1.0288888888888);
  /* border: 2px solid black; */
}

@keyframes slide-right {
  from {
    transform: translateX(0);
    /* Comienza en su posición original */
  }

  to {
    transform: translateX(100vw);
    /* Se mueve completamente fuera del viewport hacia la derecha */
  }
}

.toggleCurtain {
  animation: slide-right 1.2s ease-in-out forwards;
}

.background-gradient {
  display: flex;
  margin-top: 22%;
  background-image: linear-gradient (to right, orange 75%, pink 25%);
}
</style>
