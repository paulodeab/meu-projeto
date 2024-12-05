import axios from "axios";
import Service from "./Service";


enum API{
    BASE_URL = "http://127.0.0.1:8000",
}

enum ENDPOINT{

    ASSETS = "/scan",
}


class Asset {
    private ip: string;
    private hostname: string;
    private mac: string;
    private os: string;
    private services: Service[];
    private static readonly GETFULLURL = `${API.BASE_URL}${ENDPOINT.ASSETS}`;
  
    constructor(
      ip: string = "",
      hostname: string = "",
      mac: string = "",
      os: string = "",
      services: Service[] = []
    ) {
      this.ip = ip;
      this.hostname = hostname;
      this.mac = mac;
      this.os = os;
      this.services = services;
    }
  
    public getIp() {
      return this.ip;
    }
  
    public getHost() {
      return this.hostname;
    }
  
    public getMac() {
      return this.mac;
    }
  
    public getOS() {
      return this.os;
    }
  
    public getServices() {
      return this.services;
    }
  
    // Método para buscar os assets da API
    public async getAssets(): Promise<Asset[]> {
      try {
        const response = await axios.get(Asset.GETFULLURL);
  
        // Validação de resposta
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Resposta da API inválida");
        }
  
        // Mapeamento dos dados da API para instâncias de Asset
        const assets: Asset[] = response.data.map((item: any) => {
        console.log(">>>> "+ item.open_ports);
        const services = Service.getServices(item.open_ports); // Obtenção dos serviços

          return new Asset(item.ip, item.hostname, item.mac, item.os, services);
        });
  
        return assets;
      } catch (error) {
        console.error("Erro ao buscar os assets:", error);
        throw error;
      }
    }
  }
  
  export default Asset;