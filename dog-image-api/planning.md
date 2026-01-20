**STEP 1**

**What is Express.js?** - Express.js is a framework that makes it easy to create a web server in Node.js that can handle HTTP requests (GET, POST, etc.).

**What will our app do?** - Our dog app is going to act as a middleman. Our frontend will communicate with our server, and the server will communicate with the Dog API. This is called a **PROXY PATTERN**

**What is the purpose of building it this way instead of calling Dog API directly from the frontend?** - We can learn how backends work, practice handling requests/responses, add authentication/cashing/my own logic as well as some APIs requiring API keys that shouldn't be exposed in frontend code (most APIs as far as I know).

**STEP 2**

**Start by creating our package.json and our server.js (or index.js r whatever)**

**package.json** - This tells Node.js about my project and what dependencies it needs. - what are dependencies? Dependencies are (basically) just code that other people wrote that gets your stuff to work. Stuff like; 1. Frameworks - Express.js in this case. You could write a server without it, but this is way simpler. 2. HTTP Client - stuff like fetch is built in so we don't have to write our own logic/promises/async, etc etc. 3. Database Drivers - (I don't really understand this yet. This will come later with PostgreSQL) Talk to databases 4. Authentication - (Again, wtf is this lolol) JWT and password hashing (maybe privacy stuff? database stuff? idk) 5. Utilities - (dotenv for environment variables, cors for cross-origin requests)

                 When we 'npm install express' NPM downloads express, puts it in a node_modules folder, updates package.json to remember that my prject needs express, etc etc.

