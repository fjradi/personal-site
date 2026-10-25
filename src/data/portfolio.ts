interface Experience { company: string; role: string; period: string; description: string }
interface AiExploration { area: string; title: string; description: string; skills: string[] }
interface CompetitionResult { title: string; rank: number; teams: number; url: string }
export const portfolio = {
  name: 'Fajar Adi Nugroho',
  title: 'Software Engineer',
  location: 'Bandung, Indonesia',
  introduction: 'Hands-on experience in end-to-end software development across diverse industries.',
  email: 'fjradi96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fajar-adi-nugroho/',
  current: {
    company: 'CAD-IT Consultants (ASIA)', role: 'IoT Application Engineer', period: 'October 2021 — present',
    description: 'End-to-end software development across client projects in manufacturing, process, energy, and other industries.'
  } satisfies Experience,
  experience: [
    { company: 'Telkom · Digital Business', role: 'Internet of Things Engineer Intern', period: 'February — August 2021', description: 'Implemented an ESP32-based smart air-conditioning prototype for thermal comfort and designed its printed circuit board.' },
    { company: 'GDP Labs', role: 'Artificial Intelligence Engineer Intern', period: 'June — August 2020', description: 'Conducted literature research and performance analysis on federated learning.' }
  ] satisfies Experience[],
  research: {
    title: 'Understanding how autonomous vehicles find their way.',
    description: 'A 2021 Engineering Physics thesis studying how localization affects lateral control in autonomous vehicles. The work combined Unscented Kalman Filter localization and integral backstepping control, with Soft Actor-Critic reinforcement learning for controller tuning and simulation using ROS and CARLA.',
    tags: ['Localization & control', 'Reinforcement learning', 'ROS', 'CARLA']
  },
  skills: [
    { title: 'Software engineering', items: ['Python · C++ · Node.js · Golang', 'Databases · SQL · Redis', 'End-to-end development'] },
    { title: 'Platforms & delivery', items: ['Linux · Docker · CI/CD', 'Apache Kafka'] },
    { title: 'Machine learning & AI', items: ['Machine learning · Deep learning', 'Computer vision · Natural language processing', 'Federated learning · Reinforcement learning', 'Data analysis & feature engineering', 'Model evaluation & interpretation'] }
  ],
  ai: {
    title: 'Learning through experiments.',
    introduction: 'Notebook experiments across structured data, images, and language, alongside research in federated and reinforcement learning.',
    competitionSummary: 'Achieved top-3% team placements in Shopee Code League Product Detection and Marketing Analytics, and a top-6% placement in Sentiment Analysis.',
    competitions: [
      { title: 'Product Detection', rank: 22, teams: 823, url: 'https://www.kaggle.com/competitions/shopee-product-detection-student/leaderboard' },
      { title: 'Marketing Analytics', rank: 10, teams: 368, url: 'https://www.kaggle.com/competitions/student-shopee-code-league-marketing-analytics/leaderboard' },
      { title: 'Sentiment Analysis', rank: 21, teams: 356, url: 'https://www.kaggle.com/competitions/student-shopee-code-league-sentiment-analysis/leaderboard' }
    ] satisfies CompetitionResult[],
    explorations: [
      { area: 'Machine learning', title: 'From features to predictions', description: 'Classification and regression experiments, including data analysis, feature engineering, and model comparison.', skills: ['Classification & regression', 'Feature engineering', 'Model evaluation'] },
      { area: 'Computer vision', title: 'Learning from images', description: 'Image classification and fingerprint matching experiments, including image preprocessing and evaluation.', skills: ['Image classification', 'Feature matching', 'Image processing'] },
      { area: 'Natural language processing', title: 'Understanding sentiment', description: 'Text preprocessing and sentiment analysis experiments, including model training and evaluation.', skills: ['Text preprocessing', 'Sentiment analysis', 'Text classification'] }
    ] satisfies AiExploration[]
  },
  certifications: ['AWS Certified Machine Learning Engineer – Associate', 'AWS Certified AI Practitioner', 'CompTIA Cybersecurity+', 'Google Cybersecurity'],
  education: { degree: 'B.Eng. in Engineering Physics', institution: 'Institut Teknologi Bandung', period: '2017 — 2021' },
  awards: ['2nd place · Data Analytics FIND IT! 2020', '2nd place · Datavidia Arkavidia 6.0 · 2020']
};
