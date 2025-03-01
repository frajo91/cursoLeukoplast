<template>
  <v-app>
    <v-container fluid class="fondo">
       <v-row justify="center"
           align="center"
           style="height: 100%;">
         <v-col
           cols=12
           sm=11
           md=8
           >
           <v-sheet
             elevation="12"
             max-height="80%"
             rounded="xl"
             min-height="50vh"
             width="100%">
                 <router-view/>
           </v-sheet>
         </v-col>
       </v-row>

     </v-container>






  </v-app>
</template>

<script setup>


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
</style>
