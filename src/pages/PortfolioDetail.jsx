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
  const [activeVideo, setActiveVideo] = useState(null);

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
          👈⬅️ Back My Hard work Buddy🥰💞
        </Link>

        <h1 className="text-4xl font-display font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>

        {/* ✅ SHOW MULTIPLE PDFs SIDE BY SIDE */}
        {project.pdfs && project.pdfs.length > 0 && (
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-10">
            {project.pdfs.map((pdfUrl, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[420px] h-[580px] rounded-xl overflow-hidden shadow-xl border bg-white"
              >
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  title={`Project PDF ${index + 1}`}
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* ✅ FIXED 9:16 VIDEO (Small size + Click popup) */}
        {project.video && (
          <div className="mt-12 flex flex-col items-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Project Video
            </h2>

            <div
              className="aspect-[9/16] w-[300px] sm:w-[360px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setActiveVideo(project.video)}
            >
              <video
                src={project.video}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            </div>
          </div>
        )}

        {/* ✅ IMAGE SECTION */}
        {project.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {project.images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImage(img)}
                className="cursor-pointer rounded-xl shadow-md w-full object-cover"
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* ✅ IMAGE POPUP */}
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
              className="max-w-full max-h-[90vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 bg-white rounded-full p-2"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ VIDEO POPUP */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.video
              src={activeVideo}
              controls
              autoPlay
              className="max-w-[450px] max-h-[90vh] rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 bg-white rounded-full p-2"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioDetail;
