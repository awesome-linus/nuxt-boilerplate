<template>
  <ErrorPc :error="error" />
  <!-- <ErrorPc v-if="this.$store.app.$device.isDesktop" :error="error" /> -->
  <!-- <ErrorSp v-else :error="error" /> -->
</template>

<script lang="ts" src="./error_page.ts" />
