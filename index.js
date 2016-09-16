const express = require('express');

const PORT = process.env.PORT || 3000;
const WIT_TOKEN = process.env.WIT_TOKEN;

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
if (!FB_PAGE_TOKEN) { throw new Error('missing FB_PAGE_TOKEN') }
const FB_APP_SECRET = process.env.FB_APP_SECRET;
if (!FB_APP_SECRET) { throw new Error('missing FB_APP_SECRET') }

const app = express();

// Webhook setup
app.get('/', (req, res) => {
	res.send({result: 'hello world'});
});

app.listen(PORT);
console.log('Listening on :' + PORT + '...');