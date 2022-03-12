# step build next page
FROM quay.io/syfxlin/pnpm:latest
WORKDIR /app

# copy package.json
COPY package.json pnpm-lock.yaml ./

# install node modules
RUN pnpm install --frozen-lockfile

# copy project
COPY . .

# build project
RUN pnpm run build

# step nginx
FROM quay.io/syfxlin/nginx:latest

# copy static pages
COPY --chown=nginx:nginx --from=builder /app/out /usr/share/nginx/html
