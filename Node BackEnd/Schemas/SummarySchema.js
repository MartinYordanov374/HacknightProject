const {Schema, model} = require('mongoose')

//TODO: Add login system credentials if time left
const SummarySchema = new Schema({
    SummaryTitle: 
    { 
        type: String, 
        required: true,
    },
    SummaryContent: 
    { 
        type: String, 
        required: true 
    }
})

let Summary = model('summary', SummarySchema)
module.exports =  Summary