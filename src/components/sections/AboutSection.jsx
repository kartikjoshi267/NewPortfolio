import React from 'react'
import myPhoto from '../../assets/images/myphoto.jpg'

const AboutSection = () => {
  return (
    <>
      <img
        className="w-1/3 max-w-[150px] rounded-full duration-150 lg:hover:saturate-150 lg:hover:rotate-[10deg] lg:cursor-pointer shadow-[0_0px_20px_rgb(255,255,255)] lg:hover:shadow-[0_0px_30px_rgb(255,255,255)]"
        src={myPhoto}
        alt="my photo"
      />
      <div className="text-2xl lg:text-3xl">
        <p>
          I am an <strong>Associate Software Engineer at Yamaha Motor Solutions India
          Ltd (YMSLI)</strong>, working on <strong>SAP ABAP</strong> development including RICEFW, ALV,
          OOABAP, OData, RAP, and Fiori.
        </p>
        <br/>
        <p>
          Alongside my professional role, I am passionate about Full Stack Web
          Development, with hands-on experience in the MERN stack (MongoDB,
          Express.js, React, Node.js). I’ve also explored DevOps tools such as
          Docker, Jenkins (CI/CD), and Kubernetes, and hold an{' '}
          <a
            className="text-white hover:text-teal-300"
            href="https://drive.google.com/file/d/1z6_stn1rPSktISAzS5s53Q7_4CFb6-50/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Cloud Practitioner
          </a>{' '}credential.
        </p>
        <br/>
        <p>
          My background in programming languages (JavaScript, TypeScript,
          Python, Java, C, C++) and my exposure to enterprise-level SAP
          implementations equip me with both enterprise ERP development and
          modern web application development skills.
        </p>
        <br/>
        <p>
          Currently open to opportunities in SAP ABAP, Full Stack Web
          Development, or Cloud-based roles. Let’s connect to build innovative
          solutions together!
        </p>
        <br />
      </div>
    </>
  )
}

export default AboutSection
