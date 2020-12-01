// function to generate markdown for README
function licenseBadge(license) {

  return `
  ![License Badge](https://img.shield.io/babdge/license-${license}-blue.svg)
  
`
}
function generateMarkdown(data) {
  return `
  
  # ${data.appName}

  ## Table of Contents 
  * [Description](#Descritpion)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [Contributors](#Contributors)
  * [License](#License)
  * [Contact Information](#ContactInfo)


  ## Description
  ${data.Description}


  ## Installation 
  ${data.Installation}


  ## Usage 
  ${data.Usage}

  ## Tests 
  ${data.Tests}


  ## Contributors 
  ${data.Contributors}


  ## License
  ${licenseBadge(data.License)}
  



  ## Contact Information 

  For questions, queries or anything at all, contact me at: 

  Github: [https://github.com/${data.userName}](https://github.com/${data.userName}) 
  
  
  Email: [${data.eMail}](${data.eMail})

`;
}

module.exports = generateMarkdown;
