import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/ErrorPage/ErrorPage.css'
export default function ErrorPage() {
  return (
    <div className="errorMessageWrapper">
      <div className='row'>
        <div className='col'>
            <div className="text-center">
                <h1>404</h1>
                <p>Oops! Page not found.</p>
                <a href='/'>Return home.</a>
            </div>
        </div>
      </div>
          
    </div>
  );
}
