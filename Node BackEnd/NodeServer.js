const express = require('express')
let Summary = require('./Schemas/SummarySchema.js');
let mongooseConfiguration = require('./mongooseSetup.js')
let ObjectId = require('mongodb').ObjectId; 

const app = express();
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());


app.get('/getSummary/:summaryId', async(req,res) => {
    try{
        let summaryId = req.params.summaryId;
        const objectId = new ObjectId(summaryId);
        console.log(summaryId)
        let result = await Summary.find({_id: objectId});
        res.status(200).send(result)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})

app.post('/summarizeFile/', async (req,res) => {
    try{
        
        let summaryTitle = req.body.SummaryTitle;
        let summaryContent = req.body.SummaryContent;
        let summary = await Summary.create({
            "SummaryTitle": summaryTitle,
            "SummaryContent": summaryContent
         });
    
         res.status(200).send('summary successfully created')
    }
    catch(err)
    {
        res.status(400).send(err)
    }
   
})

app.get('/getSummaries/', async (req,res) => {
    try{
        
        let result = await Summary.find();
        res.status(200).send(result)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
   
})

app.listen(port, () => {
    console.log('server listening on port 3000')
})


async function getMongooseConfigRunning(appParam)
{
    await mongooseConfiguration(appParam)
  
}

getMongooseConfigRunning(app)