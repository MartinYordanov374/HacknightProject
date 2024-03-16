import React from 'react'
import '../Styles/HomePage/HomePage.css'

import 'bootstrap/dist/css/bootstrap.css';

export default function HomePage() {
  return (
    <div className='HomePageWrapper'>
        <div className='SummariesArea'>
            This is where the summaries go
        </div>
        <div className='UploadFileArea'>
            <input class="form-control form-control-lg UploadPdfInput" type="file" id="formFile"/>
        </div>
    </div>
  )
}
