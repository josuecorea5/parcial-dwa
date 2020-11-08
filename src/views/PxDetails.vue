<template>
  <div>
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
    <table class="table">
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
        {
          nombre: "Valentina",
          apellido: "Gonzales",
          DUI: "009826230",
          Monto: "50000",
          Interes: "2%",
          Fecha: "2020/04/12",
          Abono: "1000",
        },
      ],
    };
  },
  computed: {
    filterPrestamo() {
      return this.prestamos.filter((prest) => {
        return prest.nombre.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
