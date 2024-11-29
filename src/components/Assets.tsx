import React, { useEffect, useState } from "react";
import pcImage from '../img/pc.webp';
import Asset from "../service/Asset";




const Assets = () => {

    const [assets, setAssets] = useState<Asset[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAssets = async () => {

        try{
            const objectAsset = new Asset();
            const assetsData = await objectAsset.getAssets();
            setAssets(assetsData);
        }catch (error){
            console.error("Erro ao buscar o asset");

        }finally{
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
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img src={pcImage} className="card-img-top" alt="PC" />
                <div className="card-body">
                  <h5 className="card-title">{asset.getHost()}</h5>
                  <p className="card-text">
                    {/* <strong>OS:</strong> {asset.os} */}
                  </p>
                  <p className="card-text">
                    <strong>IP:</strong> {asset.getIp()}
                  </p>
                  <p className="card-text">
                    {/* <strong>MAC:</strong> {asset.mac} */}
                  </p>
                  <p className="card-text">
                    <strong>Serviços:</strong>{" "}
                    {/* {asset.services.join(", ") || "Nenhum serviço ativo"} */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    );
}


export default Assets;