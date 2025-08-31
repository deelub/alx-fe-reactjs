import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <RegistrationForm />
      <hr style={{ margin: "2rem 0" }} />
      <FormikForm />
    </div>
  );
}

export default App;

