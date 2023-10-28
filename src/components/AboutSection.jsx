import React from 'react'
import myPhoto from '../assets/images/myphoto.jpg'

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
          Passionate Full Stack Web Developer with expertise in MERN Stack and a
          strong background in programming languages like C, C++, Java, Python,
          TypeScript and JavaScript. Also have a basic understanding about some
          popular DevOps tools like Docker, Jenkins (CI/CD Pipelining), and
          Kubernetes. Also, I'm an{' '}
          <a
            className="text-white hover:text-teal-300"
            href="https://drive.google.com/file/d/1z6_stn1rPSktISAzS5s53Q7_4CFb6-50/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Certified Cloud Practitioner
          </a>
          .
        </p>
        <br />
        <p>
          Committed to delivering user-friendly web applications and
          continuously exploring new technologies. Open to exciting
          opportunities in web development. Let's connect and create something
          amazing together!
        </p>
      </div>
    </>
  )
}

export default AboutSection
