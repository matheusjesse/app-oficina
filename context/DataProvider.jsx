import React, { useState, useMemo } from 'react';
import DataContext from './DataContext';
import clientDataMock from '../mocks/clientMock';
import productMock from '../mocks/productMock';

function DataProvider({ children }) {
  const [clientData, setClientData] = useState(clientDataMock);
  const [currentClient, setCurrentClient] = useState({});
  const [notFound, setNotFound] = useState(true);
  const [carSelected, setCarSelected] = useState({});
  const [detailPage, setdetailPage] = useState(false);
  const [productsData, setProductsData] = useState(productMock)
  const context = useMemo(() => ({
    clientData,
    setClientData,
    currentClient,
    setCurrentClient,
    notFound,
    setNotFound,
    carSelected,
    setCarSelected,
    detailPage,
    setdetailPage,
    productsData,
    setProductsData
  }), [
    clientData,
    currentClient,
    setCurrentClient,
    notFound,
    setNotFound,
    carSelected,
    setCarSelected,
    detailPage,
    setdetailPage,
    productsData
  ]);

  return (
    <DataContext.Provider value={ context }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;