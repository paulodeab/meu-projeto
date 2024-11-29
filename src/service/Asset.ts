import axios from "axios";
import Service from "./Service";


enum API{
    BASE_URL = "https://localhost.com:58668",
}

enum ENDPOINT{

    ASSETS = "/scan",
}


class Asset{

    private ip: string;
    private hostname: string;
    private mac: string;
    private os: string;
    private services: Service[];
    private static readonly GETFULLURL = `${API.BASE_URL}${ENDPOINT.ASSETS}`;

    constructor(ip: string = "", hostname: string = "", mac: string = "", os: string = "", service: Service[] = []){
        this.ip = ip;
        this.hostname = hostname;
        this.mac = mac;
        this.os = os;
        this.services = service;
    }

    public getIp(){
        return this.ip;
    }

    public getHost(){
        return this.hostname;
    }



    public async getAssets(): Promise<Asset[]>{

        try{
            const response = await axios.get(Asset.GETFULLURL);
            const assets: Asset[] = response.data.map(
                (item: any) => 
                    new Asset(item.ip, item.hostname, item.mac, item.os)        
            );
            return assets;

        }catch(error ){
            console.error("Erro ao buscar os assets:", error);
            throw error;
        }
    }

}

export default Asset;