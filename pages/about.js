import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Head>
        <title>About RapidReel</title>
        <meta name="description" content="About RapidReel - Rapid Faceless Content Creation" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen bg-white p-8"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About RapidReel</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RapidReel empowers creators to produce high-quality, faceless content at lightning speed. 
              We&apos;ve simplified the entire content creation process into 6 strategic modules, making it 
              accessible for everyone to build a successful content empire without ever showing your face.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">What We Offer</h2>
            <ul className="text-lg text-gray-600 space-y-3">
              <li>✓ <strong>M1:</strong> The Strategy & Script Generation</li>
              <li>✓ <strong>M2:</strong> Voiceover Production</li>
              <li>✓ <strong>M3:</strong> Video Assembly (The Skeleton)</li>
              <li>✓ <strong>M4:</strong> The Magic Touch (Captions & B-Roll)</li>
              <li>✓ <strong>M5:</strong> Audio Branding & Copyright Safety</li>
              <li>✓ <strong>M6:</strong> Final Wrap-Up & Copyright Strategy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Why Choose RapidReel?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With RapidReel, you don&apos;t need expensive equipment, a beautiful face, or years of experience. 
              Our proven system breaks content creation into manageable steps, allowing you to scale your 
              channels and build a passive income stream in weeks, not months.
            </p>
          </section>

          <div className="mt-12 text-center">
            <Link href="/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
