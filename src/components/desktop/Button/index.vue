<template>
  <button
    :disabled="disabled || false"
    :class="[
      'button',
      'button-' + (disabled ? 'disabled' : kind),
      size ? 'button-' + size : 'button-normal'
    ]"
    @click="handleClick"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped src="./index.scss" />
