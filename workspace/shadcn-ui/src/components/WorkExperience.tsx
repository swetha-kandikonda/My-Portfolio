import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

export default function WorkExperience() {
  const positions = [
    {
      title: "Senior Data Analyst",
      company: "LTIMindtree",
      period: "Jul 2022 - Jul 2024",
      achievements: [
        "Enhanced organizational decision-making by creating comprehensive Power BI dashboards that delivered real-time performance metrics to stakeholders within 4 months",
        "Increased actionable insights by 30% within 6 months by collaborating with cross-functional teams to define and track key performance indicators (KPIs) for data analysis",
        "Developed and implemented automated data validation pipelines using Azure Databricks, reducing manual effort by 85% and increasing data quality by 10%",
        "Utilized PySpark to conduct advanced data wrangling techniques, leading to a 20% increase in data accuracy and reliability for business decision-making"
      ],
      technologies: ["Power BI", "Azure Databricks", "PySpark", "KPI Development", "Data Validation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Azure Cloud Engineer",
      company: "LTIMindtree",
      period: "Dec 2020 - Jul 2022",
      achievements: [
        "Developed automated workflows using Azure Logic Apps to integrate diverse applications and reduced manual intervention by 80%",
        "Deployed Azure Function Apps to process over 1000 HTTP requests per day, resulting in a 30% increase in efficiency for customers",
        "Utilized Azure PowerShell scripts to automate resource provisioning and configuration, resulting in a 40% reduction in deployment time for cloud infrastructure projects",
        "Recognized as a highly motivated member of Azure Collective on Stack Overflow, contributing 773 answers and reaching 680k people"
      ],
      technologies: ["Azure Logic Apps", "Azure Function Apps", "Azure PowerShell", "Cloud Infrastructure", "Stack Overflow"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey in data analytics and cloud computing with proven track record of delivering impactful solutions at LTIMindtree
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {positions.map((position, index) => (
            <Card key={index} className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{position.title}</CardTitle>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building2 className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{position.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{position.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {position.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={`bg-gradient-to-r ${position.color} hover:opacity-90`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid gap-3">
                  {position.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-blue-700 transition-colors"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Career Impact Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold">85%</p>
                  <p className="text-sm opacity-90">Manual Effort Reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">30%</p>
                  <p className="text-sm opacity-90">Actionable Insights Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">Daily HTTP Requests</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">680K</p>
                  <p className="text-sm opacity-90">Community Reach</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}