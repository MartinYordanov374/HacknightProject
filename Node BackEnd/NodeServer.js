const express = require('express')


const app = express();
const port = 3000


app.get('/getSummary/:summaryId', (req,res) => {
    console.log('getting summary')
})

app.get('/summarizeFile/', (req,res) => {
    console.log('summarizing file')
})

app.listen(port, () => {
    console.log('server listening on port 3000')
})