import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";
import { IoAddCircleOutline } from "react-icons/io5";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object({
  username: Yup.string().required("Required").min(3, "Too short!").max(50, 'Too long!'),
  number: Yup.string().required("Required").min(3, "Too short!").max(50, 'Too long!')
});

const initialValues = {
  username: "",
  number: ""
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newItem = { id: nanoid(), name: values.username, number: values.number };

    dispatch(addContact(newItem));
    resetForm();
  };

  return (
    <>    <p className={s.title}>Add new contact</p>
    <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handleSubmit}>
   
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.input} name="username" />
          <ErrorMessage name="username" component="span" />
        </label>
        <label className={s.label}>
          Number
          <Field  className={s.input} name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button className={s.btnform} type="submit">Add card <IoAddCircleOutline size="20px"/></button>
      </Form>
    </Formik>
    </>
  );
};

export default ContactForm;