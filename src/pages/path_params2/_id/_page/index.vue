<template>
  <div :class="$style.container">
    <p>Path Params: {{ params }}</p>
    <p>ID: {{ params.id }}</p>
    <p v-if="params.page">ページ: {{ params.page }}</p>

    <div>
      <nuxt-link to="/path_params2/1234">
        ページなしへいく
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/path_params2/1234/2">
        2ページ目へいく
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/path_params2/1234/15">
        15ページ目へいく
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
