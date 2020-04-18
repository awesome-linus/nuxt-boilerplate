<template>
  <div :class="$style.container">
    <p>Path Params: {{ params }}</p>
    <p>ID: {{ params.id }}</p>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
