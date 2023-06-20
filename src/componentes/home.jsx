import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup, Form } from 'reactstrap';
import { useFetch } from './useFetch';


const Home = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const data = useFetch("https://crud-giweb-default-rtdb.firebaseio.com/Concesionario.json");


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const enviar = () => {
    console.log("hi");
  }



  return (
    <div>
      {data ? (
        <div className='cabecera'>
          <br />
          <br />
          <p><h1>Saldo</h1></p>
          <p>0</p>

          <select name="acronymCoin">
            <option>{data.Nissan.Nombre}</option>
            <option>bit</option>
            <option>udst</option>
          </select>
          <br />
          <br />
          <br />
          <Button onClick={openModal}>Enviar money</Button>
          <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal">
            <ModalHeader >Envio de Cryptodivisas</ModalHeader>
            <ModalBody>
              <Form >
                <FormGroup>
                  <Label for="account">Account</Label>
                  <Input type="text" name="account" id="account" placeholder="0x...." />
                  <Label for="monto">Monto</Label>
                  <Input type="number" name="monto" id="monto" placeholder="#" />
                  <Label for="divisa">Seleccionar Divisa</Label>
                  <Input type="select" name="acronymCoin" id="divisa">
                    <option>eth</option>
                    <option>sol</option>
                    <option>bit</option>
                    <option>udst</option>
                  </Input>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type='submit' onClick={enviar}>Enviar</Button>
              <Button color="secondary" onClick={closeModal}>Cancelar</Button>
            </ModalFooter>
          </Modal>

        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
      <Navbar />
      {/* Resto del código */}

    </div>
  )
}

export default Home;
