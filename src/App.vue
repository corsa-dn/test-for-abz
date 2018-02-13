<template>
<div id="app">
    <router-view/>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@font-face {
    font-family: ProximaLight;
    src: url("../static/fonts/ProximaNova-Light.ttf");
}
@font-face {
    font-family: ProximaReg;
    src: url("../static/fonts/ProximaNova-Regular.ttf");
}

body {
    margin: 0;
    padding: 0;
}
.f-container {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;

    > [class*="col-"],
     > .col {
        padding-right: 0;
        padding-left: 0;
    }
}

.four-gutters {
    margin-right: 0;
    margin-left: 0;

    > [class*="col-"],
     > .col {
        padding-right: 4px;
        padding-left: 4px;
    }
}

.container {
       min-width: 970px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
