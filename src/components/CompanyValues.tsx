import Values from "./Values";
import {
  RiStarSmileLine,
  RiShieldCheckLine,
  RiTeamLine,
  RiLightbulbFlashLine,
  RiUserHeartLine,
} from "react-icons/ri";

const values = [
  {
    title: "Excellence",
    description:
      "We commit to exceptional quality service and outstanding results, exceeding client expectations with a focus on excellence for consistent delivery.",
    icon: <RiStarSmileLine />,
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Integrity",
    description:
      "We uphold unwavering integrity and transparency in all interactions, conducting business ethically with honesty and trustworthiness.",
    icon: <RiShieldCheckLine />,
    color: "from-green-50 to-green-100",
    textColor: "text-green-800",
  },
  {
    title: "Collaboration",
    description:
      "We promote collaboration and teamwork, valuing open communication and idea-sharing to leverage diverse expertise for remarkable outcomes.",
    icon: <RiTeamLine />,
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-800",
  },
  {
    title: "Innovation",
    description:
      "We embrace an innovative and forward-thinking culture, using technology, trends, and creativity to develop cutting-edge solutions that drive client success.",
    icon: <RiLightbulbFlashLine />,
    color: "from-yellow-50 to-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    title: "Customer Centricity & Empathy",
    description:
      "Customers are at our core. We understand their challenges, goals, and needs, delivering tailored solutions with empathy and compassion.",
    icon: <RiUserHeartLine />,
    color: "from-pink-50 to-pink-100",
    textColor: "text-pink-800",
  },
];

export default function CompanyValues() {
  return (
    <Values
      heading="OUR COMPANY VALUES"
      description={`At our company, we embrace core values that define who we are: Integrity, Innovation, and Excellence.
          We uphold honesty and transparency, foster trust with our clients, and strive to lead the industry forward.`}
      values={values}
    />
  );
}
