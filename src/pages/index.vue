<template>
  <ul :class="$style.container">
    <li>
      <nuxt-link to="/counter">
        counter
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/error_handling/404">
        404 Error
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/error_handling/500">
        500 Error
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/agent">
        agent
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
