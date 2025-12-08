import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "./Portfolio";
import { X } from "lucide-react";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 container">
        <Link
          to="/portfolio"
          className="text-primary underline mb-6 inline-block"
        >
          👈⬅️ Back to My Work Buddy🥰
        </Link>

        <h1 className="text-4xl font-display font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {project.images.length > 0 ? (
            project.images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImage(img)}
                className="cursor-pointer rounded-xl shadow-md w-full object-cover"
              />
            ))
          ) : (
            <p>No additional images.</p>
          )}
        </div>
      </main>

      <Footer />

      {/* ✅ IMAGE MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 bg-white/90 rounded-full p-2"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioDetail;
