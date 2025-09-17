import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-900">Swetha Gayatri Kandikonda</h1>
            <span className="text-sm text-gray-600 hidden md:block">Senior Data Analyst</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600">
              Experience
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600">
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600">
              Education
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600">
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('certifications')} className="text-gray-700 hover:text-blue-600">
              Certifications
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">
              Contact
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <a href="mailto:swethagayathri1964@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/swetha-gayatri-kandikonda-26286212a" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}