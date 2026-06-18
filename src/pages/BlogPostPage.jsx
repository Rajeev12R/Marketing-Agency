import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Seo from "../components/Seo";

const BlogPostPage = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: "digital-marketing-trends-2025",
      title: "Digital Marketing Trends to Watch in 2025",
      excerpt: "Explore the critical trends shaping digital marketing fields in 2025, including micro-influencers and short video assets.",
      content: `
        <p class="mb-6">It’s a new year, and it’s time for all digital marketers to amp up their digital marketing game strategies for 2025. The year 2024 saw a tirade of innovative changes in the digital space, courtesy of technological advancements, shifting user perspectives, and enhanced global connectivity.</p>
        <p class="mb-6">All these have led to the emergence of new digital marketing trends in 2025. Whether it’s using AI for marketing and content generation, capitalizing on short video content and influencer marketing, leveraging social media platforms for expanding sales, or focusing on ethical and data privacy considerations, these trends are a must-follow for every marketer.</p>
        <p class="mb-6">As marketers, we need to adopt these trends at the earliest to optimize our marketing efforts and fully utilize our untapped potential. Let’s dive into the key trends that will shape the digital marketing industry in 2025.</p>
 
        <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">Digital Marketing Trends for 2025</h2>
        <ul class="list-disc list-inside space-y-4 mb-6 text-slate-400">
          <li><strong class="text-white font-medium">AI Boosts Marketing, But Human Element Sustains It:</strong> AI-driven tools are revolutionizing how marketers analyze data and automate campaigns. However, human-generated content will remain the differentiating factor for brands.</li>
          <li><strong class="text-white font-medium">AR and VR Integration in Marketing:</strong> Augmented and Virtual Reality are redefining brand storytelling, offering immersive experiences that blend the digital and physical worlds.</li>
          <li><strong class="text-white font-medium">Voice Search Centric Marketing:</strong> With the rise of voice assistants, optimizing for voice search is crucial. Marketers need to focus on conversational queries and long-tail keywords.</li>
          <li><strong class="text-white font-medium">Hyper-Personalized and Targeted Marketing:</strong> Big Data and machine learning enable marketers to create highly personalized campaigns that resonate with individual users.</li>
          <li><strong class="text-white font-medium">Influencer Marketing on Micro-Level:</strong> Micro-influencers with niche audiences are becoming more effective than macro-influencers due to their authenticity and engagement.</li>
          <li><strong class="text-white font-medium">Social Media as a Shop:</strong> Platforms like Instagram and Facebook are integrating shopping features, turning social media browsing into shopping experiences.</li>
          <li><strong class="text-white font-medium">Video and Short-Form Marketing:</strong> Short-form video content on platforms like TikTok and Instagram Reels is dominating user engagement.</li>
          <li><strong class="text-white font-medium">Sustainability and Social Consciousness:</strong> Brands that prioritize sustainability and social responsibility are gaining more trust and loyalty from consumers.</li>
          <li><strong class="text-white font-medium">User-Generated Content:</strong> Encouraging users to create content around your brand enhances authenticity and builds community.</li>
          <li><strong class="text-white font-medium">Transparency, Ethics, and Data Protection:</strong> With growing concerns over data privacy, transparent and ethical marketing practices are becoming a priority.</li>
        </ul>
 
        <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">Concluding Thoughts</h2>
        <p class="mb-6">Trends change, and so does the industry. Following these trends is not just a compulsion but a necessity for every marketer who wants to stay ahead in the game. The earlier you implement these strategies, the better results you can expect from your marketing efforts.</p>
        <p class="mb-6 text-[#818cf8]">Stay updated, stay innovative, and make 2025 your year of digital marketing success!</p>
      `,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      date: "January 10, 2025",
      author: "Saakshi Priyadarshini",
    },
    {
        id: "top-seo-tips-2025",
        title: "Top SEO Tips for 2025 — Whiteboard Friday",
        excerpt: "Six actionable search criteria tips from Chima Mmeje including brand awareness campaigns and GA4 tracking setups.",
        content: `
          <p class="mb-6">With the new year underway, you may be wondering what strategies you should implement for maximum SEO success in 2025. In this week’s episode of Whiteboard Friday, Chima Mmeje talks through her six top SEO tips for this year, which include driving brand awareness and diversifying your traffic sources.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">1. Create Brand Awareness to Drive Branded Searches</h2>
          <p class="mb-6">Brand is going to be absolutely critical for success in 2025. Use SEO to support your brand goals by creating brand awareness to drive branded searches. Track branded searches in tools like Moz Pro to measure the effectiveness of your efforts.</p>
          <p class="mb-6">To increase brand awareness, leverage social media, digital PR, sponsorships, promos, outdoor advertisements, and paid media. SEO should work in tandem with these channels to amplify your brand’s reach.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">2. Diversify Your Traffic Sources</h2>
          <p class="mb-6">With AI Overviews impacting organic search results, diversifying your traffic sources is essential. Repurpose content across multiple channels to maximize its reach. For example, turn a webinar into blog posts, social media videos, and email campaigns.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">3. Optimize for AI-Generated Results</h2>
          <p class="mb-6">While Google claims there’s no way to optimize for AI search, SEOs are experimenting with strategies to rank in AI Overviews. Analyze what’s ranking in AI Overviews using tools like Moz’s STAT, and align your content with search intent.</p>
          <p class="mb-6">Make your content easy to read, include multimedia, statistics, and expert quotes, and optimize for natural language to improve your chances of appearing in AI-generated results.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">4. Encourage User-Generated Content (UGC)</h2>
          <p class="mb-6">User-generated content is a powerful way to build authenticity and trust. Encourage your audience to leave reviews on platforms like Trustpilot and Capterra. Avoid manipulating reviews on platforms like Reddit or Quora, as this can backfire.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">5. Leverage Niche Influencers</h2>
          <p class="mb-6">Collaborate with niche influencers in your industry to amplify your brand’s reach. Influencers like Lily Ray and Mike King in the SEO space are trusted by both Google and their audiences, making them valuable partners for your campaigns.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">6. Track Referral Traffic from LLMs</h2>
          <p class="mb-6">Use Google Analytics 4 (GA4) to track referral traffic from AI platforms like ChatGPT and Gemini. This data will help you understand how AI search impacts your traffic and where to focus your efforts.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">Concluding Thoughts</h2>
          <p class="mb-6 font-light">SEO in 2025 is all about building your brand and diversifying your strategies. By focusing on brand awareness, repurposing content, optimizing for AI, and leveraging UGC and influencers, you can stay ahead of the curve and achieve SEO success.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "January 15, 2025",
        author: "Chima Mmeje",
      },
      {
        id: "keyword-cannibalization",
        title: "Keyword Cannibalization: What it is and How to Fix it",
        excerpt: "Learn structural strategies to diagnose, resolve, and redirect keyword cannibalization overlaps.",
        content: `
          <p class="mb-6">You’ve worked hard to create SEO-friendly, user-focused content, but instead of higher rankings, multiple pages compete for the same keyword. Your best content gets buried, visitors land on less relevant pages, and your rankings and conversions take a hit.</p>
          <p class="mb-6">Keyword cannibalization happens when your content works against you. It confuses search engines, dilutes your authority, and hurts your rankings. In this article, I’ll show you how to identify and resolve keyword cannibalization issues so you can protect your rankings and drive more conversions.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">What is Keyword Cannibalization?</h2>
          <p class="mb-6">Keyword cannibalization occurs when multiple pages on your site target the same keyword and search intent, creating confusion for search engines. It makes it harder for search engine bots to determine the most relevant page, leading to lower-quality pages competing with your best content.</p>
          <p class="mb-6">For example, imagine you search for "email marketing" on Google and find several blog posts from the same site targeting that keyword. Which one would you click? This overlap creates competition between the site’s pages, causing fluctuations in search rankings and frustrating users.</p>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">Why is Keyword Cannibalization Bad for SEO?</h2>
          <p class="mb-6">Keyword cannibalization negatively impacts your site in several ways:</p>
          <ul class="list-disc list-inside space-y-2 mb-6 text-slate-400">
            <li><strong>Decreased Organic Rankings and Traffic:</strong> Search engines struggle to identify the most relevant page to rank, leading to fluctuations and reduced traffic.</li>
            <li><strong>Wasted Crawl Budget:</strong> Search engines allocate a crawl budget for each site. Cannibalized pages waste this budget, delaying the indexing of more important pages.</li>
            <li><strong>Loss of Valuable Internal Link Equity:</strong> Internal links become fragmented, reducing the authority signal passed to the preferred page.</li>
            <li><strong>Difficulty Identifying Underperforming Pages:</strong> Traffic is spread across multiple pages, making it harder to identify which ones need optimization.</li>
          </ul>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">How to Discover Keyword Cannibalization</h2>
          <p class="mb-6">Here are three steps to identify keyword cannibalization issues on your site:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6 text-slate-400 font-light">
            <li><strong>Use Moz’s Pro Keyword Explorer Tool:</strong> Analyze your search rankings to identify potential keyword cannibalization.</li>
            <li><strong>Check Google Search Console:</strong> Use the Performance menu to see which pages rank for the same keywords.</li>
            <li><strong>Use the Site Search Operator:</strong> Use the "site:yourdomain.com keyword" search operator to find pages targeting the same keyword.</li>
          </ol>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">How to Fix Keyword Cannibalization</h2>
          <p class="mb-6">Here are five ways to resolve keyword cannibalization:</p>
          <ol class="list-decimal list-inside space-y-3 mb-6 text-slate-400 font-light">
            <li><strong>Consolidate and Redirect Cannibalized Pages:</strong> Combine multiple pages into one authoritative page and set up 301 redirects.</li>
            <li><strong>Use Canonical Tags:</strong> Tell search engines which page should be indexed and ranked as the primary page.</li>
            <li><strong>Target Different Search Intents:</strong> Revamp each page to target a different search intent.</li>
            <li><strong>Build Links and Optimize Your Preferred Pages:</strong> Use internal links, backlinks, and content optimization to boost the authority of your preferred page.</li>
            <li><strong>Avoid Deleting or Noindexing Pages:</strong> Deleting or noindexing pages can harm your SEO performance.</li>
          </ol>
   
          <h2 class="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-wider font-display">Final Thoughts</h2>
          <p class="mb-6">Keyword cannibalization can harm your SEO efforts, but with the right strategies, you can resolve it and improve your rankings. By consolidating pages, using canonical tags, and targeting different search intents, you can protect your rankings and drive more conversions.</p>
        `,
        image:
          "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        date: "January 20, 2025",
        author: "Success Olagboye",
      },
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="bg-[#070709] min-h-screen pt-28 text-center text-slate-400">
        Blog post not found. <br />
        <Link to="/blog" className="text-[#818cf8] underline mt-4 inline-block">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#070709] min-h-screen pt-28 pb-16 relative overflow-hidden text-[#9a9ab0]">
      <Seo title={post.title} description={post.excerpt} />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9a9ab0] hover:text-[#818cf8] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card overflow-hidden shadow-2xl p-0 bg-[#0f0f13] border border-white/5"
        >
          <div className="h-64 sm:h-[360px] overflow-hidden bg-slate-900 border-b border-white/5">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-70" />
          </div>

          <div className="p-8 sm:p-12">
            <h1 className="font-display text-3xl sm:text-5xl font-normal text-white mb-6 uppercase tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-[10px] text-slate-500 mb-10 pb-6 border-b border-white/5 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#818cf8]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#818cf8]" />
                {post.author}
              </span>
            </div>

            <div
              className="text-slate-300 leading-relaxed text-sm sm:text-base font-light space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;