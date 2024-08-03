import React from "react";
import axios from "axios";
import Form from "./Form";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(
          "Cet utilisateur existe déjà. Veuillez essayer de vous connecter."
        );
      } else {
        console.error("Login failed:", error.message);
      }
    }
  };

  const loginFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Votre nom",
      required: true,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Votre adresse mail",
      required: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Votre mot de passe",
      required: true,
    },
  ];

  return (
    <div className="form-content">
      <Form
        title="Login"
        buttonText="Login"
        fields={loginFields}
        onSubmit={handleLogin}
      />
      <p>
        Vous n'avez pas de compte ? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
