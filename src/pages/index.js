import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Carousel, Image, Container } from 'react-bootstrap';

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <p>Test Test</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <p>
      
      </p>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Image src={data.image} alt={data.intro} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={data.image} alt={data.intro} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={data.image} alt={data.intro} fluid />
          </Carousel.Item>
        </Carousel>
      </Container>
      



      
      
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )

}

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`