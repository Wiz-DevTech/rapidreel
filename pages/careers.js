import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const Careers = () => {
  const positions = [
    {
      id: 1,
      title: "Content Creator Coach",
      type: "Full-time",
      location: "Remote",
      description: "Help creators master our 6-module system and achieve their goals.",
    },
    {
      id: 2,
      title: "Voiceover Artist & Producer",
      type: "Contract",
      location: "Remote",
      description: "Create high-quality voiceovers for our content creation platform.",
    },
    {
      id: 3,
      title: "B-Roll & Stock Media Curator",
      type: "Part-time",
      location: "Remote",
      description: "Source and organize premium B-roll content for our creators.",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Drive growth and brand awareness for RapidReel across all channels.",
    },
    {
      id: 5,
      title: "Video Editor",
      type: "Full-time",
      location: "Remote",
      description: "Master the art of video assembly and bring raw footage to life.",
    },
  ];

  return (
    <>
      <Head>
        <title>Careers - RapidReel</title>
        <meta name="description" content="Join the RapidReel team and revolutionize content creation" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Join Our Team</h1>
          
          <section className="mb-12">
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              We're looking for passionate, innovative people who believe in the power of faceless content creation. 
              If you're ready to join a team that's revolutionizing how creators build their empire, we want to hear from you!
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-red-500 pl-6 py-4 hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{position.title}</h3>
                  <div className="flex gap-4 mb-3 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      {position.type}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      {position.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <Link href="/contact" className="text-red-500 font-semibold hover:text-red-700">
                    Apply Now →
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-red-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Work at RapidReel?</h2>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>✓ Work with innovative creators changing the content landscape</li>
              <li>✓ 100% remote - work from anywhere</li>
              <li>✓ Flexible schedules and collaborative culture</li>
              <li>✓ Learning opportunities and professional growth</li>
              <li>✓ Be part of a movement in faceless content creation</li>
            </ul>
          </section>

          <div className="text-center">
            <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Send Us Your Resume
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-lg transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Careers;
