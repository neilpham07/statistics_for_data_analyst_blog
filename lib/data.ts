import type { NavLink } from './types'

export const navLinks: NavLink[] = [
  { label: 'Lộ trình học', href: '#roadmap' },
  { label: 'Tất cả bài viết', href: '/articles' },
  { label: 'Github', href: 'https://github.com' },
]

export const heroFlow = [
  { label: 'Data', description: 'Thu thập dữ liệu thô' },
  { label: 'Exploration', description: 'Khám phá và hiểu dữ liệu' },
  { label: 'Sampling', description: 'Lấy mẫu đại diện' },
  { label: 'Inference', description: 'Suy luận từ mẫu' },
  { label: 'Experiment', description: 'Kiểm nghiệm giả thuyết' },
  { label: 'Prediction', description: 'Dự đoán xu hướng' },
  { label: 'Decision', description: 'Ra quyết định từ dữ liệu' },
]

export const businessScenarios = [
  {
    source: 'Marketing nói:',
    claim: 'Campaign giúp doanh thu tăng 15%',
    question: 'Tăng thật hay chỉ là ngẫu nhiên?',
  },
  {
    source: 'Product Team nói:',
    claim: 'Nút màu đỏ giúp tăng conversion',
    question: 'Có bằng chứng không?',
  },
  {
    source: 'Customer Service nói:',
    claim: 'Khách hàng đang rời bỏ nền tảng',
    question: 'Nhóm khách hàng nào đang rời bỏ?',
  },
]

export const analyticsRoadmap = [
  { label: 'Data', description: 'Thu thập và làm sạch dữ liệu' },
  { label: 'EDA', description: 'Khám phá & trực quan hoá' },
  { label: 'Sampling', description: 'Lấy mẫu & ước lượng' },
  { label: 'Probability', description: 'Xác suất & phân phối' },
  { label: 'Inference', description: 'Kiểm định giả thuyết' },
  { label: 'A/B Testing', description: 'Thử nghiệm có kiểm soát' },
  { label: 'Regression', description: 'Mô hình hoá quan hệ' },
  { label: 'Machine Learning', description: 'Học từ dữ liệu' },
  { label: 'Business Decision', description: 'Quyết định có căn cứ' },
]

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type StatisticsModule = {
  id: number
  slug: string
  title: string
  description: string
  difficulty: Difficulty
  hours: number
}

export const statisticsModules: StatisticsModule[] = [
  {
    id: 1,
    slug: 'eda',
    title: 'EDA',
    description: 'Exploratory Data Analysis — khám phá, mô tả và trực quan hoá dữ liệu',
    difficulty: 'Beginner',
    hours: 8,
  },
  {
    id: 2,
    slug: 'sampling',
    title: 'Sampling',
    description: 'Lấy mẫu và ước lượng — đưa ra kết luận từ một phần dữ liệu',
    difficulty: 'Beginner',
    hours: 6,
  },
  {
    id: 3,
    slug: 'statistical-inference',
    title: 'Statistical Inference',
    description: 'Kiểm định giả thuyết, p-value, confidence interval — nền tảng của mọi quyết định',
    difficulty: 'Intermediate',
    hours: 10,
  },
  {
    id: 4,
    slug: 'ab-testing',
    title: 'A/B Testing',
    description: 'Thiết kế thử nghiệm, đo lường kết quả và kết luận chính xác',
    difficulty: 'Intermediate',
    hours: 8,
  },
  {
    id: 5,
    slug: 'regression',
    title: 'Regression',
    description: 'Mô hình hoá quan hệ giữa các biến — dự đoán và giải thích',
    difficulty: 'Intermediate',
    hours: 12,
  },
  {
    id: 6,
    slug: 'classification',
    title: 'Classification',
    description: 'Phân loại dữ liệu và xây dựng mô hình quyết định nhị phân',
    difficulty: 'Advanced',
    hours: 10,
  },
  {
    id: 7,
    slug: 'machine-learning',
    title: 'Machine Learning',
    description: 'Ứng dụng thống kê vào các thuật toán học máy có giám sát',
    difficulty: 'Advanced',
    hours: 14,
  },
  {
    id: 8,
    slug: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    description: 'Phân cụm, giảm chiều và tìm cấu trúc ẩn trong dữ liệu',
    difficulty: 'Advanced',
    hours: 10,
  },
]

export const statisticsQuestions = [
  {
    icon: 'TrendingUp',
    question: 'Khuyến mãi có thực sự làm tăng doanh thu?',
  },
  {
    icon: 'Users',
    question: 'Tôi cần khảo sát bao nhiêu người?',
  },
  {
    icon: 'Percent',
    question: 'Conversion tăng 2% có ý nghĩa không?',
  },
  {
    icon: 'BarChart2',
    question: 'Điều gì ảnh hưởng nhiều nhất đến doanh thu?',
  },
  {
    icon: 'UserMinus',
    question: 'Khách hàng nào có nguy cơ rời bỏ?',
  },
  {
    icon: 'PieChart',
    question: 'Làm sao phân nhóm khách hàng?',
  },
]

export const featuredStatisticsModules = [
  {
    slug: 'eda',
    title: 'EDA',
    subtitle: 'Exploratory Data Analysis',
    description:
      'Trước khi phân tích bất kỳ điều gì, bạn cần hiểu dữ liệu đang nói gì. EDA là bước đầu tiên và quan trọng nhất.',
    hours: 8,
    difficulty: 'Beginner' as Difficulty,
    href: '/modules/eda',
  },
  {
    slug: 'sampling',
    title: 'Sampling',
    subtitle: 'Lấy mẫu & Ước lượng',
    description:
      'Không cần hỏi tất cả 100 triệu người. Học cách rút ra kết luận chính xác từ một mẫu nhỏ đại diện.',
    hours: 6,
    difficulty: 'Beginner' as Difficulty,
    href: '/modules/sampling',
  },
  {
    slug: 'ab-testing',
    title: 'A/B Testing',
    subtitle: 'Thử nghiệm có kiểm soát',
    description:
      'Cách duy nhất để biết điều gì thực sự hiệu quả. Từ thiết kế thử nghiệm đến kết luận có căn cứ.',
    hours: 8,
    difficulty: 'Intermediate' as Difficulty,
    href: '/modules/ab-testing',
  },
]
