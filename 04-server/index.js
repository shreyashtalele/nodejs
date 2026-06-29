const http = require("http");
const fs = require('fs')
const url = require('url')
const server = http.createServer((req, res) => {

    const log = `${Date.now()} : ${req.url} new request recieved\n`
    // console.log(req)
    // console.log("new req rec") 
    const my_url = url.parse(req.url, true)
    console.log(my_url);


    fs.appendFile('log.txt', log, (data) => {
        //res.end("hello from server ")
        switch (my_url.pathname) {
            case '/':
                res.end('home page')
                break;

            case '/about':
                const query_param = my_url.query.name;
                res.end(`Hi ${query_param}`)
                break;
            case '/search':
                const search_query = my_url.query.search_query
                res.end(`here are results for ${search_query}`)
                break;


            default:
                res.end("404 Not found ")
                break;
        }
    })

});

server.listen(8000,
    // () => (
    //     console.log('server started')
    // )
)