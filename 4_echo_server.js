const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        req.pipe(res)  
        /**
         * We are piping the data from req to res.
         * We are able to do this because res, req are readable and writable
         * streams respectably. 
         */
    }
    else{
        res.statusCode = 404
        res.end("You blind?")
    }
})

server.listen(PORT, () => console.log(`listening on ${PORT}...`))