import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Submit() {
  return (
    <div className="text-center">
      <h3 className="my-3">Submit Your Task</h3>
      <div className="block">
        <span className="w-6 inline-block"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg></span>
        <span className="w-6 inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg></span>
      </div>
      <div className="file-upload text-gray-500">
        <label for="file_upload ">Drop your file here or <span className="hightlight-color">browse</span> to upload</label>
        <input type="file" className="file-input" id="file_upload"/>
      </div>
      <h3 className="text-center text-bold mt-5">Unlock Sample task</h3>
      <span className="inline-block w-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        </svg>
      </span>
      <h3 className="text-center text-gray-500 mt-5">Download a sample of the task you submitted</h3>

    </div>
  );

}