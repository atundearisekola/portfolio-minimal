import React, { useState, useEffect, useRef, useContext } from "react"

import { graphql, Link } from "gatsby"
import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import ProjectItem from "../components/ProjectItem"



const Projects = ({ data }) => {

    const globalState = {
        // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
        isIntroDone: false,
        // darkMode is initially disabled, a hook inside the Layout component
        // will check the user's preferences and switch to dark mode if needed
        darkMode: false,
      }

  return (
    <GlobalStateProvider initialState={globalState}>
    <Layout>
     
   <ProjectItem data={data} />
    </Layout>
    </GlobalStateProvider>
  )
}

// Projects.propTypes = {
//   content: PropTypes.arrayOf(
//     PropTypes.shape({
//       node: PropTypes.shape({
//         body: PropTypes.string.isRequired,
//         frontmatter: PropTypes.object.isRequired,
//       }).isRequired,
//     }).isRequired
//   ).isRequired,
// }

export default Projects

export const query = graphql`
    query MyQuery($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
       
        frontmatter {
            title
            slug
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
        }
        body
        }
    }
  
`
