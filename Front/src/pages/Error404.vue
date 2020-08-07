<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      <strong>Hmmm!</strong>
      <br/>
      Lo siento, no hay nada aquí...
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Regresar"
    />
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
