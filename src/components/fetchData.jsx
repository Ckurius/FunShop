import React, { useEffect, useState } from 'react';

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
    <div className="flex flex-wrap justify-start gap-4 mt-24">
      {data.map((item) => (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        /*           <div className="flex flex-col bg-gray-100 p-4 rounded-md mb-4">
            (<li className="bg-white p-2 rounded shadow">{item.id}</li>), (
            <li className="bg-white p-2 rounded shadow">{item.title}</li>), (
            <li className="bg-white p-2 rounded shadow">{item.price}</li>), (
            <li className="bg-white p-2 rounded shadow">{item.category}</li>), (
            <li className="bg-white p-2 rounded shadow">{item.description}</li>)
            ,<li className="bg-white p-2 rounded shadow">{item.image}</li>)
          </div> */
      ))}
    </div>
  );
};

export default fetchData;
