const API_KEY = '34909269-13b0723947e6e83e8bc89bfad'; // Мій ключ
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

export const getSearch = (searchText, page) => {

  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};