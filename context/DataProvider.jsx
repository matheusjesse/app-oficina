import React, { useState, useMemo } from 'react';
import DataContext from './DataContext';
import clientDataMock from '../mocks/clientMock';

function DataProvider({ children }) {
  const [clientData, setClientData] = useState(clientDataMock);
  const [currentClient, setCurrentClient] = useState({});
  const [notFound, setNotFound] = useState(true);
  const [carSelected, setCarSelected] = useState({});
  const context = useMemo(() => ({
    clientData,
    setClientData,
    currentClient,
    setCurrentClient,
    notFound,
    setNotFound,
    carSelected,
    setCarSelected
  }), [
    clientData,
    currentClient,
    setCurrentClient,
    notFound,
    setNotFound,
    carSelected,
    setCarSelected
  ]);

  return (
    <DataContext.Provider value={ context }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;