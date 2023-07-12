import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          answer,
          newPassword,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
      console.log(email, answer, newPassword);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!");
    }
  };

  return (
    <Layout>
      <div className="reg-container">
        <div className="form-box">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="What is your favourite sports?"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Enter new password"
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
