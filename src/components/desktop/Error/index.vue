<template>
  <div>
    Desktop
    <Error404 v-if="error.statusCode === 404" :error="error" />
    <Error500 v-else :error="error" />
  </div>
</template>

<script lang="ts" src="./index.ts" />
