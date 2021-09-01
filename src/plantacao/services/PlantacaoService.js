import ApiEndpoints from "core/constants/ApiEndpoints";
import { ServiceBase } from "core/service/ServiceBase";

export default class PlantacaoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.plantacoes);
  }
}
