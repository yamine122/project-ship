<!-- 라디오버튼 -->

<template>
<div id="app">
  <v-app id="inspire">
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-radio-group v-model="ex8" column>
                <v-radio
                  label="primary"
                  color="bronze"
                  value="primary"
                ></v-radio>
                <v-radio
                  label="secondary"
                  color="secondary"
                  value="secondary"
                ></v-radio>
                <v-radio
                  label="success"
                  color="success"
                  value="success"
                ></v-radio>
                <v-radio
                  label="info"
                  color="info"
                  value="info"
                ></v-radio>
                <v-radio
                  label="warning"
                  color="warning"
                  value="warning"
                ></v-radio>
                <v-radio
                  label="error"
                  color="error"
                  value="error"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-app>
</div>
</template>
<script>
export default{
	
}
</script>