import { Entry } from "../__generated__/graphql";

const formatDate = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${month}/${day}/${year}`;

}

export const formatAllDates = (entries: Entry[]) => {
  return entries.map(entry => {
    
    const formattedDate = formatDate(entry.date);
    return {...entry, formattedDate: formattedDate};
  });
}