FROM node:12.16.0-alpine as builder

# Move working directory
WORKDIR /home/node

# Set environment variables from argument
ARG ANY_SECRET_KEY
ARG ANY_SECRET_KEY_SECOND

ENV ANY_SECRET_KEY=$ANY_SECRET_KEY
ENV ANY_SECRET_KEY_SECOND=$ANY_SECRET_KEY_SECOND

# Install package
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install

# Copy source
COPY --chown=node:node . .

# Build
RUN yarn build:production

FROM node:12.16.0-alpine

# set ENV from ARG
ARG ANY_SECRET_KEY
ARG ANY_SECRET_KEY_SECOND

ENV ANY_SECRET_KEY=$ANY_SECRET_KEY
ENV ANY_SECRET_KEY_SECOND=$ANY_SECRET_KEY_SECOND

# Move working directory
WORKDIR /home/node

# Copy package.json nuxt.config.ts
COPY --chown=node:node package.json nuxt.config.ts ./

# Copy from builder
COPY --from=builder --chown=node:node /home/node/server ./server
COPY --from=builder --chown=node:node /home/node/config ./config
COPY --from=builder --chown=node:node /home/node/src/domain ./src/domain
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/.nuxt ./.nuxt
COPY --from=builder --chown=node:node /home/node/tsconfig.json ./tsconfig.json

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["yarn", "start:production"]
