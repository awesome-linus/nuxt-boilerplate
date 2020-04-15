<template>
  <div>
    <div>
      <div>
        <div>
          <span v-if="error.statusCode === 404">ページが見つかりません</span>
          <span v-else>エラーが発生しました</span>
        </div>
      </div>
      <p v-if="error.statusCode === 404" class="txt-notfound">
        404 Not Found
      </p>
      <p v-else class="txt-notfound">
        An Error Has Occurred
      </p>

      <p v-if="error.statusCode === 404" class="txt-notfound-description">
        <!-- eslint-disable-next-line  -->
        アクセスしようとしたページが見つかりませんでした。<br>ページが削除または移動された可能性があります。
      </p>
      <p v-else class="txt-notfound-description">
        エラーが発生しました。
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./error.ts" />
