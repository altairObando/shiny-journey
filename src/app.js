//#region Load dependencies
require('dotenv').config()
const express = require('express'),
      morgan = require('morgan'),
      cors = require('cors'),
      PORT = process.env.PORT || 3000,
      _ = require('./db/index');
//#endregion 
// Create Server
const app = express();
// Configure app
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.set('port', PORT)



// Launch server
app.listen(()=> console.log(`🚀 Sever listening on PORT ${ PORT }`));