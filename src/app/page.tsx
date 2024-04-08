"use client";

import { motion } from "framer-motion";

const container = {
  initial: {
    y: 24,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.75,
      type: "spring",
    },
  },
  exit: {
    y: 24,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 24,
  },
};

function HomeNavigationHero() {
  return (
    <motion.div className="flex flex-col gap-1 p-1">
      <motion.div variants={fadeIn}>Raphael Salaja</motion.div>
      <motion.div variants={fadeIn} className="text-justify  t">
        <span className="opacity-50">
          genreless creator / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun/
        </span>
      </motion.div>
      <motion.div variants={fadeIn} className="opacity-50 text-justify">
        <span className="opacity-50">
          an individual who defies traditional categorisation within creative
          endeavours, blending diverse influences and mediums to produce
          innovative works.
        </span>
      </motion.div>
    </motion.div>
  );
}

function HomeNavigationSection({
  title,
  items,
}: Readonly<{
  title: string;
  items: { key: string; link: string }[];
}>) {
  return (
    <motion.div>
      <motion.div className="grid grid-cols-2 gap-4">
        <motion.div variants={fadeIn} className="p-1">
          <span className="opacity-50">{title}</span>
        </motion.div>
        <motion.div className="flex flex-col gap-3">
          {items.map(({ key, link }, index) => (
            <a key={index} href={link} target="_blank">
              <motion.div
                key={key}
                className="p-1"
                whileHover={{
                  scale: 1.1,
                  cursor: "pointer",
                  color: "rgba(255, 255, 255, 1)",
                  backgroundColor: "rgba(0, 0, 0, 1)",
                }}
                variants={fadeIn}
              >
                {key}
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="md:flex md:flex-row md:justify-center">
        <motion.div className=" md:min-w-[512px] md:w-full md:max-w-xl">
          <motion.div className="flex flex-col justify-start max-w-xl py-24 gap-12">
            <HomeNavigationHero />
            <HomeNavigationSection
              title="Work"
              items={[
                {
                  key: "Experiments",
                  link: "https://raphaelsalaja.com/experiments",
                },
                { key: "Projects", link: "https://raphaelsalaja.com/projects" },
                { key: "Pursuits", link: "https://raphaelsalaja.com/pursuits" },
                { key: "Journey", link: "https://raphaelsalaja.com/journey" },
              ]}
            />
            <HomeNavigationSection
              title="Social"
              items={[
                { key: "Email", link: "mailto:raphaelsalaja@gmail.com" },
                { key: "Bento", link: "https://bento.me/raphaelsalaja" },
                { key: "Twitter", link: "https://twitter.com/raphaelsalaja" },
                {
                  key: "Instagram",
                  link: "https://instagram.com/raphaelsalaja",
                },
                { key: "Youtube", link: "https://youtube.com/raphaelsalaja" },
                { key: "Github", link: "https://github.com/rafunderscore" },
                { key: "Zora", link: "https://zora.co/@raphaelsalaja" },
              ]}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
