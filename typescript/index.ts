
export interface PostData {
  default: { attributes: any, html: string }
  attributes: {
    templateKey: string;
    titel: string;
    Subtitel: string
    date: Date;
    image: string;
    onderwerp: string
    auteur: string;
    tags: string[]
  }
  html: string
  slug: string
}