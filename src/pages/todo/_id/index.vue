<template>
  <v-app>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="3">
          <v-btn color="success">Success</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="success">Success</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="success">Success</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="success">Success</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-color-picker />
  </v-app>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" module src="./index.module.scss" />
