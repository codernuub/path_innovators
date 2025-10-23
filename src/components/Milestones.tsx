"use client";
import TimeLine from "./TimeLine";

const timelineData = [
  {
    year: "2021",
    icon:<span className="font-bold text-[1.5rem]">M1</span>,
    text: `A year of remarkable achievements. We made significant strides in the recruitment
industry, successfully placing candidates in prestigious multinational companies.
It was a testament to our dedication, expertise, and commitment to matching
the right talent with the right opportunities.
`,
  },
  {
    year: "2022",
    icon:<span className="font-bold text-[1.5rem]">M2</span>,
    text: `A feather in our cap. In addition to our recruitment success, we expanded our
services to include tourism, adding another dimension to our portfolio.
By curating exceptional travel experiences and delivering impeccable service,
we offered our clients unforgettable journeys that combined adventure, culture,
luxury, and wellness.`,
  },
  {
    year: "2023",
    icon:<span className="font-bold text-[1.5rem]">M2</span>,
    text: `Digital Marketing Services & Training. Building on our commitment to meet the
evolving needs of our clients, we ventured into the world of digital marketing.
With our comprehensive services and training programs, we empower
businesses to navigate the digital landscape effectively, leverage online platforms,
and achieve their marketing goals.
`,
  },
];

export default function Milestones() {
  return <TimeLine heading="Milestones" timelines={timelineData} />;
}
