import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });
  console.log(formik);
  return (
    <form autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        id="name"
        type="text"
        placeholder="Name"
      />

      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Email address"
      />

      <label htmlFor="message">Message</label>
      <textarea
        value={formik.values.message}
        onChange={formik.handleChange}
        id="message"
        type="text"
        placeholder="Enter your message"
      />
      <input type="submit" id="submit" />
    </form>
  );
};

export default ContactForm;
