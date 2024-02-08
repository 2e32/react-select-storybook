import { Fruit, Color, Song, Sport, User, Language, Currency } from '../types';

export const fruits: Fruit[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Lemon' },
  { id: 4, name: 'Orange' },
];

export const numbers = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
];

export const countries = [
  { value: 'DEU', text: 'Germany' },
  { value: 'FRA', text: 'France' },
  { value: 'ITA', text: 'Italy' },
  { value: 'ESP', text: 'Spain' },
  { value: 'GBR', text: 'United Kingdom' },
];

export const months = [
  { value: '01', title: 'January' },
  { value: '02', title: 'February' },
  { value: '03', title: 'March' },
  { value: '04', title: 'April' },
  { value: '05', title: 'May' },
  { value: '06', title: 'June' },
  { value: '07', title: 'July' },
  { value: '08', title: 'August' },
  { value: '09', title: 'September' },
  { value: '10', title: 'October' },
  { value: '11', title: 'November' },
  { value: '12', title: 'December' },
];

export const currencies: Currency[] = [
  { code: 'EUR', label: 'Euro', symbol: '€' },
  { code: 'USD', label: 'Dollar', symbol: '$' },
  { code: 'JPY', label: 'Yen', symbol: '¥' },
  { code: 'TRY', label: 'Lira', symbol: '₺' },
  { code: 'ILS', label: 'Shekel', symbol: '₪' },
  { code: 'RUB', label: 'Ruble', symbol: '₽' },
];

export const colors: Color[] = [
  { id: 1, name: 'Red', color: '#ff0000' },
  { id: 2, name: 'Orange', color: '#ffa500' },
  { id: 3, name: 'Yellow', color: '#ffc400' },
  { id: 4, name: 'Green', color: '#008000' },
  { id: 5, name: 'Blue', color: '#0000ff' },
  { id: 6, name: 'Indigo', color: '#4b0082' },
  { id: 7, name: 'Violet', color: '#ee82ee' },
];

export const songs: Song[] = [
  { id: 1, artist: 'Nirvana', song: 'Smells Like Teen Spirit', year: 1991 },
  { id: 2, artist: 'Gorillaz', song: 'Clint Eastwood', year: 2001 },
  { id: 3, artist: 'Eminem', song: 'Lose Yourself', year: 2002 },
  { id: 4, artist: 'Imagine Dragons', song: 'Radioactive', year: 2012 },
];

export const sportTypes: Sport[] = [
  { guid: 'D0DD29A8-6597-4B14-B6CF-8AB6241A78C0', name: 'Soccer' },
  { guid: 'F430E222-8219-4C6B-98D9-C6C3A7289A79', name: 'Cricket' },
  { guid: 'C1A76917-2298-4CA2-BA07-90E3E5E03CFB', name: 'Basketball' },
  { guid: '2DE5FBF5-84FC-4CC0-9965-DEB791633017', name: 'Field Hockey' },
  { guid: 'D343C00D-3ECB-4B36-81F7-1AF753BB2392', name: 'Tennis' },
  { guid: '40717E6A-A223-4BAF-8C54-D920C89F4684', name: 'Volleyball' },
  { guid: 'AAFACD42-377A-4078-BD72-F36954895EAE', name: 'Table Tennis' },
  { guid: '91254BD6-E3D3-4C81-8617-4688B74CA1F1', name: 'Baseball' },
  { guid: '1473A856-9F28-4BBE-8575-BDD14B516B3A', name: 'Americal Football' },
  { guid: '460E452C-7E65-4A15-A9D0-FB43EBE72799', name: 'Golf' },
];

export const books = [
  { bookId: 1, authorId: 41, title: 'Frankenstein', year: 1818 },
  { bookId: 2, authorId: 67, title: 'Wuthering Heights', year: 1847 },
  { bookId: 3, authorId: 30, title: 'Crime and Punishment', year: 1866 },
  { bookId: 4, authorId: 36, title: 'Peer Gynt', year: 1867 },
  { bookId: 5, authorId: 19, title: 'War and Peace', year: 1867 },
  { bookId: 6, authorId: 19, title: 'Anna Karenina', year: 1877 },
  { bookId: 7, authorId: 30, title: 'The Brothers Karamazov', year: 1879 },
  { bookId: 8, authorId: 14, title: 'Buddenbrooks', year: 1901 },
  { bookId: 9, authorId: 48, title: 'Gitanjali', year: 1910 },
  { bookId: 10, authorId: 5, title: 'The Hobbit', year: 1937 },
];

export const users: User[] = [
  { name: 'Richard', age: 54, email: 'richard@yahoo.com' },
  { name: 'James', age: 31, email: 'james@gmail.com' },
  { name: 'Bill', age: 42, email: 'bill@yandex.ru' },
  { name: 'Mary', age: 25, email: 'mary@outlook.com' },
];

export const programmingLanguages: Language[] = [
  { name: 'C#', type: 'backend', year: 2000 },
  { name: 'Java', type: 'backend', year: 1995 },
  { name: 'Python', type: 'backend', year: 1991 },
  { name: 'JavaScript', type: 'frontend', year: 1995 },
  { name: 'TypeScript ', type: 'frontend', year: 2012 },
];

export const products = [
  { productId: 1, name: 'Adjustable Race', productNumber: 'AR-5381' },
  { productId: 2, name: 'Bearing Ball', productNumber: 'BA-8327' },
  { productId: 3, name: 'BB Ball Bearing', productNumber: 'BE-2349' },
  { productId: 316, name: 'Blade', productNumber: 'BL-2036' },
  { productId: 317, name: 'LL Crankarm', productNumber: 'CA-5965' },
];
