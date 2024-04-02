"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  initial: {
    y: 24,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    y: 24,
    transition: {
      staggerChildren: 0.1,
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
                ["Experiments", "/experiments"],
                ["Projects", "/projects"],
                ["Pursuits", "/pursuits"],
                ["Journey", "/journey"],
              ]}
            />
            <HomeNavigationSection
              title="Social"
              items={[
                ["Email", "mailto:raphaelsalaja@gmail.com"],
                ["Bento", "https://bento.cool/raphaelsalaja"],
                ["Twitter", "https://twitter.com/raphaelsalaja"],
                ["Instagram", "https://instagram.com/raphaelsalaja"],
                ["Youtube", "https://youtube.com/raphaelsalaja"],
                ["Github", "https://github.com/rafunderscore"],
                ["Zora", "https://zora.co/@raphaelsalaja"],
              ]}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function HomeNavigationHero() {
  return (
    <motion.div variants={fadeIn} className="flex flex-col gap-1">
      <div>Raphael Salaja</div>
      <div className="opacity-50 text-justify">
        genreless creator / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun
      </div>
      <div className="opacity-50 text-justify">
        an individual who defies traditional categorisation within creative
        endeavours, blending diverse influences and mediums to produce
        innovative works.
      </div>
    </motion.div>
  );
}

export function HomeNavigationSection({
  title,
  items,
}: Readonly<{
  title: string;
  items: [key: string, link: string][];
}>) {
  return (
    <motion.div variants={fadeIn}>
      <div className="grid grid-cols-2 gap-4">
        <div className="opacity-50 p-1">{title}</div>
        <div className=" flex flex-col gap-3">
          {items.map(
            ([key, link]) => (
              console.log(key, link),
              (
                <Link
                  className="transition p-1 duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
                  href={link}
                >
                  {key}
                </Link>
              )
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
