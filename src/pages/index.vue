<template>
  <ul :class="$style.container">
    <li>
      <nuxt-link to="/counter">
        counter
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/errorHandling">
        errorHandling
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
