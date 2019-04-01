import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jupiter-ru.firebaseio.com/jupiter-ru/'
});

class HttpService {
    get(url) {
        return http.get(url);
    }

    post(url, body) {
        return http.post(url, body)
    }

    delete(url) {
        return http.delete(url)
    }

    put(url, data) {
        return http.put(url, data)
    }
}

export const httpService = new HttpService();