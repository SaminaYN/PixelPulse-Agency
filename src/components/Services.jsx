import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import Card from "./Card";
import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "Craft impactful ad campaigns that boost visibility, attract customers, and drive real business growth across digital platforms.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "Build lasting connections with your audience through strategic storytelling, blogs, videos, and campaigns that deliver value.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "Deliver clear, engaging, and SEO-friendly content tailored to your brand voice—perfect for websites, blogs, and more.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "Engage your community with creative posts, trending strategies, and consistent brand messaging across all major platforms.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white "
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From ideas to execution, we turn challenges into opportunities."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <Card key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
