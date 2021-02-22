import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const SignupForm = () => {
   return (
       <>
    
    <div className="App">  
     <Formik
       initialValues={{ firstName: '', lastName: '', npiNumber: '', businessAddress: '', phoneNumber: '' , emailAddress: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string() // Validate First Name 2 to 25 Caracters
           .min(2, 'Must be 2 characters or more')
           .max(25, 'Must be 25 characters or less')
           .required('First  Name is Required'),
         lastName: Yup.string()  // Validate Last Name 2 to 25 Caracters
           .min(2, 'Must be 2 characters or more')
           .max(25, 'Must be 25 characters or less')
           .required('Last Name is Required'),
         businessAddress: Yup.string() // Validate Address 5 to 100 Caracters
           .min(5, 'Must be 5 characters or more')
           .max(100, 'Must be 100 characters or less')
           .required('Business Address is Required'),
         npiNumber: Yup.number()  // Validate NPI number to 12 digits
           .typeError("That doesn't look like a NPI number")
           .positive("A NPI number can't start with a minus")
           .integer("A NPI number can't include a decimal point")
           .min(99999999999, "to short")
           .max(1000000000000, "to long")
           .required('A NPI number is required'),    
         phoneNumber: Yup.number()   //validate phone valid. 10 Digits
           .typeError("That doesn't look like a phone number")
           .positive("A phone number can't start with a minus")
           .integer("A phone number can't include a decimal point")
           .min(999999999, "to short")
           .max(10000000000, "to long")
           .required('A phone number is required'),
         emailAddress: Yup.string().email('Invalid email address').required('Email Address is Required'), 
         // Validate Email.
       })}
       onSubmit={(values, { setSubmitting }) => { //Show the values when submit form
         
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         
       }}
     >
       <div className="formSignUp">
       <h1> Register User Information  </h1>    
       <Form>
         <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
        </div>
        <div>
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
         </div>
         <div>
         <label htmlFor="npiNumber">NPI Number</label>
         <Field name="npiNumber" type="Number" />
         <ErrorMessage name="npiNumber" />
         </div>
        <div>
         <label htmlFor="businessAddress">Business Address</label>
         <Field name="businessAddress" type="text" />
         <ErrorMessage name="businessAddress" />
         </div>
        <div>
         <label htmlFor="phoneNumber">Phone Number</label>
         <Field name="phoneNumber" type="text" />
         <ErrorMessage name="phoneNumber" />
         </div>
        <div>
         <label htmlFor="emailAddress">Email Address</label>
         <Field name="emailAddress" type="email" />
         <ErrorMessage name="emailAddress" />
         </div>
        <div>
         <button type="submit">Submit</button>
        </div>
       </Form>
       </div>
     </Formik>
     </div>
     </>
   );
 };
 
 export default SignupForm