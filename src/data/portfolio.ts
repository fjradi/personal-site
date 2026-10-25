interface Experience { company: string; role: string; period: string; description: string }
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
    { title: 'AI & applied research', items: ['Machine learning · Federated learning', 'Reinforcement learning · Simulation'] }
  ],
  certifications: ['AWS Certified Machine Learning Engineer – Associate', 'AWS Certified AI Practitioner', 'CompTIA Cybersecurity+', 'Google Cybersecurity'],
  education: { degree: 'B.Eng. in Engineering Physics', institution: 'Institut Teknologi Bandung', period: '2017 — 2021' },
  awards: ['2nd place · Data Analytics FIND IT! 2020', '2nd place · Datavidia Arkavidia 6.0 · 2020']
};
