import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field id="name" type="text" placeholder="Name" name="name" />
          <div className="error-container">
            <ErrorMessage name="name" component={TextError}/>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            type="email"
            placeholder="Email address"
            name="email"
          />
          <div className="error-container">
            <ErrorMessage name="email" component={TextError}/>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field
          as='textarea'
            id="message"
            type="text"
            placeholder="Enter your message"
            name="message"
          />
          <div className="error-container">
            <ErrorMessage name="message" component={TextError}/>
          </div>
        </div>
        <button type="submit" id="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
