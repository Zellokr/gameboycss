<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import OuterContainer from './components/OuterContainer.vue'
//import GameBoy from './components/GameBoy.vue';
import OuterContainer from './components/OuterContainer.vue';
</script>

<template>
    <div class="middle-content">
        <OuterContainer />
    </div>
    <!-- <GameBoy /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.middle-content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

@font-face{
    font-family: "Pretendo";
    src: local("Pretendo"),
        url(./assets/fonts/Pretendo.ttf) format(truetype)
}

@font-face{
    font-family: "Press Start 2P";
    src: local("Press Start 2P"),
        url(./assets/fonts/PressStart2P-Regular.ttf) format(truetype)
}



</style>
