import { useFormik } from "formik";
import * as Yup from "yup";

import { StyledDiv, StyledForm, StyledH4, StyledP, StyledTextArea } from "./Form.styles";

export const CommentForm = ( {id} ) => {
  const storage = JSON.parse(localStorage.getItem(`GameID_${id}`)) || [];

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
      storage.push(values);
      localStorage.setItem(`GameID_${id}`, JSON.stringify(storage, null, 2));
      onSubmitProps.resetForm();
    },
   
  });
  
  return (
    <>  
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
          <div style={{color:"red"}}>{formik.errors.name}</div>
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
          <div style={{color:"red"}}>{formik.errors.email}</div>
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
          <div style={{color:"red"}}>{formik.errors.message}</div>
        ) : null}

        <button type="submit" >Submit</button>
      </StyledForm>

      {storage.length > 0 ? storage.map((comment, index)=>(
             <StyledDiv key={index}>
                <StyledH4>{comment.name}</StyledH4>
                <StyledP>{comment.message}</StyledP>
            </StyledDiv>
        )): <StyledP>Não há comentários ainda para esse jogo!</StyledP>}
    </>
  );
};