"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.2, duration: 1 },
  },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10"
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {/* Text section */}
      <div
        className={clsx("w-full max-w-xl", {
          "lg:order-1 text-left": !imageAtRight,
          "lg:order-2 text-left lg:text-right": imageAtRight,
        })}
      >
        <motion.div variants={childVariants}>
          <SectionTitle>
            <h3 className="lg:max-w-2xl">{title}</h3>
          </SectionTitle>
          <p className="mt-2 text-foreground-accent">{description}</p>
        </motion.div>

        <div className="mt-6 space-y-6">
          {bullets.map((item, index) => (
            <BenefitBullet key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Image section */}
      <motion.div
        className={clsx("w-full max-w-lg", {
          "lg:order-2": !imageAtRight,
          "lg:order-1": imageAtRight,
        })}
        variants={childVariants}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={512}
          height={384}
          className="mx-auto rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </motion.div>
    </motion.div>
  );
};

export default BenefitSection;
