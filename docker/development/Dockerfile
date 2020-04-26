FROM node:12.16.0-alpine as builder

# move working dir
WORKDIR /home/node



# package install
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install

# source copy
COPY --chown=node:node . .

# build
RUN yarn build:staging

FROM node:12.16.0-alpine


# move working dir
WORKDIR /home/node

# copy package.json nuxt.config.ts
COPY --chown=node:node package.json nuxt.config.ts ./

# copy from builder
COPY --from=builder --chown=node:node /home/node/server ./server
COPY --from=builder --chown=node:node /home/node/config ./config
COPY --from=builder --chown=node:node /home/node/src/domain ./src/domain
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/.nuxt ./.nuxt
COPY --from=builder --chown=node:node /home/node/tsconfig.json ./tsconfig.json

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["yarn", "start:staging"]
