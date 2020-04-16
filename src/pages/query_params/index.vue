<template>
  <div>
    <div>
      <div v-if="$device.isDesktop">
        Desktop
      </div>
      <div v-else-if="$device.isTablet">
        Tablet
      </div>
      <div v-else>
        Mobile
      </div>
    </div>
    <div :class="$style.container">
      <div>
        <CurrentCount :count="currentCount().count" />
        <IncrementButton />
        <DecrementButton />
        <AsyncIncrementButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
