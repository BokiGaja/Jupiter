<template>
    <div id="video">
        <video autoplay muted loop id="myVideo">
            <source src="./img/Dogs.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
    }
</script>
<style scoped>
    #myVideo {
        width: 100%;
        height: 800px;
        display: flex;
        border-radius: 50%;
    }
    #video {
        width: 100%;
    }
</style>