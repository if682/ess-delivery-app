import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../../../services/api/interfaces';
import './index.css'
import CreateReservationAPI from '../../hooks/createReservation';

const validationSchema = () => Yup.object({
  location: Yup.string()
    .required('Um nome para a reserva é obrigatório'),
  cep: Yup.string()
    .required('O cep é obrigatório')
    .min(8,'Digite um número válido de CEP')
    .max(8, 'Digite um número válido de CEP'),
  checkIn: Yup.date()
    .required('A data de check-in é obrigatória')
    .min(new Date(), 'A data de check-in não pode ser no passado'),
  checkOut: Yup.date()
    .required('A data de check-out é obrigatória')
    .min(Yup.ref('checkIn'), 'A data de check-out deve ser depois da data de check-in'),
  guests: Yup.number()
    .required('O número de hóspedes é obrigatório')
    .min(1, 'Deve haver pelo menos um hóspede'),
  budget: Yup.number()
    .typeError('O orçamento deve ser um número')
    .positive('O orçamento deve ser um valor positivo')
    .min(0, 'Digite um valor válido'),
  bedrooms: Yup.number()
    .typeError('O número de quartos deve ser um número')
    .required('O número de quartos é obrigatório')
    .min(0, 'Digite um valor válido'),
  beds: Yup.number()
    .required('O número de camas é obrigatório')
    .typeError('O número de camas deve ser um número')
    .min(0, 'Digite um valor válido'),
  bathrooms: Yup.number()
    .required('O número de banheiros é obrigatório')
    .min(0, 'Digite um valor válido')
    .typeError('O número de banheiros deve ser um número'),
  photos: Yup.array()
    .required('O upload de fotos é obrigatório')
    .min(3,'Deve haver o upload de pelo menos três fotos.')
    .max(15, 'Você pode enviar no máximo 15 fotos.'),
  additionalInfo: Yup.string()
    .max(500, 'As informações adicionais não podem ter mais de 500 caracteres'),
});

const ReservationForm: React.FC = () => {
  const initialValues: FormValues = {
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    cep: '',
    budget: '',
    additionalInfo: '',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    photos: [],
  };

  const { createElement, isLoading, isError, isSuccess } = CreateReservationAPI();

  const onSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      createElement(values);
      alert('Reservation created successfully');
    } catch (error) {
      alert('Error creating reservation');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Faça sua reserva</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting,setFieldValue }) => (
          <Form>
          <div className = 'container'>
            <div className='left'>
              <label htmlFor="location">Título</label>
              <Field type="text" name="location" />
              <ErrorMessage name="location" component="span" className="error-message" />

              <label htmlFor="cep">CEP</label>
              <Field type="text" name="cep" />
              <ErrorMessage name="cep" component="span" className="error-message" />

              <label htmlFor="guests">Número de hóspedes</label>
              <Field type="number" name="guests" />
              <ErrorMessage name="guests" component="span" className="error-message" />

              <label htmlFor="budget">Preço da diária</label>
              <Field type="float" name="budget" />
              <ErrorMessage name="budget" component="span" className="error-message" />

              <label htmlFor="bedrooms">Quartos</label>
              <Field type="number" name="bedrooms" />
              <ErrorMessage name="bedrooms" component="span" className="error-message" />

              <label htmlFor="beds">Camas</label>
              <Field type="number" name="beds" />
              <ErrorMessage name="beds" component="span" className="error-message" />

              <label htmlFor="bathrooms">Banheiros</label>
              <Field type="number" name="bathrooms" />
              <ErrorMessage name="bathrooms" component="span" className="error-message" />
            </div>
            <div className='right'>
              <label htmlFor="checkIn">Check-in</label>
              <Field type="date" name="checkIn" />
              <ErrorMessage name="checkIn" component="span" className="error-message" />

              <label htmlFor="checkOut">Check-out</label>
              <Field type="date" name="checkOut" />
              <ErrorMessage name="checkOut" component="span" className="error-message" />

              <Field
                type="file"
                name="photos"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files) {
                    const filesArray = Array.from(event.currentTarget.files);
                    setFieldValue("photos", filesArray);
                  }
                }}
                multiple
             />
              <ErrorMessage name="photos" component="span" className="error-message" />

              <label htmlFor="additionalInfo">Informações adicionais</label>
              <Field type="textarea" name="additionalInfo" />
              <ErrorMessage name="additionalInfo" component="span" className="error-message" />

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </div>
          </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;