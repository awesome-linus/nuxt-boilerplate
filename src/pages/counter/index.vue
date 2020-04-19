<template>
  <div>
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
