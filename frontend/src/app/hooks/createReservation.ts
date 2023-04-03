import { useMutation } from 'react-query';
import { APIClient } from '../../services/api/client';
import { FormValues } from '../../services/api/interfaces';

export{ }

export const CreateReservationAPI = () => {
  const apiClient = new APIClient();

  const createElement = async (reservation: FormValues) => {

    const response = await apiClient.createReservation(reservation);
    return response;
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation(createElement);

  return {
    createElement: mutate,
    isLoading,
    isError,
    isSuccess,
  };
};

export default CreateReservationAPI;