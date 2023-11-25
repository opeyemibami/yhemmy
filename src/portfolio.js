/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Opeyemi Bamigbade",
  title: "Hi all, I'm Yhemmy",
  subTitle: emoji(
    "A passionate Data Scientist, Machine Learning & AI Engineer, Software and Systems Engineer having experience in MLOps & Backend Development for Artificial Intelligence driven products 🚀. A PhD student with research focus on Computer Vision Techniques for Digital Image & Video Forensic Geolocation👨🏻‍💻"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ebm5xsTAI1lcDNraxCzSxAlt63vl1icf/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/opeyemibami",
  linkedin: "https://www.linkedin.com/in/opeyemi-bamigbade-49007a122/",
  medium: "https://opeyemibami.medium.com/",
  twitter: "https://twitter.com/opeyemibami",
  gitlab: "https://gitlab.com/bamigbadeopeyemi",
  instagram: "https://www.instagram.com/yhemmzzy/",
  // gmail:"bamigbadeopeyemi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULLSTACK DATA SCIENTIST || ML-ENGINEER & SOFTWARE ENGINEER WHO LOVES BUILDING ARTIFICIAL INTELLIGENCE DRIVEN PRODUCTS & EXPLORING EVERY TECH STACK AS APPLIED TO MLOPs & BACKEND DEVELOPMENT 🚀",
  skills: [
    emoji(
      "⚡ Development of highly Optima Machine Learning and Deep Learning models"
    ),
    emoji(
      "⚡ Development & Deployment of artificial intelligence products that scale"
    ),
    emoji(
      "⚡ Research and Development of AI-Driven Products as applied to a domain"
    ),
    emoji("⚡ Design and Development of Machine Learning Systems that Scale"),
    emoji("⚡ Applied Computer Vision and NLP techniques for automation"),
    emoji(
      "⚡ Cloud Architecting and Computing for ML & AI product deployment on AWS & GCP"
    ),
    emoji("⚡ Backend development with Python and JavaScript")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Graph DB",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "South East Technology University",
      logo: require("./assets/images/SETULogo.webp"),
      subHeader: "PHD Student",
      duration: "November 2022 - September 2026",
      desc: "Computer Vision Techniques for Digital Image & Video Forensic Geolocation",
      descBullets: []
    },
    {
      schoolName: "University of Lagos",
      logo: require("./assets/images/unilagLogo.png"),
      subHeader:
        "Bachelor of Science in Systems Engineering (First-Class honours) ",
      duration: "June 2016 - September 2021",
      desc: "My final project: Research and Development of SAAS for Gleason score prediction to measure the severity of prostate cancer using Artificial Intelligence.",
      descBullets: [
        "President for University of Lagos Artificial intelligence club.",
        "Ambassador for Zindi Africa (Data Scientist competition platform for Africa)"
      ]
    },
    {
      schoolName: "Yaba College of Technology",
      logo: require("./assets/images/yabatechLogo.png"),
      subHeader: "National Deploma in Computer Engineering (Distinction)",
      duration: "August 2014 - September 2016",
      desc: "Ranked top 1% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Vice President for National Association of Computer Engineering "
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "95%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "90%"
    },
    {
      Stack: "Natural Language processing",
      progressPercentage: "87%"
    },
    {
      Stack: "ML & AI Sytems Design",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend Developement",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Machine Learning Engineer",
      company: "Curacel",
      companylogo: require("./assets/images/curacelLogo.jpeg"),
      date: "Dec 2021 – April 2023",
      desc: "Curacel is an insurtech infrastructure company that helps insurers & partners in Africa and other emerging markets increase the reach and functionality of insurance through cloud-based tools and APIs.",
      descBullets: [
        "Design and implementation of intelligent software and data products aimed at automating insurance claim processing with a special focus on automobile claims",
        "Design and development DProcessor; An data pipeline for client claim processing based on OCR and other data processing techniques. increasing throughput buy 91% ",
        "Research, development and deployment of information retrieval system using vector search approach",
        "Lead a team of 5 to develop state of the art solutions for auto-claim processing and medical Ops data processing ",
        "Lead a team of 5 to build object detection models and client uploads validation models using deep learning",
        "Developed APIs with technical documentation for both internal and external integration.",
        "Designed and developed AI Project based Micro-services with standard MLOps practices.",
        "Deployment of models using aws sagemaker and aws lightsail for containers",
        "Data processing and annotating using AWS groundtruth"
      ]
    },
    {
      role: "Backend Developer/Data Engineer",
      company: "Philanthrolab",
      companylogo: require("./assets/images/philanthrolabLogo.png"),
      date: "Dec 2021 – April 2023",
      desc: "Philanthrolab is a company that focuses on providing tools to seamlessly connect social service providers and non-profit organizations and users in need of such services. ",
      descBullets: [
        "Designed and Optimized personalization algorithms for applications using ML, and NLP to provide tailored information, referrals, case management and data on civic, social, and human services.",
        "Designed and developed a natural language processing model to automatically score users' intent against organization criteria for service eligibility",
        "Design and implement tracking system to capture user behaviours on web for organization and services analytics",
        "Optimized database management with data-populating pipelines and scripts.",
        "Applied data munging and wrangling for AI modelling and product building",
        "Developed powerful Content Management Systems to serve as the interface for clients",
        "Resolved system test and validation problems to provide normal program functioning",
        "Developed backend application for data collection and storage management with the flexibility of form data fields and sections",
        "Backend development with NodeJs, javascript, REST, Graphql and web Socket  communication protocols"
      ]
    },
    {
      role: "Machine learning and Software Engineer",
      company: "Clinify",
      companylogo: require("./assets/images/clinifyLogo.png"),
      date: "June 2020 – December 2021",
      desc: "Clinify offer a secured AI-powered instant assessment chatbot, telemedicine and health records on a mobile and web application platform for managing health information that gives access to a unified and centralized repository, performs assessment and connect users to nearest healthcare provider in Africa",
      descBullets: [
        "Researching and Implementation Incorporating AI and Data Science to improve software products in health.",
        "Design and Deployment of Machine Learning Systems architectures and models for several use cases in healthcare",
        "Assist in enhancing automation and best practices for model development and maintenance",
        "Design technical testing strategies and heuristics for heavily integrated applications",
        "Backend development with NestJs, JavaScript, REST, Graphql and web Socket  communication protocols"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Data Science Nigeria",
      companylogo: require("./assets/images/DSNLogo.png"),
      date: "June 2019 – November 2021",
      desc: "Data Science Nigeria is a non-profit. Its vision is to develop Nigeria’s AI ecosystem and position the country as a world-class AI skill, research and outsourcing destination. As a Data Scientist || ML-Engineer at DSN, some of my work revolve around the following",
      descBullets: [
        "Design and Deployment of Natural Language Processing and Machine Translation based projects of which some were on Human Resource CV Ranker and Conversational Chat bot (Human-Machine Interface)",
        "Development and deployment of an Agricultural Artificial intelligence (Agro-ai) weather monitor machine learning model on low battery/edge devices such as Raspberry pie.",
        "Worked on a deep surveillance project that uses deep learning to classify human facial emotion.",
        "Designed an artificial intelligence-based architectural solution for a transportation company (MaxNg) just like Uber fast delivery solution ",
        "Data analysis for social goods using knowledge of Natural Language processing modelling such as Topic Modelling and Sentiment Analysis on a web-scrapped datasets containing rape to highlight key solutions. ",
        "Loan-able amount and Loan  default prediction with API for integration for client "
      ]
    }
  ]
};
// consultation section
const consultations = {
  title: "Consultations",
  subtitle:
    "Providing professional consultation via contracts, projects and collaborations",
  projects: [
    {
      image: require("./assets/images/tegus.png"),
      projectName: "Expert consultation",
      projectDesc:
        "Vector search algorithmns and databases such as Qdrant,Weaviate, Redis, Milvus and Elastic  ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tegus.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/datakirt.jpeg"),
      projectName: "Data Science Tutor",
      projectDesc:
        "Gave series of lectures on Data Science and Machine learning to practitioners and enthusiasts",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.thedatakirk.org.uk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mlopsCommunity.png"),
      projectName: "Technical Writer",
      projectDesc:
        "Wrote detailed series on Test-Driven Development in MLOps with code snippests, and clear & concise documentation for technical audiences",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mlops.community/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some PhD projects you have worked on
const phdWorks = {
  title: "PhD Portfolio",
  subtitle:
    "PhD related works, Publications, Achievement, Teaching and Collaborative Activities",
  projects: [
    {
      image: require("./assets/images/PhDPortfolio.jpeg"),
      projectName: "PhD Research Interest",
      projectDesc:
        "Computer Vision Techniques for Digital Image & Video Forensic Geolocation",
      footerLink: [
        {
          // name: "Visit Website",
          // url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/irisscon.png"),
      projectName: "Conference",
      projectDesc:
        "IRISSCON: Annual Irish reporting and information security service conference themed on cyber crime; overview of the current cyber threats facing businesses in Ireland and what they can do to help deal with those threats.",
      footerLink: [
        {
          name: "Attendee",
          url: "https://iriss.ie/irisscon/#speakers"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects Gallery",
  subtitle:
    "Project-based Applications of Ai through research & developement  ",
  projects: [
    {
      image: require("./assets/images/prostateCancer.webp"),
      projectName: "AI-Driven Decision Support System in Healthcare",
      projectDesc:
        "A special focus on prostate cancer severity measures with Gleason scores using Deep learning",
      footerLink: [
        {
          name: "check full details",
          url: "https://heartbeat.comet.ml/building-an-ai-decision-support-system-in-healthcare-part-1-6b9515d23465"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/decision_support_system"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/topicModelling.png"),
      projectName: "Topic Modelling Open Source Tool",
      projectDesc:
        "This is an open source project on Topic Modelling to ease and fast-track the iterative processes involve at building and evaluating a topic model",
      footerLink: [
        {
          name: "check full details",
          url: "https://pub.towardsai.net/topic-modeling-open-source-tool-fbdcc06f43f6"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/Topic-Modelling-Open-Source-Tool"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/deployment.webp"),
      projectName: "Deployment of Machine Learning Models Demystified",
      projectDesc:
        "A project that demystified the building and deployment of data pipeline from scratch for a predictive model",
      footerLink: [
        {
          name: "check full details",
          url: "https://towardsdatascience.com/deployment-of-machine-learning-model-demystified-part-1-1181d91815d2"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/machine_learning-Deployment-of-Mortage-Approval-Status-Model"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tennis.jpg"),
      projectName: "BoTennis",
      projectDesc:
        "A Tennis Chatbot built with Convolutional Neural Networks, Embedding layer & fully connected layer.",
      footerLink: [
        {
          name: "check full details",
          url: "https://heartbeat.comet.ml/building-a-conversational-chatbot-with-nltk-and-tensorflow-part-1-f452ce1756e5"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/NLP-Tennis-Bot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tdd.webp"),
      projectName: "TDD in MLOps",
      projectDesc:
        "An approach to Test-Driven Development for ML-Powered Apps. it covers project structure, testing essentials using pytest with Git automation and other latest tools in MLOps. ",
      footerLink: [
        {
          name: "check full details",
          url: "https://medium.com/mlops-community/test-driven-development-in-mlops-part-1-8894575f4dec"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/TDD-in-MLOps"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/containers.jpeg"),
      projectName: "ML in Containers",
      projectDesc:
        "Building Machine Learning powered products, along with best practices for using Containers.",
      footerLink: [
        {
          name: "check full details",
          url: "https://opeyemibami.medium.com/data-science-machine-learning-in-containers-4e1f6084c32b"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/ML-in-containers"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gcp.webp"),
      projectName: "Deploying Machine Learning Models on Google Cloud Platform",
      projectDesc:
        "This is a project on deployment of machine learning model on Google app engine using Titanic dataset as case study.",
      footerLink: [
        {
          name: "check full details",
          url: "https://heartbeat.comet.ml/deploying-machine-learning-models-on-google-cloud-platform-gcp-7b1ff8140144"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/deployment-of-titanic-on-google-cloud"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wineapp.webp"),
      projectName: "Deploy a Machine Learning Model as a Web Application",
      projectDesc:
        "This is a project on deployment of machine learning model as web application using streamlit.",
      footerLink: [
        {
          name: "check full details",
          url: "https://heartbeat.comet.ml/deploy-a-machine-learning-model-as-a-web-application-part-1-a1c1ff624f7a"
        },
        {
          name: "github repository",
          url: "https://github.com/opeyemibami/wine-quality-prediction-web-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/openSource.png"),
      projectName: "Contribution: Danfojs and Tensorflowjs",
      projectDesc:
        "My contribution to an open source javascript package (danfojs) along with useful illustration on usage with tensorflowjs",
      footerLink: [
        {
          name: "check full details",
          url: "https://heartbeat.comet.ml/end-to-end-machine-learning-in-javascript-using-danfo-js-and-tensorflow-js-part-1-223223c83935"
        },
        {
          name: "github repository",
          url: "https://github.com/javascriptdata/danfojs"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/openSource.png"),
      projectName: "Contribution: Datasist",
      projectDesc:
        "My contribution to an open source python package (datasist)",
      footerLink: [
        {
          name: "check full details",
          url: "https://github.com/opeyemibami/datasist/commit/20dc1307f6fde3266c36a0519261f62a6118d024"
        },
        {
          name: "github repository",
          url: "https://github.com/risenW/datasist"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Professional Tensorflow Developer",
      subtitle:
        "This four-course online specialization teaches course participants how to build and train neural networks using tensorflow, improve network performance using convolutions, teach machines to understand,analyze and respond to human speech with natural language processing systems.",
      image: require("./assets/images/tf_dev.5c703fd4.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/GP42HAPW96Y3"
        }
      ]
    },
    {
      title: "Professional Data and Deployment with Tensorflow",
      subtitle:
        "This four-course online specialization teaches course participants how to get machine learning models into the hands of real people on all kinds of devices. The skills attained were data pipelines with TensorFlow data services, APIs to control data splitting, process all types of unstructured data and retrain deployed models with user data while maintaining data privacy, TensorFlow Serving, TensorFlow, Hub, TensorBoard, TensorFlow.js, and TensorFlow Lite",
      image: require("./assets/images/tf_data_n_deployment.f57adf41.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/JHJV34Z9QRGS"
        }
      ]
    },

    {
      title: "Microsoft Professional Data Science Program",
      subtitle:
        "A professional, 12 course, hands-on approach to data science and machine learning in Python. hands-on experience with broad reach, cutting-edge technologies in areas including cloud services, mobile development, and data sciences.",

      image: require("./assets/images/microsoft.3fabf833.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/11Ou70XdyY1y7FSZtL6k_ekAW03BUHvde/view"
        }
      ]
    },
    {
      title: "AWS Machine Learning fundamentals",
      subtitle:
        "This six-course online Specialization teaches course participants how use AWS cloud services for machine learning, deep learning and software enginering in general with the use of Sagemaker and AWS DeepComposer",

      image: require("./assets/images/awsLogo.d18f226d.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/026711fb-2c1d-4ff8-811e-a2a2c5629a34.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&bsft_clkid=bdf1097e-1775-4c9c-8e22-37a0e8d1e0"
        }
      ]
    },
    {
      title: "Deep Learning, Computer Vision, YOLO, SSD and GANs",
      subtitle:
        "A professional hands-on approach to deep learning and computer vision",
      image: require("./assets/images/udemyLogo.a1e62fcc.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-TE16YJXJ/"
        }
      ]
    },
    {
      title: "Poster presentation 3rd place Winner 2021",
      subtitle:
        "The Faculty of Basic Medical Sciences, College of Medicine University of Lagos (CMUL) Annual Scientific Conference with the theme, “Prioritizing High Impact Basic and Translational Medical Research for Pandemic Preparedness.”",
      image: require("./assets/images/poster.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Poster",
          url: "https://drive.google.com/file/d/1hE9ArXjd8i4_CeIzcaeEauciYvqOLix9/view?usp=share_link"
        }
      ]
    },
    {
      title: "Zindi Africa Ambassador for Nigeria (2020-2021)",
      subtitle:
        "Zindi is the first data science competition platform in Africa. Zindi hosts an entire data science ecosystem of scientists, engineers, academics, companies, NGOs, governments and institutions focused on solving Africa’s most pressing problems. After lots of hands-on competitions and being among the top 1% Data Scientists on the platform, I was awarded ambassadorship (2020-2021)",

      image: require("./assets/images/zindi_ambassadorLogo.db1dcb69.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Competitions won & Achievements",
          url: "https://zindi.africa/users/Yhemmy/competitions/certificate"
        }
      ]
    },
    {
      title:
        "Winner in Nigeria at ZindiAfrica Advance Deep learning UmojaHack 2020",
      subtitle:
        "I Led a team of 3 (Team_DeepDivers_UNILAG) and emerge first among Nigeria Universities and 3rd in Africa as a whole in the Africa's biggest Inter-University Machine Learning Hackathon",

      image: require("./assets/images/zindiwinner.10d800c9.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Achievement",
          url: "https://unilag.edu.ng/?p=6256"
        }
      ]
    },
    {
      title: "Ai School of the year award 2018 & 2019",
      subtitle:
        "After rigorous stages of competitons, I was opportune to be among participants that represented University of Lagos in the DSN Ai bootcamp 2018 edition where we won Ai-school of the year award. This award became a brace for the school in the year 2019 under my leadership as Ai President. Data Science Nigeria is a non-profit with the vision to develop Nigeria’s AI ecosystem by raising 1 million Ai talents in 10 years.",

      image: require("./assets/images/aischaward.145c2404.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Achievement",
          url: "https://unilag.edu.ng/?p=6929"
        }
      ]
    },
    {
      title:
        "Ai Club Campus President, University of Lagos, Nigeria. (2019-2020)",
      subtitle:
        "I Led and managed artificial intelligence activities which include training and research for DSN Ai+ club, University of Lagos. The Data Science Nigeria AI+ Community is a collaborative and learning platform for students and professionals aimed at raising world-class Nigerian Artificial Intelligence talents with strongresearch focus and use case implementation skills.",

      image: require("./assets/images/campus_leadLogo.92a9dde9.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Achievement",
          url: "https://twitter.com/aiplusunilag"
        }
      ]
    },
    {
      title: "SQL for Data Science",
      subtitle:
        "A professional hands-on SQL course for Data Science by University of California Davis",
      image: require("./assets/images/SQL.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/DHTVQ3QUCGU8"
        }
      ]
    },
    {
      title: "Deployment of Machine Learning Models",
      subtitle:
        "A professional hands-on design, development and deployment of robust & reliable Machine Learning Pipeline in Production",
      image: require("./assets/images/deployment.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-PERT22B4/"
        }
      ]
    },
    {
      title: "Complete Data Science and Machine Learning Bootcamp",
      subtitle:
        "A professional hands-on Bootcamp with Python, Tensorflow, Deep Learning, Regression, Classification, Neural Networks, Artificial Intelligence & more!",
      image: require("./assets/images/dataScience.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-SXBL75HI/"
        }
      ]
    },
    {
      title: "Recommender Systems and Deep Learning",
      subtitle:
        "The most in-depth course on recommendation systems with deep learning, machine learning, data science, and AI techniques",
      image: require("./assets/images/recomender.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-CJHMJ9IW/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "DSN Virtual Bootcamp",
      subtitle:
        "Data Science Nigeria session on Umoja Hackathon Winning solution discussion ",
      slides_url: "https://www.youtube.com/watch?v=_0yRen_m7v0&t=12s",
      event_url: "https://twitter.com/dsn_ai_network/status/1249666712158552064"
    },
    {
      title: "DSN Ai+ Unilag Virtual Bootcamp",
      subtitle: "Practical Machine Learning (Feature Engineering)",
      slides_url:
        "https://www.youtube.com/watch?v=gecwM1DXvjY&list=PLpLg2AVWLQyMZcIvnXoxw9WOF2ilnbt5k&index=6&t=0s",
      event_url: "https://twitter.com/aiplusunilag/status/1261596869354012672"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Consult me or Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "bamigbadeopeyemi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "opeyemibami", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  consultations,
  openSource,
  bigProjects,
  phdWorks,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
