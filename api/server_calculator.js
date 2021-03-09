const http = require("http")
const qs = require('querystring')
const url = require('url')
const fs = require('fs')
const path = require('path')
const SqlHistoryStorage = require('./SqlHistoryStorage')
const FileHistoryStorage = require('./FileHistoryStorage')
const HistoryEntry = require('./HistoryEntry')
const Calculator = require('./Calculator')

const db = {
    host: "localhost",
    user: "root",
    password: "qwer",
    database: "calculator_db",
}

const filePath = path.join(__dirname, "history.json")

var sqlStorage = new SqlHistoryStorage(db)
var fileStorage = new FileHistoryStorage(filePath)

const parseUrl = (link) => {
    const query = url.parse(link, true).query

    const firstNumber = Number(query.firstNumber)
    const secondNumber = Number(query.secondNumber)
    const operation = query.operation
    const clientResult = query.result ? query.result : null

    return {
        firstNumber,
        secondNumber,
        operation,
        clientResult
    }
}

const saveOperationEntry = async (operation, firstNumber, secondNumber, result) => {
    const entry = new HistoryEntry(operation, firstNumber, secondNumber, result, new Date())

    // await sqlStorage.saveHistoryEntry(entry)
    await fileStorage.saveHistoryEntry(entry)
}

http.createServer(async (req, res) => {

    const projectPath = path.join(__dirname, '..')

    if (req.method == 'GET' && (req.url.indexOf("operation") != -1)) {
        let { firstNumber, secondNumber, operation, clientResult } = parseUrl(req.url)
        let result = 0

        if (clientResult == null) {
            result = new Calculator().calculateResult(firstNumber, secondNumber, operation).toString()
        }
        else result = clientResult

        await saveOperationEntry(operation, firstNumber, secondNumber, result)

        res.writeHead(200, {
            'Content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': '*'
        });
        if (clientResult == null) {
            res.write(JSON.stringify({ result }))
        }
        res.end()
    }

    if (req.method == 'GET' && (req.url.indexOf("getHistory") != -1)) {
        // const history = await sqlStorage.getHistory()
        const history = await fileStorage.getHistory()

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.write(JSON.stringify(history))
        res.end()
    }

    if (req.method == 'GET' && (req.url.indexOf("delHistory") != -1)) {
        await fileStorage.delHistory()

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        })
        res.write("History deleted.")
        res.end()
    }

    // if (req.method == 'POST') {
    //     var body = ''

    //     req.on('data', (data) => {
    //         body += data

    //         // Too much POST data => kill the connection
    //         if (body.length > 1e6)
    //             res.writeHead(413, {'Content-type': 'text/plain'}).end()
    //             req.connection.destroy()
    //     });

    //     req.on('end', () => {
    //         let result = 0, nr1, nr2
    //         let post

    //         post = qs.parse(body)
    //         nr1 = post.firstNumber
    //         nr2 = post.secondNumber

    //         res.writeHead(200, {'Content-type': 'text/plain',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, POST',
    //             'Access-Control-Allow-Headers': '*'
    //         })
    //         result = new Calculator().calculateResult(nr1, nr2, post.operation).toString()

    //         entry = new HistoryEntry(post.operation, nr1, nr2, result, new Date())
    //         sqlStorage.saveHistoryEntry(entry)

    //         res.write(result)
    //         res.end()
    //     })
    // }

}).listen(8080)