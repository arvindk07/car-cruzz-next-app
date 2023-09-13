"use client";

import Image from "next/image";

import {
  MdOutlineMapsHomeWork,
  MdOutlineDirectionsCar,
  MdOutlineBuildCircle,
} from "react-icons/md";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("up", 0.2)}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src="/images/about/car01.png"
              width={600}
              height={448}
            />
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center ">
            <div className="xl:max-w-[517px]">
              <motion.h2
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", 0.4)}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car Services simplified.
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", 0.6)}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px]"
              >
                Rent, Choose, and repair with ease. Our convient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", 0.8)}
                viewport={{ once: false, amount: 0.6 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-seconday">
                    car <br />
                    types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-seconday">
                    rental <br />
                    outlets
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-bold mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-seconday">
                    car <br />
                    types
                  </div>
                </div>
              </motion.div>
              <motion.button
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", 1)}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
