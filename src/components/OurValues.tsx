import Values from "./Values";
import { 
  RiBookLine, 
  RiCheckboxCircleLine, 
  RiRepeatLine, 
  RiUser3Line 
} from "react-icons/ri";

export const values = [
  {
    title: "Continuous Learning",
    description:
      "We are committed to continuous learning and personal growth. Encouraging our team to expand knowledge and skills, staying updated with industry advancements for delivering innovative solutions.",
    icon: <RiBookLine />,
    color: "from-cyan-50 to-cyan-100",
    textColor: "text-cyan-800",
  },
  {
    title: "Accountability",
    description:
      "We emphasize accountability in delivering on commitments to clients, partners, and stakeholders. Taking full responsibility for our actions, we strive to meet and exceed expectations.",
    icon: <RiCheckboxCircleLine />,
    color: "from-orange-50 to-orange-100",
    textColor: "text-orange-800",
  },
  {
    title: "Adaptability",
    description:
      "We embrace adaptability to thrive amidst changing landscapes. Staying agile and flexible, we anticipate and respond to challenges, providing optimal solutions and seizing opportunities.",
    icon: <RiRepeatLine />,
    color: "from-teal-50 to-teal-100",
    textColor: "text-teal-800",
  },
  {
    title: "Respect",
    description:
      "We promote respect for diversity and inclusive collaboration. Embracing different perspectives, cultures, and backgrounds, we foster an environment for innovative teamwork that values and celebrates diversity.",
    icon: <RiUser3Line />,
    color: "from-fuchsia-50 to-fuchsia-100",
    textColor: "text-fuchsia-800",
  },
];

export default function OurValues() {
  return (
    <Values
      heading="OUR VALUES"
      description={`At our company, we embrace core values that define who we are: Integrity, Innovation, and Excellence.
          We uphold honesty and transparency, foster trust with our clients, and strive to lead the industry forward.`}
      values={values}
    />
  );
}
