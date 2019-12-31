import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/article-preview"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gyuto`,
          `delek`,
          `children's`,
          `foundation`,
          `tibetan`,
          `tebet`,
          `nepal`,
          `Delek Children's Foundation`,
        ]}
      />

      <Preview
        content={[
          {
            title: "Workshop on Secular Ethics",
            link: "/secular-ethics-workshop",
            main:
              "There is no question about the existing critical global issue regarding the deterioration of values and ethics amongst people of all walks of life which leads to disturbances to oneself and also to others. It is deeply felt everywhere that, along with the human brain, the mind should also be trained with all the values needed to make the person good and kind to oneself and to others. Education plays a vital role here.",
            pic: {
              title:
                "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fgeshe-lhakdor.png?alt=media&token=89cff2a4-ff20-4895-a62c-acbb3ff685d0",
            },
          },
          {
            title: "Procurement of Furniture for STS Miao Staff Quarters",
            link: "/procurement-of-furniture-for-sts-miao-staff-quarters",
            main:
              "Since the school is located in a remote province of Auranachal Pradesh, we had to place the order at the nearest town called Tinsukia (Assam) which is at the distance of 6 hours by bus. The school has placed order for furniture and dealer delivered the items within 3 weeks.",
            pic: {
              title:
                "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fprocurement-of-furniture-6.png?alt=media&token=eaf01546-dcb2-4834-8243-29401f834182",
            },
          },
          {
            title: "School Solar Project",
            link: "/school-solar-project",
            main:
              "Make the world a better place for future generations, particularly these underprivileged children living without hope in great poverty. Recently we raised founds for a school solar project which was completed at the end of 2014. The solar project cost $10,000. Many thanks to all the donors who supported for the school solar project. It was a great success and children are enjoying with hot water during their winter season for cooking and washing.",
            pic: {
              title:
                "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-4.jpg?alt=media&token=82066c44-07e2-4ad7-a98c-80d5d5354693",
            },
          },
          //   {
          //     title: "Lobsang Wangmo Now and Then",
          //     link: "/lobsang-wangmo-now-then",
          //     main: "Lobsang Wangmo now and then",
          //     pic: {
          //       title:
          //         "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Flobsang-wangmo-2.jpg?alt=media&token=28ba3e81-fd08-40b5-9118-468f8d41bd0b",
          //     },
          //   },
          {
            title: "Phurbu Dolma Now and Then",
            link: "/phurbu-dolma-now-then",
            main: "Phurbu Dolma Now and Then",
            pic: {
              title:
                "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fphurbu-dolma-2.jpg?alt=media&token=bb040828-ed07-4ba2-8c83-8b25c229ac30",
            },
          },
        ]}
      />
    </Layout>
  )
}

export default IndexPage
