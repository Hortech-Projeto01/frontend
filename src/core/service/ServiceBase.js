import axios from "axios";

/**
 * Superclasse que serve como base para as classes compreendidas como Service.
 */
export class ServiceBase {
  /**
   * @constant {string} baseUrl - Endereço da API
   */
  baseUrl = process.env.REACT_APP_API_URL;
  endpoint;

  /**
   * Construtor da classe ServiceBase
   * @constructor
   * @param {string} endpoint - Nome da rota base para acessar os métodos dessa entidade na API
   */
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll(options = {}) {
    const requestParams = new URLSearchParams(options);
    return axios.get(
      `${this.baseUrl}${this.endpoint}?${requestParams.toString()}`
    );
  }

  create(values) {
    return axios.post(`${this.baseUrl}${this.endpoint}`, values);
  }

  //TODO: getById, save/create, update, delete.
}
