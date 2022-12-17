const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
    /**
     * Here, both [req] & [res] are streams.
     * [req] is a listenable (readable) stream,
     * [res] is a writable stream 
     */

    res.writeHead(200, {
        "Content-Type": "text/plain"
        // "Content-Type": "application/json" // if we want to send Json
    })

    res.write('We became so conscious, that we limited it so that our peace can\'t be disrupted.\n')
    res.write('Indeed, ')
    res.end('man is a paradox made flesh.')
    /**
     * [res.write(...)] -> write on the response stream
     * 
     * [res.end(...)] -> signifies that the response is now 
     * complete and ready to be send to the client.
     */
})


server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/ ...`);
})
