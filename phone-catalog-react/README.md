### Please run following commands to setup frontend on your local

`npm i`

`set NODE_OPTIONS=--openssl-legacy-provider`

`npm start`

It will up the frontend application on follwing path:

`http://localhost:3000/`

To run the test cases, run:

`npm run test`

step1- main challage come how to run react code into node 18 priviously code is runing on node 14 so done some step
like- i added node 18 on code in package.json file and run this cmd after install npm i, npm rebuild set NODE_OPTIONS=--openssl-legacy-provider // this command NODE_OPTIONS environment variable to force Node.js to use the JavaScript implementation of OpenSSL.
