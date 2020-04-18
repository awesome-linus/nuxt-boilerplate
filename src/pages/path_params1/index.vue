<template>
  <ul :class="$style.container">
    <li v-for="page in pages" :key="page.name">
      <nuxt-link :to="page.path">
        {{ page.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
