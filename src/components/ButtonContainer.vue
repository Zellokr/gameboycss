<template>
    <div class="buttons-container">
        <div class="container-pads">
            <div class="shadow-circle-pads" />
            <div
                class="arrow"
                style="position: relative; top: -54px; left: 20px; "
            />
            <div
                class="arrow"
                style="position: relative; top: 52px; left: 6px; transform: rotate(180deg);"
            />
            <div
                class="arrow"
                style="position: relative; top: -1px; right: -49px; transform: rotate(90deg);"
            />
            <div
                class="arrow"
                style="position: relative; top: -1px; left: -76px; transform: rotate(270deg);"
            />
            <div class="up" />
            <div class="left" />
            <div class="down" />
            <div class="right" />
            <div class="middle">
                <div class="circle-pad" />
            </div>
        </div>
        <div class="container-A-B">
            <span style="font-family: 'Pretendo'; font-weight: 900; font-size: 18px; position: absolute; top: 115px; left: 60px; transform: rotate(-25deg); color: #885c86;">B</span>
            <div class="circle-A-B">
                <div
                    class="circle-button A"
                    @mousedown="clickButton"
                    @mouseleave="releaseButton"
                    @mouseup="releaseButton"
                />
                <div
                    class="circle-button B"
                    @mousedown="clickButton"
                    @mouseleave="releaseButton"
                    @mouseup="releaseButton"
                />
            </div>
            <span style="font-family: 'Pretendo'; font-weight: 900; font-size: 18px; position: absolute; top: 92px; right: 22px; transform: rotate(-25deg); color: #885c86;">A</span>
        </div>
    </div>
</template>

<script setup>

const clickButton = event => event.target.classList.add('button-click')

const releaseButton = event => event.target.classList.remove('button-click');



</script>

<style scoped>


.buttons-container{
    width: 300px;
    height: 150px;
    position: absolute;
    top: 340px;
    left: 37px;
    display: flex;
    justify-content: flex-end;
}

.container-pads{
    position: absolute;
    left: -10px;
    width: 140px;
    height: 100%;
    display: flex;
    top: 10px;
    justify-content: center;
    align-items: center;


}

.shadow-circle-pads{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  background-image: linear-gradient( to bottom, rgba(0, 0, 0, 0.1) -10%, rgba(0, 0, 0, 0.005) 130% );
}

.up{
    position: absolute;
    top: 30px;
    width: 33px;
    height: 30px;
    z-index: 2;
    cursor: pointer;
    background: #040308;
    border: 3px solid #040308;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
    border-top-color: #777;
}

.up:active{
    box-shadow: none;
    border-color: #111;
}

.left{
    position: absolute;
    top: 60px;
    left: 22px;
    width: 33px;
    height: 30px;
    background: #040308;
    border: 3px solid #040308;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
    border-top-color: #777;
    z-index: 2;
    cursor: pointer;


}

.left:active{
    box-shadow: none;
    border-color: #111;
}

.down{
    position: absolute;
    top: 90px;
    left: 53px;
    width: 33px;
    height: 30px;
    background: #040308;
    border: 3px solid #040308;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
    z-index: 2;
    cursor: pointer;
}

.down:active{
    box-shadow: none;
    border-color: #111;
}

.right{
    position: absolute;
    top: 60px;
    right: 22px;
    width: 33px;
    height: 30px;
    background: #040308;
    border: 3px solid #040308;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
    border-top-color: #777;
    z-index: 2;
    cursor: pointer;
}

.right:active{
    box-shadow: none;
    border-color: #111;
}

.middle{
    position: absolute;
    top: 60px;
    width: 31px;
    height: 31px;
    border-radius: 1px;
    background: black;
    z-index: 1;

}

.circle-pad{
    position: relative;
    left: 1px;
    height: 30px;
    width: 30px;
    background: conic-gradient( rgba(255, 255, 255, 0.01) 0 30%, rgba(255, 255, 255, 0.4) 40% 60%, rgba(255, 255, 255, 0.02) 70% );
    border: 1px solid #111;
    border-radius: 50%;
}

.arrow{

    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #dfdfdf;
    z-index: 3;
    rotate: 180deg;
}

.container-A-B{
    width: 140px;
    height: 100%;
    position: absolute;

}

.circle-A-B{
    width: 130px;
    height: 60px;
    position: absolute;
    top: 54px;
    left: 5px;
    border-radius: 50%;
    transform: rotate(-25deg);
    background: linear-gradient(#797275 -70%, #f1f3f2 130%);

}

.circle-button{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #aa3d71;
    transition: all 100ms;
    box-shadow: -2px -2px 5px rgba(0,0,0, 0.4) inset;
    cursor: pointer;
}

.A{
    position: absolute;
    left: 16px;
    top: 8px;

}

.B{
    position: absolute;
    right: 16px;
    top: 8px;
}

.button-click{
    transform: scale(90%);
    box-shadow: -2px -2px 5px rgba(0,0,0, 0.4) inset, 2px 2px 5px rgba(0,0,0, 0.7) inset
}
</style>
