import { RegistrationForm } from '../../components/registration_form/RegistrationForm';
import './registration.css';

export const Registration = () => {
  return (
    <div id="registration-container" className="container">
      <div>
        <h1>Registrate</h1>
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
};
