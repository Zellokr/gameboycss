<template>
    <div class="container-options-buttons">
        <div
            class="option-button"
            style="position: absolute; top: 10px; left: 215px;"
            @mousedown="clickButtonOption"
            @mouseleave="releaseButtonOption"
            @mouseup="releaseButtonOption"
        />
        <div
            class="option-button"
            style="position: absolute; top: 7px; left: 145px;"
            @mousedown="clickButtonOption"
            @mouseleave="releaseButtonOption"
            @mouseup="releaseButtonOption"
        />
        <span
            style="font-family: 'Pretendo'; font-weight: 900; font-size: 14px; position: absolute; left: 134px; top: 42px; transform: rotate(-31deg); color: #885c86;"
        >SELECT</span>
        <span style="font-family: 'Pretendo'; font-weight: 900; font-size: 14px; position: absolute; left: 210px; top: 45px; transform: rotate(-31deg); color: #885c86;">START</span>
        <div class="container-speakers">
            <div class="speakers" />
            <div
                class="speakers"
                style="position: absolute; left: 10px; top: 22px;"
            />
            <div
                class="speakers"
                style="position: absolute; left: 20px; top: 15px;"
            />
            <div
                class="speakers"
                style="position: absolute; left: 30px; top: 8px;"
            />
            <div
                class="speakers"
                style="position: absolute; left: 40px; top: 1px;"
            />
            <div
                class="speakers"
                style="position: absolute; left: 50px; top: -6px;"
            />
            <div class="phones">
                🎧 PHONES
            </div>
        </div>
    </div>
</template>

<script setup>
const clickButtonOption = event => event.target.classList.add('option-button-click')

const releaseButtonOption = event => event.target.classList.remove('option-button-click');
</script>

<style scoped>


.container-options-buttons{
    display: flex;
    width: auto;
    height: 100px;
    position: absolute;
    bottom: 20px;
    left: -20px;

}

.option-button{
    width: 12px;
    height: 60px;
    background: #716b6c;
    border-radius: 10px;
    transform: rotate(60deg);
    border: 2px solid #dfdfdf;
    transition: all 100ms;
    cursor: pointer;
    box-shadow: -2px -2px 5px rgba(0,0,0, 0.4) inset;

}

.option-button-click{
    transform: scale(90%) rotate(60deg);
    box-shadow: -2px -2px 5px rgba(0,0,0, 0.4) inset, 2px 2px 5px rgba(0,0,0, 0.7) inset;

}

.container-speakers{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 300px;

}

.speakers{
    width: 8px;
    height: 70px;
    border-radius: 4px;
    top: 30px;
    position: absolute;
    transform: rotate(-25deg);
    /* box-shadow: 20px 0 #716b6c, 40px 0 #716b6c, 60px 0 #716b6c, 80px 0 #716b6c, 100px 0 #716b6c; */
    background: #716b6c;

}

.phones{
    font-family: Arial, sans-serif;
    position: absolute;
    top: 90px;
    left: -140px;
    font-size: 10px;
    opacity: 0.5;
    text-align: center;
    border: 1px solid rgb(170, 170, 170);
    border-radius: 40px;
    padding: 2px 6px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px inset;
}

</style>
