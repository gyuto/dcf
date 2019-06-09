import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import StudentPropfiles from "../components/student-profiles"

const Page = () => (
  <Layout>
    <SEO title="Student profiles" />
    <Article
      content={{
        title: "Student profiles",
      }}
    >
      <p>
        With our combined efforts, we can help the following children to become
        professionals in their lives which they never dreamed of. Some of our
        students already been graduated from Nursing and they are very happy to
        be educated. Thanks to all the supporters.
      </p>
      <StudentPropfiles />
    </Article>
  </Layout>
)

export default Page
