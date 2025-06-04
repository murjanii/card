import React from "react";
import ApprovalCard from "./ApprovalCard.jsx";
import CommentDetail from "./CommentDetails.jsx";
import './App.css'
import "./ApprovalCard.css";
import "./CommentDetails.css";


const App = () => {
  return (
    <div className="app-container">
      

      <ApprovalCard>
        <CommentDetail
          author="Vineet"
          time="Today at 10:00PM"
          comment="wants to be your friend."
        />
      </ApprovalCard>
    </div>
  );
};

export default App;







// import React from 'react'

// const App = () => {
//   const[count]=React.useState(0)
//   // const increament=()=>{
//   //   setCount(count+1)

//   // };
//   // const decreament=()=>{
//   //   setCount(count-1)
//   // };
//   const common=(e)=>{
    
//     console.log(e.target.getAttribute("data-role"))
//     console.log(e.tag)
//   }
//   return (
//     <div>
//       {count}
//       <div data-role="rohan"onClick={(e)=>common("inc")(e)}className="inc">inc</div>
//       <div data-role="rohan"onClick={(e) => common("dec")(e)}className="dic">dic</div>
//     </div>
//   )
// }

// export default App


