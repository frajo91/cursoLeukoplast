<template>

        <v-row no-gutters style="min-height:60vh;">
          <v-col cols=12 sm=4 md=5 lg=6 :class="smAndUp ? 'rounded-s-xl fondoimagen' : 'rounded-t-xl fondoimagen'">
            <v-banner color="success" :text=" $t('detalleCurso.titulo')" :stacked="false" :class="{'rounded-ts-xl rounded-te-lg rounded-be-lg fondoverde w-66 text-h4 font-weight-bold': lgAndUp,
            'rounded-ts-xl rounded-te-lg rounded-be-lg fondoverde text-h4 font-weight-bold': smAndUp,
            'rounded-t-xl fondoverde text-h4 font-weight-bold': !lgAndUp && !smAndUp}">
            </v-banner>
          </v-col>
          <v-col cols=12 sm=8 md=7 lg=6>
            <v-form class="pa-md-6 pa-4">
            <v-container>
            <v-row >
              <v-col cols=12 sm=6 order=2 order-sm=1><h6 class="text-h4">{{$t('login.bienvenido')}}</h6></v-col>
              <v-col cols=12 sm=6 order=1 order-sm=2> <v-img src="@/assets/images/logo.png"></v-img></v-col>
            </v-row>
            <v-row justify="center" class="py-4 py-md-6" v-show="!enviado">
              <v-col cols=12>
                <p class="text-h5 textoRojo">{{$t('recuperar.titulo')}}</p>
              </v-col>
              <v-col cols=12>
                <p>{{$t('recuperar.mensaje')}}</p>
              </v-col>
              <v-col cols=12 >
                <v-text-field
                  v-model="form.correo"
                  type="email"
                  :label="$t('recuperar.correo')+':'"
                  name="correo"
                  :error-messages="v$.correo.$errors.map(e => e.$message)"
                  variant="underlined"
                ></v-text-field>
              </v-col >
              <v-col cols=12>
                  <v-alert
                     v-model="error1"
                    density="compact"
                    :text="mensaje"
                    :title="$t('api.titulo_error')"
                    type="warning"
                    closable
                  ></v-alert>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn color="#ff0023ff" rounded="xl" size="large" @click="recuperar()" >
                  {{$t('recuperar.recuperar')}}
                </v-btn>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn rounded="xl" size="large" class="fondoverde" @click="this.$router.push('/')">
                  {{$t('recuperar.inicio')}}
                </v-btn>
              </v-col>

            </v-row>
            <!--parte de confirmacion de envio-->
            <v-row justify="center" class="py-4 py-md-6" v-show="enviado">
              <v-col cols=12>
                <p class="text-h5 textoRojo">{{$t('recuperar.listo')}}</p>
              </v-col>
              <v-col cols=12>
                <v-alert
                   border="start"
                   border-color="success"
                   elevation="2"
                 >
                 <p>{{$t('recuperar.enviado',{correo: ocultarCorreo(form.correo)})}}</p>
                </v-alert>
              </v-col>
              <v-col cols=12 >
                   <p v-html="$t('recuperar.aclaracion')"></p>
              </v-col >

              <v-col cols=12 style="text-align: center;">
                <v-btn rounded="xl" size="large" class="fondoverde" @click="this.$router.push('/')">
                  {{$t('recuperar.volver')}}
                </v-btn>
              </v-col>

            </v-row>


            <v-row justify="center">
              <v-col cols=5 align-self="center">
                <v-img src="@/assets/images/logo2.png" width=200></v-img>
              </v-col>
            </v-row>
            </v-container>
            </v-form>
          </v-col>
        </v-row>

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
          title="Guardando registro.."
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
  import { useVuelidate } from '@vuelidate/core'
  import { required, email ,helpers} from '@vuelidate/validators'
  import { reactive,ref } from 'vue'
  import axiosInstance from '@/plugins/axios';
  import { useRouter, useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import { useI18n } from 'vue-i18n';

  const router = useRouter()
  const route = useRoute()
const { t } = useI18n();
   localStorage.removeItem('token');
   localStorage.removeItem('progreso');

  var show1=ref(false)
  var error1=ref(false)
  var mensaje=ref('')
  var dialog=ref(false)
  var enviado=ref(false)

  var inicio={
    correo: ''
  }

  var form=reactive({
    ...inicio,
  })

  const rules={
    correo:{required: helpers.withMessage(t('validation.required'), required),email:helpers.withMessage(t('validation.email'), email)}
  }

   var v$ = useVuelidate(rules, form)

    //return { form, v$ }


  async function recuperar() {

      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
        this.dialog=true;
      axiosInstance.post('restablecer',form).then(response=>{
        this.enviado=true;
        this.dialog=false;;
      }).catch(error => {

         if (error.response) {
            if (error.response.data.mensaje) {
              mensaje=error.response.data.mensaje;
            }else{
              mensaje=t('api.error');
            }
            this.error1=true;
        }
        this.dialog=false;
    });
  }

  function ocultarCorreo(correo) {
  // Verifica si el correo tiene el formato adecuado
  const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const match = correo.match(regex);

  if (match) {
    const nombreUsuario = match[1];
    const dominio = match[2];

    // Ocultar todos los caracteres del nombre de usuario excepto el primero y el último
    const nombreUsuarioOcultado = `${nombreUsuario[0]}${'*'.repeat(nombreUsuario.length - 2)}${nombreUsuario[nombreUsuario.length - 1]}`;

    // Ocultar todos los caracteres del dominio excepto el primero y el último
    const dominioOcultado = `${dominio[0]}${'*'.repeat(dominio.length - 2)}${dominio[dominio.length - 1]}`;

    return `${nombreUsuarioOcultado}@${dominioOcultado}`;
  }

  return correo; // Si el correo no tiene el formato correcto, se devuelve tal cual
}


  const {  smAndUp,lgAndUp } = useDisplay()

    // Usar breakpoints para determinar la clase de border-radius
    /*const breakpointClass = computed(() => {
      if (lgAndUp) {
        return 'rounded-t-lg fondoimagen'; // Para pantallas extra pequeñas
      //   Para pantallas medianas
      }
        return 'rounded-s-lg fondoimagen'; // Para pantallas grandes


    });*/

</script>
