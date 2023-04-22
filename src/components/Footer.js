import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/weiqinghan/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/weiqinghan')}/>
        <EmailIcon onClick={() => window.location = 'mailto:angelhan114855@gmail.com'}/>
    
        </div>
        <p> &copy; 2023 weiqinghan.com</p>
      <p> Built with love, from Haohui Bao and Christine Lin</p>
    </div>
  )
}

export default Footer