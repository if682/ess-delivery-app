import CustomButton from "../../components/CustomButton";
import { useParams } from "react-router-dom";
import GetReservationById from "../../hooks/getReservationById";
import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  IconBathroomNumber,
  IconBedroomNumber,
  IconGuestNumber,
  IconMinus,
  IconPlus,
  IconRangeDate,
  IconSelectedRatingStar,
  IconStarFavoritesActive,
  IconStarFavoritesDesable,
  IconUnselectRatingStar,
  IconUserCircle,
} from "../../assets/icons";
import { Input } from "../../components/Input";
import CreateBookingTryByUser from "../../hooks/createBookingTryByUser";
import { BookingTryValues } from "../../../services/api/interfaces";
import { useSession } from "../../providers/SessionContext";
import GetUserIdByToken from "../../hooks/getUserIdByToken";
import Modal from "../../components/Modal";
import GetRatingsByReservationId from "../../hooks/getRatingsByReservationId";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./index.css";
import { APIClient } from "../../../services/api/client";
import { error } from "console";

const CentralContainer = styled.div`
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
  gap: 8px;
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
  margin-left: 5px;
  margin-right: 5px;
`;

const SizedBoxVertical = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DescriptionReservationMakeText = styled.span`
  color: #717171;
  font-size: 20px;
  align-self: flex-start;
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
  color: #6e7491;
`;

const RadioLabel = styled.p`
  margin-top: -5px;
  align-self: flex-start;
`;

const RatingContainer = styled.div`
  max-width: 250px;
`;

const RatingColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const RatingBodyText = styled.span`
  color: #27273f;
  font-size: 18px;
  align-self: flex-start;
  text-align: left;
`;

const RatingTitleText = styled.span`
  color: #6e7491;
  font-size: 18px;
  align-self: flex-start;
`;

const handleStarNumber = (starNumber: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starNumber) {
      stars.push(IconSelectedRatingStar);
    } else {
      stars.push(IconUnselectRatingStar);
    }
  }
  return stars;
};

const handleFormatDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleString();
  return formatedDate;
};

