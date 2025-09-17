import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Swetha Gayatri Kandikonda</h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">Senior Data Analyst</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">3+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Azure Certified</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">ML Expert</Badge>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Data Analyst with 3+ years of experience in Azure, Databricks, PySpark, SQL, and Power BI. 
              Skilled in building scalable data pipelines, developing dashboards, and applying ML techniques 
              including XGBoost, deep learning, and NLP.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">85%</p>
                <p className="text-sm text-gray-600">Manual Effort Reduction</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">94%</p>
                <p className="text-sm text-gray-600">ROC AUC Achievement</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">680K+</p>
                <p className="text-sm text-gray-600">Azure Community Reach</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-semibold text-gray-900">Master of Science - Data Science</h5>
                    <p className="text-gray-600">Vellore Institute of Technology</p>
                    <p className="text-sm text-gray-500">Aug 2024 - Apr 2026 | GPA: 9.16</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h5 className="font-semibold text-gray-900">Bachelor of Technology - Computer Science</h5>
                    <p className="text-gray-600">CVR College of Engineering</p>
                    <p className="text-sm text-gray-500">Jul 2016 - Aug 2020 | GPA: 8.68</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improved data accuracy by 20% through advanced data processing techniques
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reduced pipeline failures by 30% with robust monitoring systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Accelerated executive decision-making by 30% with interactive dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}