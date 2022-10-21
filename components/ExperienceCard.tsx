import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GoogleLogo from "../assets/Img/Google.png";
import ReactIcon from "../assets/Img/ReactIcon.png";
import JavascriptIcon from "../assets/Img/JavascriptIcon.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-center"
      >
        <Image className="rounded-full object-cover" src={GoogleLogo} />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Google</h4>
        <p className="font-bold text-2xl mt-1">Google Inc</p>
        <div className="flex space-x-2 mt-4">
          <Image
            className="rounded-full"
            src={ReactIcon}
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src={JavascriptIcon}
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src={ReactIcon}
            height={40}
            width={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            maiores?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            maiores?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            maiores?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            maiores?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            maiores?
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
