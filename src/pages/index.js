import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header2 from "../components/header2"

import { Carousel, Image, Container } from 'react-bootstrap';

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <p><Header2 imageInfo={data.image1} /></p>
      <p>Test Test</p>
      <p>
      
      </p>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Image src={data.image1} alt={data.image1alt} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={data.image2} alt={data.image2alt} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={data.image3} alt={data.image3alt} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={data.image4} alt={data.image4alt} fluid />
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
              image1
              image1alt
              image2
              image2alt
              image3
              image3alt
              image4
              image4alt
          }
        }
      }
    }
  }
}`