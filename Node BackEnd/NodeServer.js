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
const axios = require('axios')

app.use(bodyParser.json());
app.use(cors());


const pythonAPI_BaseURL = 'http://127.0.0.1:5000'

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
        let result = await Summary.find({_id: objectId});
        res.status(200).send(result)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})

app.post('/saveSummary', async(req,res) => {
    let summaryTitle = req.body.summaryTitle;
    let summaryContent = req.body.summaryContent;
    try{
        let summary = await Summary.create({
            "SummaryTitle": summaryTitle,
            "SummaryContent": summaryContent
       });
       await summary.save();
    }
    catch(err)
    {
        console.log(err)
    }

})

app.post('/summarizeFile/', upload.single('lectureFile'), async (req,res) => {
    
    try{
        let lectureFile = {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        }
        let target_file_path = path.join(__dirname + '/uploads/' + req.file.filename)
        let result = await callPythonScript(target_file_path);
        console.log(result[1])
    
         res.status(200).send(result)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
   
})

app.get('/getSummaries/', async (req,res) => {
    try{
        
        let result = (await Summary.find()).reverse();
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

async function callPythonScript(filePath) {
    try {
        const response = await axios.get(`${pythonAPI_BaseURL}/execute?filePath=${encodeURIComponent(filePath)}`);
        return response.data;
    } catch (error) {
        console.error('Error calling Python script:', error);
        throw error;
    }
}