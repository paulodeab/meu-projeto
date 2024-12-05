class Service {
    private service: string;
    private port: number;
    private version: string;
  
    constructor(port: number = 0, service: string = "", version: string = "") {
      this.service = service;
      this.port = port;
      this.version = version;
    }
  
    public getService() {
      return this.service;
    }
  
    public getPort() {
      return this.port;
    }
  
    public getVersion() {
      return this.version;
    }
  
    // Método estático para criar uma lista de serviços a partir de um array
    public static getServices(ports: [number, string, string][]): Service[] {
      console.log(">>>>>>" + ports)
      return ports.map(
        (portInfo) => new Service(portInfo[0], portInfo[1], portInfo[2])
      );
    }
  }
  
  export default Service;
  