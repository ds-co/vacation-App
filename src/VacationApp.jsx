import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
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

  input {
    width: 80%; /* Set the width to 100% of the container */
    padding: 10px; /* Add padding for better appearance */
    margin-bottom: 15px; /* Add some space between input fields */
    font-size: 16px; /* Adjust font size as needed */
  }

  textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
  }

  button {
    /* Add button styles here if needed */
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
      {/* Add your form inputs here */}
      <label>시작일:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br />

      <label>종료일:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br />

      <label>종류:</label>
      <input
        type="text"
        value={vacationType}
        onChange={(e) => setVacationType(e.target.value)}
      />
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
