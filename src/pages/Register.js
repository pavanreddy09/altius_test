import react, { useState } from "react";
import { userRegister } from "../api/userApicalls";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { data, status } = userRegister(formData);
    if (status == 201) {
      alert(data.message);
    }
    navigate("/login");
  };
  return (
    <div className="form-div">
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <div className="input-div">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputOnChange}
          />
        </div>
        <div className="input-div">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleInputOnChange}
          />
        </div>
        <div className="button-div">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
