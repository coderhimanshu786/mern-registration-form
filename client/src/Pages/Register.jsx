import axios from "axios";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const {data} = await axios.post("/register", {
        name,
        email,
        password,
      })
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Welcome!! Login Successful.');
        navigate('/login');
      }
    } catch (error) {
      if(error.response){
        console.log(error.response.data);
      }
    }
  };


  return (
    <div className="display">
      <form onSubmit={registerUser} className="form">
        <img
          className="image"
          src="https://icon-library.com/images/new-user-icon/new-user-icon-15.jpg"
          alt="register-logo"
          width={"180px"}
        />
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Your Email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password..."
          value={data.password} // Corrected value assignment
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
