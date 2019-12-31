import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const imageList = [
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fgeshe-lhakdor.png?alt=media&token=89cff2a4-ff20-4895-a62c-acbb3ff685d0",
    text: "Geshe Lhakdor talking to the participants",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fgeshe-lobsang-tenzin.jpg?alt=media&token=9101a33b-a532-41b4-a27e-819933396507",
    text: "Geshe Lobsang Tenzin Negi talking to the participants",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fgeshe-yeshi-gyaltsen.jpg?alt=media&token=3ae2a7a2-acd3-402f-bdff-9b7f37be1707",
    text: "Geshe Yeshi Gyaltsen talking to the audience",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fmr-kama-singey.jpg?alt=media&token=8af76f33-57a2-41a1-8e70-e4c1faceb232",
    text:
      "Mr. Kama Singey, DoE offering scarfs to the Director of Sera Jey Secondary School",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fparticipants.jpg?alt=media&token=361db8d3-1650-4985-93dc-816b8eecbd51",
    text: "Participants tentatively listening and taking notes",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprof-samdhong.jpg?alt=media&token=a9a2fc36-9eb3-4804-91c6-7c47e67b68fa",
    text: "Prof. Samdhong Rinpoche talking to the participants",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Ftwo-day-workshop.jpg?alt=media&token=073f9934-9fa1-4537-8bfb-ea96a8303f98",
    text:
      "Two-day workshop on Secular Ethics at Sera Jey Secondary School, Byllakuppe",
  },
]
const SingleImage = ({ image, index }) => (
  <>
    <img src={image.pic} />
    <p className="legend">{image.text}</p>
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
      <SEO title="Workshop on Secular Ethics" />
      <Article
        content={{
          title: "Workshop on Secular Ethics",
        }}
      >
        <h3>Completion Report</h3>
        <p>
          <b>Venue:</b> Sera Jey Secondary School, Bylakuppe
          <br />
          <b>Date:</b> 22 - 23 December 2017
          <br />
          <b>Organized by:</b> Department of Education and Sera Jey Secondary
          School
          <br />
          <b>Funded by: </b>Delek Children's Foundation
        </p>

        <Carousel />
        <h3>Introduction:</h3>
        <p>
          There is no question about the existing critical global issue
          regarding the deterioration of values and ethics amongst people of all
          walks of life which leads to disturbances to oneself and also to
          others. It is deeply felt everywhere that, along with the human brain,
          the mind should also be trained with all the values needed to make the
          person good and kind to oneself and to others. Education plays a vital
          role here. However, the modern education being imparted utterly lacks
          the ethical aspect. Therefore, for the last many years, His Holiness
          the Dalai Lama has been strongly advocating towards the promotion of
          human values. Thus, following His Holiness' far-sighted vision towards
          the creation of peaceful world, many individuals, educational
          institutes, governments, etc. are taking initial steps towards the
          implementation of 'Secular Ethics' in schools, colleges and
          universities in particular, and the whole society at large.
        </p>
        <p>
          Hence the Department of Education (DoE) of the Central Tibetan
          Administration (CTA) has organized a special audience with His
          Holiness the Dalai Lama for approximately 300 teachers from Tibetan
          schools in Northern India in May 2017 in Dharamsala. His Holiness
          guided the Tibetan educators to work on inculcating values in Tibetan
          children. In the afternoon, DoE facilitated brainstorming session
          amongst the participants on the implementation of Secular Ethics in
          Tibetan schools. The DoE also organized a 4-day workshop on Secular
          Ethics at Centre for Higher Tibetan Studies (CHTS) Sarah in December
          2017.
        </p>
        <p>
          Another 2-day workshop was organized at Sera Jey Secondary School in
          Bylakuppe which was funded by Delek Children's Foundation. The DoE has
          also published the SEE (Social, Emotional and Ethical) Learning
          Framework of Emory University, and it was also translated into
          Tibetan. Both the versions of the Framework were distributed to all
          the participants of the workshop on Secular Ethics in Bylakuppe.
        </p>

        <h3>Programme Summary:</h3>
        <h4>The inaugural session:</h4>
        <li>
          The 2-day workshop was exclusively organised for around 250 school
          heads and teachers of Tibetan schools in Central and Southern India.
          But the during inaugural session, nearly 200 additional participants
          from the monastery schools based in Southern India attended to listen
          to introductory and keynote addresses by CTA President and His
          Holiness the Dalai Lama.
        </li>

        <li>
          The introductory speech was made by Dr. Lobsang Sangay, the CTA
          President, who talked about the importance of 'Secular Ethics' as well
          as gave guidance on its implementation in schools.
        </li>
        <li>
          Following that, the keynote address was given by His Holiness the
          Dalai Lama. His Holiness kindly graced the workshop with His strong
          message on the importance of 'Secular Ethics', where He emphasized
          that the Tibetan schools ought to initiate and excel in educating the
          minds and must lead or become role model to the rest of the world.
        </li>
        <h4>The Team of Trainers and Their Topics:</h4>
        <li>
          Prof. Samdhong Rinpoche, former Prime Minister of CTA, talked on
          'Importance and Implementation of Secular Ethics in Tibetan schools'.
        </li>
        <li>
          Geshe Lobsang Tenzin Negi, Ph.D. from Emory University, talked about
          the SEE Learning Framework
        </li>
        <li>
          Geshe Lhakdor, Chairman of the Education Council, DoE and Director of
          the Tibetan Works and Archives, talked on Mindfulness, Awareness, Love
          and Compassionn, and techniques to be aware and vigilant, etc.
        </li>
        <li>
          Geshe Yeshi Gyaltsen, Lecturer of Secular Ethics at Bangalore based
          Dalai Lama Institute for Higher Education, talked on Justice and
          Compassion in relation to ethics.
        </li>
        <li>
          All the sessions were followed by Question and Answer sessions as
          well. The Closing Session:
        </li>
        <li>
          Abbot Khen Rinpoche of Sera Jey Monastery was invited as the Chief
          Guest of the closing session, who gave the concluding remarks of the
          workshop. As a token of gratitude, Mr. Karma Singey, Secretary of DoE,
          offered Khata (scarf) to all the trainers and concerned staff of the
          organising team. The session was finally followed by vote of thanks by
          Mr. Tsering Samdup, Additional Secretary of DoE.
        </li>
        <h4>Workshop Output:</h4>
        <li>
          His Holiness' emphasis on Tibetan schools becoming role models on
          educating heart, would strongly encourage Tibetan educators to work
          harder on this aspect. This has also become very clear to all the
          Tibetans that the teaching of Secular Ethics in Tibetan schools is one
          of the far-sighted visions of His Holiness the Dalai Lama.
        </li>
        <li>
          The SEE Learning Framework of the Emory University was introduced in
          the workshop, which would enable the participants to go through it
          again, and would surely make them to think about it. These educators
          are expected to adapt the framework according to their own needs.
        </li>
        <li>
          One of the most important benefits of this workshop was that, many of
          the Tibetan teachers' doubts about teaching Secular Ethics in Tibetan
          schools were cleared. This would certainly enhance the implementation
          of the Secular Ethics in Tibetan schools.
        </li>
        <li>
          The workshop has given several methods in teaching Secular Ethics. In
          order to have sound teaching of Secular Ethics in the schools, the
          gained ideas would help the Tibetan educators to think and create more
          such methods.
        </li>
        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
