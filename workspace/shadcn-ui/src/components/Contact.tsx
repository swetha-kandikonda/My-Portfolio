import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MapPin, Download } from 'lucide-react';
import resumePdf from '@/assets/Swetha_Gayatri_Resume.pdf';

export default function Contact() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Swetha_Gayatri_Resume.pdf';
    link.download = 'Swetha_Gayatri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to collaborate on your next data science project? Let's discuss how I can help drive your business forward with data-driven insights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-4 text-blue-200" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:swethagayathri1964@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                        swethagayathri1964@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-4 text-blue-200" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/swetha-gayatri-kandikonda-26286212a" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        swetha-gayatri-kandikonda
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-4 text-blue-200" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-blue-200">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, whether it's a full-time position, 
                  consulting work, or collaborative projects in data science and analytics.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <Button 
                      variant="outline" 
                      className="border-sky-300 text-sky-300 bg-transparent hover:bg-sky-300 hover:text-indigo-700 transition-all duration-200"
                      onClick={() => window.open('mailto:swethagayathri1964@gmail.com', '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-sky-300 text-sky-300 bg-transparent hover:bg-sky-300 hover:text-indigo-700 transition-all duration-200"
                      onClick={() => window.open('https://linkedin.com/in/swetha-gayatri-kandikonda-26286212a', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full bg-sky-400 text-white hover:bg-sky-500 transition-all duration-200"
                    onClick={downloadResume}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded">Data Analytics</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Machine Learning</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Azure Cloud</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Power BI</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Python</span>
                    <span className="bg-white/20 px-2 py-1 rounded">Deep Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}