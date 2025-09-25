import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Target, TrendingUp } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Lending Club - Loan Defaulter Classification",
      period: "Jan 2025 - Present",
      description: "Deployed a loan defaulter prediction model using imbalanced dataset, eliminating 40% features through feature engineering.",
      achievements: [
        "Developed a predictive model using Machine learning that classified loan defaulters with 84\% F1 score by leveraging scikit-learn.",
        "Streamlined model performance by strategically reducing the feature space from 150 to 40, using advanced feature engineering.",
        "Improved final model F1-score by 8\% using KNN imputation to treat missing values and statistical methods to remove outliers."
      ],
      technologies: ["Python", "XGBoost", "Scikit-learn", "KNN", "Feature Engineering", "Optuna", "EDA"],
      metrics: { features_reduced: "40%", outliers_removed: "0.1%", method: "XGBoost + Optuna" },
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Deep Semantic & Collaborative Recommendations for E-commerce",
      period: "Jan 2025 - Apr 2025",
      description: "Built a hybrid recommendation engine for video games, combining SVD-based collaborative filtering with content-based methods to improve results.",
      achievements: [
        "Developed a hybrid model to solve the cold-start problem, boosting recommendation coverage for new items in the catalog to 90\%.",
        "Leveraged Generative AI to author enhanced product descriptions,resulting in a 50\% lift in the final Precision@k metric.",
        "Achieved 23\% Precision@k, by implementing a weighted formula to combine user behavior and content embedding similarity scores."
      ],
      technologies: ["Python", "SVD", "Sentence Transformers", "Collaborative Filtering", "Content-Based Filtering", "Cosine Similarity"],
      metrics: { precision: "~20%", recall_boost: "15%", method: "Hybrid" },
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Amazon Reviews - Sentiment Analysis",
      period: "Aug 2024 - Dec 2024",
      description: "Collaborated Natural language processing and Deep learning techniques to perform sentiment analysis on imbalanced Amazon reviews.",
      achievements: [
        "Conducted text preprocessing using NLTK and created 100 dimension embeddings using Gensim's CBOW, Skipgram and Fasttext",
        "Employed XGBoost model, CNN and RNN using embeddings as features with hyperparameter tuning to achieve 94% ROC AUC score"
      ],
      technologies: ["Python", "NLTK", "Gensim", "XGBoost", "CNN", "RNN", "FastText", "Deep Learning"],
      metrics: { roc_auc: "94%", embeddings: "100D", models: "XGBoost + CNN + RNN" },
      color: "from-green-500 to-green-600"
    },
    {
      title: "Interactive Tableau Dashboard: Urban vs Rural Education Analysis",
      period: "Aug 2024 - Dec 2024",
      description: "Uncovered key factors influencing education in urban vs. rural areas by developing interactive Tableau dashboards highlighting disparities.",
      achievements: [
        "Identified correlations between school facilities (washrooms) and student retention rates, enabling data-driven insights into education accessibility",
        "Enhanced stakeholder understanding of education gaps by visualizing multi-dimensional datasets in Tableau, driving actionable discussions on policy and resource allocation"
      ],
      technologies: ["Tableau", "Data Visualization", "Statistical Analysis", "Dashboard Design", "Policy Analytics"],
      metrics: { insights: "Multi-dimensional", impact: "Policy Discussions", correlation: "Facility-Retention" },
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of recent data science and machine learning projects demonstrating practical application of technical skills
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${project.color} text-white min-w-fit`}>
                    <Target className="w-8 h-8" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Metrics</h5>
                      <div className="space-y-2">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center">
                            <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                            <span className="font-semibold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in seeing more projects or discussing collaboration?</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <ExternalLink className="w-4 h-4 mr-2" />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}