export interface Post {
  id: number;
  slug: string;
  author_image: string;
  date: Date;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export interface Podcast {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  meta: {
    season: number[];
    episode: number[];
    link: string[];
    resource: string[];
  };
}

export enum ContentType {
  Post = 'post',
  Podcast = 'podcast',
}
