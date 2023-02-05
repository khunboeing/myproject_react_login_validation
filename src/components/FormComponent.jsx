import React, { useState } from "react";

const FormComponent = () => {
  // useState input
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // show err message validated
  const [errUserName, setErrUserName] = useState("");
  const [errEmail, setErrEmail] = useState();
  const [errPassword, setErrPassword] = useState();
  const [errConfirmPassword, setErrConfirmPassword] = useState();

  const [userNameColor, setUserNameColor] = useState();
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    setErrUserName(
      userName.length > 8 ? "" : "กรุณาใส่ตัวอักษรมากกว่า 8 ตัวอักษร"
    );
    setUserNameColor(userName.length > 8 ? "green" : "red");

    setErrEmail(email.includes("@") ? "" : "รูปแบบอีเมลไม่ถูกต้อง");
    setEmailColor(email.includes("@") ? "green" : "red");

    setErrPassword(
      password.length > 8 ? "" : "รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร"
    );
    setPasswordColor(password.length > 8 ? "green" : "red");

    setErrConfirmPassword(
      confirmPassword != "" && confirmPassword === password
        ? ""
        : "รหัสผ่านไม่ตรงกัน"
    );
    setConfirmPasswordColor(
      confirmPassword != "" && confirmPassword === password ? "green" : "red"
    );
  };

  return (
    <>
      <div className="flex flex-col border border-white w-fit px-16 py-7 justify-center mx-auto mt-10 rounded-[10px] shadow-xl ">
        <form className="" onSubmit={validateForm}>
          <div className="mb-5 flex justify-center">
            <h1 className="text-2xl">แบบฟอร์มลงทะเบียน</h1>
          </div>
          {/* ----------------------------- */}
          <div className="flex flex-col mb-3">
            <label>Username</label>
            <input
              style={{ borderColor: userNameColor }}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-2 border-gray-600 p-2 rounded-[8px]"
              type="text"
            />
            <small className="text-red-500 ">{errUserName}</small>
          </div>
          {/* ----------------------------- */}
          <div className="flex flex-col mb-3">
            <label>Email</label>
            <input
              style={{ borderColor: emailColor }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-600 p-2 rounded-[8px]"
              type="email"
            />
            <small className="text-red-500">{errEmail}</small>
          </div>
          {/* ----------------------------- */}
          <div className="flex flex-col mb-3">
            <label>Password</label>
            <input
              style={{ borderColor: passwordColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-600 p-2 rounded-[8px]"
              type="password"
            />
            <small className="text-red-500">{errPassword}</small>
          </div>
          {/* ----------------------------- */}
          <div className="flex flex-col mb-3">
            <label>Confirm Password</label>
            <input
              style={{ borderColor: confirmPasswordColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-2 border-gray-600 p-2 rounded-[8px]"
              type="password"
            />
            <small className="text-red-500">{errConfirmPassword}</small>
          </div>
          {/* ----------------------------- */}
          <div>
            <button className="bg-sky-500 text-white p-3 w-[100%] rounded-[10px]">
              ลงทะเบียน
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
