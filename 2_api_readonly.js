const http = require('http')

const PORT = 8000

const books = [
    { book: "Songs of a Dead Dreamer", author: "Thomas Ligotti"},
    { book: "On the heights of Despair", author: "Emil Coiran"},
    { book: "The First Law Series", author: "Joe Abercrombie"},
]

const server = http.createServer((req, res) => {

    const pathItems = req.url.split('/')
    console.log(pathItems);

    if(pathItems[1] === 'books'){
        res.writeHead(200, {
            "Content-Type": "application/json" 
        })

        if(pathItems.length === 3){
            const idx = +pathItems[2] // short hand to str -> int
            res.end(JSON.stringify(books[idx]))
        }
        else{
            res.end(JSON.stringify(books))
        }
    }
    else if (pathItems[1] === "languages"){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')

        res.write('<li>')
        res.write("Hindi")
        res.write('</li>')

        res.write('<li>')
        res.write("English")
        res.write('</li>')

        res.write('<li>')
        res.write("Awadhi")
        res.write('</li>')

        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')

        res.end()
    }

    else{
        res.statusCode = 404
        res.end("Heres a 404. Now fk off!")
    }
    

})


server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/ ...`);
})
