# phone-catalogue-react-nodejs

## Overview

Phone Catalog listing where user can add phone details with image and show it in list form with pagination with also edit and delete functionality

## `API` directory contains server side coding using `Nodejs express js and mysql`.

## `phone-catalog-react` directory contains front end code for Phone catalog view which is developed using `ReactJS`

## For setting up APIs on your local

create a database with name `Phone_catalog`

Update mysql user credentials under `db-config.js` which is under `API` directory.

You can either import data from the 'Phone_catalog.sql' which is located at the root of this git repository in your mysql database, it will give you some dummy data to test the application or set up a blank database you can run follwing commands:

`node ./bin/sync` It will setup fresh db in your relation DB.

## Run following commands to start the application :

`npm install`

`npm start`

### Please run following commands to setup frontend on your local

`npm i`

optional `set NODE_OPTIONS=--openssl-legacy-provider`

`npm start`

It will up the frontend application on follwing path:

`http://localhost:3000/`

To run the test cases, run:

`npm run test`

step1- main challage come how to run react code into node 18 priviously code is runing on node 14 so done some step
like- i added node 18 on code in package.json file and run this cmd after install npm i, npm rebuild set NODE_OPTIONS=--openssl-legacy-provider // this command NODE_OPTIONS environment variable to force Node.js to use the JavaScript implementation of OpenSSL.
