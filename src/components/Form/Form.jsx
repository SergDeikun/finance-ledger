import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Modal from 'components/Modal/Modal';
import { ReactComponent as WorningIcon } from '../../images/icons/worning.svg';

import { Title, FormBox, FieldWrapper, Field, Button } from './Form.styled';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('')
    .email('')
    .required(
      <>
        <WorningIcon /> This is a required field
      </>
    ),
});

const FormS = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleModalClose = () => {
    setIsopen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: 'asdasd',
      email: 'qweq@mail.com',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setIsopen(true);
    },
  });

  return (
    <div>
      <Title>Request Callback</Title>

      <FormBox
        onSubmit={formik.handleSubmit}
        netlify
        netlify-honeypot="bot-field"
      >
        <FieldWrapper>
          <Field
            fullWidth
            id="name"
            name="name"
            label="Enter your name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            fullWidth
            id="email"
            name="email"
            label="Enter email*"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FieldWrapper>

        <Button type="submit">Sent</Button>
      </FormBox>
      {isOpen && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default FormS;
