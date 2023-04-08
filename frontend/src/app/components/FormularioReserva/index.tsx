import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../../../services/api/interfaces';
// import './index2.css'
import CreateReservationAPI from '../../hooks/createReservation';

const validationSchema = () => Yup.object({
  name: Yup.string()
    .required('Um nome para a reserva é obrigatório'),
  city: Yup.string()
    .required('A cidade é obrigatória'),
  street: Yup.string()
    .required('O nome da rua é obrigatório'),
  streetNumber: Yup.number()
    .required("Digite o número do endereço"),
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
    .max(500, 'A Descrição não podem ter mais de 500 caracteres'),
});

const ReservationForm: React.FC = () => {
  const initialValues: FormValues = { 
    name: '',
    city: '',
    street: '',
    streetNumber: 1,
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
      await createElement(values);
      alert('Reservation created successfully');
    } catch (error) {
      alert('Error creating reservation');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='page'>
      <h1 className= "title">Crie sua reserva</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting,setFieldValue }: any) => (
          <Form>
          <div className = 'container'>
            <div className='left'>
              <label htmlFor="name">Título</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />


              <label htmlFor="city">Cidade</label>
              <Field type="text" name="city" />
              <ErrorMessage name="city" component="div" className="error-message" />

              <label htmlFor="street">Rua</label>
              <Field type="text" name="street" />
              <ErrorMessage name="street" component="div" className="error-message" />

              <label htmlFor="streetNumber">Número</label>
              <Field type="number" name="streetNumber" />
              <ErrorMessage name="streetNumber" component="div" className="error-message" />

              <label htmlFor="cep">CEP</label>
              <Field type="text" name="cep" />
              <ErrorMessage name="cep" component="div" className="error-message" />

              <label htmlFor="additionalInfo">Descrição</label>
              <Field type="textarea" name="additionalInfo" />
              <ErrorMessage name="additionalInfo" component="div" className="error-message" />

            </div>
            <div className='right'>

              <label htmlFor="guests">Número de hóspedes</label>
              <Field type="number" name="guests" />
              <ErrorMessage name="guests" component="div" className="error-message" />

              <label htmlFor="budget">Preço da diária</label>
              <Field type="number" name="budget" />
              <ErrorMessage name="budget" component="div" className="error-message" />

              <label htmlFor="bedrooms">Quartos</label>
              <Field type="number" name="bedrooms" />
              <ErrorMessage name="bedrooms" component="div" className="error-message" />

              <label htmlFor="beds">Camas</label>
              <Field type="number" name="beds" />
              <ErrorMessage name="beds" component="div" className="error-message" />

              <label htmlFor="bathrooms">Banheiros</label>
              <Field type="number" name="bathrooms" />
              <ErrorMessage name="bathrooms" component="div" className="error-message" />

              <label htmlFor="checkIn">Check-in</label>
              <Field type="date" name="checkIn" />
              <ErrorMessage name="checkIn" component="div" className="error-message" />

              <label htmlFor="checkOut">Check-out</label>
              <Field type="date" name="checkOut" />
              <ErrorMessage name="checkOut" component="div" className="error-message" />

              <Dropzone onUrlsAdded={(urls:string[]) => setFieldValue('photos', values.photos.concat(urls))} />
              <ErrorMessage name="photos" component="div" className="error-message" />

              
              
                  


              <br/>
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