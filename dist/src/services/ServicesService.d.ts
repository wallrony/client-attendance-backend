import ServiceModel from "../core/models/Service";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class ServicesService extends Service {
    index(attendanceID: number): Promise<ServiceResponse<ServiceModel[]>>;
    add(data: ServiceModel): Promise<ServiceResponse<ServiceModel>>;
    update(data: ServiceModel): Promise<ServiceResponse<ServiceModel>>;
    delete(id: number): Promise<ServiceResponse<boolean>>;
}
export default ServicesService;
