# Mock service
Allow the creation of a fake backend endpoint to develop frontend without the need of a backend API.

## How to run
- run "npm install"
- run "npm start" (If you want change the run PORT, edit "start" command in package.json)
- You can send GET, POST, PUT, PATCH and DELETE commands. You can see the format here: https://www.npmjs.com/package/json-server#routes

## Take in mind
- "db.json" is the data source. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json
- Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
- Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.

## Links
- json-server doc: https://www.npmjs.com/package/json-server
- Mockaroo: to generate fake data https://www.mockaroo.com/