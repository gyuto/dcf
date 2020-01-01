export default [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About us",
    children: [
      { text: "Mission statement", link: "/mission-statement" },
      { text: "About founder", link: "/about-founder" },
    ],
  },
  {
    text: "Programs",
    children: [
      { text: "Vocational programs", link: "/vocational-programs" },
      { text: "Scholarships", link: "/scholarships" },

      {
        text: "Charity tours",
        children: [
          { text: "Charity tours in 2019", link: "/charity-tour-2019" },
          {
            text: "Buddhist pilgrimage to India & Nepal",
            link: "/buddhist-pilgrimage",
          },
          {
            text: "Bhutan tour",
            link: "/bhutan-tour",
          },
          {
            text: "Southern India visiting ancient buddhist caves",
            link: "/south-india-tour",
          },
        ],
      },

      { text: "Success stories", link: "/success-stories" },
      {
        text: "Student profiles",
        link: "/student-profiles",
      },
    ],
  },
  {
    text: "Support us",
    link: "/support-us",
  },
  {
    text: "Gallery",
    children: [
      {
        text: "Photos",
        link:
          "https://www.facebook.com/pg/Delek-Childrens-Foundation-413781628796613/photos/?ref=page_internal",
      },
      {
        text: "Videos",
        link: "https://www.youtube.com/channel/UC7K3C7iSY1JO0HAy4P-Jn5w/videos",
      },
    ],
  },
]
