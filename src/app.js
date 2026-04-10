//you configure your express app here
//add middleware
// add routes
//configure swagger

import express from "express";

const app = express();

app.use(express.json());

//example route http://localhost:5000/mende-cms/v1/route-name



export default app;
