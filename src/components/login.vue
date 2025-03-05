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
            <v-row justify="center">
              <v-col cols=12>
                <p>{{$t('login.mensaje')}}</p>
              </v-col>
              <v-col cols=12>
                <v-text-field :label="$t('login.usuario')+':'" v-model="form.nickname" variant="underlined" :error-messages="v$.nickname.$errors.map(e => e.$message)" @blur="v$.nickname.$touch"
                  @input="v$.nickname.$touch"></v-text-field>
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
                <v-btn color="#ff0023ff" rounded="xl" size="large" @click="login()" >
                  {{$t('login.ingresar')}}
                </v-btn>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn rounded="xl" size="large" class="fondoverde" @click="this.$router.push('/register')">
                  {{$t('login.registrarse')}}
                </v-btn>
              </v-col>
              <v-col cols=12 style="text-align: center;" class="ma-3"> <a @click="this.$router.push('/recuperar')">{{$t('login.olvido')}}</a></v-col>
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
          :title="t('api.consulta')"
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

  var inicio={
    nickname: '',
    password:''
  }

  var form=reactive({
    ...inicio,
  })

  const rules={
    nickname:{required: helpers.withMessage(t('validation.required'), required)},
    password:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.min',{ length: '8' }),minLength(8))}
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
          if (response.data.restart==1) {
            localStorage.changed=1;
            router.push('/actualizar');
          }else{
            if (response.data.Inactivo===1) {
              router.push('/dashboard');
            }else{
              router.push('/inicio');
            }

          }

        }
        this.dialog=false;
        console.log("Recurso creado con éxito:", response.data);
      }).catch(error => {
         if (error.response) {
            if (error.response.data.mensaje) {
              mensaje=error.response.data.mensaje;
            }else{
              mensaje=t('api.error');
            }
            this.error1=true;
            console.log(error1)
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
