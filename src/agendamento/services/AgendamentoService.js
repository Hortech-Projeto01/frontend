import ApiEndpoints from "core/constants/ApiEndpoints";
import { ServiceBase } from "core/service/ServiceBase";
import axios from "axios";

export default class AgendamentoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.agendamentos);
  }

  getAgendamentoPlantacao(idPlantacao, dia) {
    return axios.get(
      `${super.baseUrl}${ApiEndpoints.user.agendamentos}/${idPlantacao}&${dia}`
    );
  }
}
