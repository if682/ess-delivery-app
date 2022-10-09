import logo from '../../assets/Logo.png'

import './styles.css'

const LandingInfo = () => {
  return (
    <section className="Gradient">
    <img src={logo} alt="Logo" />
    <div className="box">
      <p>Se Cadastre como artista e tenha a oportunidade de ter suas músicas ouvidas por todos os usuários do Esspotify</p>
      <ul>
        <li>+200 mil ouvintes mensais</li>
        <li>Mantenha 100% de propriedade da sua música</li>
        <li>Sem taxa anual para distribuição ilimitada para redes sociais como TikTok, Instagram, YouTube e muito mais</li>
        <li>Mantenha 100% da receita das Plataformas Digitais</li>
      </ul>
    </div>
  </section>
  );
};

export default LandingInfo;
