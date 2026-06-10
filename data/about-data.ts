import { sharedExperiences, sharedSkills } from "./shared-data";

// About Page Data
export const aboutPageData = {
  profile: {
    name: "Krishna Thapa",
    image:
      "https://drive.google.com/file/d/1Qlqwwdvf89PVJNsYR7e-awugO9ge1rEU/view?usp=drive_link", // Keep existing placeholder or ask for one
    bio: [
      "I am a dynamic and accomplished Software Engineer with a strong foundation in Computer Science and a passion for building solutions that matter. My core expertise spans full-stack development working with PHP, Java, SQL, React, and AWS  with a growing focus on data analytics and informatics",
      "Currently, I work as a Freelance Developer and Software Developer at Thinko Pvt. Ltd., where I contribute to building high-performance applications and optimizing system efficiency across the stack. Whether it's architecting backend services or crafting responsive frontend experiences, I bring both technical depth and product thinking to every project.",
      "My journey has given me hands-on experience across web and software development, from database design to cloud infrastructure on AWS. I'm committed to continuous learning, scalable engineering, and using data-driven approaches to solve complex, real-world problems. I believe in bridging the gap between clean code and meaningful impact.",
    ],
    email: "Thapakriss74@gmail.com",
    instagram: "@Krishnathapa10", // Placeholder based on name
    linkedin: {
      text: "linkedin.com/in/krishna-thapa",
      href: "https://www.linkedin.com/in/krishna-thapa-2419521b7/",
    },
  },
  skills: sharedSkills,
  experiences: sharedExperiences,
  education: [
    {
      from: "2018",
      to: "2021",
      school: "Herald College (University of Wolverhampton)",
      degree: "Bsc (Hons) Computer Science",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
      details:
        "Kathmandu, Nepal. Focused on Software Engineering and Data Analytics.",
    },
    {
      from: "2016",
      to: "2018",
      school: "Capital College and Research Center (CCRC)",
      degree: "Higher Secondary Education (+2)",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2700&auto=format&fit=crop",
      details: "Completed Higher Secondary Education.",
    },
    {
      from: "2006",
      to: "2016",
      school: "Pawan Prakriti Higher Secondary School",
      degree: "Secondary Education (SLC)",
      image:
        "https://images.unsplash.com/photo-1509062522246-37559cc79276?q=80&w=2700&auto=format&fit=crop",
      details: "Completed School Leaving Certificate (SLC) with excellence.",
    },
  ],
  achievements: [
    {
      year: "2025",
      title: "Full-Stack Architecture",
      organization: "Personal Project",
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2670&auto=format&fit=crop",
      details:
        "Successfully architected 'Luxstore', a monolithic-style e-commerce ecosystem using Hono, Next.js, and Docker.",
    },
  ],
  recognitions: [
    {
      year: "2024",
      award: "YOLO Badge",
      issuedBy: "GitHub",
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2670&auto=format&fit=crop",
      details:
        "Merged a pull request without code review. Because sometimes you just have to trust your gut.",
    },
    {
      year: "2023",
      award: "Pull Shark",
      issuedBy: "GitHub",
      image:
        "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2600&auto=format&fit=crop",
      details:
        "Opened pull requests that were merged. A true predator of the codebase.",
    },
  ],
};
