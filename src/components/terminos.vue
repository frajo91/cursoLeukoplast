<template>
	<v-row no-gutters >
		<v-col cols=12>
			<v-container style="min-height:60vh; max-height:90vh;" >
				<v-row class="pt-4 px-4">
					<p class="text-md-h5 text-sm-h6 font-weight-bold">{{$t('terminos.titulo')}}</p>
				</v-row>

				<v-row class="px-4">
					<v-col>
					<v-tabs-window v-model="tab">
			        <v-tabs-window-item value="1" v-html="$t('terminos.politica_colombia')"  :class="{'overflow-y-auto tarjetamd': lgAndUp,
	            'overflow-y-auto tarjeta': !lgAndUp}" >
			        </v-tabs-window-item>

			        <v-tabs-window-item value="2" v-html="$t('terminos.politica_chile')"  :class="{'overflow-y-auto tarjetamd': lgAndUp,
	            'overflow-y-auto tarjeta': !lgAndUp}" >
			        </v-tabs-window-item>

			        <v-tabs-window-item value="3" :class="{'overflow-y-auto tarjetamd': lgAndUp,
	            'overflow-y-auto tarjeta': !lgAndUp}" v-html="$t('terminos.politica_mexico')">
			        </v-tabs-window-item>
		      </v-tabs-window>
				</v-col>
				</v-row>
				<v-row class="pa-4" justify='space-between'>
					<v-col cols=12 lg=auto>
						<v-tabs
							v-model="tab"
							color="#f44336"
						>
							<v-tab value="1">{{$t('terminos.colombia')}}</v-tab>
							<v-tab value="2">{{$t('terminos.chile')}}</v-tab>
							<v-tab value="3">{{$t('terminos.mexico')}}</v-tab>
						</v-tabs>
					</v-col>
					<v-col cols=12 sm=auto>
						<p><span class="text-body-2 font-weight-bold">{{$t('terminos.politica')}}</span> <a href="https://www.essity.es/privacidad">
							{{$t('terminos.link_politica')}}</a> </p>
					</v-col>
					<v-col cols='auto'>
						<v-btn variant="text" @click="update"> <v-icon>mdi-chevron-left</v-icon> {{$t('terminos.regresar')}}</v-btn>
					</v-col>

				</v-row>

			</v-container>
</v-col>
</v-row>
</template>
<script setup>
import { reactive,ref } from 'vue'
import { useDisplay } from 'vuetify'
const {  lgAndUp} = useDisplay()
var tab=ref(0)
const model = defineModel()

function update() {
  model.value=false
}
</script>
