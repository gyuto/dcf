import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const Page = () => {
  return (
    <Layout>
      <SEO title="Support us" />
      <Article content={{ title: "Support us" }}>
        <p>
          Your contribution will change the lives of many children who have very
          few opportunities. Please help us in providing life's most basic
          necessities to those who have so little. We are very grateful for
          those friends who have already generously taken the time to make
          donations in an effort to change these children's lives. Becoming a
          monthly supporter of the DCF is a wonderful way to support the
          Himalayan children who can't afford to attend higher education. Your
          support will make education possible for the underprivileged children
          in the Himalayan region. You may sponsor a child for one year, four
          years, or even eight years, depending on their program and your
          ability to provide funding.
        </p>
        <p>
          Delek Children's Foundation is a 501(c)(3) charitable non-profit
          organization dedicated to help underprivileged children go to school.
          All donations are fully tax-deductible. Ven Donyo thank those
          supporters who are making monthly donations to help us with our
          projects. General donations for The Delek Children's Foundation
          charity project go to:
        </p>
        <li>
          Children's education, school supplies, nutrition, boarding (schools
          are too far from villages) and transportation.
        </li>
        <li>
          <b>Sponsorship: Day School Sponsorship</b> A day school sponsorship
          for one child is $365.00 per year. High School Scholarship A high
          school scholarship for one student is: $500 per year.
        </li>
        <li>
          <b>High School Scholarship</b>A high school scholarship for one
          student is: $500 per year. Unfortunately, free high school is not
          provided for these children. Each student needs help for four years to
          graduate and be prepared for college.You may sponsor a child for one
          year, four years, or even eight years, depending on their program and
          your ability to provide funding.
        </li>
        <li>
          <b>College Scholarship</b> College scholarships are $900 a year and
          each student needs help for four years. This includes hostel fees,
          tuition fees, book, travel expenses, and a school uniform to
          successfully attend and graduate from college. Most of our graduates
          go into the health professions. Many parents cannot afford to send
          their children to high school or college, so the children remain at
          home and search for manual labor jobs outside their village when they
          are young teenagers.Your support will make education possible for so
          many children in the Himalayan areas of India, Nepal, and Bhutan and
          enable these children to contribute to society and make a difference
          for future generations.Delek Children's Foundation has a policy of not
          disclosing information about its donors to the public or any other
          entity. As required by the Federal Government we do disclose the names
          of donors above a certain level, but will not disclose contact or any
          other personally identifiable information without the donor's express
          permission.
        </li>
        <div
          style={{
            height: 50,
          }}
        />
        <div>
          <h4>Make a one time donation</h4>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input name="cmd" type="hidden" value="_s-xclick" />
            <input
              name="hosted_button_id"
              type="hidden"
              value="F7WR5DPP4GMXG"
            />
            <input
              alt="Donate with PayPal button"
              name="submit"
              src="http://mbkinc.org/wp-content/uploads/2017/10/paypal-donate-button-high-quality-png.png"
              type="image"
              width="220"
              //   size="600"
            />
          </form>
        </div>
        <div>
          <div
            style={{
              height: 50,
            }}
          />
          <h4>
            <input name="cmd" type="hidden" value="_s-xclick" />
            Become a monthly supporter
          </h4>
          <h3>
            <input
              name="hosted_button_id"
              type="hidden"
              value="C428GVKQ38X22"
            />
          </h3>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input name="cmd" type="hidden" value="_s-xclick" />
            <input
              name="hosted_button_id"
              type="hidden"
              value="C428GVKQ38X22"
            />
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      name="on0"
                      type="hidden"
                      value="Membership options"
                    />
                    Membership options
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="Dharma Wheel">
                        Dharma Wheel : $30.00 USD - monthly
                      </option>
                      <option value="Endless Knot">
                        Endless Knot : $15.00 USD - monthly
                      </option>
                      <option value="Victory Banner">
                        Victory Banner : $50.00 USD - monthly
                      </option>
                      <option value="Lotus Flower">
                        Lotus Flower : $100.00 USD - monthly
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <input name="currency_code" type="hidden" value="USD" />
            <input
              alt="PayPal - The safer, easier way to pay online!"
              name="submit"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
              type="image"
            />
            <img
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              alt=""
              width="1"
              height="1"
              border="0"
            />
          </form>
        </div>
        <div>
          <div style={{ height: 50 }} />
          <h4>DONATE BY MAIL</h4>
          <b>You can send your tax deductible donation to:</b>
          <p>
            Delek Children's Foundation
            <br />
            5600 Sutter Avenue
            <br />
            Richmond, CA 94804
            <br />
            Ph: (510) 926-3050
            <br />
            Email: office@delekcf.org
          </p>
        </div>
        <div>
          <div
            style={{
              height: 50,
            }}
          />
          <h4>OTHER WAYS TO HELP</h4>
          <a
            href="https://www.gofundme.com/delek-childrens-foundation-2ur3bak?utm_medium=wdgt"
            target="_blank"
          >
            <img src="https://cdn-images-1.medium.com/max/1575/1*8oAXoONZd2i9Pf4oVZGFsw.png" />
          </a>
        </div>
        <div>
          <div
            style={{
              height: 50,
            }}
          />
          <a href="https://smile.amazon.com/ch/81-1703734" target="_blank">
            <img src="http://delekchildrenfoundation.org/wp-content/uploads/2017/02/amazonsmile2.png" />
          </a>
        </div>
      </Article>
    </Layout>
  )
}

export default Page
