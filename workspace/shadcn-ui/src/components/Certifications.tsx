import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, CheckCircle, Trophy } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Winners of Smart India Hackathon",
      subtitle: "March 2019 (Software Edition)",
      issuer: "Smart India Hackathon",
      status: "Completed",
      description: "National level hackathon recognition for innovative software solution development",
      skills: ["Innovation", "Software Development", "Problem Solving", "Team Leadership"],
      color: "from-yellow-500 to-orange-600",
      icon: <Trophy className="w-5 h-5" />,
      link: null
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals",
      subtitle: "",
      issuer: "Microsoft",
      status: "Completed",
      description: "Foundational certification covering Azure cloud services, architecture, and core concepts",
      skills: ["Azure Services", "Cloud Computing", "Azure Architecture", "Cloud Security"],
      color: "from-blue-500 to-blue-600",
      icon: <Award className="w-5 h-5" />,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/swethagayatri/47B98BFA9143C7C8?sharingId=959A0C30424F808B"
    },
    {
      title: "NPTEL - Foundations of Data Science",
      subtitle: "",
      issuer: "NPTEL",
      status: "Completed",
      description: "Comprehensive course covering fundamental concepts and techniques in data science",
      skills: ["Data Science", "Statistics", "Data Analysis", "Python"],
      color: "from-green-500 to-green-600",
      icon: <Award className="w-5 h-5" />,
      link: "https://storage.googleapis.com/swayam-node2-production_certificates/examform/certificates/ns_imb25_mg23/2515140024040_imb25_mg23.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements demonstrating expertise and continuous learning
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white`}>
                        {cert.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-1">{cert.title}</CardTitle>
                        {cert.subtitle && (
                          <p className="text-lg text-gray-600 font-medium mb-1">{cert.subtitle}</p>
                        )}
                        <p className="text-gray-600 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      {cert.link && (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      )}
                      {!cert.link && cert.title.includes("Hackathon") && (
                        <div className="text-center p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                          <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-yellow-800">National Winner</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Achievement Highlights</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Recognized for excellence through national competitions, industry certifications, and academic achievements in data science and cloud computing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold">🏆</div>
                    <div className="text-lg font-semibold mt-2">National Hackathon Winner</div>
                    <div className="text-sm opacity-90">Smart India Hackathon 2019</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">☁️</div>
                    <div className="text-lg font-semibold mt-2">Azure Certified</div>
                    <div className="text-sm opacity-90">Microsoft Azure Fundamentals</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">📊</div>
                    <div className="text-lg font-semibold mt-2">Data Science Foundation</div>
                    <div className="text-sm opacity-90">NPTEL Certified</div>
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