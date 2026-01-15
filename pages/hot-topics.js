import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const HotTopics = () => {
  const topics = [
    {
      id: 1,
      title: "The Future of Faceless Content in 2026",
      date: "January 10, 2026",
      category: "Trends",
      excerpt: "Explore how faceless content continues to dominate social media and why creators are choosing anonymity over exposure.",
    },
    {
      id: 2,
      title: "Copyright Mastery: Protecting Your Content",
      date: "January 8, 2026",
      category: "Legal",
      excerpt: "Learn the essential strategies for keeping your content safe while monetizing across multiple platforms.",
    },
    {
      id: 3,
      title: "Script Generation AI: Game Changer or Gimmick?",
      date: "January 5, 2026",
      category: "Technology",
      excerpt: "We break down the latest AI tools for script generation and how they're revolutionizing content creation.",
    },
    {
      id: 4,
      title: "Voiceover Production: Pro Tips from Industry Experts",
      date: "January 1, 2026",
      category: "Production",
      excerpt: "Master the art of professional voiceover production with insider tips from top creators.",
    },
    {
      id: 5,
      title: "B-Roll Collections: Building Your Visual Arsenal",
      date: "December 28, 2025",
      category: "Resources",
      excerpt: "Discover the best free and paid B-Roll resources to elevate your video quality instantly.",
    },
    {
      id: 6,
      title: "From 0 to 100k Followers: A Success Story",
      date: "December 25, 2025",
      category: "Success Stories",
      excerpt: "How one creator went from zero to 100k followers using the RapidReel methodology in just 3 months.",
    },
  ];

  return (
    <>
      <Head>
        <title>Hot Topics - RapidReel</title>
        <meta name="description" content="Latest news and trends in faceless content creation" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Hot Topics</h1>
          <p className="text-center text-gray-600 mb-12">Latest news, trends, and insights from the RapidReel community</p>

          <div className="grid gap-8">
            {topics.map((topic) => (
              <motion.article
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-red-500 pl-6 py-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {topic.category}
                  </span>
                  <span className="text-gray-500 text-sm">{topic.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-red-500 cursor-pointer">
                  {topic.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {topic.excerpt}
                </p>
                <a href="#" className="text-red-500 font-semibold hover:text-red-700">
                  Read More →
                </a>
              </motion.article>
            ))}
          </div>

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

export default HotTopics;
