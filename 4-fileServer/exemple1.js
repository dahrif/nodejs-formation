let http = require('http')
let fs = require('fs')

http.createServer((request, response)=>{
    fs.readFile('index.html', (err, data) =>{
        if (err) throw err
        response.writeHead(200, {
            'Content-type': 'text/html : charset=utf-8'
    })
    response.end(data)
    })
}).listen(8000)

// Cette fonction permet de lire les fichiers

