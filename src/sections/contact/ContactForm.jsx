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
  });

  console.log("Visited fields", formik.touched);



  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
         {...formik.getFieldProps('name')}
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
          {...formik.getFieldProps('email')}
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
          {...formik.getFieldProps('message')}
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