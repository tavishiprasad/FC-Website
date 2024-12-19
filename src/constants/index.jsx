import bitnishan from "../assets/events/bitnishan.jpg";
import finstreet from "../assets/events/finstreet.jpeg";
import stalkthestock from "../assets/events/stalkthestock.jpeg";
import behindthestump from "../assets/events/behindthestumps.jpeg";
import houseoflegacy from "../assets/events/houseoflegacy.jpeg";
import enigma from "../assets/events/enigma.jpeg";
import tycoon from "../assets/events/tycoon.jpeg";
import marketkshtera from "../assets/events/maket_kshetra.jpeg";
import bit from "../assets/events/adquest.jpg";
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import avatar6 from '../assets/avatar-6.png';
import avatar7 from '../assets/avatar-7.png';
import avatar8 from '../assets/avatar-8.png';
import avatar9 from '../assets/avatar-9.png';

export const TESTIMONIALS = {
  items: [
    {
      text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
      imageSrc: avatar1,
      name: 'Jamie Rivera',
      username: '@jamietechguru00',
    },
    {
      text: "Our team's productivity has skyrocketed since we started using this tool.",
      imageSrc: avatar2,
      name: 'Josh Smith',
      username: '@jjsmith',
    },
    {
      text: 'This app has completely transformed how I manage my projects and deadlines.',
      imageSrc: avatar3,
      name: 'Morgan Lee',
      username: '@morganleewhiz',
    },
    {
      text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
      imageSrc: avatar4,
      name: 'Casey Jordan',
      username: '@caseyj',
    },
    {
      text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
      imageSrc: avatar5,
      name: 'Taylor Kim',
      username: '@taylorkimm',
    },
    {
      text: 'The customizability and integration capabilities of this app are top-notch.',
      imageSrc: avatar6,
      name: 'Riley Smith',
      username: '@rileysmith1',
    },
    {
      text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
      imageSrc: avatar7,
      name: 'Jordan Patels',
      username: '@jpatelsdesign',
    },
    {
      text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
      imageSrc: avatar8,
      name: 'Sam Dawson',
      username: '@dawsontechtips',
    },
    {
      text: 'Its user-friendly interface and robust features support our diverse needs.',
      imageSrc: avatar9,
      name: 'Casey Harper',
      username: '@casey09',
    },
  ]
};

export const LINKS = [
  { id: "/", name: "Home" },
  { id: "/#about", name: "About" },
  { id: "/#objectives", name: "Objectives" },
  { id: "/#events", name: "Events" }, 
  { id: "/#testimonials", name: "Testimonials" },
  { id: "/team", name: "Team" },
  { id: "/#contact", name: "Contact" },
];

export const ABOUT_US = {
  title: "About Us",
  sections: [
    {
      imgSrc: bit,
      text: "The Finance Club started as a small student design firm in downtown Michigan, aiming to help fellow students to make do with the raw talent that they acquired. It soon became apparent that we needed to expand our services to accommodate our growing client base, and so here we've been ever since.",
    },
    {
      text: "Currently, we offer brand audits, creative strategy, and architecture services to help our customers find their human nature in simplicity and comfort as possible. We are just collectors of good people and good ideas, and we're excited to share them with anyone.",
    },
  ],
};

export const EVENTS = [
  {
    id: 1,
    title: "BIT Nishan",
    description: "The Institution's Innovation Council, in collaboration with the Finance Club and EDC BIT Mesra, presents an innovation contest to reward the top ten teams from BIT-NISHAN's business plan competition.",
    imgSrc: bitnishan,
  },
  {
    id: 2,
    title: "Stalk The Stock",
    description: "A celebration of innovation and creativity in tech.",
    imgSrc: stalkthestock,
  },
  {
    id: 3,
    title: "Behind The Stump",
    description: "A celebration of innovation and creativity in tech.",
    imgSrc: behindthestump,
  },
  {
    id: 4,
    title: "Finstreet",
    description: "Are you the guy who thinks that your analytical thinking can create a change in the business empire? Hedgeit brings you the perfect chance to invest in and enhance your knowledge in the world of business. .",
    imgSrc: finstreet,
  },
  {
    id: 5,
    title: "House of Legacy",
    description: "Hola Finance-maniacs! Finance Club BIT Mesra, in association with the Society for Data Science adds yet another exciting event to Pantheon’22, the Sirf Excel 2.0. This a nerve-wracking event that will test your expertise over the most powerful tool in the world of Account Management and Statistical-numerical analysis, MS Excel.",
    imgSrc: houseoflegacy,
  },
  {
    id: 6,
    title: "Enigma",
    description: "An intelligent investor is a realist who sells to the optimist and buys from pessimist - Benjamin Graham Are you among those who have the talent to invest your money in a way that earns you profits? Are you the one who understands the hacks of the investment world? If yes, then we at BIT Mesra have come up with an event ENIGMA as a part of our annual tech fest Pantheon'24.",
    imgSrc: enigma,
  },
  {
    id: 7,
    title: "Market Kshetra",
    description: "Hola Bitians, for some of us knowing finance only through webinars and workshops can be quite boring. To counter this, this time Finance Club BIT Mesra is going to organize 'Ad Quest' which is our new upcoming event which will be held from 1st June to 6th June in which not only your knowledge will be tested about finance but there will be a fun way of learning too.",
    imgSrc: marketkshtera,
  },
  {
    id: 8,
    title: "Tycoon",
    description: "“Everyone can tell you the risk. An entrepreneur can see the reward.” Keeping in mind the plethora of creativity blooming in the youth, Finance Club BIT MESRA, in collaboration with Institute Innovation Council and EDC BIT MESRA brings you Business Plan Competition-2022. The participants are required to register by 17th August 2022. The competition requires the participants to showcase their ideas in the form of a presentation in Hybrid mode.",
    imgSrc: tycoon,
  },
];

export const CONTACT_DATA = {
  address: "Finance Club, BIT Mesra, Ranchi",
  callUsIcon: "&#9743;", // or any icon you prefer
  formFields: [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Subject" },
    { type: "textarea", placeholder: "Message", rows: 4 },
  ],
  socialLinks: [
    { icon: "&#9993;", link: "#" },
    { icon: "&#xf09b;", link: "#" },
    { icon: "&#xf0e1;", link: "#" },
    { icon: "&#xf16d;", link: "#" },
  ],
};
