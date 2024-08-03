import React from "react";
import axios from "axios";
import Form from "./Form";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(
          "Cet utilisateur existe déjà. Veuillez essayer de vous connecter."
        );
        navigate("/login");
      } else {
        console.error("Signup failed:", error.message);
      }
    }
  };

  const signupFields = [
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
        title="Sign Up"
        buttonText="Sign Up"
        fields={signupFields}
        onSubmit={handleSignup}
      />
      <p>
        Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  );
};

export default SignupPage;