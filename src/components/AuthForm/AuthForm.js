// import { Formik, Form, Field } from "formik";
import { Typography, Box } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";

// const validateName = value => {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (/^[A-Za-z]+$/.test(value)) {
//     error = 'Invalid name';
//   }
//   return error;
// };

// function validateEmail(value) {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// }

// const validatePassword = value => {
//   let error;
//   if (!value) {
//     error = 'Required';
//   }
//   if (value.length < 7) {
//     error = 'Password to short';
//   }
//   return error;
// };

// function validateUsername(value) {
//   let error;
//   if (value === 'admin') {
//     error = 'Nice try!';
//   }
//   return error;
// }

// export const FieldLevelValidationExample = () => (
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         username: '',
//         email: '',
//       }}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched, validateField, validateForm }) => (
//         <Form>
//           <Field name="email" validate={validateEmail} />
//           {errors.email && touched.email && <div>{errors.email}</div>}

//           <Field name="username" validate={validateUsername} />
//           {errors.username && touched.username && <div>{errors.username}</div>}
//           {/** Trigger field-level validation
//            imperatively */}
//           <button type="button" onClick={() => validateField('username')}>
//             Check Username
//           </button>
//           {/** Trigger form-level validation
//            imperatively */}
//           <button
//             type="button"
//             onClick={() => validateForm().then(() => console.log('blah'))}
//           >
//             Validate All
//           </button>
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );


export const AuthForm = () => {
  return (
    <div>
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
            lineHeight: '3',
            fontSize: '40px',
            marginBottom: '40px',
          }}
        >
          Register
        </Typography>
      </Box>
    </div>
  )
}
