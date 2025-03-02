import React from "react";
import Links from "./Links"



function About({bio, links}) {
  // console.log(links)
  // console.log(links.linkedin)
  // console.log(links.github)
    return(
      <div id="about">
      <h2>About Me</h2>
      {!bio || bio === "" ? null :  <p>{bio}</p> }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        github = {links.github}
        linkedin = {links.linkedin}
      />
    </div>
    )
}

export default About;
