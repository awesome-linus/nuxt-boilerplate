<template>
  <div :class="$style.container">
    <div :class="$style.selectBox">
      <select required @change="selectQuery">
        <option value="" hidden>
          選択してください
        </option>
        <option value="queryParameter1">
          queryParameter1
        </option>
        <option value="queryParameter2">
          queryParameter2
        </option>
        <option value="queryParameter3">
          queryParameter3
        </option>
        <option value="queryParameter4">
          queryParameter4
        </option>
      </select>
    </div>
    <div :class="$style.selectedBox">
      <p>selectedQuery: {{ selectedQuery }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
