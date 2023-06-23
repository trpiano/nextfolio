export interface IGithubRepository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    created_at: string;
    topics: string[];
  }
  