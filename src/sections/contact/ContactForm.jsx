import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  // console.log('Form values', formik.values);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        id="name"
        type="text"
        placeholder="Name"
        name="name"
      />

      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Email address"
        name="email"
      />

      <label htmlFor="message">Message</label>
      <textarea
        value={formik.values.message}
        onChange={formik.handleChange}
        id="message"
        type="text"
        placeholder="Enter your message"
        name="message"
      />
      <button type="submit" id="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
