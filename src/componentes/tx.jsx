import React from 'react'
import Navbar from './navbar';
import { Table } from 'reactstrap';

const Tx = () => {
  return (  
    <div>
        <div class='cabecera'>
        
        <Table>
        
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          </tbody>
          </Table>
          <Table>
          
          <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          </tbody>
          
          </Table>
          <Table>
          <tbody>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
    <Navbar/>
    </div>
  )
}

export default Tx;