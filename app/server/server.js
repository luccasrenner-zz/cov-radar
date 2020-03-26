const express = require('express');
const app = express();

const { SERVER } = require('../utils/constants/server');

app.listen( SERVER.PORT, () => console.log(`Server ::${SERVER.PORT}`) );
