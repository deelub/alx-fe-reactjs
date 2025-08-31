import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "At least 6 chars").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik submit:", values);

    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User registered:", data);
        alert("User registered successfully with Formik!");
        resetForm();
      });
  };

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      <Form className="p-4 border rounded shadow">
        <h2>User Registration (Formik)</h2>

        <div>
          <label>Username:</label><br />
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" style={{color: "red"}} />
        </div>

        <div>
          <label>Email:</label><br />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{color: "red"}} />
        </div>

        <div>
          <label>Password:</label><br />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" style={{color: "red"}} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
