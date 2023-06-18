import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });
  console.log(formik)
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input value={formik.values.email}
        onChange={formik.handleChange}
      id="email" type="email" placeholder="Enter your email" />
    </form>
  );
};

export default ContactForm;
