import AppContainer from "../../components/Container";
import CustomButton from "../../components/CustomButton";
import { useParams } from 'react-router-dom';
import GetReservationById from "../../hooks/getReservationById";
import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IconBathroomNumber, IconBedroomNumber, IconGuestNumber, IconMinus, IconPlus, IconRangeDate, IconStarUnselected } from "../../assets/icons";
import { Input } from "../../components/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const MakeReservationContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 450px;
    align-items: left;
`;

const ClickableIcon = styled.div`
    cursor: pointer;
    align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWidget = styled.div`
    display: flex;
    align-items: center;
    gap: 8px
`;


const ImageContainer = styled.div`
  display: flex;
  flex: 1; /* Define o tamanho da row de imagens como 1 */
  gap: 10px; /* Define o espaço de 10 pixels entre as imagens */
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%; /* Define a largura da imagem como 100% */
`;

const TitleText = styled.span`
  color: #717171;
  font-size: 40px;
`;

const PriceText = styled.span`
  color: #717171;
  font-size: 30px;
  font-weight: bold;
`;


const DescriptionTitleText = styled.span`
  color: #717171;
  font-size: 30px;
`;

const DescriptionIconText = styled.span`
  color: #717171;
  font-size: 24px;
`;

const SizedBoxHorizontal = styled.hr`
    margin-left:5px;
    margin-right:5px;
`;

const SizedBoxVertical = styled.hr`
    margin-top:5px;
    margin-bottom:5px;
`;

const DescriptionReservationMakeText = styled.span`
  color: #717171;
  font-size: 20px;
`;

const DescriptionBodyText = styled.span`
  color: #717171;
  font-size: 25px;
  text-align: justify;
  margin-bottom: 20px;
  margin-top: 20px;
`;


const Divider = styled.hr`
  margin: 40px 0;
  border: none;
  border-top: 2px solid #ccc;
  width: 100%; /* Garante que o Divider ocupe toda a largura disponível */
  color: #6E7491;
`;

export default function BookingPage() {
    const { id } = useParams();
    const { reservation } = GetReservationById({ id: id as string })
    const [guestNumber, setGuestNumber] = useState(0);

    return (
        <AppContainer>
            <Container>
                <Row>
                    <TitleText>{reservation?.name + ", " + reservation?.city}</TitleText>
                    {IconStarUnselected}
                </Row>
                <ImageContainer>
                    <Image src="https://via.placeholder.com/400x400" alt="Imagem aleatória 1" />
                    <Image src="https://via.placeholder.com/400x400" alt="Imagem aleatória 2" />
                    <Image src="https://via.placeholder.com/400x400" alt="Imagem aleatória 3" />
                </ImageContainer>
                <Divider />
                <Row>
                    <DescriptionTitleText>Descrição</DescriptionTitleText>
                    <PriceText>R$ {reservation?.budget}</PriceText>
                </Row>
                <DescriptionBodyText>Vista deslumbrante, céu iluminado pelas estrelas, vagalumes e pirilampos, os sons e os aromas da Floresta. Pedaço do Paraíso, mágico e reservado. Refúgio de tranquilidade e paz cercado por reservas biológicas, de natureza exuberante, ar puríssimo e águas cristalinas. Ambientações aconchegantes, charmosas e super confortáveis com piscina de água natural.</DescriptionBodyText>
                <Row>
                    <IconWidget>
                        {IconGuestNumber}
                        <DescriptionIconText> {reservation?.guests}</DescriptionIconText>
                    </IconWidget>
                    <IconWidget>
                        {IconRangeDate}
                        <DescriptionIconText>{reservation?.checkIn} - {reservation?.checkOut}</DescriptionIconText>
                    </IconWidget>
                    <IconWidget>
                        {IconBathroomNumber}
                        <DescriptionIconText>{reservation?.bathrooms}</DescriptionIconText>
                    </IconWidget>
                    <IconWidget>
                        {IconBedroomNumber}
                        <DescriptionIconText>{reservation?.bedrooms}</DescriptionIconText>
                    </IconWidget>
                </Row>
                <Divider />
                <Row>
                    <DescriptionTitleText>Reserva</DescriptionTitleText>
                    <CustomButton onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }} title={"Reservar"}></CustomButton>
                </Row>
                <Row>
                    <MakeReservationContainer>
                        <Row>
                            <DescriptionReservationMakeText>Hóspedes</DescriptionReservationMakeText>
                            <ClickableIcon onClick={function (): void {
                                setGuestNumber(previous => previous + 1)
                            }}>
                                {IconPlus}
                            </ClickableIcon>
                            <DescriptionReservationMakeText>{guestNumber}</DescriptionReservationMakeText>
                            <ClickableIcon onClick={function (): void {
                                setGuestNumber(previous => previous - 1)
                            }}>
                                {IconMinus}
                            </ClickableIcon>
                        </Row>
                        <SizedBoxVertical />
                        <DescriptionReservationMakeText>Forma de Pagamento</DescriptionReservationMakeText>
                        <DescriptionReservationMakeText>Pix</DescriptionReservationMakeText>
                        <DescriptionReservationMakeText>Cartão de Crédito</DescriptionReservationMakeText>
                        <DescriptionReservationMakeText>Cartão de Débito</DescriptionReservationMakeText>
                        <Row>
                            <Input size="MEDIUM" placeholder="Número do cartão"></Input>
                            <SizedBoxHorizontal />
                            <Input size="SMALL" placeholder="CVV"></Input>
                        </Row>
                        <SizedBoxVertical />
                        <Input size="MEDIUM" placeholder="Validade"></Input>
                    </MakeReservationContainer>
                    <Calendar />
                </Row>
                <Divider />
            </Container>
        </AppContainer >
    )
}


