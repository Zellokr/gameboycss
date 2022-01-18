<template>
    <div class="inner-container">
        <div class="header-inner">
            <span style="padding: 6px;"> DOT MATRIX WITH STEREO SOUND</span>
        </div>
        <div class="game-screen">
            <div
                class="animated-text"
                :class="{ 'animated-end': value }"
                @transitionend="playAudio()"
            >
                Nintendo
                <div class="copy">
                    ®
                </div>
            </div>
        </div>
        <div
            class="battery"
            :class="{ 'led-on': value}"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const audio = new Audio('./docs_sound_gameboy-sound.mp3');

const playAudio = () => audio.play();

defineProps({
    value: {
        type: Boolean,
        default: Boolean
    }
})


</script>

<style scoped>

.inner-container{
    width: 312.5px;
    height: 250px;
    position: absolute;
    margin: 0;
    top: 170px;
    left: 50%;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 10%;
    transform: translate(-50%, -50%);
    background: #7c7690;

}

.header-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    margin: 6px;
    letter-spacing: 1px;
    color: white;
}

.header-inner::before{
    content: '';
    flex: 2;
    border-top: 2px solid #7d1a4a;
    border-bottom: 2px solid #35224e;
    height: 8px;

}

.header-inner::after{
    content: '';
    flex: 1;
    border-top: 2px solid #7d1a4a;
    border-bottom: 2px solid #35224e;
    height: 8px;

}

.game-screen{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    background: #9ca04c;
    position: absolute;
    right: 43px;
    bottom: 25px;
    width: 200px;
    height: 190px;
    box-shadow: 5px 5px 10px rgba(0,0,0, 0.5) inset, -2px -2px 10px rgba(0,0,0, 0.25) inset;
}

.battery{
    width: 10px;
    height: 10px;
    background: #4a4748;
    border-radius: 50%;
    position: absolute;
    bottom: 120px;
    left: 20px;
}

.battery::after{
    content: 'BATTERY';
    color: white;
    font-size: 9px;
    position: absolute;
    top: 14px;
    left: -5px;
}

.led-on{
      width: 10px;
    height: 10px;
    background: #4a4748;
    border-radius: 50%;
    position: absolute;
    bottom: 120px;
    left: 20px;
    background: #d81e07;
    box-shadow: 0 0 5px #d81e07;
}

.animated-text{
    opacity: 0;
    display: inline;
    position: relative;
    top: -6px;
    left: 7px;
    font-family: "Press Start 2P", sans-serif;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -1px;
    color: #0f380f;
    z-index: 10;
}

.animated-end{
    opacity: 1;
    top: 60px;
    transition: top 2s linear;

}

.copy{
    position: relative;
    display: inline;
    top: -2px;
    left: -7px;
    font-size: 15px;
    font-family: monospace;
}

</style>
