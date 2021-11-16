import { useFormik } from 'formik';
import { StyledForm, StyledTextInput } from './Form.styles';

export const CommentForm = () => {
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      console.table(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="seu nome   "
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="seu email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="textarea">Deixe seu comentário</label>
      <StyledTextInput
        id="message"
        name="message"
        type="message"
        placeholder="Escreva seu comentário sobre o jogo aqui!"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <button type="submit">Submit</button>
    </StyledForm>
  );
};