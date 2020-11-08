<template>
  <div>
    <main>
      <nav
        class="navbar navbar-light background-nav flex justify-content-space-bettween  mb-5 "
      >
        <router-link
          class="navbar-brand text-white text-left"
          :to="{ name: 'px-header' }"
        >
          Prestamás
        </router-link>
        <router-link class="font-weight-bold " :to="{ name: 'px-details' }">
          Lista de Prestamos
        </router-link>

        <img class="text-left" src="../assets/money.png" alt="Money" />
      </nav>
    </main>
    <section class="text-center">
      <button
        type="button"
        class="btn btn-prestamo btn-lg "
        @click="mostrarFormulario"
      >
        Nuevo Prestamo
      </button>
    </section>
    <px-formulario v-show="mostrarForm"></px-formulario>
  </div>
</template>

<script>
import PxFormulario from "@/components/PxFormulario";
export default {
  name: "PxHeader",
  components: {
    PxFormulario,
  },
  data() {
    return {
      mostrarForm: false,
    };
  },
  methods: {
    mostrarFormulario() {
      this.mostrarForm = !this.mostrarForm;
    },
  },
};
</script>

<style scoped>
.background-nav {
  background: rgb(178, 10, 255);
  background: linear-gradient(
    90deg,
    rgba(178, 10, 255, 1) 15%,
    rgba(71, 24, 143, 1) 89%
  );
}
.btn-prestamo {
  background: rgb(195, 13, 235);
  background: linear-gradient(
    90deg,
    rgba(195, 13, 235, 1) 45%,
    rgba(123, 68, 207, 1) 79%
  );
  color: rgba(255, 255, 255, 0.7);
}
.btn-prestamo:hover {
  color: white;
}
.list li {
  color: white;
  list-style: none;
}
.list a {
  color: white;
}
.list a:hover {
  text-decoration: underline;
}
</style>
