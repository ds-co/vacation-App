import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
  margin: auto;
  border-radius: 30px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  label {
    width: 80%;
    text-align: left;
    margin-bottom: 5px;
  }

  input {
    width: 80%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
  }

  textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
  }

  select {
    width: 85%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
  }

  button {
    margin-bottom: 10px;
  }

  h1 {
    text-align: center;
  }
`;


const VacationApp = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vacationType, setVacationType] = useState('');
  const [reason, setReason] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleApplication = () => {
    if (startDate && endDate && vacationType && reason) {
      console.log({
        startDate,
        endDate,
        vacationType,
        reason,
      });

      // Show the success message
      setShowSuccessMessage(true);
    } else {
      // Show a reminder to fill in all fields
      setShowSuccessMessage(false);
      alert('모든 항목을 입력하세요');
    }
  };

  return (
    <FormContainer>
      <h1>휴가신청</h1>
      <label>시작일:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br />

      <label>종료일:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br />

      <label>종류:</label>
      <select value={vacationType} onChange={(e) => setVacationType(e.target.value)}>
        <option value="1">연차</option>
        <option value="2">반차</option>
        <option value="3">반반차</option>
        <option value="4">예비군훈련</option>
        <option value="5">출산휴가</option>
        <option value="6">배우자출산휴가</option>
        <option value="7">생리휴가</option>
        <option value="8">가족돌봄휴가</option>
        <option value="9">그 외</option>
      </select>
      <br />

      <label>사유:</label>
      <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
      <br />

      {/* Button to submit the form */}
      <button onClick={handleApplication}>휴가신청</button>
      
      {showSuccessMessage && (
        <div>
          <p>휴가 신청이 완료되었습니다</p>
        </div>
      )}
    </FormContainer>
  );
};

export default VacationApp;
