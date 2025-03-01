<template>

        <v-row no-gutters>
          <v-col cols=12 sm=5 md=6 :class="smAndUp ? 'rounded-s-xl fondoimagen' : 'rounded-t-xl fondoimagen'">
            <v-banner color="success" text="Educación sobre el cuidado de heridas en las farmacias" :stacked="false" :class="smAndUp ? 'rounded-ts-xl rounded-te-lg rounded-be-lg fondoverde w-66 text-h4 font-weight-bold' : 'rounded-t-xl fondoverde  text-h4 font-weight-bold'">
            </v-banner>
          </v-col>
          <v-col cols=12 sm=7 md=6>
            <v-form class="pa-6">
            <v-container>
            <v-row class="m-6">
              <v-col><h6 class="text-h5">BIENVENIDO</h6></v-col>
              <v-col> <v-img src="@/assets/images/logo.png"></v-img></v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols=12>
                <p>A continuación ingrese sus datos para iniciar el curso:</p>
              </v-col>
              <v-col cols=12>
                <v-text-field label="USUARIO:" v-model="form.nickname" variant="underlined" :error-messages="v$.nickname.$errors.map(e => e.$message)" @blur="v$.nickname.$touch"
                  @input="v$.nickname.$touch"></v-text-field>
              </v-col>
              <v-col cols=12 >
                <v-text-field
                  v-model="form.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="CONTRASEÑA:"
                  name="password"
                  counter
                  :error-messages="v$.password.$errors.map(e => e.$message)"
                  variant="underlined"
                  @click:append="show1 = !show1"
                  @blur="v$.password.$touch"
                  @input="v$.password.$touch"
                ></v-text-field>
              </v-col >
              <v-col cols=12>
                  <v-alert
                     v-model="error1"
                    density="compact"
                    :text="mensaje"
                    title="Atención"
                    type="warning"
                    closable
                  ></v-alert>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn color="#ff0023ff" rounded="xl" size="large" @click="login()" >
                  INGRESAR
                </v-btn>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn rounded="xl" size="large" class="fondoverde" @click="this.$router.push('/register')">
                  REGISTRARSE
                </v-btn>
              </v-col>
              <v-col cols=12 style="text-align: center;" class="d-none"><a href="">¿OLVIDÓ SU CONTRASEÑA?</a></v-col>
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
  import { required, minLength ,helpers} from '@vuelidate/validators'
  import { reactive,ref } from 'vue'
  import axiosInstance from '@/plugins/axios';
  import { useRouter, useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'

  const router = useRouter()
  const route = useRoute()

   localStorage.removeItem('token');
   localStorage.removeItem('progreso');

  var show1=ref(false)
  var error1=ref(false)
  var mensaje=ref('')
  var dialog=ref(false)

  var inicio={
    nickname: '',
    password:''
  }

  var form=reactive({
    ...inicio,
  })

  const rules={
    nickname:{required: helpers.withMessage('Campo requerido', required)},
    password:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('La contraseña debe contener minimo 8 caracteres',minLength(8))}
  }

   var v$ = useVuelidate(rules, form)

    //return { form, v$ }


  async function login() {

      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
        this.dialog=true;
      axiosInstance.post('login',form).then(response=>{
        if (response.data.access_token) {
          localStorage.token=response.data.access_token;
          router.push('/inicio');
        }
        this.dialog=false;
        console.log("Recurso creado con éxito:", response.data);
      }).catch(error => {
         if (error.response) {
            if (error.response.data.mensaje) {
              mensaje=error.response.data.mensaje;
            }else{
              mensaje="Error al conectarse al servidor."
            }
            this.error1=true;
            console.log(error1)
        }
        this.dialog=false;
    });
  }

  const {  smAndUp } = useDisplay()

    // Usar breakpoints para determinar la clase de border-radius
    /*const breakpointClass = computed(() => {
      if (lgAndUp) {
        return 'rounded-t-lg fondoimagen'; // Para pantallas extra pequeñas
      //   Para pantallas medianas
      }
        return 'rounded-s-lg fondoimagen'; // Para pantallas grandes


    });*/

</script>
