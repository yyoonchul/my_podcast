import { PodcastType, NewsTopic, CareerRole } from '../types';

export const podcastTypes: PodcastType[] = [
  {
    id: 'news',
    title: 'Custom News Podcast',
    description: 'Stay informed with personalized news updates on your favorite topics',
    icon: '📰',
  },
  {
    id: 'career',
    title: 'Career Growth Podcast',
    description: 'Get insights and advice tailored to your professional role',
    icon: '💼',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Podcast',
    description: 'Combine news and career insights with custom topics (Pro Plan)',
    icon: '🎯',
    comingSoon: true,
  },
];

export const newsTopics: NewsTopic[] = [
  {
    id: 'politics',
    title: 'Politics',
    description: 'Stay updated with political news and analysis',
    icon: '🏛️',
  },
  {
    id: 'economy',
    title: 'Economy',
    description: 'Get insights on economic trends and market updates',
    icon: '📈',
  },
  {
    id: 'tech',
    title: 'Technology',
    description: 'Latest developments in technology and innovation',
    icon: '💻',
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Discoveries and breakthroughs in scientific research',
    icon: '🔬',
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Health news and wellness information',
    icon: '🏥',
  },
];

export const careerRoles: CareerRole[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Technical insights and career development for software engineers',
    icon: '👨‍💻',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Product strategy and management insights',
    icon: '📊',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Data analysis and machine learning insights',
    icon: '📊',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Digital marketing and brand strategy insights',
    icon: '📢',
  },
  {
    id: 'designer',
    title: 'Designer',
    description: 'UI/UX design and creative insights',
    icon: '🎨',
  },
]; 