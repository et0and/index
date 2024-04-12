import { motion } from "framer-motion";
import { fadeIn } from "./motion-variants";

export function HomeSection({
  title,
  items,
}: Readonly<{
  title: string;
  items: { key: string; link: string }[];
}>) {
  return (
    <motion.div>
      <motion.div className="grid grid-cols-2 gap-4">
        <motion.div variants={fadeIn}></motion.div>
        <motion.div className="flex flex-col gap-3">
          {items.map(({ key, link }, index) => (
            <a key={index} href={link} target="_blank">
              <motion.div
                key={key}
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
