import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface SocialMediaItem {
  id: number;
  img?: string;
  icon?: any;
  link: string;
  tooltip: string;
  action?: "copy" | "link";
}

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  //   { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Presentation is key, but functionality is crucial",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end z-120",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Willing to collaborate remotely",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Using the latest technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-left",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an ecommerce fashion site",
    description: "What I'm working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 sm:w-40",
    titleClassName:
      "justify-start md:justify-start lg:justify-start absolute top-0 left-0",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "What can we build together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Landbnb",
    des: "List or book vacant land for camping, storage, or other uses. A full-stack app with user authentication, booking, and more.",
    img: "/LBNB.png",
    iconLists: ["/re.svg", "/js.svg", "/express.webp"],
    link: "https://landbnb-n8qv.onrender.com/",
    gurl: "https://github.com/stevenseb/landBNB",
    gtext: "GitHub Repo",
  },
  {
    id: 2,
    title: "Maison Elysee",
    des: "Shop for the latest fashion trends on this full-stack ecommerce site with user authentication, payments, and more.",
    img: "/ME2.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "mongodb.svg",
      "/daisy.webp",
    ],
    link: "https://maison-elysee.vercel.app/",
    gurl: "https://github.com/stevenseb/maison-elysee",
    gtext: "GitHub Repo",
  },
  {
    id: 3,
    title: "TaskWave",
    des: "A Kanban Style Task Manager. A full-stack app built with React.js, Python and Flask.",
    img: "/task-wave.png",
    iconLists: ["/re.svg", "/js.svg", "/express.webp"],
    link: "https://task-wave.onrender.com",
    gurl: "https://github.com/TheRealHezma/Group-project",
    gtext: "GitHub Repo",
  },
  {
    id: 4,
    title: "Menuable",
    des: "A full-stack app for small restaurants to manage their menu and orders.",
    img: "/menuable.png",
    iconLists: ["/re.svg", "/js.svg", "/express.webp"],
    link: "https://menuable-main.onrender.com",
    gurl: "https://github.com/stevenseb/Menuable",
    gtext: "GitHub Repo",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Applied redux state management in the development of a kanban-style collaboration app using React.js, Python and Flask enhancing the dynamic responsiveness and interactivity of the app.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance React Food Delivery App",
    desc: "Designed and developed responsive app for a local restaurant, including user authentication, a rating system and an owner's dashboard to manage orders, inventory, weekly menu, delivery routing and profit/loss reporting.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  //   {
  //     id: 3,
  //     title: "Freelance App Dev Project",
  //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp3.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lead Frontend Developer",
  //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp4.svg",
  //   },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/stevenseb",
    tooltip: "Visit my GitHub",
    action: "link",
  },
  {
    id: 2,
    img: "/kaggle.svg",
    link: "https://www.kaggle.com/stevenseb",
    tooltip: "Check out my Kaggle profile",
    action: "link",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ericstevens2/",
    tooltip: "Connect with me on LinkedIn",
    action: "link",
  },
  {
    id: 4,
    icon: faEnvelope,
    link: "mailto:your.email@example.com",
    tooltip: "Copy my email",
    action: "copy",
  },
];
