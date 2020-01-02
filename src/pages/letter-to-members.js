import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/charity-tour-2019.json"

const Page = () => (
  <Layout>
    <SEO title={"Letter to Members"} />
    <Article>
      <p>Dear Friends,</p>
      <p>
        Tashi Delek! I am writing this letter to reach out to you for my new
        foundation, Delek Children’s Foundation. Our main objective is to
        provide scholarships and healthcare for underprivileged children living
        in the Himalayas.
      </p>

      <p>
        I started this initiative after His Holiness Dalai Lama’s visits here in
        California. When I was a director at Gyuto Foundation, we were able to
        organize His Holiness Dalai Lama’s visit and public talks twice in the
        Bay Area. He always advises that if, we have the means and the
        capability, then we should invest our energy and funds to educate
        children from underprivileged families. With your kind support and
        donation, I have been able to set up a center which I have transferred
        to the main monastery in India last year. I now want to focus more and
        put the best use of my remaining years to help those poor children in
        remote areas to get access to modern education. There are still lots of
        families in remote areas of India, Nepal, Tibet and Bhutan who do not
        have access to basic education and live in poverty.
      </p>
      <p>
        So once again, I reach out to you, to help me fulfill this commitment
        and sponsor a child. With our combined efforts, we can help a child
        dream beyond his/her limits. Previously, I ran this project under the
        Gyuto Foundation and we have been providing scholarships to 26 children.
        Each year we try to add more children, based on the donations we
        receive. Our projected budget for year 2018 is $30,000.
      </p>
      <p>
        Under this foundation, I intend to provide scholarships to the Himalayan
        children going to middle school, high school and college. I also like to
        provide scholarships to children who are not good in studies and wish to
        pursue vocational courses so that they can get a job. Meanwhile, I will
        be organizing Charity Tours to Asia every year to raise funds for the
        foundation. This year in August, we are leading a charity tour to
        Ladakh, Manali and Dharamsala in India. Part of the tour will include
        attending four days teaching by His Holiness the Dalai Lama at his main
        temple in Dharamsala. You are welcome to join the tour and the
        registration is open now.
      </p>
      <p>
        Delek Children’s Foundation is a 501(c)(3) non-profit organization. Your
        donations made to us will be tax deductible. Please visit our website to
        learn more about the foundation. If you have any questions or
        suggestions, please write to me at donyo@delekcf.org or call at
        510-926-3050.
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
