import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { ExternalLink } from "lucide-react";

export const categories = ["All", "Menu", "Thumbnails", "Reels", "Brand Kit"];

// ✅ PROJECT DATA
export const projects = [
  {
    id: 1,
    title: "Restaurant Menu Card",
    category: "Menu",
    image:
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765215898/Rest_Menu_Cards_bqfiuq.png",
    description: "Complete menu redesign for Indian restaurant",
    images: [
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765208378/Biryani_Menu_qhwbhu.png",
    ],
    pdf: "https://drive.google.com/file/d/1aMRXvDV9kpmHO6pJZ1LSThp-mmxQ1ANA/preview",
    visible: true,
  },

  {
    id: 2,
    title: "Tech YouTube",
    category: "Thumbnails",
    image:
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765172338/Youtube_Thumb_hdj3yx.png",
    description: "10 custom thumbnails for tech channel",
    images: [
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765126737/WhatsApp_Image_2025-11-27_at_00.27.18_aa16d83f_kvvc0u.jpg",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765170877/AI_5_Tools_wc7lsm.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765170881/Slight_AI_5_zoeyhh.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765171567/Data_An_2026_idzhwz.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765176334/4K_xofr4k.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765187620/PortFolio_ozasdu.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765190771/Thumbnails_g0yj02.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765194906/phones_lap_f0rvr6.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765197857/in_30_days_vmpwrb.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765198540/Cartoon_b4azlb.png",
    ],
    visible: true,
  },

  {
    id: 3,
    title: "Brand Promote Reels",
    category: "Reels",
    image:
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765220726/Insta_Reels_ire4oy.png",
    description: "Instagram reels series for cafe",
    images: [],
    pdf: "",
    visible: true,
  },

  {
    id: 4,
    title: "Brand Kit",
    category: "Brand Kit",
    image:
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765221295/Brand_Kit_bq1bvc.png",
    description: "Complete brand identity package",
    images: [],
    pdf: "",
    visible: true,
  },

  // ❌ Hidden projects (still safe for routing)
  {
    id: 5,
    title: "Veg Paradise Menu",
    category: "Menu",
    image: "/project-5.jpg",
    description: "Vegetarian restaurant menu cards",
    images: [],
    visible: false,
  },

  {
    id: 6,
    title: "Foodie Vlogs Thumbnails",
    category: "Thumbnails",
    image: "/project-6.jpg",
    description: "YouTube thumbnail series",
    images: [],
    visible: false,
  },

  {
    id: 7,
    title: "Cafe Mocha Reels",
    category: "Reels",
    image: "/project-7.jpg",
    description: "Coffee shop promotional reels",
    images: [],
    visible: false,
  },

  {
    id: 8,
    title: "Biryani House Menu",
    category: "Menu",
    image: "/project-8.jpg",
    description: "Traditional biryani restaurant menu",
    images: [],
    visible: false,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ SHOW ONLY visible projects
  const visibleProjects = projects.filter((p) => p.visible);

  // ✅ APPLY CATEGORY FILTER
  const filteredProjects =
    activeCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              My Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Selected works in menu design, thumbnails & branding
            </p>
          </motion.div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="group relative block overflow-hidden rounded-3xl aspect-[3/4]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="inline-block px-3 py-1 mb-2 text-xs rounded-full bg-accent text-accent-foreground">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Portfolio;
