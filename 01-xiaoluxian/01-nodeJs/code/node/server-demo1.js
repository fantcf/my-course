const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(url.parse(req.url, true).query.name);
    res.end()
})
server.listen(8080)