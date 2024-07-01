import React, { useEffect, useState } from 'react';
import addbtntocart from './addtocart';

const fetchData = () => {
  // State für die Daten
  const [data, setData] = useState([]);
  // State für Ladezustand
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Funktion zum Abrufen der Daten
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
        localStorage.setItem('producte', JSON.stringify(result));
        setLoading(false);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Leeres Array bedeutet, dass dieser Effekt nur einmal beim Mounten ausgeführt wird

  if (loading) {
    return <div>Lade Daten...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-24">
      {data.map((item) => (
        <div className="card card-compact bg-base-300 w-96 h-26 border-base-300 shadow-xl  mb-4 border">
          <figure className="flex-shrink-0 ">
            <img
              src={item.image}
              alt="Kein Bild"
              className="object-cover h-24 flex-shrink-0"
            />
          </figure>
          <div className="card-body flex flex-col justify-between flex-grow">
            {/* <h2 className="card-title text-center h-24">{item.title}</h2> */}

            {/* <p className="flex-grow">{item.description}</p> */}
            <div
              tabIndex={0}
              className="collapse text-center h-full collapse-arrow border-base-300 bg-base-200 border"
            >
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content ">
                <p>{item.description}</p>
              </div>
            </div>

            <p className="text-right mb-0">{item.price}€</p>

            <button
              className="btn btn-primary mt-0"
              onClick={() => addbtntocart(item.id)}
              key={item.id}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default fetchData;
