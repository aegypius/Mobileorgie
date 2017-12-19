const API_ENDPOINT = 'https://www.metalorgie.com/api/';

class Api {

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json'
    };
  }

  static get(route) {
    return this.request('GET', route, null);
  }

  static put(route, params) {
    return this.request('PUT', route, params);
  }

  static post(route, params) {
    return this.request('POST', route, params);
  }

  static delete(route, params) {
    return this.request('DELETE', route, params);
  }

  static request(method, route, params) {
    const url = `${API_ENDPOINT}${route}`;
    const options = {
      method,
      headers: this.headers(),
      body: params !== null ? JSON.stringify(params) : null
    };
    return fetch(url, options)
      .then(resp => resp.json())
      .catch(error => console.error(error))
    ;
  }
}

export const fetchReviews = (start = 0, limit = 10) => {
  return Api.get(`/review.php?start=${start}&limit=${limit}`);
};

export const fetchNews = (start = 0, limit = 10) => {
  return Api.get(`/news.php?start=${start}&limit=${limit}`);
};

export const fetchBands = (start = 0, limit = 10) => {
  return Api.get(`/band.php?start=${start}&limit=${limit}`);
};

export default Api;
