import {httpService} from "./HTTPService";

export const extractData = (res, list) => {
  const data = res.data;
  const users = [];
  for (let key in data) {
    const user = data[key];
    user.id = key;
    users.push(user);
  }
  users.forEach((user) => {
    list.push(user)
  });
};

class AxiosService {
  get(section) {
    return httpService.get(section + '.json')
  }
  create(section, data) {
    return httpService.post(section + '.json', data);
  }
  delete(section, id) {
    const url = section + '/' + id + '.json';
    return httpService.delete(url);
  }
  async ifAdmin() {
    const url = 'loggedIn.json';
    const {data} = await httpService.get(url);
    return data;
  }
  put(url, data) {
    return httpService.put(url, data)
  }
}

export const axiosService = new AxiosService();