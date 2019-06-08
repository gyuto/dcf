import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const Page = () => {
  return (
    <Layout>
      <SEO title="Mission statement" />
      <Article
        content={{
          title: "Scholarships",
        }}
      >
        <p>
          The Delek Children's Foundation Scholarship for under privilege
          student is open to all students in Himalayan Region. Since 2009, the
          Foundation has offered and continue to sponsor students in India and
          Nepal who are currently enrolled in the school and the college. We are
          actively looking for generous donors to extend our program to more
          students and we hope to increase the number of scholarships every year
          as our supporters grow. So, please help us by sharing our information
          to your friends and family.
        </p>
        <p>
          Our foundation provide scholarships to middle school, high school and
          college students.
        </p>
        <li>$30 per month/$365 per year for Middle School</li>
        <li>$500 per year for High School</li>
        <li>$75 per month/$900 annually for College Student</li>
        <p>
          Our annual budget is approximate $25,000-30,000 and we hope to
          increase the number of students as we receive more donations.
        </p>
        <a
          href="https://docs.google.com/forms/d/1e3Zdgba-7c513VCUxVgfLMH9Mi7BTecF6QN8yYCbKY4/viewform?edit_requested=true"
          target="_blank"
        >
          Scholarship application form
        </a>
        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