**server.js** - This is where my express server code lives. - _what is express server code exactly?_

              It is the brain of the backend. It's where we define the server itself, meaning creating an 'app' that listens on a specific 'port'. When someone visits our 'port' (localhost:xxxx), the server is ready to respond to any requests.

              The logic of a server defines what happens when someone makes a request to different URLs. Each route will have 1. an HTTP method (get, post, put, delete, etc) 2. a path (/dogs, /users/:id, etc) 3. A 'handler function' - my code that will run when that 'route is hit' by a request.

              "Middleware" - Code that runs *before* the routes. Think of these like security checkpoints. 1. Parse incoming JSON data 2. check if user is logged in 3. log every request 4. handle errors

              "Business logic" - 1. Fetchning data from other APIs (Like the Dog CEO API I'm using) 2. Processing data (filtering, sorting, transforming) 3. Validating user input 4. Connecting to databases 5. Authentication/authorization.

              **SERVER.JS IS WHERE OUR SERVER LOGIC EXISTS**

**STEP 3**

**The Absolute Minimum Express Server**

Literally just 3 basic steps to understand wtf is goin on here;

1. Listens on a port (localhost)
2. Resopnds to one route - like a home route.
3. Send back a simple message like "Hello World"

**The essential parts of a basic express server**

1. Import Express [const express = require('express');]
   1a. This loads the express module that was downloaded with npm install express. It's just like importing script.js or style.css into index.html, except we're using require() because of some CommonJS bullshit that doesn't really matter for me right now. Just remember this is how I import libraries into node - similar to import in ES6 but node normally uses require() for whatever reason
2. Create an Express App Instance [const app = express();]
   2a. This creates our application so we can now use methods. app is technically an object, so we can use methods on it with .method; .get() .post() .listen() etc etc
   2b. I don't really get it yet, but the metaphor is "Think of it as creating your restaurant - now you can start adding tables (routes) and staff (middleware)". I don't know if that's useful but that's what it says. I'll refer back to this later to see if it's enlightening
3. Define the Port [cont PORT = 8080;] - Just where the localhost is. 8080 = localhost:8080.
   3a. Some other common numbers for this convention are; 3000, 5000, 8080, or any number above 1024 (below are reserved for system services). 3000 is popular for development.
4. Tell the Server to Listen;

app.listen(PORT, () => {
console.log(`server is running on http://localhost:${port}`);
});

    4a. This just starts the server and makes it listen for incoming requests on our specified port.

The callback function (the shorthand => function in the app.listen) runs once when the server successfully starts just to confirm that it's working. If it is, it will output the string.

Between steps 2. and 4. we want to 'add routes'. We need to define what happens when someone visits the server.

app.get('/', (req, res) => {
res.send('hello world');
});

app.get() = handles GET requests

'/' = the path (root URL, like http://localhost:3000/)

(req, res) => {} = callback function
A callback function is a function that you pass to another function, and it gets called later when something happens. In this case, I'm passing a callback function to app.get(). Express stores this function and says "I'll hold onto thyis function. When someone makes a GET request to '/', I'll call it back and give it the request and response objects.

Some other examples of callbacks I've actually worked with;
setTimeout() (async callbacks), .forEach() (array method callbacks), .addEventListener (event listener callbacks)

Callbacks are not the thing that decides when the parent function runs. The parent function decides when the callback will run.

req = requests object (constains info about what the client sent) 1. what URL was requests? 2. what data was sent? 3. what headeres were included? 4. query parameters, route parameters, ect
res = response object (what you send back to the client) 1. res.send() = send any type of response - to reiterate, res.send() will send literally anything whereas 2. res.json() = send JSON only - res.json() is literally ONLY sending the json parse and 3. res.status() = set HTTP status code
etcetc

res.send() = what we're sending back to the client

**What is the difference between req.params and req.query?** - req.params is a part of the URL _path_ (between the slashes). req.query is after the ? at the end and is formatted ?count=5&format=json. It seems to start with a ? and then all proceeding queries are levied via a logical operator like & (and).

**Queries as Objects and req.query.count** - req.query.count (or req.query.[anything]) is available to the user through express.js becuase they are objects. It's a request object. It's the same for anything req. params is the individual object within req.

**Object Nesting with Req** - req is a parent object. Within it are all of our other express request objects; params, query, headers, body, etc etc.

req // Main object
└─ params // Nested object
└─ breedName // String value
└─ query // Another nested object
└─ count // String value
└─ size // String value

// Express creates something like this for every request:
const req = {
params: { breedName: "husky" },
query: { count: "5", size: "large" },
headers: { /_ browser info _/ },
body: { /_ POST data _/ },
method: "GET",
url: "/api/breed/husky/images?count=5",
// ... dozens of other properties
};

Express builds these objects automatically. It;

1. Reads the incoming HTTP request from the user
2. Parses the URL to extract params/query (any request object given by user)
3. Creates parent object req with all child request objects
4. Passes it to our callback function

**URL Path Anatomy**

1. Protocol [https://] [http://]
   How the browser and the server communicate
   Express does not care which one you use, it's handled by the _hosting infastructure_
   HTTPS = encrypted, HTTP = unencrypted
   ws:// = websockets

2. Domain/Host [www.example.com]
   Where the server lives on the internet
   Dev host = locahost
   production = myapp.com / api.example.com
   Maps to an _IP_ address via _DNS_
   Not relevant to Express - listens on whatever machine it's running on

3. Port [8080] [3000] [etc]
   Which "door" to knock on the server
   default ports: HTTP=80, HTTPS=443 (usually hidden in browsers)
   Development = commonly 3000, 5000, 8080
   PORT variable
   Only visible in development URLs - Not production or released versions

4. Path [/api/users/breeds/random]
   The route/endpoint on server
   This is what Express routes match
   Can contain multiple segments separated by /
   Parts can be status [/api/users] or dynamic [:id]

   app.get("/api/breed/:breedName/images", ...)
   ↑ ↑
   static dynamic (parameter)

   If someone visits [/api/breed/husky/images]:
   /api/breed/ matches the static part
   husky fills in :breedName
   /images matches the rest

   :breedName becomes req.params.breedName
   // URL: /api/breed/husky/images
   req.params = { breedName: "husky" }

5. Query String [?sort=date&limit=10]
   starts with ?
   key-value pairs [key=value] {used for object creation under req}
   multiple queries separated by &
   always optional {for us to deal with in express also}
   All values are strings

   IN EXPRESS:
   // URL: /api/breed/husky/images?count=5&size=large
   req.query = {
   count: "5", // string!
   size: "large" // string!
   }

   Common Use Cases:
   -Filtering: [?category=shoes&color=red]
   -Sorting: [?sort=price&order=desc]
   -Pagination: [?page=2&limit=20]
   -Optional Features: [?include=comments&debug=true]

6. Hash/Fragment [#comments]
   Starts with #
   Used for client-side navigation (scroll to section, single-page apps)
   Never sent to the server - browsers handle this locally
   You'll never see this in _req_

**EXAMPLE URL**

http://localhost:3000/api/breed/husky/images?count=5&size=large#section1

app.get("/api/breed/:breedName/images", async (req, res) => {
// req.params = { breedName: "husky" }
// req.query = { count: "5", size: "large" }

// #section1 is invisible to Express - browser handles it
});

1. http:// → Protocol (Express ignores)
2. localhost:3000 → Host and port (port defined in your code)
3. /api/breed/husky/images → Path (matches your route, fills params)
4. ?count=5&size=large → Query string (becomes req.query)
5. #section1 → Fragment (never reaches server)

**Path or Query**

**Use Path Parameters [:param] for**:
Required identifying information
Resource hierarchy
RESTful design

/users/123 // user ID is required
/posts/456/comments // post ID is required
/breed/husky // breed name is required

**Use Query Parameters [?key=value] for**:

Optional modification
Filtering, sorting, pagination
Feature Flags

/users?role=admin&active=true // filter users
/posts?sort=date&limit=10 // sort and limit
/breed/husky/images?count=5 // optional count

**GUARD CLAUSES** - If statements within program (in this case, within app.get async) that guards against incorrect queries or other incorrect inputs and checking them before running the fetch or anything else. Prevents errors.

Ok, I'm going for just learning the REST API to a more professional setup (I think).

**Professional Backend Improvements**

1. Environment Variables (ESSENTIAL)
   Right now your port is hardcoded. Professional apps use environment variables:

Create a .env file for configuration
Install dotenv package
Makes your app configurable without changing code 2. Middleware for Error Handling (DRY principle)
You're repeating res.status(500).json({ error: "Server error" }) in every route. Let's create a centralized error handler.

3. Request Logging (Debugging/Monitoring)
   Log every incoming request so you can debug and monitor usage:

What endpoint was hit
When it was hit
How long it took 4. CORS Headers (Real-world necessity)
If you ever want a frontend on a different domain to use your API, you need CORS enabled.

5. Consistent Response Format (API Design)
   Right now some routes return raw Dog CEO data, others return transformed data. Let's make all responses consistent:

{
success: true/false,
data: { ... },
error: "message" (if failed)
}

6. Rate Limiting (Security)
   Prevent someone from spamming your API with thousands of requests.

I'll learn this in this order;

**Phase 1: Foundation (Easiest, immediate impact)**

1. Request Logging → You'll see it working instantly
2. Environment Variables → Simple config improvement
3. CORS → One-line addition (literally)

**Phase 2: Architecture (Requires understanding Phase 1)** 4. Consistent Response Format → Refactor existing code 5. Middleware for Error Handling → DRY up your code

**Phase 3: Security (Builds on everything)** 6. Rate Limiting → Protection layer

**Date()** - Date works by using the Unix timestamp or "epoch time". It's the amount of miliseconds since 1970. They use it because it's really fast and great for calculating durations because it's just a number.

**new Date()** - Creates a _Date object_ with a bunch of methods. Mych more powerful but slower. Can format dates, extract parts, etc.

const now = new Date();
console.log(now.toISOString()); // "2026-01-19T15:30:45.000Z"

**.toISOString()** - Method on a Date object - returns a standardized string format: "2026-01-19T15:30:45.000Z". The Z means UTL/Zulu time, not my local time. "Universal Time".

const now = new Date();
console.log(now.toISOString()); // "2026-01-19T15:30:45.000Z"

**What's happening in my code?**

[`Captures time when request arrives`]
const start = Date.now(); // Get timestamp: 1737313845000

[`Date.now() gets the current time, subtracts our start time and we're left with time between`]:
const duration = Date.now() - start; // Calculate difference

[`Creates a Date object for right now, then converts it to a readable string for logging.`]:
const timestamp = new Date().toISOString();
