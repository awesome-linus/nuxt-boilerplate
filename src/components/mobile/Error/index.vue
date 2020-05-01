<template>
  <div>
    Mobile
    <Error401 v-if="error.statusCode === 401" :error="error" />
    <Error404 v-else-if="error.statusCode === 404" :error="error" />
    <Error500 v-else :error="error" />
  </div>
</template>

<script lang="ts" src="./index.ts" />
