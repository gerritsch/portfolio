export const BlogCategories: BlogCategory[] = [
  {
    id: 0,
    name: 'Daily Blog',
    description: 'My daily blog where I mostly write about personal development topics.',
  },
];

export const BlogArticles: BlogArticle[] = [
  {
    id: 1,
    name: 'Daily Blog - Day 0',
    description:
      'The first blog entry and the first night before starting the 30 day experiment of waking up at 4:30 am and starting a new morning routine.',
    link: 'blog/articles/daily-blog-0001',
    date: new Date(2020, 4, 18),
    thumbnail: {
      small: 'assets/blog/articles/waking-up-early/article-thumbnail-small.jpg',
      medium: '/assets/blog/articles/waking-up-early/article-thumbnail-medium.jpg',
      large: '/assets/blog/articles/waking-up-early/article-thumbnail-large.jpg',
    },
    categories: [getCategoryById(0)],
  },
];

export interface BlogCategory {
  id: number;
  name: string;
  description: string;
}

export interface BlogArticle {
  id: number;
  name: string;
  description: string;
  link: string;
  date: Date;
  thumbnail: {
    small: string;
    medium: string;
    large: string;
  };
  categories: BlogCategory[];
}

function getCategoryById(id: number): BlogCategory {
  BlogCategories.forEach((category) => {
    if (category.id === id) {
      return category;
    }
  });

  return;
}
