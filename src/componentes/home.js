import React from 'react'
import Navbar from './navbar';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Input,Label, FormGroup,Form} from 'reactstrap';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
  return (
    <div>
    <div class='cabecera'>
      <br/>
      <br/>
      <p> <h1>Saldo </h1></p>
      <p>0</p>
      <select name="coins">
      <option>eth</option>
      <option>sol</option>
      <option>bit</option>
      <option>udst</option>
    </select>
    <br/>
    <br/>
    <br/>
    <Button onClick={this.toggle}>Enviar money</Button>
    </div>


    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Envio de Cryptodivisas</ModalHeader>
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="account">Account</Label>
          <Input type="text" name="account" id="account" placeholder="0x...." />
          <Label for="monto">Monto</Label>
          <Input type="number" name="monto" id="monto" placeholder="#" />
          <Label for="divisa">Seleccionar Divisa</Label>
          <Input type="select" name="divisa" id="divisa">
            <option>eth</option>
            <option>sol</option>
            <option>bit</option>
            <option>udst</option>
          </Input>
        </FormGroup>
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Enviar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      <Navbar/>
    </div>
  )
}
}

export default Home;
