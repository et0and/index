"use client";

import { container, fadeIn } from "@/components/home/motion-variants";
import { Separator } from "@/components/ui/separator";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  ShadowInnerIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-8"
    >
      <motion.div variants={fadeIn} className="flex flex-col gap-2">
        <span>Raphael Salaja</span>
        <span className="text-muted">
          Genreless Creator
          <span className="italic"> / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun</span>
        </span>
        <div className="flex flex-row gap-2 text-muted">
          <span>1.</span>
          <span>
            an individual who defies traditional categorisation within creative
            endeavours, blending diverse influences and mediums to produce
            innovative works.
          </span>
        </div>
        <div className="flex flex-row gap-2 text-muted">
          <span>2.</span>
          <span>
            a multidisciplinary artist who transcends boundaries, creating
            without limitations.
          </span>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-col gap-2">
        <span>Today</span>
        <span className="text-muted">
          Working on Whim, a new haven for creators
        </span>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-col gap-2">
        <span>Contact</span>
        <span className="text-muted">
          Reach me at{" "}
          <ParagraphLink
            icon={<EnvelopeClosedIcon />}
            text="raphaelsalaja@gmail.com"
            link="mailto:raphaelsalaja@gmail.com"
          />{" "}
          or shoot me a messsage on {""}
          <ParagraphLink
            icon={<TwitterLogoIcon />}
            text="Twitter"
            link="https://twitter.com/raphaelsalaja"
          />
          . If you want to check out my personal side you can see my posts on{" "}
          {""}
          <ParagraphLink
            icon={<InstagramLogoIcon />}
            text="Instagram"
            link="https://instagram.com/raphaelsalaja"
          />{" "}
          or watch my (future) videos on {""}
          <ParagraphLink
            icon={<VideoIcon />}
            text="Youtube"
            link="https://youtube.com/raphaelsalaja"
          />
          . All (or most) of my work is open source and accessible to everyone
          on {""}
          <ParagraphLink
            icon={<GitHubLogoIcon />}
            text="Github"
            link="https://github.com/rafunderscore"
          />
          . If you're interested in owning a piece Github. If you're interested
          in owning a piece of my work, you can check out my pursuits into
          generative art on {""}
          <ParagraphLink
            icon={<ShadowInnerIcon />}
            text="Zora"
            link="https://zora.co/@raphaelsalaja"
          />
          .
        </span>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-col gap-2">
        <Separator />
        <span className="text-muted text-xs font-light">
          This is a living document and will be updated as I continue to create
          and explore new ideas. To see previous works, please visit my {""}
          <ParagraphLink text="Bento" link="https://bento.me/raphaelsalaja" />
          {""} page.
        </span>
      </motion.div>
    </motion.div>
  );
}

export function ParagraphLink({
  icon,
  text,
  link,
}: Readonly<{
  icon?: React.ReactNode;
  text: string;
  link: string;
}>) {
  return !icon ? (
    <a href={link} target="_blank" className="text-primary underline">
      {text}
    </a>
  ) : (
    <div className="inline-flex gap-1">
      <a
        href={link}
        target="_blank"
        className="text-primary underline inline-flex gap-1 items-center translate-y-[3px]"
      >
        {icon}
        {text}
      </a>
    </div>
  );
}
