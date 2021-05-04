import React from "react"
import Box from "@material-ui/core/Box"
import Typograhy from "@material-ui/core/Typography"

const About: React.FC = () => {
  return (
    <>
      <Box p = {2}>
        <Box display = "flex" justifyContent = "center" p = {1}>
          <Typograhy variant = "h5">
            About
          </Typograhy>
        </Box>
    <Box display = "flex" justifyContent = "center" p = {1}>
      <Typograhy variant = "body1" align = "left">
        私はOkakaです <br/>
        以上なんです
        </Typograhy>
    </Box>
      </Box>
    </>
  )
}

export default About; 