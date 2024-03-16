const express = require('express')
let Summary = require('./Schemas/SummarySchema.js');
let mongooseConfiguration = require('./mongooseSetup.js')
let ObjectId = require('mongodb').ObjectId; 
let cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const port = 3030
const multer  = require('multer');
const path = require('path');
const fs = require('fs');
app.use(bodyParser.json());
app.use(cors());

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save files to the 'uploads' folder
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '.pdf'); // Rename uploaded file with a timestamp and .pdf extension
      }
    })
  });

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

app.post('/summarizeFile/', upload.single('lectureFile'), async (req,res) => {
    try{
        console.log(req.file.filename)
        let lectureFile = {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        }
        //TODO: Those below will be returned from the python API
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