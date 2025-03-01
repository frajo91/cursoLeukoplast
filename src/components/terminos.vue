<template>
	<v-container style="height: 90vh;background-color: white;">
		<v-row>
		<v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          One
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
		</v-row>
		<v-row>
			<v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>
		</v-row>
		
	</v-container>
</template>
<script setup>


</script>

