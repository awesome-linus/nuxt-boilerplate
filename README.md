# nuxt-typescript-sample

## Node
```
v12.8.1
```

## Docker
# 開発ビルド
ローカル環境で動作確認する際には以下のコマンドで確認
```
$ docker build \
--rm \
--no-cache \
--build-arg ANY_SECRET_KEY=${ANY_SECRET_KEY} \
--build-arg ANY_SECRET_KEY_SECOND=${ANY_SECRET_KEY_SECOND} \
-t nuxt-boilerplate \
-f docker/development/Dockerfile .

docker run -it -p 3000:3000 nuxt-boilerplate
```

# 本番ビルド
ローカル環境で動作確認する際には以下のコマンドで確認
```
$ docker build \
--rm \
--no-cache \
--build-arg ANY_SECRET_KEY=${ANY_SECRET_KEY} \
--build-arg ANY_SECRET_KEY_SECOND=${ANY_SECRET_KEY_SECOND} \
-t nuxt-boilerplate \
-f docker/production/Dockerfile .

docker run -it -p 3000:3000 nuxt-boilerplate
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
