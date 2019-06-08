export default [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About us",
    link: "/mission-statement",
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
    ],
    link: "/vocational-programs",
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
