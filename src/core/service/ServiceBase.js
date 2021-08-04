import axios from "axios";

export class ServiceBase {
  baseUrl = process.env.REACT_APP_API_URL;
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get(options = {}) {
    const requestParams = new URLSearchParams(options);
    return axios.get(
      `${this.baseUrl}/${this.endpoint}?${requestParams.toString()}`
    );
  }

  //TODO: getById, save/create, update, delete.
}
