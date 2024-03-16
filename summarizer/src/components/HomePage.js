import React, {useEffect, useState} from 'react'
import '../Styles/HomePage/HomePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faBook } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function HomePage() {
    let [summaries, setSummaries] = useState([])
    let [currentSummary, setCurrentSummary] = useState();
    let  [file, setFile] = useState();

    const baseURL = 'http://localhost:3030';
    useEffect(() => {
      const getSummaries = async () => {
        try {
          const response = await axios.get(`${baseURL}/getSummaries`);
          
          setSummaries(response.data);
        } catch (err) {
          
          console.log(err.message);
        }
      };

      getSummaries()
    })

    const getSummaryById = async(id) =>
    {
      try 
      {
        const response = await axios.get(`${baseURL}/getSummary/${id}`);
        setCurrentSummary(response.data[0].SummaryContent)
        console.log(currentSummary)
      } 
      catch (err) 
      {
        // Handle errors
        console.log(err.message);
      }
    }

    const handleFileChange = async (event) => {
      const selectedFile = event.target.files[0];
      let name = selectedFile['name'];
    
      // setFile(selectedFile
      await summarizeFile(event.target.files[0], name); // Call summarizeFile after setting the file state
    };
    
    const saveSummary = async(summary) => {
      let summaryTitle = "NEW title"
      let summaryObject = {"summaryTitle" : summaryTitle, "summaryContent": summary}

      let response = await axios.post(`${baseURL}/saveSummary`, summaryObject)
    }

    const summarizeFile = async(targetFile, name) => {
      if (!targetFile)
      {
        console.error('No file selected.');
        return;
      }
  

      const formData = new FormData();
      formData.append('lectureFile', targetFile);
      try {
        
        let response = await axios.post(`${baseURL}/summarizeFile`, formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(async(res) => {
          let summaryContent = res.data;
          
          await saveSummary(summaryContent)
        })
      } catch (error) 
      {

        console.log(error)
        console.error('Error uploading file:', error);
      }
    }
  return (
    <div className='HomePageWrapper'>
        <div className='SummariesArea'>
            {summaries.length > 0 
            ? summaries.map((summary) => {
                    return(
                    <div className='SummaryBlock' key ={summary._id} onClick={() => getSummaryById(summary._id)}>
                        <FontAwesomeIcon icon={faBook} className='SummaryIcon'/> 
                        <p className='SummaryTitle'>{summary.SummaryTitle}</p>
                    </div>)
            })
            : "You don't have any summaries yet."}
        </div>
        <div className='UploadFileArea'>
            <div className='SummaryResult'>
                <p className='SummaryParagraph'>
                   {currentSummary ? <p className=''> {currentSummary}</p> : "select or upload a summary "}
                </p>
            </div>
            <div className="input-group mb-3">
              <label htmlFor="formFile" className="btn btn-outline-secondary btn-upload">
                <FontAwesomeIcon icon={faUpload} /> Upload
              </label>
              <input 
                type="file" 
                className="form-control UploadPdfInput visually-hidden" 
                id="formFile"
                accept="application/pdf"
                onChange={handleFileChange} 
              />
              
            </div>
        </div>
    </div>
  )
}
