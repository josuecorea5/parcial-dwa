<template>
  <div class="container">
    <form action="" class="container__form">
      <input class="input" type="text" placeholder="Nombre" name="nombre" />
      <input class="input" type="text" placeholder="Apellido" name="apellido" />
      <input class="input" type="number" placeholder="DUI" name="dui" />
      <input
        class="input"
        type="number"
        step="any"
        name="montoPrestado"
        placeholder="Monto Prestado"
      />
      <input
        class="input"
        type="number"
        min="1"
        max="100"
        name="porcentaje"
        id="myPercent"
        placeholder="Porcentaje de intereses"
      />
      <input
        class="input"
        type="date"
        name="fechaPrestamo"
        id=""
        placeholder="Fecha"
      />
      <input
        class="input"
        type="number"
        name="plazo"
        id=""
        placeholder="Plazo por mes"
      />
      <button
        class="btn btn-primary btn-enviar"
        type="submit"
        name="guardarPrestamo"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid rgba(178, 10, 255, 1);
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background: linear-gradient(#fafafa, #fcfcfc);
  width: 40%;
  border-radius: 25px;
}
.container__form {
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
}
.input {
  background-color: transparent;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 2px solid #ababab;
  font-size: 16px;
  font-family: "Muli", sans-serif;
  margin-bottom: 10px;
  padding: 0px 20px;
  outline: none;
  height: 50px;
}
.btn-enviar {
  width: 30%;
  margin: 0 auto;
}
</style>
<script>
export default {
  name: "PxFormulario",
};
</script>
