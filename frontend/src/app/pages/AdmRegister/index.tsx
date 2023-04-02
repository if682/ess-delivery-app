import AppContainer from "../../components/Container";
import CustomButton from "../../components/CustomButton";
import { Input } from "../../components/Input";

import './index.css'

export default function AdmRegister() {

  return (
    <AppContainer>
      <div className="adm-screen-container">
        <div className="adm-screen-wrapper">
          <h2>INFORMAÇÕES PESSOAIS</h2>
          <div className="input-wrapper">
            <div className="input-div">
              <label>Nome Completo *</label>
              <Input type="text" placeholder="Joaquim Pinto"/>
            </div>
            <div className="input-div">
              <label>Email *</label>
              <Input type="text" placeholder="joca@email.com"/>
            </div>
            <div className="input-div">
              <label>Número de telefone *</label>
              <Input type="text" placeholder="(81) 9 9999-9999"/>
            </div>
            <div className="input-div">
              <label>Senha inicial *</label>
              <Input type="password" placeholder="*********"/>
            </div>
            <div className="input-div">
              <label>Repetir senha inicial *</label>
              <Input type="password" placeholder="*********"/>
            </div>
            <div className="input-div">
              <label>CPF *</label>
              <Input type="text" placeholder="123.123.123-12"/>
            </div>
          </div>
        </div>
        <div className="adm-screen-wrapper">
          <h2>ENDEREÇO</h2>
          <div className="input-wrapper">
            <div className="input-div">
              <label>Estado *</label>
              <Input type="text" placeholder="Pernambuco"/>
            </div>
            <div className="input-div">
              <label>Cidade *</label>
              <Input type="text" placeholder="Recife"/>
            </div>
            <div className="input-div">
              <label>Bairro *</label>
              <Input type="text" placeholder="Boa Viagem"/>
            </div>
            <div className="input-div">
              <label>Rua *</label>
              <Input type="password" placeholder="Rua das alamedas"/>
            </div>
            <div className="input-div">
              <label>Complemento *</label>
              <Input type="password" placeholder="N 123, Apto 101"/>
            </div>
            <div className="input-div">
              <label>Referência *</label>
              <Input type="text" placeholder="Próximo a padaria Doce Pão"/>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', margin: 'auto', marginTop: '24px'}}>
          <CustomButton large title={'Cadastrar Administrador'} onClick={() => {}}></CustomButton>
        </div>
      </div>
    </AppContainer>
  )
}