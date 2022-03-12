# step build next page
FROM node:alpine as builder
WORKDIR /app

# copy package.json
COPY package.json pnpm-lock.yaml ./

# install node modules
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile

# copy project
COPY . .

# build project
RUN pnpm run build

# step nginx
FROM nginx:alpine

# copy static pages
COPY --chown=nginx:nginx --from=builder /app/out /usr/share/nginx/html
