import { motion } from "framer-motion";
import { IBenefitBullet } from "@/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex items-start gap-4"
      variants={childVariants}
    >
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-foreground-accent">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitBullet;
