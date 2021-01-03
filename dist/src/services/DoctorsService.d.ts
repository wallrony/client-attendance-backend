import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class DoctorsService extends Service {
    show(id: number): Promise<ServiceResponse<Doctor>>;
    update(data: Doctor): Promise<ServiceResponse<Doctor>>;
}
export default DoctorsService;
