"use client";
import TimeLine from "./TimeLine";

const timelineData = [
  {
    year: "2021",
    title: "Established in 2021: A Year of Foundation",
    text: `In the year 2021, we laid the cornerstone of our company, embarking on a journey fueled by passion, dedication, and a vision for excellence. As we took our first step, the recruitment industry became our focus, and we swiftly made our mark by successfully placing talented individuals in prestigious multinational companies.`,
  },
  {
    year: "2022",
    title: "Expanding Horizons",
    text: `With the wind of success at our backs, we seized the opportunity to broaden our services in 2022. Adding a new dimension to our portfolio, we ventured into the world of tourism. By curating exceptional travel experiences, we catered to our clients' thirst for adventure, culture, luxury, and wellness.`,
  },
  {
    year: "2023",
    title: "Embracing the Digital Revolution",
    text: `In our pursuit of growth and meeting the ever-changing needs of our clients, 2023 saw us delving into the realm of Digital Marketing Services & Training. Armed with innovative solutions and comprehensive training programs, we empowered businesses to thrive in the digital landscape.`,
  },
  {
    year: "2024",
    title: "Innovation and Integration",
    text: `Building on our diverse expertise, 2024 became a defining year of innovation and integration. We unified our recruitment, tourism, and digital divisions under a cohesive brand ecosystem—offering end-to-end business solutions. Through cutting-edge technology and strategic collaborations, we enhanced operational efficiency and client satisfaction across industries.`,
  },
  {
    year: "2025",
    title: "Global Presence and Future Vision",
    text: `By 2025, our brand had transcended borders. Expanding our operations internationally, we established strategic partnerships in key global markets. With a continued focus on sustainability, digital excellence, and client-centric innovation, we now stand as a global player committed to shaping the future of recruitment, travel, and digital transformation.`,
  },
];


export default function HistorySection() {
  return (
    <TimeLine
      heading="Our History"
      timelines={timelineData}
    />
  );
}
