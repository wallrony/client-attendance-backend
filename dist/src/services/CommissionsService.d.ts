import Commission from "../core/models/Commission";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class CommissionsService extends Service {
    index(doctorId: number): Promise<ServiceResponse<Commission[]>>;
    add(data: Commission): Promise<ServiceResponse<Commission>>;
}
export default CommissionsService;
