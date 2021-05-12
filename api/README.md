###  For setting up APIs on your local

#### create a database with name `Phone_catalog`

##### Update mysql user credentials under `db-config.js` which is under `API` directory.

You can either import data from the 'Phone_catalog.sql' which is located at the root of this git repository in your mysql database, it will give you some dummy data to test the application or set up a blank database you can run follwing commands:

`node ./bin/sync` It will setup fresh db in your relation DB.

## Run following commands to start the application :

`npm install`

`npm start`
