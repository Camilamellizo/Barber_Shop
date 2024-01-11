<template>
  <div>
    <header>
      <navBar />
    </header>
    <homE />

    <main>

      <div class="col-span-1">
        <aboutUs />
      </div>
      <hr class="my-12 w-96 ml-[550px] border border-2 border-yellow-500 bg-yellow-500" />
      <paraEllos />
      <hr class="my-24 w-96 ml-[550px] border border-2 border-yellow-500 bg-yellow-500" />
      <paraEllas />
      <hr class="my-24 w-96 ml-[550px] border border-2 border-yellow-500 bg-yellow-500" />
      <todalaFamilia />

      <horarioS/>
    </main>



    <footer>
      <contacTo />
    </footer>
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";
import homE from "./components/homE.vue";
import paraEllos from "./components/paraEllos.vue";
import paraEllas from "./components/paraEllas.vue";
import todalaFamilia from "./components/todalaFamilia.vue";
import contacTo from "./components/contacTo.vue";
import aboutUs from "./components/aboutUs.vue";
import horarioS from "./components/horarioS.vue";



export default {
  name: "App",
  components: {
    navBar,
    homE,
    paraEllos,
    paraEllas,
    todalaFamilia,
    contacTo,
    aboutUs,
    horarioS,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
