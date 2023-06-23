import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required('Required')
})

const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });

  console.log("Visited fields", formik.touched);



  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="name"
          type="text"
          placeholder="Name"
          name="name"
        />
        <div className="error-container">
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          type="email"
          placeholder="Email address"
          name="email"
        />
        <div className="error-container">
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="message"
          type="text"
          placeholder="Enter your message"
          name="message"
        />
        <div className="error-container">
        {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
        </div>
      </div>
      <button type="submit" id="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;