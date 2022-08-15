import  PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useState } from "react";
import { useDispatch } from "react-redux";
import css from './AuthForm.module.css';
import { login, register } from "redux/auth/authOperations";
import Footer from "components/Footer";


const validateName = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (/^[A-Za-z]+$/.test(value)) {
    error = 'Invalid name';
  }
  return error;
};

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const validatePassword = value => {
  let error;
  if (!value) {
    error = 'Required';
  }
  if (value.length < 7) {
    error = 'Password to short';
  }
  return error;
};

// function validateUsername(value) {
//   let error;
//   if (value === 'admin') {
//     error = 'Nice try!';
//   }
//   return error;
// }

export const AuthForm = ({title}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({showPassword: false,});

    const handlePassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const handleSubmit = (name, email, password) => {
    title === 'Register'
      ? dispatch(register({name, email, password}))
      : dispatch(login({email,password}));
  };

  return (
    <div className={css.form}>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant="h2"
          style={{
            fontWeight: 'bold',
            lineHeight: '1.2',
            fontSize: '40px',
            margin: '40px',
            color: 'var(--accent-color)',
            // backgroundColor: '#000',
            backgroundColor:' hsl(192, 74%, 70%,0.5)',
            boxShadow:' 0 0 10px 1px hsl(192, 74%, 70%)',
          }}
        >
          {title}
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            showPassword: false,
          }}
          onSubmit={(values, {resetForm}) => {
            handleSubmit(values.name, values.email, values.password);
            resetForm();
          }}
          >
            {({errors, touched, values}) => {
                const password = values.password.length >= 7;

                return (
                  <Form>
                    {title === 'Register'
                        ? (
                          <Box className={css.input__thumb}>
                            <Typography
                              variant="caption"
                              fontSize="14px"
                              className={css.input__text}>
                                Name
                            </Typography>
                            <Field
                              className={css.form__input}
                              name="name"
                              type="text"
                              validate={validateName}
                            />
                            {errors.name && touched.name && (
                              <Typography
                                variant="subtitle1"
                                className={css.input__help}
                              >
                                {errors.name}
                              </Typography>
                            )}
                          </Box>)
                        : null}
                    <Box className={css.input__thumb}>
                      <Typography
                        variant="caption"
                        fontSize="14px"
                        className={css.input__text}>
                          Email
                      </Typography>
                      <Field
                        className={css.form__input}
                        name="email"
                        type="email"
                        validate={validateEmail}
                      />
                      {errors.email && touched.email && (
                        <Typography
                          variant="subtitle1"
                          className={css.input__help}
                        >
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                    <Box className={css.input__thumb}>
                      <Typography
                        variant="caption"
                        fontSize="14px"
                        className={css.input__text}>
                        Password
                      </Typography>
                      <Field
                        className={css.form__input}
                        type={value.showPassword ? 'text' : 'password'}
                        name="password"
                        validate={validatePassword}
                      />
                      <IconButton
                        style={{
                          width: '24px',
                          height: '24px',
                          position: 'absolute',
                          top: '7px',
                          right: '-67px',
                        }}
                        size="small"
                        type="button"
                        onClick={handlePassword}
                      >
                        {value.showPassword
                          ? <VisibilityTwoToneIcon />
                          : <VisibilityOffTwoToneIcon />}
                      </IconButton>
                      {errors.password && touched.password && (
                        <Typography
                          variant="subtitle1"
                          className={css.input__help}
                        >
                          {errors.password}
                        </Typography>
                      )}
                    </Box>

                    {/* <Button
                      className={css.form__btn}
                      fullWidth={true}
                      // color="primary"
                      type="submit"
                      disabled={!!errors.email || !password}
                    >
                      {title === 'Register' ? 'Register' : 'Login'}
                    </Button> */}
                    <button
                      className={css.form__btn}
                      disabled={!!errors.email || !password}>
                      {title === 'Register' ? 'Register' : 'Login'}
                    </button>
                    <div className={css.form__img}>

                    </div>
                  </Form>
                );
              }
            }
          </Formik>
      </Box>
      <Footer />
    </div>
  )
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
}
