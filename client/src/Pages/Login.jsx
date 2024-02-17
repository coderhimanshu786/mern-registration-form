import { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const {data} = await axios.post('/login', {
        email,
        password,
      })
      if(data.error){
        toast.error(data.error)
      }else {
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="display">
      <form onSubmit={loginUser} className="form">
        <img
          className="image"
          src="https://icon-library.com/images/account-icon/account-icon-16.jpg"
          alt=""
          width={"160px"}
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
          type="text"
          placeholder="Enter Password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
