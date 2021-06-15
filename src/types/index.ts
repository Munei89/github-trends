export interface IGitHubState {
  loading: boolean;
  error: boolean;
  repos: IRepositeries[];
  developers: IDeveloper[];
}

export interface IRepositeries {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string | null;
  languageColor: string | null;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: IBuiltBy[];
}

export interface IBuiltBy {
  username: string;
  url: string;
  avatar: string;
}

export interface IDeveloper {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: {
    repositoryName: string | null;
    description: string | null;
    url: string | null;
  };
}
