<template>
  <div>
    <ul class="list-group rlist">
      <router-link tag="li" to="/dogs" class="list-group-item btn btn-primary btn-lg rlink" active-class="active" exact>Usvoji</router-link>
      <router-link tag="li" :to="{ name: 'lost'}" class="list-group-item btn btn-primary btn-lg rlink" active-class="active">Izgubljeno</router-link>
      <router-link tag="li" :to="{ name: 'found'}" class="list-group-item btn btn-primary btn-lg rlink" active-class="active">Nadjeno</router-link>
    </ul>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  @import "../Styles/InOutAnim.css";

  .rlink {
    background-color: skyblue;
    margin: 30px 0;
    cursos: pointer
  }

  .rlist {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
  }
</style>