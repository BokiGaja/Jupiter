<template>
    <div>
        <app-adoption></app-adoption>
    </div>
</template>

<script>
    import Adoption from './Dogs/Adoption.vue'
    export default {
        components: {
           appAdoption: Adoption
        }
    }
</script>