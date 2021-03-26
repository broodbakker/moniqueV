export const navLinks = {
  home: '/',
  quirky: '/quirky',
  human: '/human',
  geschiedenis: '/geschiedenis',
  nature: '/nature',
  space: "/space",
  tech: "/tech"
}

export const subjectNames = ['Recent', 'history', 'Nature', 'Human', 'Quirky', 'Space', 'Tech']

export const tabNameToIndex: { [key: number]: string } = {
  0: "/",
  1: "/history",
  2: "/nature",
  3: "/human",
  4: "/quirky",
  5: "/space",
  6: "/tech"
}

export const indexToTabName: { [key: string]: number } = {
  "/": 0,
  "/history": 1,
  "/nature": 2,
  "/human": 3,
  "/quirky": 4,
  "/space": 5,
  "/tech": 6
}


export const postsPerPage = 8