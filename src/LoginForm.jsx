// LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  console.log(onLoginSuccess);

  const sendData = async () => {
    try {
      // Validate input values
      if (!id || !pw) {
        throw new Error("아이디와 비밀번호를 입력하지 않으셨습니다.");
      }

      const response = await axios.post("/api/v1/userLogin", {
        id: id,
        pw: pw,
      });

      // Validate response data
      if (!response.data === null) {
        throw new Error("서버 응답이 올바르지 않습니다.");
      }

      // 성공적으로 응답을 받았을 때 처리
      console.log("서버 응답:", response.data);
      // 로그인 성공 시 알림창 띄우기
      alert(`${response.data.name}님 안녕하세요.`);
      // 호출된 콜백 함수를 사용하여 로그인 상태를 업데이트
      onLoginSuccess();
      // Store the login status in localStorage
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    } catch (error) {
      // 오류 발생 시 처리
      console.error("오류 발생:", error);
      // 로그인 실패 시 알림창 띄우기
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <>
      <LoginDiv>
        <h1>로그인</h1>
        <InputField
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        
        <Button onClick={sendData}>로그인</Button>
      </LoginDiv>
    </>
  );
};
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px; /* 원하는 너비로 조절 */
  height: 500px; /* 원하는 높이로 조절 */
  margin: auto; /* 수직 및 수평 가운데 정렬을 위해 */
  border-radius: 30px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputField = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 15pt;
  border-radius: 1rem;
  background: skyblue;
`;

export default LoginForm;
