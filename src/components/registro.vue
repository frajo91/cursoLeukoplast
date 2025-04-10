<template>

        <v-row no-gutters v-show="!showTermino">
          <v-col cols=4    >
              <v-img class="d-none d-sm-block"
                src="@/assets/images/cutimed_website_wound-management_DiabeticFootUlcer_HMS_Campaign_583x415_1.jpg"
                cover
                height="100%"
                rounded="s-xl"
              ></v-img>
          </v-col>
          <v-col cols=12 sm=8>

            <v-form class="pa-2">
            <v-container>
            <v-row class="m-6" justify="center">
              <v-col cols=12 sm=9 order=2 order-sm=1>
                <h6 class="text-h4 font-weight-bold">{{$t('registro.titulo')}}</h6>
                <p>{{$t('registro.mensaje')}}</p>
              </v-col>

              <v-col cols=6 sm=3 order=1 order-sm=2> <v-img src="@/assets/images/logo.png"></v-img></v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols=12 sm=6><v-text-field label="" variant="underlined" color="#50707aff" density="compact"  v-model="form.name" :error-messages="v$.name.$errors.map(e => e.$message)" @blur="v$.name.$touch">
                  <template v-slot:label>
                    {{$t('registro.nombre')}}<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.lastname" :error-messages="v$.lastname.$errors.map(e => e.$message)" @blur="v$.lastname.$touch">
                <template v-slot:label>
                    {{$t('registro.apellido')}}<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  variant="underlined" color="#50707aff" density="compact" v-model="form.id_number" :error-messages="v$.id_number.$errors.map(e => e.$message)" @blur="v$.id_number.$touch">
                <template v-slot:label>
                    {{$t('registro.dni')}}<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  variant="underlined" color="#50707aff" density="compact" v-model="form.position" :error-messages="v$.position.$errors.map(e => e.$message)" @blur="v$.position.$touch"><template v-slot:label>
                    {{$t('registro.cargo')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.business" :error-messages="v$.business.$errors.map(e => e.$message)" @blur="v$.business.$touch"><template v-slot:label>
                    {{$t('registro.farmacia')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.client" :error-messages="v$.client.$errors.map(e => e.$message)" @blur="v$.client.$touch"><template v-slot:label>
                    {{$t('registro.cliente')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.country" :error-messages="v$.country.$errors.map(e => e.$message)" @blur="v$.country.$touch"><template v-slot:label>
                    {{$t('registro.pais')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.city" :error-messages="v$.city.$errors.map(e => e.$message)" @blur="v$.city.$touch"><template v-slot:label>
                    {{$t('registro.ciudad')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  type="number" variant="underlined" color="#50707aff" density="compact" v-model="form.phone" :error-messages="v$.phone.$errors.map(e => e.$message)" @blur="v$.phone.$touch"><template v-slot:label>
                    {{$t('registro.telefono')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.email" :error-messages="v$.email.$errors.map(e => e.$message)" @blur="v$.email.$touch" type="email"><template v-slot:label>
                    {{$t('registro.correo')}}<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6>
                <v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.nickname" :error-messages="v$.nickname.$errors.map(e => e.$message)" @blur="v$.nickname.$touch">
                  <template v-slot:label>
                    <span style="color: red;"><b>{{$t('registro.usuario')}}*:</b></span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols=12 sm=6>
                <v-text-field
                  v-model="form.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="password"
                  counter
                  density="compact"
                  :error-messages="v$.password.$errors.map(e => e.$message)"
                  variant="underlined"
                  @click:append="show1 = !show1"
                  @blur="v$.password.$touch"
                  @input="v$.password.$touch"
                ><template v-slot:label>
                    <span style="color: red;"><b>{{$t('registro.contrasena')}}*:</b></span>
                  </template></v-text-field>
              </v-col >
              <v-col cols=12 sm=6>
                <p>{{$t('registro.politica')}} <b><a @click="showterminofuntion(true)">{{$t('registro.aqui')}}</a></b> </p>
              </v-col>
              <v-col cols=12 sm=6>
                <v-checkbox  v-model="form.terminos" :error-messages="v$.terminos.$errors.map(e => e.$message)" @blur="v$.terminos.$touch">
                  <template v-slot:label>
                    <div class="text-caption">
                      {{$t('registro.usoDatos')}}
                    </div>
                  </template>

                  </v-checkbox>
              </v-col>
              <v-col cols=12 sm=6 class="pa-0">
                <div class="g-recaptcha" data-sitekey="6LfsVfUpAAAAAPqDuMOEWhwQDS5L7qd2bIIAJchE"></div>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn color="#3ec7c0ff" rounded="xl" size="large" style="color: white;" @click="register(v$)" >
                  {{$t('registro.enviar')}}
                </v-btn>
              </v-col>
               <v-col cols=12 class="pa-0">
                  <v-alert
                     v-model="error1"
                    density="compact"
                    :text="mensaje"
                    :title="$t('api.titulo_error')"
                    type="warning"
                    closable
                    class=""
                  ></v-alert>
              </v-col>
              <v-col cols=12 style="text-align: center;" class="pa-0 ma-0">
                <p v-html="$t('registro.obligatorio')"></p>
              </v-col>
            </v-row>
            </v-container>
            </v-form>
          </v-col>
        </v-row>

  <v-dialog
      v-model="dialog_ok"
      persistent>
    <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <v-icon
      class="mb-5"
      color="#dd0f2cff"
      icon="mdi-check-circle-outline"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">{{$t('registro.mensajeRegistro')}}</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      {{$t('registro.mensajeRegistro2')}}
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-center">
      <v-btn
        class="text-decoration-underline"
        variant="text"
        @click="router.push('/inicio');"
      >
        {{$t('registro.iniciar')}}
      </v-btn>
    </div>
  </v-sheet>
  </v-dialog>
<terminos v-show="showTermino" v-model="showTermino" />
</template>


<script setup>

import { reactive,ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength ,helpers,email,numeric,integer } from '@vuelidate/validators'
import axiosInstance from '@/plugins/axios';
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import terminos from './terminos.vue';

  const router = useRouter()
  const route = useRoute()
const { t } = useI18n();
var show1=ref(false)
var error1=ref(false)
var mensaje=''
var dialog=ref(false)
var showTermino=ref(false)
var dialog_ok=defineModel({ default: false })

 var registro={
    name:'',
    lastname:'',
    id_number:'',
    business:'',
    position:'',
    country:'',
    city:'',
    phone:'',
    nickname:'',
    email:'',
    password:'',
    terminos:'',
    client:''
  }

  var form=reactive({
    ...registro,
  })

  const rules={
    name:{required: helpers.withMessage(t('validation.required'), required)},
    lastname:{required: helpers.withMessage(t('validation.required'), required)},
    id_number:{required: helpers.withMessage(t('validation.required'), required)},
    business:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'5'}),minLength(5))},
    client:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'5'}),minLength(5))},
    position:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'5'}),minLength(5))},
    country:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'3'}),minLength(3))},
    city:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'3'}),minLength(3))},
    phone:{required: helpers.withMessage(t('validation.required'), required),integer: helpers.withMessage(t('validation.numero'),integer)},
    email:{required: helpers.withMessage(t('validation.required'), required),email: helpers.withMessage(t('validation.email'),email)},
    nickname:{required: helpers.withMessage(t('validation.required'), required)},
    password:{required: helpers.withMessage(t('validation.required'), required),minLength: helpers.withMessage(t('validation.required',{length:'8'}),minLength(8))},
    terminos:{required: helpers.withMessage(t('validation.required'), required)}
  }

   var v$ = useVuelidate(rules, form)

   const register = async (formulario) => {
     const isFormCorrect = await formulario.$validate();

     // Si el formulario no es válido, no continuar
     if (!isFormCorrect) return;

     // Mostrar el diálogo de carga
     dialog.value = true;

     try {
       const response = await axiosInstance.post('register', form);

       if (response.data.access_token) {
         localStorage.token = response.data.access_token;
       }

       // Actualizar estado del diálogo
       dialog.value = false;
       dialog_ok.value = true;

     } catch (error) {
       if (error.response) {
         // Mostrar mensaje de error
         mensaje.value = error.response.data.mensaje || t('api.error');
         error1.value = true;
       }

       // Ocultar diálogo de carga
       dialog.value = false;
     }
   };

   const showterminofuntion = (vale) => {
       showTermino.value = vale;
   };
  //
</script>

<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }
</style>
