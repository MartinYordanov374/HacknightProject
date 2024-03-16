const express = require('express')
let Summary = require('./Schemas/SummarySchema.js');
let mongooseConfiguration = require('./mongooseSetup.js')

const app = express();
const port = 3000


app.get('/getSummary/:summaryId', (req,res) => {
    console.log('getting summary')
})

app.get('/summarizeFile/', async (req,res) => {
     let summary = await Summary.create({
        "SummaryTitle":"test title",
        "SummaryContent": "some content"
     });

     res.status(200).send('summary successfully created')
})

app.listen(port, () => {
    console.log('server listening on port 3000')
})


async function getMongooseConfigRunning(appParam)
{
    await mongooseConfiguration(appParam)
  
}

getMongooseConfigRunning(app)