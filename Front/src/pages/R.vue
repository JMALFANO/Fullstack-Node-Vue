<template>

<q-page class="flex-center">

<div>
  <h4> Visualizacion de reportes en linea </h4> 
</div>

<div class="q-gutter-sm">
      <q-radio keep-color v-model="maquina" val="AQM" label="AQM" color="teal" />
      <q-radio keep-color v-model="maquina" val="AQM1000" label="AQM 1000" color="orange" />
      <q-radio keep-color v-model="maquina" val="AQM1000_2" label="AQM 1000 (2)" color="cyan" />
</div>

<div v-if="maquina=='AQM1000_2'">
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090602/charts/1?bgcolor=%23ffffff&color=%2300CCCC&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090602/charts/2?bgcolor=%23ffffff&color=%2300CCCC&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090602/charts/3?bgcolor=%23ffffff&color=%2300CCCC&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090602/charts/4?bgcolor=%23ffffff&color=%2300CCCC&dynamic=true&results=60&type=line&update=15"></iframe>
</div>

<div v-if="maquina=='AQM'">
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1086839/charts/1?bgcolor=%23ffffff&color=%23336600&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1086839/charts/2?bgcolor=%23ffffff&color=%23336600&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1086839/charts/3?bgcolor=%23ffffff&color=%23336600&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1086839/charts/4?bgcolor=%23ffffff&color=%23336600&dynamic=true&results=60&type=line&update=15"></iframe>
</div>

<div v-if="maquina=='AQM1000'">
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090606/charts/1?bgcolor=%23ffffff&color=%23DD6622&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090606/charts/2?bgcolor=%23ffffff&color=%23DD6622&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090606/charts/3?bgcolor=%23ffffff&color=%23DD6622&dynamic=true&results=60&type=line&update=15"></iframe>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1090606/charts/4?bgcolor=%23ffffff&color=%23DD6622&dynamic=true&results=60&type=line&update=15"></iframe>
</div>

</q-page>
</template>

<script>


export default {
name: 'R',

  mounted: function(){

    if (this.$store.getters['isLogged']== false)
    {
    this.$router.push('/')
    }
  },

  data() {
    return {
      maquina: ''
    }
    },

}

</script>


