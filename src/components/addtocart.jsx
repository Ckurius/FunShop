import React, { useState, useEffect } from 'react';

function addbtntocart(id) {
  const producte = JSON.parse(localStorage.getItem('producte'));

  console.log(producte);

  const product = (producte) => {
    producte.filter(producte.id === id);
  };

  console.log(product);
  return;
}

export default addbtntocart;
