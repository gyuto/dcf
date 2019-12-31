import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const imageList = [
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-1.png?alt=media&token=abf8f3d7-5389-4a40-b03f-3d928db39c5b",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-2.png?alt=media&token=6c18e4c4-cbff-443c-b1b0-2532c7749026",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-3.png?alt=media&token=eb90079b-17c5-42d6-9863-df464210ffdc",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-4.png?alt=media&token=26852b24-6895-4314-b733-a178b8260ea5",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-5.png?alt=media&token=ffa8e2ba-1329-493d-8c3b-8ea58b51c7e0",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-6.png?alt=media&token=eaf01546-dcb2-4834-8243-29401f834182",
  },
]
const SingleImage = ({ image, index }) => (
  <>
    <img src={image.pic} />
  </>
)
const Carousel = () => (
  <div
    style={{
      maxHeight: 350,
      maxWidth: 500,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <ReactCarousel
      showArrows
      showIndicators={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      swipeable
      showThumbs={false}
      stopOnHover={false}
    >
      {imageList.map((image, index) => (
        <SingleImage
          image={image}
          index={index}
          key={`${image.text}-${index}`}
        />
      ))}
    </ReactCarousel>
    <div style={{ height: 70 }} />
  </div>
)

const Page = () => {
  return (
    <Layout>
      <SEO title="Procurement of Furniture for STS Miao Staff Quarters" />
      <Article
        content={{
          title: "Procurement of Furniture for STS Miao Staff Quarters",
        }}
      >
        <h3>Project Details</h3>
        <p>
          <b>Project Title:</b> Procurement of Furniture for STS Miao
          <br />
          <b>Staff Quarters Budget:</b> INR 248,560.00 Project
          <br />
          <b>Duration:</b> 1 Month (3rd August, 2017 – 2nd September, 2017)
          <br />
          <b>Implementing Partner: </b>Sambhota Tibetan Schools Society,
          Dharamsala
        </p>
        <Carousel />
        <h3>PROJECT NARRATION:</h3>
        <p>
          Since the school is located in a remote province of Auranachal
          Pradesh, we had to place the order at the nearest town called Tinsukia
          (Assam) which is at the distance of 6 hours by bus. The school has
          placed order for furniture and dealer delivered the items within 3
          weeks. We have bought 38 beds, 46 chairs and 23 tables which are
          distributed to all the staffs as per below table
        </p>
        <table
          style={{
            border: "1px solid lightGrey",
            width: 800,
            maxWidth: "100%",
          }}
        >
          <tbody>
            <tr>
              <td colSpan="6" width="474">
                Distribution List of Beds, Tables and Chairs
              </td>
            </tr>
            <tr>
              <td>S.no</td>
              <td width="150">Name of Staff</td>
              <td width="112">Designation</td>
              <td width="45">Beds</td>
              <td width="57">Tables</td>
              <td width="62">Chairs</td>
            </tr>
            <tr>
              <td width="49">1</td>
              <td width="150">Yangzom</td>
              <td width="112">Headmistress</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">2</td>
              <td width="150">Thupten Plajor</td>
              <td width="112">L.D.C</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">3</td>
              <td width="150">Karma Tseatn</td>
              <td width="112">PRT</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">4</td>
              <td width="150">Dorjee Rinchen</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">5</td>
              <td width="150">Ven Sonam Tenzin</td>
              <td width="112">Cltr.</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">6</td>
              <td width="150">Tenzin Tsomo</td>
              <td width="112">M/D</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">7</td>
              <td width="150">Tashi Yangdol</td>
              <td width="112">T.G.T</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">8</td>
              <td width="150">Tsering Penpa</td>
              <td width="112">T.G.T</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">9</td>
              <td width="150">Tenzin Saldon</td>
              <td width="112">T.G.T</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">10</td>
              <td width="150">Tenzin Tsepak</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">11</td>
              <td width="150">Tenzin Lhamo</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">12</td>
              <td width="150">Tsering Lhamo</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">13</td>
              <td width="150">Tenzin Tsering</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">14</td>
              <td width="150">Yeshi Tenzin</td>
              <td width="112">PRT</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">15</td>
              <td width="150">Tenzin Dhamdul</td>
              <td width="112">Hindi &amp; Art</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">16</td>
              <td width="150">Tseatn Lhamo</td>
              <td width="112">Pre -PRT</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">17</td>
              <td width="150">Pame Sangmo</td>
              <td width="112">Pre -PRT</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">18</td>
              <td width="150">Karam Chonzoem</td>
              <td width="112">Pre -PRT</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">19</td>
              <td width="150">Kundi Lhamo</td>
              <td width="112">Pre -PRT</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">20</td>
              <td width="150">Ricnchen Dakpa</td>
              <td width="112">MTS</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">21</td>
              <td width="150">Pema Chokeyi</td>
              <td width="112">MTS</td>
              <td width="45">1</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">22</td>
              <td width="150">Janchup Dorjee</td>
              <td width="112">Computer Tr.</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49">23</td>
              <td width="150">P.T Teacher Reseve</td>
              <td width="112">P.T</td>
              <td width="45">2</td>
              <td width="57">1</td>
              <td width="62">2</td>
            </tr>
            <tr>
              <td width="49" />
              <td width="150">Total</td>
              <td width="112" />
              <td width="45">38</td>
              <td width="57">23</td>
              <td width="62">46</td>
            </tr>
          </tbody>
        </table>
        <div style={{ height: 50 }} />
        <h3>BENEFICIARIES:</h3>
        <p>
          The total beneficiaries are 23 staff members (11 male &amp; 12 female)
          of STS, Miao.
        </p>
        <h3>FINANCIAL STATEMENT:</h3>
        <p>
          The Department of Education received a total of INR 248,560.00 from
          Delek Children's Foundation, USA to fund the procurement of living
          amenities for staff quarters at STS Miao. As per the CTA regulations,
          we have deducted 4% administrative charges on the fund received and a
          total of INR 238,969.00 has been transferred to STSS, Dharamsala.
        </p>
        <div style={{ height: 50 }} />
        <table width="499">
          <tbody>
            <tr>
              <td width="56">Date of Fund received</td>
              <td width="65">Source of Fund</td>
              <td width="59">Received amount</td>
              <td width="68">Date of completion</td>
              <td width="68">Particulars of items</td>
              <td width="32">Qty</td>
              <td width="90">Rate @</td>
              <td width="63">Amount</td>
            </tr>
            <tr>
              <td width="56">
                3<sup>rd</sup> August 2017
              </td>
              <td width="65">Delek Children’s foundation through STSS</td>
              <td width="59">238,969</td>
              <td width="68">
                2<sup>nd</sup> September 2017
              </td>
              <td width="68">Beds</td>
              <td width="32">38</td>
              <td width="90">3500/- inclusive of GST</td>
              <td width="63">133,000</td>
            </tr>
            <tr>
              <td width="56" />
              <td width="65" />
              <td width="59" />
              <td width="68" />
              <td width="68">tables</td>
              <td width="32">23</td>
              <td width="90">2000/- inclusive of GST</td>
              <td width="63">46,000</td>
            </tr>
            <tr>
              <td width="56" />
              <td width="65" />
              <td width="59" />
              <td width="68" />
              <td width="68">chairs</td>
              <td width="32">46</td>
              <td width="90">1200/-inclusive of GST</td>
              <td width="63">55,200</td>
            </tr>
            <tr>
              <td width="56" />
              <td width="65" />
              <td width="59" />
              <td width="68" />
              <td width="68">Transportation</td>
              <td width="32" />
              <td width="90" />
              <td width="63">4,769</td>
            </tr>
            <tr>
              <td width="56" />
              <td width="65" />
              <td width="59" />
              <td width="68" />
              <td width="68" />
              <td width="32" />
              <td width="90">Grand total</td>
              <td width="63">238,969</td>
            </tr>
            <tr>
              <td width="56" />
              <td width="65" />
              <td width="59" />
              <td width="68" />
              <td width="68" />
              <td width="32" />
              <td width="90">Balance</td>
              <td width="63">0.00</td>
            </tr>
          </tbody>
        </table>
        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
