import AppContainer from "../../components/Container";
import CustomButton from "../../components/CustomButton";
import { useParams } from 'react-router-dom';
import GetReservationById from "../../hooks/getReservationById";
import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IconBathroomNumber, IconBedroomNumber, IconGuestNumber, IconMinus, IconPlus, IconRangeDate, IconStarUnselected, IconUserCircle } from "../../assets/icons";
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
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
`;

const ClickableIcon = styled.div`
    cursor: pointer;
    align-self: flex-center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
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
  align-self: flex-start;
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
  align-self: flex-start
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

const RadioLabel = styled.p`
    margin-top: -5px;
    align-self: flex-start
`;

const RatingContainer = styled.div`
    max-width: 250px
`;

const RatingColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width:200px;
`;

const RatingBodyText = styled.span`
  color: #27273F;
  font-size: 18px;
  align-self: flex-start;
  text-align: left;
`;

const RatingTitleText = styled.span`
  color: #6E7491;
  font-size: 18px;
  align-self: flex-start
`;

export default function BookingPage() {
    const { id } = useParams();
    const { reservation } = GetReservationById({ id: id as string })
    const [guestNumber, setGuestNumber] = useState(0);
    // The selected drink
    const [selectedDrink, setSelectedDrink] = useState<String>();

    // This function will be triggered when a radio button is selected
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDrink(event.target.value);
    };

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
                <DescriptionBodyText>{reservation?.additionalInfo}</DescriptionBodyText>
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
                <SizedBoxVertical />
                <SizedBoxVertical />
                <SizedBoxVertical />
                <Row>
                    <fieldset>
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
                            <SizedBoxVertical />
                            <RadioLabel>
                                <input
                                    type="radio"
                                    name="drink"
                                    value="Coffee"
                                    id="coffee"
                                    onChange={radioHandler}
                                />
                                <DescriptionReservationMakeText>Pix</DescriptionReservationMakeText>
                            </RadioLabel>
                            <RadioLabel>
                                <input
                                    type="radio"
                                    name="drink"
                                    value="Tea"
                                    id="tea"
                                    onChange={radioHandler}
                                />
                                <DescriptionReservationMakeText>Cartão de Crédito</DescriptionReservationMakeText>
                            </RadioLabel>

                            <RadioLabel>
                                <input
                                    type="radio"
                                    name="drink"
                                    value="Pumpkin Juice"
                                    id="pumpkin"
                                    onChange={radioHandler}
                                />
                                <DescriptionReservationMakeText>Cartão de Débito</DescriptionReservationMakeText>
                            </RadioLabel>

                            <Row>
                                <Input size="MEDIUM" placeholder="Número do cartão"></Input>
                                <SizedBoxHorizontal />
                                <Input size="SMALL" placeholder="CVV"></Input>
                            </Row>
                            <SizedBoxVertical />
                            <Input size="MEDIUM" placeholder="Validade"></Input>
                        </MakeReservationContainer>
                    </fieldset>
                    <Calendar />
                </Row>
                <Divider />
                <DescriptionTitleText>Avaliações</DescriptionTitleText>
                <SizedBoxVertical />
                <SizedBoxVertical />
                <Row>
                    <RatingContainer>
                        <Row>
                            {IconUserCircle}
                            <RatingColumn>
                                <RatingTitleText>Sônia Lemos</RatingTitleText>
                                <RatingTitleText>{reservation?.checkIn}</RatingTitleText>
                                <Row>
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                </Row>
                                <RatingBodyText>
                                    Nossa, o que falar dessa casa que é maravilhosa?A casa fica no topo de uma montanha, com uma vista linda, muito verde, ar puro, clima ameno (quando fomos), até um...
                                </RatingBodyText>
                            </RatingColumn>

                        </Row>
                    </RatingContainer>
                    <RatingContainer>
                        <Row>
                            {IconUserCircle}
                            <RatingColumn>
                                <RatingTitleText>Sônia Lemos</RatingTitleText>
                                <RatingTitleText>{reservation?.checkIn}</RatingTitleText>
                                <Row>
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                </Row>
                                <RatingBodyText>
                                    Nossa, o que falar dessa casa que é maravilhosa?A casa fica no topo de uma montanha, com uma vista linda, muito verde, ar puro, clima ameno (quando fomos), até um...
                                </RatingBodyText>
                            </RatingColumn>

                        </Row>
                    </RatingContainer>
                    <RatingContainer>
                        <Row>
                            {IconUserCircle}
                            <RatingColumn>
                                <RatingTitleText>Sônia Lemos</RatingTitleText>
                                <RatingTitleText>{reservation?.checkIn}</RatingTitleText>
                                <Row>
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                    {IconStarUnselected}
                                </Row>
                                <RatingBodyText>
                                    Nossa, o que falar dessa casa que é maravilhosa?A casa fica no topo de uma montanha, com uma vista linda, muito verde, ar puro, clima ameno (quando fomos), até um...
                                </RatingBodyText>
                            </RatingColumn>

                        </Row>
                    </RatingContainer>
                </Row>
            </Container>
        </AppContainer >
    )
}


