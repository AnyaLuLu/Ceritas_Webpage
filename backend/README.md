1. First, ensure you have Node.js installed on your system. You can download it from nodejs.org if you haven't already.

2. Initialize the new node.js project
```
cd backend
npm init -y
```

3. Install express 
``` 
npm install express body-parser
```

4. Install cors
```
npm install cors
```

5. Install MongoDB Driver
```
npm install mongodb
```
- Make sure a MongoDB instance is started before running the server
- To download it, go to https://www.mongodb.com/try/download/community, select package, and download.
- (Optional - Recommended) Download mongosh (mongo shell, command line interface) https://www.mongodb.com/try/download/shell
- (Optional - Recommended) Download MongoDB Compass (GUI) https://www.mongodb.com/try/download/compass

6. Run the server:
```
node server.js
```