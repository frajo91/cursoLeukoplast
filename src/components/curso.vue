<template>

			<iframe src="/curso/index.html" style="width: 100%; height: 100%;" id="cursol"></iframe>


 <v-dialog
      v-model="dialog"
      max-width="320"
      persistent
    >
      <v-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <v-list-item
          title="Guardando progreso.."
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <v-icon color="primary" size="x-large"></v-icon>
            </div>
          </template>

          <template v-slot:append>
            <v-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></v-progress-circular>
          </template>
        </v-list-item>
      </v-list>
    </v-dialog>


</template>
<script setup>
	import axiosInstance from '@/plugins/axios';
	import { reactive,ref,watch,onMounted } from 'vue'
	import { useRouter, useRoute } from 'vue-router'

	  const router = useRouter()
	  const route = useRoute()

	const token=localStorage.token||'';
	if (token.length<1) {
		router.push('/');
	}

	var dialog=ref(false)




	async function progreso1(progreso) {

      this.dialog=true;
      axiosInstance.post('progreso',progreso).then(response=>{
        console.log("Recurso creado con éxito:", response.data);
        this.dialog=false;
        //this.dialog_ok=true;
      }).catch(error => {
         if (error.response) {
            if (error.response.data.mensaje) {
              this.mensaje=error.response.data.mensaje;
            }else{
              this.mensaje="Error al conectarse al servidor."
            }
            //this.error1=true;
            //console.log(error1);
        }
        console.log(error);
        this.dialog=false;

    });



  }

</script>

<style type="text/css">
  .fondo1{
    background-color:#dd0f2cff !important;
  }
</style>
