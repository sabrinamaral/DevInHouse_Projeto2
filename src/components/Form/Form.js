import { useFormik } from "formik";
import * as Yup from "yup";

import { StyledForm, StyledTextArea } from "./Form.styles";

export const CommentForm = ( {id} ) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Digite seu nome"),
      email: Yup.string().email("Email inválido!").required("Digite seu email."),
      message: Yup.string().required("Escreva uma mensagem.")
    }),

    onSubmit: (values, onSubmitProps) => {
      const storage = JSON.parse(localStorage.getItem(`GameID_${id}`)) || [];
      storage.push(values);
      localStorage.setItem(`GameID_${id}`, JSON.stringify(storage, null, 2));
      
      onSubmitProps.resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="seu nome"
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="seu email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

      <label htmlFor="textarea">Deixe seu comentário</label>
      <StyledTextArea
        id="message"
        name="message"
        type="message"
        placeholder="Escreva seu comentário sobre o jogo aqui!"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
         <div>{formik.errors.message}</div>
       ) : null}

      <button type="submit" >Submit</button>
    </StyledForm>
  );
};