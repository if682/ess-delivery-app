import { useMutation } from 'react-query';
import { APIClient } from '../../services/api/client';
import { BookingTryValues } from '../../services/api/interfaces';
import { error } from 'console';

export { }

export const CreateBookingTryByUser = () => {
    const apiClient = new APIClient();

    const createElement = async (bookingTry: BookingTryValues) => {
        // const checkCep = await apiClient.getReservationByCEP(reservation.cep)
        // if (checkCep != null) {
        //     return new Error("Cep já em uso")
        // }
        const response = await apiClient.createBookingTry(bookingTry);
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

export default CreateBookingTryByUser;