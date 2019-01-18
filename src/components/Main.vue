<template>
    <div id="video">
        <p id="aboutUs">Udruženje za zaštitu životinja "Jupiter" Ruma je osnovano u julu 2014.god.,
            sa ciljem da se pruži pomoć napuštenim životinjama i lutalicama, kojih je mnogo u gradu i okolini.
            "Jupiter" je nevladina organizacija, zasnovana na volonterskoj osnovi, a finansiramo se pomoću donacija
            i dobrovoljnih uplata članarine u iznosu od 200 dinara mesečno. </p>
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
    #video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #myVideo {
        width: 50%;
        border-radius: 50%;
    }
    #video {
        width: 100%;
    }
    #aboutUs {
        margin-top: 30px;
        width: 800px;
        font-family: Serif;
        font-style: italic;
        font-size: 20px;
        text-align: center;
    }
</style>