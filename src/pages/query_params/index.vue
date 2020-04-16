<template>
  <div :class="$style.container">
    <div :class="$style.selectBox">
      <select required @change="selectQuery">
        <option value="" hidden>
          選択してください
        </option>
        <option value="query1">
          query1
        </option>
        <option value="query2">
          query2
        </option>
        <option value="query3">
          query3
        </option>
        <option value="query4">
          query4
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
