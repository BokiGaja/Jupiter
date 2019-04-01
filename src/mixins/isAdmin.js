import { axiosService } from "../../services/AxiosService";

export const isAdmin = {
    async created(){
        this.isAdmin = await axiosService.ifAdmin();
    }
};