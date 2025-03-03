<template>
  <v-app>
    <v-container fluid class="fondo" v-if="!curso">
       <v-row justify="center"
           align="center"
           style="height: 100vh;">
         <v-col
           cols=12
           sm=11
           md=9
           >
           <v-sheet
             elevation="12"
             max-height="95vh"
             rounded="xl"
             min-height="60vh"
             width="100%">
                 <router-view/>
           </v-sheet>
         </v-col>
       </v-row>

     </v-container>


     <router-view v-if="curso"/>



  </v-app>
</template>

<script setup>
import { onMounted, watch,ref } from 'vue';
import { useLocale } from 'vuetify'
import { useRoute } from 'vue-router';

const { current } = useLocale()

function changeLocale (locale) {
  current.value = locale
}
const route = useRoute();
const curso=ref(false)

function updateCurso() {
  // Asegúrate de que la ruta existe y es válida
  console.log("Ruta actual:", route.name);

  // Cambia la lógica según la ruta
  if (route.name === 'cursos') {
    curso.value = true;  // Si estás en la ruta 'cursos', mostrar el contenido del curso
  } else {
    curso.value = false; // De lo contrario, muestra el otro contenido
  }
}

// Usamos onMounted para la primera comprobación de la ruta
onMounted(() => {
  updateCurso();
});

// Usamos watch para observar cualquier cambio en la ruta
watch(
  () => route.name,
  (newRoute, oldRoute) => {
    console.log("Ruta cambiada de", oldRoute, "a", newRoute);
    updateCurso(); // Ejecutar la lógica cuando la ruta cambie
  }
);

</script>

<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }

  .fondoimagen{
    background-image: url(@/assets/images/login.png);
    background-size: cover;
    min-height: 20vh;
  }

  .fondoverde{
    background-color: #3ec7c0ff;
    color: white;
  }

  html{
    color: #55747e !important;
  }

  .v-sheet{
    color:#55747e !important;
  }

  a{
    color: #55747e !important;
  }

  .textoRojo{
    color: #f44336 !important;
  }

  .tarjetamd{
    min-height:50vh; max-height:66vh;
  }

  .tarjeta{
    height:52vh;
  }

  .separador{
    background-color: silver;
    width: 2px;
  }
</style>
