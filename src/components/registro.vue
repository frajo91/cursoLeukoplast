<template>

        <v-row no-gutters>
          <v-col cols=4    >
              <v-img class="d-none d-sm-block"
                src="@/assets/images/registro.png"
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
                <h6 class="text-h5">Registro</h6>
                <p>Ingresar sus datos para registrarse:</p>
              </v-col>

              <v-col cols=6 sm=3 order=1 order-sm=2> <v-img src="@/assets/images/logo.png"></v-img></v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols=12 sm=6><v-text-field label="" variant="underlined" color="#50707aff" density="compact"  v-model="form.name" :error-messages="v$.name.$errors.map(e => e.$message)" @blur="v$.name.$touch">
                  <template v-slot:label>
                    Nombres<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.lastname" :error-messages="v$.lastname.$errors.map(e => e.$message)" @blur="v$.lastname.$touch">
                <template v-slot:label>
                    Apellidos<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  variant="underlined" color="#50707aff" density="compact" v-model="form.id_number" :error-messages="v$.id_number.$errors.map(e => e.$message)" @blur="v$.id_number.$touch">
                <template v-slot:label>
                    Número de identificación<span style="color: red;">*</span>:
                  </template>
              </v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  variant="underlined" color="#50707aff" density="compact" v-model="form.position" :error-messages="v$.position.$errors.map(e => e.$message)" @blur="v$.position.$touch"><template v-slot:label>
                    Cargo<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=12><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.business" :error-messages="v$.business.$errors.map(e => e.$message)" @blur="v$.business.$touch"><template v-slot:label>
                    Nombre de Farmacia<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.country" :error-messages="v$.country.$errors.map(e => e.$message)" @blur="v$.country.$touch"><template v-slot:label>
                    Pais<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.city" :error-messages="v$.city.$errors.map(e => e.$message)" @blur="v$.city.$touch"><template v-slot:label>
                    Ciudad<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field  type="number" variant="underlined" color="#50707aff" density="compact" v-model="form.phone" :error-messages="v$.phone.$errors.map(e => e.$message)" @blur="v$.phone.$touch"><template v-slot:label>
                    Número de móvil<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6><v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.email" :error-messages="v$.email.$errors.map(e => e.$message)" @blur="v$.email.$touch" type="email"><template v-slot:label>
                    Email<span style="color: red;">*</span>:
                  </template></v-text-field></v-col>
              <v-col cols=12 sm=6>
                <v-text-field variant="underlined" color="#50707aff" density="compact" v-model="form.nickname" :error-messages="v$.nickname.$errors.map(e => e.$message)" @blur="v$.nickname.$touch">
                  <template v-slot:label>
                    <span style="color: red;"><b>Usuario*:</b></span>
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
                    <span style="color: red;"><b>Contraseña*:</b></span>
                  </template></v-text-field>
              </v-col >
              <v-col cols=12 sm=6>
                <p>Leer la politica de privacidad y manejo de datos <b><a href="">AQUÍ</a></b> </p>
              </v-col>
              <v-col cols=12 sm=6>
                <v-checkbox  v-model="form.terminos" :error-messages="v$.terminos.$errors.map(e => e.$message)" @blur="v$.terminos.$touch">
                  <template v-slot:label>
                    <div class="text-caption">
                      Acredito que he leído la presente autorización. Con mi aceptación, autorizo de manera
                      expresa, voluntaria e informada a BSN MEDICAL LTDA para que administre, procese,
                      trate y utilice mis datos personales.
                    </div>
                  </template>

                  </v-checkbox>
              </v-col>
              <v-col cols=12 sm=6 class="pa-0">
                <div class="g-recaptcha" data-sitekey="6LfsVfUpAAAAAPqDuMOEWhwQDS5L7qd2bIIAJchE"></div>
              </v-col>
              <v-col cols=12 sm=6 style="text-align: center;">
                <v-btn color="#3ec7c0ff" rounded="xl" size="large" style="color: white;" @click="register()" >
                  ENVIAR SOLICITUD
                </v-btn>
              </v-col>
               <v-col cols=12 class="pa-0">
                  <v-alert
                     v-model="error1"
                    density="compact"
                    :text="mensaje"
                    title="Atención"
                    type="warning"
                    closable
                    class=""
                  ></v-alert>
              </v-col>
              <v-col cols=12 style="text-align: center;" class="pa-0 ma-0">
                <p>Los campos marcados con <span style="color: red;">*</span> son obligatorios.</p>
              </v-col>
            </v-row>
            </v-container>
            </v-form>
          </v-col>
        </v-row>

 <mensaje v-model="dialog"/>
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

    <h2 class="text-h5 mb-6">La solicitud ha sido enviada con exito.</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      La respuesta llegará al email registrado.
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-center">
      <v-btn
        class="text-decoration-underline"
        variant="text"
      >
        DA CLIC AQUÍ PARA INICIAR
      </v-btn>
    </div>
  </v-sheet>
  </v-dialog>

</template>

<script setup>

import { reactive,ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength ,helpers,email,numeric,integer } from '@vuelidate/validators'
import axiosInstance from '@/plugins/axios';
import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

var show1=ref(false)
var error1=ref(false)
var mensaje=''
var dialog=ref(false)
var dialog_ok=ref(false)

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
    terminos:''
  }

  var form=reactive({
    ...registro,
  })

  const rules={
    name:{required: helpers.withMessage('Campo requerido', required)},
    lastname:{required: helpers.withMessage('Campo requerido', required)},
    id_number:{required: helpers.withMessage('Campo requerido', required)},
    business:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('El nombre de la farmacia debe tener al menos 5 caracteres',minLength(5))},
    position:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('El cargo debe tener al menos 5 caracteres',minLength(5))},
    country:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('El pais debe tener al menos 3 caracteres',minLength(3))},
    city:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('La ciudad debe tener al menos 3 caracteres',minLength(3))},
    phone:{required: helpers.withMessage('Campo requerido', required),integer: helpers.withMessage('El telefono solo puede contener numeros',integer)},
    email:{required: helpers.withMessage('Campo requerido', required),email: helpers.withMessage('Correo invalido',email)},
    nickname:{required: helpers.withMessage('Campo requerido', required)},
    password:{required: helpers.withMessage('Campo requerido', required),minLength: helpers.withMessage('La contraseña debe contener minimo 8 caracteres',minLength(8))},
    terminos:{required: helpers.withMessage('Campo requerido', required)}
  }

   var v$ = useVuelidate(rules, form)

 async function register() {

      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return
      // actually submit form
        this.dialog=true;
      axiosInstance.post('register',form).then(response=>{
        if (response.data.access_token) {
          localStorage.token=response.data.access_token;
          router.push('/cursos');
        }
        console.log("Recurso creado con éxito:", response.data);
        this.dialog=false;
        this.dialog_ok=true;
      }).catch(error => {
         if (error.response) {
            if (error.response.data.mensaje) {
              this.mensaje=error.response.data.mensaje;
            }else{
              this.mensaje="Error al conectarse al servidor."
            }
            this.error1=true;
            console.log(error1);
        }
        console.log(error);
        this.dialog=false;

    });
  }

  //
</script>

<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }
</style>
