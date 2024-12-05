import React, { useEffect, useState } from "react";
import pcImage from "../img/pc.webp"; // Substitua pelo caminho correto da imagem
import Asset from "../service/Asset";
import Service from "../service/Service";

const Assets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAssets = async () => {
    try {
      const objectAsset = new Asset();
      const assetsData = await objectAsset.getAssets();
      setAssets(assetsData);
    } catch (error) {
      console.error("Erro ao buscar os assets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center">Lista de Assets</h1>

      {loading ? (
        <p className="text-center">Carregando assets...</p>
      ) : (
        <div className="row">
          {assets.map((asset, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-2">
                <img src={pcImage} className="card-img-top" alt="PC" />
                <div className="card-body">
                  <h5 className="card-title">{asset.getHost()}</h5>
                  <p className="card-text">
                    <strong>OS:</strong> {asset.getOS()}
                  </p>
                  <p className="card-text">
                    <strong>IP:</strong> {asset.getIp()}
                  </p>
                  <p className="card-text">
                    <strong>MAC:</strong> {asset.getMac()}
                  </p>
                  <p className="card-text">
                      <table className="table table-striped">
                        <thead>
                            <th>Porta</th>
                            <th>Serviço</th>
                            <th>Versão</th>
                        </thead>
                        <tbody>
                              {asset.getServices().map((service: Service, idx: number) => (
                                <tr key={idx}>
                                  <td>{service.getPort()}</td>
                                  <td>{service.getService()}{" "}</td>
                                   <td>{service.getVersion()}</td>
                                </tr>
                              ))}
                          </tbody>
                      </table>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assets;
