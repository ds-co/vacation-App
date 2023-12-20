// import React from "react";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";

// const FormContainer = styled.form`
//   max-width: 500px;
//   margin: 0 auto;
// `;

// // const Heading = styled.h1`
// //   font-weight: 100;
// //   color: white;
// //   text-align: center;
// //   padding-bottom: 10px;
// //   border-bottom: 1px solid rgb(79, 98, 148);
// // `;

// // const Form = styled.div`
// //   background: #0e101c;
// //   max-width: 400px;
// //   margin: 0 auto;
// // `;

// const ErrorMessage = styled.p`
//   color: #bf1650;

//   &::before {
//     display: inline;
//     content: "⚠ ";
//   }
// `;

// const Input = styled.input`
//   display: block;
//   box-sizing: border-box;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid black;
//   padding: 10px 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
// `;

// // const Label = styled.label`
// //   line-height: 2;
// //   text-align: left;
// //   display: block;
// //   margin-bottom: 13px;
// //   margin-top: 20px;
// //   color: white;
// //   font-size: 14px;
// //   font-weight: 200;
// // `;

// const SubmitButton = styled.button`
//   background: skyblue;
//   color: white;
//   text-transform: uppercase;
//   border: none;
//   margin-top: 40px;
//   padding: 20px;
//   font-size: 16px;
//   font-weight: 100;
//   letter-spacing: 10px;

//   &:hover {
//     background: gray;
//   }

//   &:active {
//     transition: 0.3s all;
//     transform: translateY(3px);
//     border: 1px solid transparent;
//     opacity: 0.8;
//   }
// `;

// // const DisabledInput = styled.input`
// //   opacity: 0.4;
// // `;

// // Additional styles...

// function VacationApp() {
//     const {
//       register,
//       handleSubmit,
//       watch,
//       formState: { errors }
//     } = useForm();
  
//     const onSubmit = (data) => {
//       console.log(data);
//     };
  
//     console.log(watch("example"))

//   return (
//       <FormContainer onSubmit={handleSubmit(onSubmit)}>
//         <Input defaultValue="test" {...register("example")} />

//         <Input {...register("exampleRequired", { required: true })} />
//         {errors.exampleRequired && <ErrorMessage>This field is required</ErrorMessage>}

//         <SubmitButton type="submit">휴가신청</SubmitButton>
//       </FormContainer>
//   );
// }

import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: black;
  font-size: 14px;
  font-weight: bold; /* Added to make the label bold */
`;


const ErrorMessage = styled.p`
  color: #bf1650;
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 10px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background: skyblue;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;

  &:hover {
    background: gray;
  }

  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

function VacationApp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="startDate">시작일</Label>
      <Input {...register("startDate", { required: true })} type="date" />

      <Label htmlFor="endDate">종료일</Label>
      <Input {...register("endDate", { required: true })} type="date" />

      <Label htmlFor="vacationType">휴가 종류</Label>
      <Select {...register("vacationType", { required: true })}>
        <option value="">휴가 종류 선택</option>
        <option value="연차">연차</option>
        <option value="반차">반차</option>
        <option value="예비군훈련">예비군훈련</option>
        <option value="가족돌봄휴가">가족돌봄휴가</option>
      </Select>

      <Label htmlFor="reason">휴가 사유</Label>
      <TextArea
        {...register("reason", { required: true })}
        placeholder="휴가 사유를 입력해주세요."
        rows="4"
      />

      {errors.startDate && <ErrorMessage>시작일을 입력해주세요.</ErrorMessage>}
      {errors.endDate && <ErrorMessage>종료일을 입력해주세요.</ErrorMessage>}
      {errors.vacationType && <ErrorMessage>휴가 종류를 선택해주세요.</ErrorMessage>}
      {errors.reason && <ErrorMessage>휴가 사유를 입력해주세요.</ErrorMessage>}

      <SubmitButton type="submit">휴가신청</SubmitButton>
    </FormContainer>
  );
}

export default VacationApp;
