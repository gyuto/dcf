import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Mission statement" />
    <Article>
      <h1>Mission statement</h1>
      <p>
        Delek Children’s Foundation is a charitable non-profit organization
        dedicated to providing children in need with an education and healthcare
        throughout the Himalayan region of India, Nepal, Bhutan and Tibet,
        irrespective of their ethnicity and national boundaries. Our mission is
        to educate the Himalayan children giving them the opportunity to go to
        High School and College, and raise their own children with education and
        eventually help their own communities. Educating these children, giving
        them the proper nutrition and tools to develop into productive adults,
        have a better future and continue the cycle for future generations while
        saving the traditions and culture of the Himalayan people.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Article>
  </Layout>
)

export default SecondPage
