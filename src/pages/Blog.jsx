import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const BlogPost = ({ title, excerpt, image, date, author, id }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="bento-card flex flex-col justify-between bg-[#0f0f13] border border-white/5"
  >
    <div>
      <div className="h-48 overflow-hidden rounded-lg bg-black/40 border border-white/5 relative mb-6">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover grayscale opacity-55 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
      </div>
      <div>
        <div className="flex items-center gap-4 text-[10px] text-slate-500 mb-4 font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#818cf8]" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-[#818cf8]" />
            {author}
          </span>
        </div>
        <h3 className="font-display text-xl font-normal text-white mb-3 tracking-tight hover:text-[#818cf8] transition-colors leading-tight uppercase">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        <p className="text-[#9a9ab0] text-xs leading-relaxed mb-6 font-light">{excerpt}</p>
      </div>
    </div>
    <div className="pt-2">
      <Link
        to={`/blog/${id}`}
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#818cf8] hover:text-white transition-colors"
      >
        Read Analysis
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  </motion.div>
);

const Blog = () => {
  const blogPosts = [
    {
      id: "digital-marketing-trends-2025",
      title: "Digital Marketing Trends to Watch in 2025",
      excerpt: "Discover the key trends shaping the future of digital marketing in 2025 and how to stay ahead of the curve.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      date: "January 10, 2025",
      author: "Saakshi Priyadarshini",
    },
    {
      id: "top-seo-tips-2025",
      title: "Top SEO Tips for 2025 — Whiteboard Friday",
      excerpt: "Learn the six top SEO strategies for 2025, including driving brand awareness and diversifying traffic sources.",
      image:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "January 15, 2025",
      author: "Chima Mmeje",
    },
    {
      id: "keyword-cannibalization",
      title: "Keyword Cannibalization: What it is and How to Fix it",
      excerpt: "Learn how to identify and resolve keyword cannibalization issues to protect your rankings and drive more conversions.",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      date: "January 20, 2025",
      author: "Success Olagboye",
    },
  ];

  return (
    <div className="bg-[#070709] min-h-screen pt-28 pb-16 relative overflow-hidden text-[#9a9ab0]">
      <Seo 
        title="Marketing Insights & Strategy" 
        description="Read the Wide Take digital marketing blog. Expert briefs on SEO audits, search parameters, video scaling, and conversion funnels."
        keywords="marketing blog, SEO audit advice, search engine research, visual marketing"
      />
      
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-4 py-1.5 rounded-md mb-6 inline-block">
            Intellectual Base
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-normal text-white mt-4 mb-4 tracking-tight leading-none uppercase">
            Insights & Audits
          </h1>
          <p className="text-[#9a9ab0] text-sm max-w-xl mx-auto font-light leading-relaxed">
            Read our analytical breakdowns detailing SEO guidelines, content optimizations, and video curation methodologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;