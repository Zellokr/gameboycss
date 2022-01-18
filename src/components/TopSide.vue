<template>
    <div class="top-side">
        <div class="rounded-button-switch">
            <span id="on">OFF</span>
            <span id="off">ON</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.top-side{
    width: 100%;
    height: 30px;
    position: relative;
    border-bottom: 3px solid #dfdfdf;
}

.top-side::before{
    content: '';
    position: absolute;
    width: 40px;
    height: 100%;
    border-right: 3px solid #dfdfdf;

}

.top-side::after{
    content: '';
    position: absolute;
    right: 0;
    width: 40px;
    height: 100%;
    border-left: 3px solid #dfdfdf;

}

.rounded-button-switch{
    position: absolute;
    display: flex;
    justify-content: center;
    left: 50px;
    gap: 4px;
    top: 5px;
    width: 70px;
    height: 15px;
    border-radius: 14px;
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5) inset, 1px 1px 0px rgba(0,0,0, 0.25) inset;
    font-size: 10px;
    color: #dfdfdf;
    font-family: 'Pretendo';

}

#on::before{
    content: '';
    position: absolute;
    top: 4px;
    left: 2px;
    width: 0;
    height: 0;
    border-right: 6px solid #dfdfdf;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

}

#off::after{
    content: '';
    position: absolute;
    top: 4px;
    right: 2px;
    width: 0;
    height: 0;
    border-left: 6px solid #dfdfdf;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

}

</style>
