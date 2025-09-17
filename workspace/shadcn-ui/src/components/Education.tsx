import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in data science and computer science with excellent academic performance
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Master of Science - Data Science</CardTitle>
                    <p className="text-lg text-gray-600 font-semibold">Vellore Institute of Technology</p>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Aug 2024 - Apr 2026</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-green-600 hover:bg-green-700 text-lg px-4 py-2">
                    GPA: 9.16
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Current
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advanced Machine Learning & Deep Learning
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Statistical Analysis & Data Mining
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Natural Language Processing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Big Data Analytics & Cloud Computing
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Academic Excellence</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Current GPA</span>
                      <span className="font-bold text-green-700">9.16/10.0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-gray-700">Academic Standing</span>
                      <span className="font-bold text-blue-700">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology - Computer Science</CardTitle>
                    <p className="text-lg text-gray-600 font-semibold">CVR College of Engineering</p>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Jul 2016 - Aug 2020</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-lg px-4 py-2">
                    GPA: 8.68
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    Completed
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Core Subjects</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Database Management Systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Software Engineering
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Computer Networks & Security
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Foundation Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">Programming</Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">Problem Solving</Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">System Design</Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">Software Development</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="w-8 h-8" />
                <h3 className="text-xl font-bold">Academic Achievement</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Consistent academic excellence with strong performance in both undergraduate and graduate studies
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">9.16</div>
                  <div className="text-sm opacity-90">Masters GPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8.68</div>
                  <div className="text-sm opacity-90">Bachelors GPA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}