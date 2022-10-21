import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutPic from "../assets/Img/aboutPic.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          className="rounded-full object-cover md:rounded-lg"
          src={AboutPic}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 xl:mt-40">
        <h4 className="text-4xl font-semibold ">
          Here is a
          <span className="underline decoration-[#F7AB0A]/50"> little </span>
          background
        </h4>
        <p className="text-base lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, saepe odit quae cumque voluptate quidem mollitia nisi
          doloremque temporibus adipisci voluptatum iste deleniti, voluptates
          nam aliquam, dolorum earum praesentium. Consequatur suscipit provident
          omnis dolores magnam praesentium odio, aspernatur ab placeat dolore
          similique, voluptatum illo quas corporis! Provident tempora
          voluptatibus consequuntur inventore eligendi tempore qui optio quis
          accusantium, similique porro, ipsam quam assumenda sit ipsa
          asperiores, est repellat recusandae eaque sed atque nisi numquam?
          Officia ad vero consequuntur laudantium ducimus aut harum. Dolorum
          provident, eius, quidem debitis atque doloribus architecto recusandae
          corporis eos optio, omnis a totam deserunt rem error sit.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
