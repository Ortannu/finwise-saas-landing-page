import BenefitSection from "./BenefitSection";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <h2 className="sr-only">Features</h2>
      {benefits.map((item, index) => (
        <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default Benefits;
