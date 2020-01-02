import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/charity-tour-2019.json"

const Page = () => (
  <Layout>
    <SEO title={"Sponsor a teacher in Nepal"} />
    <Article>
      <p>Dear Friends,</p>
      <p>
        Thank you for your recent donations. Your generosity has furthered our
        commitment to support more Himalayan students every year. As you may
        know, the key to improving the welfare of these children and their
        families is to provide them with a good education. In order to do so,
        schools need strong teachers. One such school is Shree Dorpu in
        Solukhumbu, Nepal, where our founder, Ven. Donyo, studied before joining
        the monastery. Because of Shree Dorpu’s remote location below Mount
        Everest, it is a challenge to recruit an English teacher for its
        students. We have learned that unless we can provide a competitive
        salary, prospective teachers in Nepal will choose to work in cities for
        better pay and other opportunities.
      </p>

      <p>
        To that end, we are asking you to sponsor, or co-sponsor, the salary of
        an English teacher for Shree Dorpu School. Currently, Nepal relies
        heavily on tourism for its economic growth. For Nepali students who live
        close to Mount Everest, a knowledge of English creates opportunities for
        higher education and better jobs. We are seeking $150.00 per month
        (approximately 15,000 Nepali Rupees) as the salary for an English
        teacher. We believe that this amount will attract a suitable candidate
        who will remain in the village to insure the education of these
        students. We hope you can contribute to this goal and continue to help
        us on our path to provide quality education to Himalayan students in
        Nepal.
      </p>
      <p>
        If you would like to contribute, or have further questions, please
        contact us at the Delek Children’s Foundation.
      </p>

      <p>With Regards,</p>
      <img
        alt="Donyo's signature"
        src="https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsignature.png?alt=media&token=04ec2b50-6122-43c9-8f09-5909e52d8075"
      />
      <p>
        Ven. Thupten Donyo
        <br />
        Director
      </p>
    </Article>
  </Layout>
)

export default Page
