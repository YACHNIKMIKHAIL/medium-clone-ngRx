enum TagListEnum {
      RERUM = "rerum",
      MAIORES = "maiores",
      OMNIS = "omnis",
      QUAE = "quae",
}
export interface AuthorInterface {
      bio: string | null;
      following: boolean;
      image: string;
      username: string;
}

export interface FeedInterface {
      author: AuthorInterface;
      body: string;
      createdAt: string;
      description: string;
      favorited: boolean;
      favoritesCount: number;
      slug: string;
      tagList: keyof typeof TagListEnum;
      title: string;
      updatedAt: string;
}

export interface GetFeedResponseInterface {
      articles: FeedInterface[];
}
