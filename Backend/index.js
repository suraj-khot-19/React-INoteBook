const express = require('express');
var cors = require('cors');
const connectMonogo = require('./mongodb');

const app = express();
const port = 5000;

// routers
app.use('/user', require('./routers/User/user'));

// Configures the Access-Control-Allow-Origin CORS header.
app.use(cors({
    origin: 'url'  //TODO:add here url which you are using at frontend
}));

// mongodb connect
connectMonogo();

// middleware for accept json
app.use(express.json());

app.listen(port, () => {
    console.log(`app is listning at port http://localhost:${port}`)
});