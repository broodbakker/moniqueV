export const listWithoutFirstElement = (list: any[]): any[] => {
  const [, ...newList] = list;
  return newList
}






