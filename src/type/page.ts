export type FewBooks = {
  bookId: number;
  busies: string;
  name: string;
  total: number;
};

export type BooksType = {
  author: {
    name: string;
  };
  id: number;
  image: string;
  name: string;
  stocks: {
    busy: boolean;
    id: number;
    locationId: number;
  }[];
};
