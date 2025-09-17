import Header from '@/components/Header';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import profileImage from '/public/profile-photo.png';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            {/* Column 1: Profile Photo */}
            <div className="flex-shrink-0">
              
            </div>
            
            {/* Column 2: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                Swetha Gayatri Kandikonda
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-8 text-blue-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Senior Data Analyst & Data Scientist
              </p>
              <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                Transforming complex data into actionable insights with 3+ years of experience in Azure, 
                Machine Learning, and Advanced Analytics. Proven track record of reducing manual effort by 85% 
                and achieving 94% ROC AUC in sentiment analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <About />
      <WorkExperience />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Swetha Gayatri Kandikonda. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}