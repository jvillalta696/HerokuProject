const express = require('express');
const app = express();

const cors = require('cors');

//Routes
const Routes = require("./router");

// middlewares 
app.use(express.json());
app.use(cors());
app.use(Routes); // routers 

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });

