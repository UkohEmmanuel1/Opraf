import Image from 'next/Image';
import { projects } from '@/data/project'; // Adjust path based on where you saved the file above

export default function ProjectGallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-100">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder="blur" // Nice loading effect if you want it
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 z-10">
                {project.status}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">
                  {project.location}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {project.summary}
              </p>

              <button className="mt-auto w-full py-3 px-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                View Project Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}