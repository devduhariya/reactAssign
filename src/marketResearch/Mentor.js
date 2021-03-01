import React from 'react';


export default function Mentor() {
  const person = '/assets/img/person.jpg';
  const me = 'some text';
  console.log(me);
    return(
        <div>
          <img src={person} alt="s"/>
          <p className="mt-4">Watch this video from the mentor introducing you to the task and continue with the program task.</p>
        </div>
    );
}
