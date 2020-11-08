<template>
  <div>
    <main>
      <nav
        class="navbar navbar-light background-nav flex justify-content-center  mb-5 "
      >
        <router-link
          class="navbar-brand text-white text-left "
          :to="{ name: 'px-header' }"
        >
          Prestamás
        </router-link>
      </nav>
    </main>
    <h3 class="text-center ">Lista de Prestamos</h3>
    <form
      class="form-inline my-2 my-lg-6 mb-5 mt-5 flex justify-content-center "
    >
      <input
        class="form-control mr-sm-3 w-50 flex justify-content-center"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
    </form>
    <table class="table table-bordered w-75 m-auto">
      <thead>
        <tr>
          <th v-for="(head, DUI) in headers" :key="DUI" scope="col">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, DUI) in filterPrestamo" :key="DUI">
          <td v-for="prestamo in p" :key="prestamo">{{ prestamo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.background-nav {
  background: rgb(178, 10, 255);
  background: linear-gradient(
    90deg,
    rgba(178, 10, 255, 1) 15%,
    rgba(71, 24, 143, 1) 89%
  );
}
</style>
<script>
export default {
  name: "PxDetails",

  data() {
    return {
      search: "",
      headers: [
        "Nombre",
        "Apellido",
        "DUI",
        "MontoPrestado",
        "Intereses",
        "Fecha",
        "Abono",
      ],
      prestamos: [
        {
          nombre: "Josue",
          apellido: "Coreas",
          DUI: "009826278",
          Monto: "3500",
          Interes: "4%",
          Fecha: "2020/04/12",
          Abono: "300",
        },
        {
          nombre: "David",
          apellido: "Coreas",
          DUI: "009826271",
          Monto: "500",
          Interes: "8%",
          Fecha: "2020/01/12",
          Abono: "100",
        },
      ],
    };
  },
  computed: {
    filterPrestamo() {
      return this.prestamos.filter((prest) => {
        return prest.nombre.toLowerCase().match(this.search.toLowerCase());
        // return prest.nombre.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
