<template>
    <div class="outer-container">
        <div
            class="invisible-switch"
            @click.prevent="toggleGameBoy"
        >
            <div
                class="switch"
                :class="{ 'switch-off': switchButton, 'switch-on': !switchButton}"
            />
        </div>
        <TopSide />
        <div style="position: absolute; top: 300px; left: 32px; z-index: 3;">
            <span>Nintendo </span>
            <span>GAME BOY </span>
            <sub>TM </sub>
        </div>
        <InnerContainer :value="switchButton" />
        <ButtonContainer />
        <ContainerOptionButtons />
    </div>
</template>


<script setup>
import TopSide from './TopSide.vue';
import InnerContainer from './InnerContainer.vue';
import ButtonContainer from './ButtonContainer.vue';
import ContainerOptionButtons from './OptionButtonsContainer.vue';

import { ref } from 'vue';

const switchButton = ref(false);

const toggleGameBoy = () =>  switchButton.value = !switchButton.value

</script>

<style scoped>

.outer-container{
    margin-top: 30px;
    display: flex;
    width: 375px;
    height: 625px;
    background: #bbbbbb;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 10%;
    position: relative;
    box-shadow: 1px 2px 4px black;

}

.switch{
    width: 33px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(to right, #eee 10%, #d3ccd3 30% 70%, #eee 90%);
    box-shadow: 0 0 4px rgba(0,0,0, 0.5) inset;
    position: absolute;
    top: 3px;
    z-index: -1;


}

.invisible-switch{
    width: 70px;
    height: 25px;
    position: absolute;
    top: -10px;
    left: 55px;
    cursor: pointer;

}

.switch-on{
    transition: transform 0.25s linear;
    transform: translateX(-5px);
}

.switch-off{
    transition: transform 0.25s linear;
    transform: translateX(25px);
}



span{
    font-family: Pretendo, sans-serif;
    font-size: 15px;
    color: #302058;
}

span:nth-child(2) {
    font-family: Lato, sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 22px;
  }

sub{
    font-size: 10px;
    position: relative;
    bottom: 1px;
}



</style>
