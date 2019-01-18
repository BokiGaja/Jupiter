<template>
    <div class="footer">
        <div class="iconsContact">
            <a href="mailto:smixbmx@gmail.com" target="_blank"><ion-icon name="mail" id="emailIcon"></ion-icon></a>Posaljite nam mejl
            <a href="http://www.ruma.rs/portal2/jupgrade/index.php?lang=en" target="_blank"><ion-icon name="locate" id="locateIcon"></ion-icon></a> Ruma
            <a href="https://www.facebook.com/jupiterruma/" target="_blank"><ion-icon name="logo-facebook" id="facebookIcon"></ion-icon></a> Kontaktiraj nas
        </div>
        @Copywrite Boza Gajic
    </div>
</template>

<style>
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        /*background-color: #cbcbcb;*/
        background: transparent;
        color: grey;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .iconsContact {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #emailIcon {
        width: 40px;
        height: 30px;
        color: grey;
    }
    #emailIcon:hover {
        color: #ffc80c;
        cursor: pointer;
    }
    #locateIcon {
        width: 40px;
        height: 30px;
        color: grey;
        margin-left: 40px;
    }
    #locateIcon:hover {
        color: indianred;
        cursor: pointer;
    }
    #facebookIcon {
        width: 40px;
        height: 30px;
        color: grey;
        margin-left: 40px;
    }
    #facebookIcon:hover {
        color: #3C5A99;
        cursor: pointer;
    }
</style>