export default function BookingPage() {
  const { id } = useParams();
  const { reservation } = GetReservationById({ id: id as string });
  const [guestNumber, setGuestNumber] = useState(0);
  // The selected drink
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState<string>();

  const [starActive, setStarActive] = useState(false);
  const [TempStarActive, setTempStarActive] = useState(false);

  useEffect(() => {
    setTempStarActive(starActive);
  }, [starActive]);

  const { session } = useSession();
  const { userId } = GetUserIdByToken({ token: session.token as string });

  const { ratings } = GetRatingsByReservationId({ id: id as string });

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setselectedPaymentMethod(event.target.value);
  };

  const { createElement, isLoading, isError, isSuccess } =
    CreateBookingTryByUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [titleModal, setTitleModal] = useState("");

  const [bodyModal, setBodyModal] = useState("");

  const [rangeDate, setRangeDate] = useState(["", ""]);

  useEffect(() => console.log(rangeDate), [rangeDate]);

  const handleOpenModal = (titleModal: string, bodyModal: string) => {
    setTitleModal(titleModal);
    setBodyModal(bodyModal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = useCallback(
    async (values: BookingTryValues) => {
      console.log(values.guestNumber, reservation?.guests);
      //@ts-ignore
      if (values.guestNumber > reservation?.guests) {
        handleOpenModal(
          "Mais pessoas do que o permitido",
          "A acomodação não comporta a quantidade de pessoas informada para a reserva."
        );
        return;
      }
      if (rangeDate[0] == "" || rangeDate[1] == "") {
        handleOpenModal(
          "Período inválido",
          "Por favor selecione datas válidas para a sua reserva"
        );
        return;
      }
      try {
        const userId = await getUserId();
        await createElement({ ...values, userId });
        handleOpenModal(
          "Reserva requisitada com sucesso",
          "O anfintrião da acomodação já foi avisado das suas intenções, qualquer atualização será informada no e-mail."
        );
      } catch (error) {
        alert("Error creating reservation");
      }
    },
    [session, reservation, rangeDate]
  );

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const apiClient = new APIClient();

    try {
      const userId = await apiClient.getIdByToken(session.token);
      const reservations = await apiClient.GetFavoritesReservations(userId);
      for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].id === id) {
          setStarActive(true);
          return;
        } else if (i === reservations.length - 1) {
          setStarActive(false);
        }
      }
    } catch (err) {
      throw new Error("Error while getting users");
    }
  };

  const setFavorites = async () => {
    const apiClient = new APIClient();
    try {
      const userId = await apiClient.getIdByToken(session.token);
      if (starActive && id) {
        await apiClient.setFavoritesReservation(userId, id, false);
        setStarActive(false);
      } else if (id) {
        await apiClient.setFavoritesReservation(userId, id, true);
        setStarActive(true);
      }
    } catch {
      throw new Error("fail");
    }
  };

  const getUserId = async () => {
    const apiClient = new APIClient();
    try {
      const userId = await apiClient.getIdByToken(session.token);
      return userId;
    } catch {
      alert("Error creating reservation");
      return "6ff5c112-2eb6-45f6-ae5b-8f6afa8ecc85";
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{ bgcolor: "white", height: "100vh" }}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            padding: "40px",
            alignItems: "flex-start",
          }}
        >
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            title={titleModal}
            description={bodyModal}
          />
          <CentralContainer>
            <Row>
              <TitleText>
                {reservation?.name + ", " + reservation?.city}
              </TitleText>
              <button
                className="setFavoriteIcon"
                onMouseOver={() => setTempStarActive(starActive ? false : true)}
                onMouseOut={() => setTempStarActive(starActive ? true : false)}
                onClick={setFavorites}
              >
                {TempStarActive
                  ? IconStarFavoritesActive
                  : IconStarFavoritesDesable}
              </button>
            </Row>
            <ImageContainer>
              <Image
                src="https://via.placeholder.com/400x400"
                alt="Imagem aleatória 1"
              />
              <Image
                src="https://via.placeholder.com/400x400"
                alt="Imagem aleatória 2"
              />
              <Image
                src="https://via.placeholder.com/400x400"
                alt="Imagem aleatória 3"
              />
            </ImageContainer>
            <Divider />
            <Row>
              <DescriptionTitleText>Descrição</DescriptionTitleText>
              <PriceText>R$ {reservation?.budget}</PriceText>
            </Row>
            <DescriptionBodyText>
              {reservation?.additionalInfo}
            </DescriptionBodyText>
            <Row>
              <IconWidget>
                {IconGuestNumber}
                <DescriptionIconText>
                  {" "}
                  {reservation?.guests}
                </DescriptionIconText>
              </IconWidget>
              <IconWidget>
                {IconRangeDate}
                <DescriptionIconText>
                  {reservation?.checkIn} - {reservation?.checkOut}
                </DescriptionIconText>
              </IconWidget>
              <IconWidget>
                {IconBathroomNumber}
                <DescriptionIconText>
                  {reservation?.bathrooms}
                </DescriptionIconText>
              </IconWidget>
              <IconWidget>
                {IconBedroomNumber}
                <DescriptionIconText>
                  {reservation?.bedrooms}
                </DescriptionIconText>
              </IconWidget>
            </Row>
            <Divider />
            <Row>
              <DescriptionTitleText>Reserva</DescriptionTitleText>
              <CustomButton
                onClick={() =>
                  onSubmit({
                    userId: "",
                    reservationId: id,
                    paymentMethod: selectedPaymentMethod,
                    guestNumber: guestNumber,
                    checkIn: rangeDate[0],
                    checkOut: rangeDate[1],
                  })
                }
                title={"Reservar"}
              ></CustomButton>
            </Row>
            <SizedBoxVertical />
            <SizedBoxVertical />
            <SizedBoxVertical />
            <Row>
              <fieldset>
                <MakeReservationContainer>
                  <Row>
                    <DescriptionReservationMakeText>
                      Hóspedes
                    </DescriptionReservationMakeText>
                    <ClickableIcon
                      onClick={function (): void {
                        setGuestNumber((previous) => previous + 1);
                      }}
                    >
                      {IconPlus}
                    </ClickableIcon>
                    <DescriptionReservationMakeText>
                      {guestNumber}
                    </DescriptionReservationMakeText>
                    <ClickableIcon
                      onClick={function (): void {
                        setGuestNumber((previous) => previous - 1);
                      }}
                    >
                      {IconMinus}
                    </ClickableIcon>
                  </Row>
                  <SizedBoxVertical />
                  <DescriptionReservationMakeText>
                    Forma de Pagamento
                  </DescriptionReservationMakeText>
                  <SizedBoxVertical />
                  <RadioLabel>
                    <input
                      type="radio"
                      name="payment"
                      value="Pix"
                      id="pix"
                      onChange={radioHandler}
                    />
                    <DescriptionReservationMakeText>
                      Pix
                    </DescriptionReservationMakeText>
                  </RadioLabel>
                  <RadioLabel>
                    <input
                      type="radio"
                      name="payment"
                      value="CartaoDeCredito"
                      id="cc"
                      onChange={radioHandler}
                    />
                    <DescriptionReservationMakeText>
                      Cartão de Crédito
                    </DescriptionReservationMakeText>
                  </RadioLabel>

                  <RadioLabel>
                    <input
                      type="radio"
                      name="payment"
                      value="CartaoDeDebito"
                      id="cd"
                      onChange={radioHandler}
                    />
                    <DescriptionReservationMakeText>
                      Cartão de Débito
                    </DescriptionReservationMakeText>
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
              {
                //@ts-ignore
                <Calendar
                  value={rangeDate}
                  selectRange
                  onChange={setRangeDate}
                />
              }
            </Row>
            <Divider />
            <DescriptionTitleText>Avaliações</DescriptionTitleText>
            <SizedBoxVertical />
            <SizedBoxVertical />
            <Row>
              {ratings?.map((rating) => (
                <RatingContainer>
                  <Row>
                    {IconUserCircle}
                    <RatingColumn>
                      <RatingTitleText>{rating.userName}</RatingTitleText>
                      <RatingTitleText>
                        <>{handleFormatDate(rating.date)}</>
                      </RatingTitleText>
                      <SizedBoxVertical />
                      <Row>
                        <>{handleStarNumber(rating?.star)}</>
                      </Row>
                      <SizedBoxVertical />
                      <RatingBodyText>{rating.text}</RatingBodyText>
                    </RatingColumn>
                  </Row>
                </RatingContainer>
              ))}
            </Row>
          </CentralContainer>
        </Box>
      </Container>
    </>
  );
}
