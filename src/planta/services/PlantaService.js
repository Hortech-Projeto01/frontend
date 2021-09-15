import ApiEndpoints from "core/constants/ApiEndpoints";
import { ServiceBase } from "core/service/ServiceBase";

export default class PlantaService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.plantas);
  }
}