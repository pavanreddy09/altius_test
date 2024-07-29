import axios from "axios";

export const userRegister = async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/register",
      formData
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/login",
      formData
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
