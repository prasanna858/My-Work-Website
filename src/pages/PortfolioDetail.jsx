import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects } from "./Portfolio"; // Adjust path if needed

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="text-center p-20 text-xl">Project Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 container">
        <Link
          to="/portfolio"
          className="text-primary underline mb-6 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl font-display font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.description}</p>

        {/* ⭐ Show all images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title}-${index}`}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            ))
          ) : (
            <p>No additional images.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
