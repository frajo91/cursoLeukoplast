<template>
  <!--curso1: introduccion a MARSI-->
  <iframe
    :src="$t('detalleCurso.' + curso + '.url')"
    style="width: 100%; height: 100%"
    id="cursol"
  ></iframe>
  <v-dialog v-model="dialog" max-width="320" persistent>
    <v-list class="py-2" color="primary" elevation="12" rounded="lg">
      <v-list-item title="Guardando progreso..">
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
import axiosInstance from "@/plugins/axios";
import { reactive, ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const curso = import.meta.env.VITE_CURSO;
const router = useRouter();
const route = useRoute();

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const token = localStorage.token || "";
if (token.length < 1) {
  router.push("/");
}

var dialog = ref(false);

const progreso1 = async (progreso) => {
  // Mostrar el diálogo de carga
  dialog.value = true;

  try {
    const response = await axiosInstance.post("progreso", progreso);

    // Ocultar el diálogo de carga
    dialog.value = false;

    // Si deseas mostrar algún mensaje de éxito, puedes hacerlo aquí
  } catch (error) {
    if (error.response) {
      if (error.response.data.mensaje) {
        mensaje.value = error.response.data.mensaje;
      } else {
        mensaje.value = "Error al conectarse al servidor.";
      }
    }

    // Ocultar el diálogo de carga
    dialog.value = false;
  }
};
</script>

<style type="text/css">
.fondo1 {
  background-color: #dd0f2cff !important;
}
</style>
