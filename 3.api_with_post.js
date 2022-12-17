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

    if(req.method === "GET" && pathItems[1] === 'books'){
        res.writeHead(200, {
            "Content-Type": "application/json" 
        })

        if(pathItems.length === 3){
            const idx = +pathItems[2]
            res.end(JSON.stringify(books[idx]))
        }
        else{
            res.end(JSON.stringify(books))
        }
    }
    else if (req.method === "POST" && pathItems[1] === "books"){
        req.on('data', (data) => {
            const bookEntry = data.toString()
            books.push(JSON.parse(bookEntry))
            res.end("ok")
        })
    }

    else{
        res.statusCode = 404
        res.end("Heres a 404. Now fk off!")
    }
    

})


server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/ ...`);
})
