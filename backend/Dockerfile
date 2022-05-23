FROM node:lts as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install --only=development

COPY ./ /app/

RUN npm run build

RUN rm -rf /app/node_modules # delete dev dependencies

RUN npm install --production # install production dependencies

#Create NODE deployment
FROM node:lts

WORKDIR /app

COPY --from=build-stage /app/node_modules /app/node_modules
COPY --from=build-stage /app/dist /app/
COPY --from=build-stage /app/src/prisma/schema.prisma /app/prisma/schema.prisma

ENV NODE_ENV=production

CMD node main.js

EXPOSE 80
