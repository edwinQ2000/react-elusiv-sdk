import React, { Fragment } from 'react'
import Navbar from './navbar';
import UniTx from './uniTx';
import { useFetch } from './useFetch';
import { Table } from 'reactstrap';

const Tx = () => {
  const data = useFetch("https://crud-giweb-default-rtdb.firebaseio.com/Concesionario.json");
  return (

    <>
      <div class='cabecera'>
        {data ? (
          <Fragment>

            {data.map((data, key) => <p>{data.Nombre}</p>)}
          </Fragment>
        ) : (
          <p>Loaging...</p>
        )}
      </div>

      <Navbar />

    </>

  )
}

export default Tx;