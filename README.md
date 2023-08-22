# Next.js OpenJira App

This is a NextJs OpenJira App, with it you can create, update, delete and even drag whatever entries you have created. It is connected to a MongoDB database through the Next API so data can persist.

To run locally, you will need the database.

```
docker-compose up -d
```

- -d, means **detached**

## .env configuration

Rename **.env.template** file to **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

- Rebuild Node modules and start developement server

```
yarn install
yarn dev
```

## Seed the database with prepopulated data

Make a API call to:

```
http://localhost:3000/api/seed
```
