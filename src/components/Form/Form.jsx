import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Worning from '../../components/Worning/Worning';
import { ReactComponent as WorningIcon } from '../../images/icons/worning.svg';

import { Title, FormBox, FieldWrapper, Field, Btn } from './Form.styled';

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

const Form = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleModalClose = () => {
    setIsopen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setIsopen(true);
      formik.resetForm();
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

        <Btn type="submit" title="Sent" />
      </FormBox>
      {isOpen && <Worning onClose={handleModalClose} />}
    </div>
  );
};

export default Form;
