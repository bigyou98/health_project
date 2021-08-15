import { ExerciseDetail, ExerciseVideo } from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header, Layout } from "components";
import styled from "styled-components";

const { cablePushDown, overHeadExtension } = exerciseData.triceps;

export const Triceps = () => {
  const [tricepsData, setTricepsDate] = useState(cablePushDown);

  return (
    <Layout>
      <Header />
      <Type>
        <IntoType onClick={() => setTricepsDate(cablePushDown)}>
          케이블푸쉬다운
        </IntoType>{" "}
        <IntoType onClick={() => setTricepsDate(overHeadExtension)}>
          오버헤드익스텐션
        </IntoType>{" "}
      </Type>
      <ExerciseVideo src={tricepsData.src} />
      <ExerciseDetail exerciseData={tricepsData} />
    </Layout>
  );
};
const Type = styled.div`
  user-select: none;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0px;
  margin: 0 30px;
`;
const IntoType = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

// export const Triceps = () => {
//   const [tricepsData, setTricepsDate] = useState(
//     exerciseData.triceps.cablePushDown
//   );

//   const changeContent = (type) => {
//     setTricepsDate(exerciseData.triceps[type]);
//   };

//   return (
//     <div>
//       <Header />
//       <Type>
//         <IntoType onClick={() => changeContent("cablePushDown")}>
//           케이블푸쉬다운
//         </IntoType>{" "}
//         <IntoType onClick={() => changeContent("overHeadExtension")}>
//           오버헤드익스텐션
//         </IntoType>{" "}
//       </Type>
//       <ExerciseVideo src={tricepsData.src} />
//       <ExerciseDetail exerciseData={tricepsData} />
//     </div>
//   );
// };
// const Type = styled.div`
//   user-select: none;
//   font-size: 24px;
//   font-weight: bold;
//   padding: 20px 0px;
//   margin: 0 30px;
// `;
// const IntoType = styled.span`
//   &:hover {
//     color: red;
//     cursor: pointer;
//   }
// `;
