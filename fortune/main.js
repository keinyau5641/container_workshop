const { join } = require('path')
const fortune = require('fortune-cookie')
const express = require('express')
const hbs = require('express-handlebars')

const PORT = parseInt(process.argv[2] || process.env.APP_PORT || 3000)
const FORTUNES = fortune.length;

const getFortune = () => {
	let i =  parseInt(Math.random() * FORTUNES);
	return fortune[i];
}

const app = express();

app.engine('hbs', hbs());
app.set('view engine', 'hbs')

app.get(['/', '/index.html', '/fortune'], (req, resp) => {
	resp.status(200)
	resp.type('text/html')
	resp.render('fortune', { text: getFortune(), layout: false })
})

app.get('/health', (req, resp) => {
	resp.status(200)
	resp.type('text/plain')
	resp.end(`OK ${new Date()}`);
})

app.get(/.*/, express.static(join(__dirname, 'public')));

app.use((req, resp) => {
	resp.status(404)
	resp.type('text/html')
	resp.sendFile(join(__dirname, 'public', '404.html'))
})

app.listen(PORT, () => {
	console.info('Application started on port %d at %s'
		, PORT, new Date());
});