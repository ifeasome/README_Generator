// function to generate license badge
function licenseBadge(license) { //adds license badge

  return `
  ![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)
  
`
}

// function to generate contributing section of README based on user inpur
function conTribute(input) { 

if (input===true) {
    return ` Please familiarise yourself with our Contributor Convenant before adding your contributions. 
    [Contributor Convenant](./code_of_conduct.md)
  `} else {
    return `No outside contributions allowed at this time. `
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.appName}

  ${licenseBadge(data.License)}

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
  ${conTribute(data.Contributors)}


  ## License
  ${licenseBadge(data.License)}
  © ${data.projectYear} ${data.developerName}
  

  ## Contact Information 
  For questions, queries or anything at all, contact me at: 

  Github: [https://github.com/${data.userName}](https://github.com/${data.userName}) 

  
  Email: [${data.eMail}](${data.eMail})

`;
}

module.exports = generateMarkdown;
