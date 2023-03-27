import React from 'react';
import MyResume from '../../assets/FeliksBorshchevskyi.docx'
export default function Resume() {
  return (
    <div className="resume" style={{backgroundImage:`url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHw0fHx0ZWNofGVufDB8fHx8MTY3OTk0MDkyNg&ixlib=rb-4.0.3")`,
    backgroundSize: "cover"}}>
      <h1>Resume</h1>
       <a href={MyResume} download="FeliksBorshchevskyi.docx">Press here to Download Resume</a>
      <div>
        <p className='skills'>Front-end Skills</p>
      <ul  > 
        <li>HTML </li>
        <li>CSS </li>
        <li>Java Script </li>
        <li>JQuery </li>
        <li>Responsive design </li>
        <li>bootstrap </li>
        <li>React </li>
      </ul>
      </div>
      <div>
      <p className='skills'>Back-end Skills</p>
      <ul> 
        <li>APIs </li>
        <li>Node </li>
        <li>Express </li>
        <li>MySQL,Sequelize </li>
        <li>MongoDB,Mongoose </li>
        <li>REST </li>
        <li>GraphQL </li>
      </ul>
      </div>
    </div>
  );
}
