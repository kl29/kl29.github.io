
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kevin Lin",
  title: "Kevin Lin",
  subTitle: emoji("Princeton Computer Science B.S.E. (2022) Software Engineer 🚀 experienced in Python (Django, NumPy), Java, JavaScript ES6 (React, Redux-Logic,ImmutableJS), C, R, Go, OCaml"),
  resumeLink: "https://docs.google.com/document/d/15mzCiRitKmZJeEiUBV4XfXPe7A2ZN57hgxSKhs1QQlU/edit?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/kl29",
  linkedin: "https://www.linkedin.com/in/kevin-lin-7386ab177/",
  gmail: "kl29@princeton.edu"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Data analytics with Elasticsearch (ELK stack)"),
    emoji("⚡ API stress-testing with Apache JMeter")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      // skillName: "sass",
      // fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      // skillName: "nodejs",
      // fontAwesomeClassname: "fab fa-node"
    },
    {
      // skillName: "swift",
      // fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "95%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern, Full Stack",  
      company: "Fusion Systems",
      companylogo: require("./assets/images/fs.png"),
      date: "June 2020 – August 2020",
      desc: "permission checking/auth for Dimare webapp, (React/ImmutableJS, Django rest_framework/OAuth2, Postgres) Dockerized ElasticStack for real-time server-log analytics (Docker, ElasticSearch, Logstash-TCP, Kibana), BigInt bitwise permission-value checking, preventing unauthorized calls to server, Built custom API for modularized permission retrieval, Wrote API-doc/stress tests for KPI webapp (using JMeter)",
      descBullets: [
        "Dimare.io",
        "ElasticSearch, JMeter, Docker",
        "Tokyo, Japan (remote)"
      ]
    },
    {
      role: "Back-End Developer, Program Manager",   
      company: "Tigerbook",
      companylogo: require("./assets/images/tt.png"),
      date: "September 2020 – Present",
      desc: "Princeton CAS-Authenticated webapp for student info. Developed web-scrapers/integrated new features.",
      descBullets: [
        "Dimare.io",
        "ElasticSearch, JMeter, Docker",
        "Princeton, NJ"
      ]
    },
    {
      role: "Product Intern",  
      company: "Saffron Ventures",
      companylogo: require("./assets/images/sv.png"),
      date: "Jan 2019 – Jan 2019",
      desc: "Analyzed product performance, advised improvements to experiential-education customer experience. Researched product market for incubated companies Atlantis, Beacon, Lex.",
      descBullets: [
        "Market Research",
        "Product Development",
        "Washington, D.C."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kl29", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "Companies and Products that I contributed to:",
  projects: [
    {
      image: require("./assets/images/fusion.png"),
      link: "https://www.fusionsystems.group/"
    },
    {
      image: require("./assets/images/dimare.png"),
      link: "https://www.dimare.io/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Eagle Scout",
      subtitle: "Lead Boy Scout Troop 404 as Senior Patrol Leader",
      image: require("./assets/images/bsa.gif"),
      footerLink: [
        { name: "Eagle Scout", url: "https://www.scouting.org/resources/guide-to-advancement/eagle-scout-rank/"},
      ]
    },
    {
      title: "Toastmasters International Competent Communicator Award",
      subtitle: "Lead 40-member speech club, developed leadership and public speaking skills",
      image: require("./assets/images/tm.jpg"),
      footerLink: [{ name: "CC Award", url: "https://www.toastmasters.org/" }]
    },

    {
      title: "Carbon Nanotube Researcher",
      subtitle: "Researched carbon nanotubes, achieved 12% solar-cell efficiency with mixed perovskite structure",
      image: require("./assets/images/cnt.jpg"),
      footerLink: [
        { name: "CNT wiki", url: "https://en.wikipedia.org/wiki/Carbon_nanotube" },
        { name: "Nanotech Institute", url: "https://centers.utdallas.edu/nanotech/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Seeking Software Engineering Internship (Summer 2021)",
  // number: "+92-3243454077",
  email_address: "kl29@princeton.edu"
};

//Twitter Section

const twitterDetails = {

  // userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
