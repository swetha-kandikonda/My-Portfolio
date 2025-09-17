import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Cloud, BarChart3, Database, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "C#", "Microsoft SQL Server", "KQL", "ADO.NET", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: ["Machine Learning", "Regression", "Classification", "Data Cleaning", "Data Preprocessing", "Data Transformation", "Feature Engineering", "Cross Validation", "Deep Learning", "Neural Networks", "Natural Language Processing", "Sentiment Analysis", "Generative AI", "Large Language Models", "Huggingface", "LLM", "Gen AI"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "XGBoost", "SciPy", "NLTK", "SpaCy", "PyTorch", "Optuna", "Transformers", "Ollama"]
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: ["Microsoft Azure", "Databricks", "Logic Apps", "PowerShell", "Azure CLI", "Azure Runbooks", "Azure Service Bus", "Data Lake"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      skills: ["Microsoft Power BI", "Data Visualization", "Interactive Dashboards", "KPI Development"]
    },
    {
      title: "Other Technologies",
      icon: <Database className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      skills: ["SQL Server Management System", "MS Excel", "Microsoft Power Automate", "PySpark", "ASP.NET MVC", "ASP.NET Web API", "HTML", "CSS", "Documentation", "Critical Thinking", "Continual Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the data science and analytics technology stack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <span className="text-xl font-bold text-gray-900">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">773</div>
                  <div className="text-sm opacity-90">Stack Overflow Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm opacity-90">Daily HTTP Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-sm opacity-90">ML Model Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}