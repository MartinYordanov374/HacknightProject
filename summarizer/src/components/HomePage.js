import React from 'react'
import '../Styles/HomePage/HomePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import {InputGroup, FormControl} from 'react-bootstrap';

export default function HomePage() {
  return (
    <div className='HomePageWrapper'>
        <div className='SummariesArea'>
            This is where the summaries go
        </div>
        <div className='UploadFileArea'>
            <div className='SummaryResult'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ipsum sit amet elit interdum porta sit amet at arcu. Integer at ligula varius, tincidunt magna et, consectetur felis. Cras ut massa tortor. In hac habitasse platea dictumst. Nullam risus leo, tincidunt id imperdiet eget, mattis eget metus. Mauris eget tortor sit amet velit vulputate tempus. Sed dictum molestie tempor. Suspendisse condimentum lacus nec elit auctor, id pulvinar ipsum sodales. Mauris at dapibus ante, id pharetra diam. Donec laoreet hendrerit libero non rutrum. Curabitur non sapien vel justo scelerisque pharetra at sit amet quam. In efficitur pulvinar blandit.

Fusce gravida auctor ante, eu accumsan augue viverra a. Suspendisse efficitur laoreet eros at sodales. Sed lectus turpis, suscipit at fringilla quis, euismod ut tortor. Vivamus posuere elit sapien, non consequat dolor faucibus eget. Aenean rhoncus tellus at pulvinar auctor. Ut eget tristique augue. Morbi sit amet efficitur orci. Nunc a sollicitudin lorem. Donec bibendum in risus vitae efficitur. Nullam a turpis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra lorem a sodales varius. Nulla a orci nisi. Suspendisse fringilla nibh et velit ullamcorper volutpat. Donec varius libero vel mi vehicula dictum.

Vestibulum at risus fringilla, mattis purus et, ultricies justo. Ut faucibus ipsum arcu. Donec hendrerit ut tellus eu ultricies. Maecenas tellus erat, interdum a sapien id, ultricies lobortis massa. Nullam magna felis, bibendum sollicitudin urna a, porttitor ullamcorper elit. Donec non ligula dapibus, finibus ante vel, auctor dui. Fusce eget posuere augue, in auctor est.

Vivamus vulputate pharetra orci, vitae aliquet purus lobortis in. Nullam lobortis semper tincidunt. Etiam vel enim tincidunt, vestibulum ligula sit amet, feugiat urna. Phasellus pulvinar ac libero at ultrices. Nam nisl lectus, pharetra eu arcu non, iaculis tincidunt lorem. Nunc scelerisque neque porta enim venenatis aliquet. Vivamus sollicitudin urna augue, ac suscipit mauris luctus at. In rutrum ante ut libero iaculis interdum. Donec interdum, nisi non eleifend commodo, massa est pretium augue, nec tempor elit erat a turpis. Nam consequat suscipit efficitur. Duis luctus, enim sed elementum pharetra, magna massa rutrum metus, sed laoreet nunc dolor vel ligula. Curabitur et massa nulla. Etiam interdum pellentesque blandit. Sed hendrerit mauris et porta efficitur. Maecenas sit amet mauris porttitor, feugiat mauris vitae, rutrum nulla.

Maecenas quis enim eget ante ultricies sodales nec quis felis. Vestibulum et diam sed elit tempus consectetur. Nulla vitae neque eros. Donec ornare sem eros, cursus venenatis neque pulvinar non. Duis sit amet tellus id felis bibendum faucibus. Curabitur dui justo, pellentesque posuere auctor ac, ullamcorper vitae justo. Sed lobortis ipsum risus, sit amet imperdiet nibh accumsan a. Fusce luctus tempor placerat. Mauris in nisi feugiat, sodales massa vel, sollicitudin nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ut lobortis nunc, non vulputate est. Etiam porttitor vehicula est at scelerisque. In ac tortor id urna pellentesque malesuada id vitae dolor. Aenean erat velit, volutpat a risus sed, laoreet feugiat velit. Proin vulputate, magna quis semper suscipit, ante turpis elementum mauris, id aliquam nunc est laoreet eros. Suspendisse a egestas sem, sed rhoncus quam.
Vivamus vulputate pharetra orci, vitae aliquet purus lobortis in. Nullam lobortis semper tincidunt. Etiam vel enim tincidunt, vestibulum ligula sit amet, feugiat urna. Phasellus pulvinar ac libero at ultrices. Nam nisl lectus, pharetra eu arcu non, iaculis tincidunt lorem. Nunc scelerisque neque porta enim venenatis aliquet. Vivamus sollicitudin urna augue, ac suscipit mauris luctus at. In rutrum ante ut libero iaculis interdum. Donec interdum, nisi non eleifend commodo, massa est pretium augue, nec tempor elit erat a turpis. Nam consequat suscipit efficitur. Duis luctus, enim sed elementum pharetra, magna massa rutrum metus, sed laoreet nunc dolor vel ligula. Curabitur et massa nulla. Etiam interdum pellentesque blandit. Sed hendrerit mauris et porta efficitur. Maecenas sit amet mauris porttitor, feugiat mauris vitae, rutrum nulla.

Maecenas quis enim eget ante ultricies sodales nec quis felis. Vestibulum et diam sed elit tempus consectetur. Nulla vitae neque eros. Donec ornare sem eros, cursus venenatis neque pulvinar non. Duis sit amet tellus id felis bibendum faucibus. Curabitur dui justo, pellentesque posuere auctor ac, ullamcorper vitae justo. Sed lobortis ipsum risus, sit amet imperdiet nibh accumsan a. Fusce luctus tempor placerat. Mauris in nisi feugiat, sodales massa vel, sollicitudin nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ut lobortis nunc, non vulputate est. Etiam porttitor vehicula est at scelerisque. In ac tortor id urna pellentesque malesuada id vitae dolor. Aenean erat velit, volutpat a risus sed, laoreet feugiat velit. Proin vulputate, magna quis semper suscipit, ante turpis elementum mauris, id aliquam nunc est laoreet eros. Suspendisse a egestas sem, sed rhoncus quam.
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
              />
              
            </div>
        </div>
    </div>
  )
}
