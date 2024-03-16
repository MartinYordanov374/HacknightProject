import React, {useEffect, useState} from 'react'
import '../Styles/HomePage/HomePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faBook } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function HomePage() {
    let [summaries, setSummaries] = useState([])
    let [currentSummary, setCurrentSummary] = useState();
    let  [file, setFile] = useState(null);

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
    }, [])

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
    const handleFileChange = (event) => {


      const selectedFile = event.target.files[0];
      let name = selectedFile['name']
      setFile(selectedFile);
      summarizeFile(selectedFile); 
    };
    const summarizeFile = async(file) => {
      const formData = new FormData();
      formData.append('lectureFile', file);
      console.log(formData)
      try {
        const response = await axios.post(`${baseURL}/summarizeFile`, formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
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
