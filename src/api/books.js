import axios from 'axios';
import config from '../config';


export const fetchBooks = () => {
    return axios.request({
        url: config.API_URL + `/api/books`,
        method: 'GET'
    });
};

export const updateBook = (item) => {
    return axios.request({
        url: config.API_URL + `/api/books/update-book`,
        method: 'PATCH',
        data: item
    });
};

export const addBook = (item) => {
    return axios.request({
        url: config.API_URL + `/api/books/`,
        method: 'POST',
        data: item
    });
};

export const deleteBook = (item) => {
    return axios.request({
        url: config.API_URL + `/api/books/delete-book/${item.id}`,
        method: 'DELETE'
    });
};
