import { Fragment } from "react";
import { CVBody } from "./components/CV-body";
import { Navbar } from "./components/navbar";

export function App() {
  const navbarInfo = {navbarName: "Amir mohammad Fatahi"}
  const about = {
    firstName: "Amir mohammad",
    lastName: "Fatahi",
    address: "Ghalandari Street . Gheytarie , Tehran",
    phoneNumber: "(+98) 939-833-2265",
    email: "amirmf831380@gmail.com",
    gitHub: "https://github.com/Amirmfth",
    linkedin: "https://www.linkedin.com/in/amir-mohammad-fatahi-93a879220/",
    text: "I am a junior React developer with high-standard academic background. an enthusiast youth with avidity to learn latest programming technology.",
  };
  const experience = [
    {
      title: "Senior Web Developer",
      subtitle: "Intelitec Solutions",
      date: "March 2013 - Present",
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    },
    {
      title: "Web Developer",
      subtitle: "Intelitec Solutions",
      date: "December 2011 - March 2013",
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      title: "Junior Web Designer",
      subtitle: "Shout! Media Productions",
      date: "July 2010 - December 2011",
      text: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
    },
    {
      title: "Web Design Intern",
      subtitle: "Shout! Media Productions",
      date: "September 2008 - June 2010",
      text: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    },
  ];
  const education = [
    {
      title: "Technical University of Munich",
      subtitle: "Bachelor of Computer science",
      date: "August 2023 - May 2027",
      text: "Computer Science - Web Development Track | GPA: 4",
    },
    {
      title: "Shahid Madani High School",
      subtitle: "Mathematic-Physics major",
      date: "August 2019 - June 2023",
      text: "diploma: 18",
    },
  ];
  const skills = {
    langAndTools: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-js-square",
      "fab fa-angular",
      "fab fa-react",
      "fab fa-node-js",
      "fab fa-sass",
      "fab fa-less",
      "fab fa-wordpress",
      "fab fa-gulp",
      "fab fa-grunt",
      "fab fa-npm",
    ],
    workflow: [
      "Mobile-First, Responsive Design",
      "Cross Browser Testing & Debugging",
      "Cross Functional Teams",
      "Agile Development & Scrum",
    ],
  };
  const interests = [
    "Apart from being a web developer, surprisingly I'm a huge sportFan. as an outdoor activity I mostly play Football with my friends or play billiard ,though i must say i am a novice",
    "but for indoor activity , I do various stuff like making music(which I love the most) , studying about management and business or learn new languages. I love being in my own house and my own room,and frankly, I see my self as an introverted person",
  ];
  const awards = [
    "Google Analytics Certified Developer",
    "Mobile Web Specialist - Google Certification",
    "Place - University of Colorado Boulder - Emerging Tech Competition 2009",
    "Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
    "Place - University of Colorado Boulder - Emerging Tech Competition 2008",
    "Place - James Buchanan High School - Hackathon 2006",
    "Place - James Buchanan High School - Hackathon 2005",
  ];
  return (
    <Fragment>
      <Navbar content={navbarInfo} />
      <CVBody
        about={about}
        experience={experience}
        education={education}
        skills={skills}
        interests={interests}
        awards={awards}
      />
    </Fragment>
  );
}
