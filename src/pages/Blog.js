import React from 'react'
import { Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet'
import CommonSection from '../components/CommonSection'
import BlogList from '../components/BlogList'

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Blog
