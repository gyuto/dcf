import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import Img from "../images/donyo-profile.jpg"

const Page = () => {
  return (
    <Layout>
      <SEO title="Mission statement" />
      <Article
        content={{
          title: "About founder",
        }}
      >
        <p>
          <img
            style={{
              float: "left",
              marginRight: 30,
              transform: "translateY(5px)",
            }}
            src={Img}
          />
          Ven. Thupten Donyo dedicated for the Himalayan children's education
          and their healthcare. Our mission is to educate the Himalayan children
          by giving them the opportunity to go to High School and College, and
          raise their own children with education and eventually help their own
          communities. Educating these children, giving them the proper
          upbringing and tools to develop into productive adults, have a better
          future and continue the cycle for future generations while saving the
          traditions and culture of the Himalayan people.
          <br />
          <br />
          Ven. Thupten Donyo is hoping to sponsor many Himalayan children
          through High School and College. The children in the Himalayan region
          are only schooled through the 8th grade. After the basic schooling,
          many of the parents can't afford to send their children away from home
          for boarding School or College. Therefore, Ven. Donyo decided to help
          these underprivileged Himalayan children who need help with 4 years in
          High School and 4 years in College.
          <br />
          <br />
          Ven. Donyo has dedicated 20 years of his life in the Monastery in
          Dharamsala India, then 8 years in Australia studying English with the
          intent of creating a place for people who can practice Tibetan
          Buddhism and develop positive thoughts through meditation and prayers.
          Most importantly keep the endangered Tibetan culture alive for future
          generations.
          <br />
          <br />
          The Gyuto Foundation was founded by Ven. Donyo formerly known as Gyuto
          Vajrayana Center founded in 2000 in San Jose, later the Center
          relocated in the East Richmond Heights, CA. where Tibetan seniors and
          new refugees have a place to congregate, practice traditional Buddhist
          teachings. The Foundation is run by the monks with the help of some
          volunteers.
          <br />
          <br />
          Since 1997 Venerable Thupten Donyo has dedicated his time and energy
          to establish a Dharma Center in the San Francisco Bay Area. Ven. Donyo
          is very pleased and proud to say, through the support of many members
          over the years, The Gyuto Foundation was established and is successful
          and is able to stand on its' own. Over the years we have provided many
          teachings to members of the community. We were also able to host His
          Holiness the Dalai Lama twice and taught to over 11,000 people in San
          Jose in 2010 and San Francisco in 2007. He has accomplished all of
          this and he recently handed over The Gyuto Foundation to his parent
          Monastery in India.However the monastery was unable to find another
          person to replace him and therefore reassigned him as a Manager for
          Gyuto Centers in California and Minnesota. Meanwhile he will continue
          to work for the Himalayan Children's education.
          <br />
          <br />
          Ven. Thupten Donyo said he will work hard towards helping the children
          of the Himalayas and offer scholarship for hundreds of underprivileged
          children of the Himalaya. He started sponsoring Himalayan Children
          through High School and College in 2010 and in 2017 three students
          graduated from nursing College. From now on, Ven. Donyo will visit the
          areas once a year to make sure that these children are in School and
          college and have proper education.The Foundation has already sponsored
          number of Himalayan Children with school and would like to continue to
          help more. Each children requires 8 years sponsorship to complete
          their education through High School and College and we are requesting
          all of our friends to help these Himalayan Children for their
          education. We also provide scholarships to children who are not good
          in studies and wish to pursue vocational course so that they can get
          at job. Meanwhile, the Foundation will be organizing Charity Tours to
          Asia every year to raise some funds for the children.
          <br />
          <br />
          Thank you.
        </p>

        <div style={{ height: 20 }} />
      </Article>
    </Layout>
  )
}

export default Page
