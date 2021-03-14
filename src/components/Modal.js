import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { colors } from './../theam'
import { signup } from './../actions'
import {Button} from './Component'
import { Col, Row } from 'styled-bootstrap-grid'

import background from './../images/background.png'

Modal.setAppElement('#modal')

const customStyles = {
   overlay: {
      background: 'rgba(0, 0, 0, 0.555)',
      zIndex: 10
   },
   content: {
      padding: '50px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: colors.black,
      border: 'none',
      display: 'flex',
      flexDirection: 'column'
   }
};


export default function ModalCom({t}) {
   
   const modal = useSelector(state => state.signup)
   const closemodal = useDispatch()
   return (
      <Modal
         isOpen={modal}
         onRequestClose={() => closemodal(signup())}
         style={customStyles}
      >
         <Content>
            <Row>
               <Col md={6}>
                  <img src={background}/>
               </Col>
               <Col md={6}>
                  <Input type="text" placeholder={t('menu.username')} />
                  <Input type="password" placeholder={t('menu.password')} />
                  <div style={{ width: '100%' }}>
                     <Select style={{ width: '100%' }}>
                        <option>USD</option>
                     </Select>
                  </div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                     <Select>
                        <option>+855</option>
                     </Select>
                     <Input style={{marginLeft:'20px'}} type="text" placeholder="PhoneNumber" />
                  </div>
                  <Input type="text" placeholder={t('menu.affiliate')} />
                  <span>
                     <Button>{t('menu.signup')}</Button>
                  </span>
               </Col>
            </Row>

         </Content>

      </Modal>
   )
}

const Content = styled.div`
  
`

const Input = styled.input`
  margin:5px 0px;
  font-size: 18px;
  padding: 10px;
  border: none;
  outline:none;
  border-radius: 3px;
  width:100%;
  background: ${colors.gray};
  color: ${colors.white};
  ::placeholder {
    color: ${colors.gray2};
    font-family: "Kantumruy", sans-serif;
  }
`;

const Select = styled.select`
  margin:5px 0px;
  font-size: 18px;
  padding: 10px;
  border: none;
  outline:none;
  border-radius: 3px;
  max-width:100%;
  background: ${colors.gray};
  color: ${colors.white};
`
