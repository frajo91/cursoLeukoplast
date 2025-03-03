<template>

        <v-row no-gutters style="min-height:60vh;">
          <v-col cols=12 sm=4 md=5 lg=6 :class="smAndUp ? 'rounded-s-xl fondoimagen' : 'rounded-t-xl fondoimagen'">
            <v-banner color="success" :text=" $t('login.titulo')" :stacked="false" :class="{'rounded-ts-xl rounded-te-lg rounded-be-lg fondoverde w-66 text-h4 font-weight-bold': lgAndUp,
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
            <v-row justify="center">
              <v-col cols=12>
                <p class="text-h5 textoRojo">{{$t('cambiarContrasena.titulo')}}</p>
              </v-col>
              <v-col cols=12>
                <p>{{$t('cambiarContrasena.mensaje')}}</p>
              </v-col>
              <v-col cols=12 >
                <v-text-field
                  v-model="form.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :label="$t('login.contrasena')+':'"
                  name="password"
                  counter
                  :error-messages="v$.password.$errors.map(e => e.$message)"
                  variant="underlined"
                  @click:append="show1 = !show1"
                  @blur="v$.password.$touch"
                  @input="v$.password.$touch"
                ></v-text-field>
              </v-col >
              <v-col cols=12 >
                <v-text-field
                  v-model="form.confirmPassword"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :label="$t('cambiarContrasena.confirmar')+':'"
                  name="confirmPassword"
                  counter
                  :error-messages="v$.confirmPassword.$errors.map(e => e.$message)"
                  variant="underlined"
                  @click:append="show1 = !show1"
                  @blur="v$.confirmPassword.$touch"
                  @input="v$.confirmPassword.$touch"
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
              <v-col cols=12 style="text-align: center;">
                <v-btn  rounded="xl" size="large" @click="login()" class="fondoverde" >
                  {{$t('cambiarContrasena.titulo')}}
                </v-btn>
              </v-col>
          
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
  import { required, minLength ,helpers,sameAs} from '@vuelidate/validators'
  import { reactive,ref, computed } from 'vue'
  import axiosInstance from '@/plugins/axios';
  import { useRouter, useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import { useI18n } from 'vue-i18n';

  const router = useRouter()
  const route = useRoute()
const { t } = useI18n();

  const cambio = localStorage.getItem('changed');
  const token=localStorage.token||'';
  if (cambio===null||cambio===undefined ||token.length<1) {
    router.push('/');
  }
  localStorage.removeItem('changed');



  var show1=ref(false)
  var error1=ref(false)
  var mensaje=ref('')
  var dialog=ref(false)

  var inicio={
    password:ref(''),
    confirmPassword:ref('')
  }

  var form=reactive({
    ...inicio,
  })

  const rules=computed(() =>{
    return {
      password:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.min',{ length: '8' }),minLength(8)),},
      confirmPassword:{required: helpers.withMessage(t('validation.required'), required),sameAs: helpers.withMessage(t('validation.passwordMatch'), sameAs(form.password))}
    }
  })

   var v$ = useVuelidate(rules, form)

    //return { form, v$ }


  async function login() {

      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
        this.dialog=true;
      axiosInstance.post('update',form).then(response=>{
          router.push('/inicio');
        this.dialog=false;
        //console.log("Recurso creado con éxito:", response.data);
      }).catch(error => {
         if (error.response) {
            if (error.response.data.mensaje) {
              mensaje=error.response.data.mensaje;
            }else{
              mensaje=t('api.error');
            }
            this.error1=true;
            //console.log(error1)
        }
        this.dialog=false;
    });
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
