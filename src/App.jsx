// // import React, { useState } from 'react'

// // const App = () => {
// //   const [user, setuser] = useState("Ellia")
// //   const changeUserName=()=>{
// //     setuser("Issa");
// //   }
// //   return (
// //     <div>
// //       <h1>Your Name is {user}</h1>
// //       <button onClick={changeUserName}>ChangeUser</button>
// //       </div>
// //   )
// // }

// // export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)

//   return (
//     <div>
//       <h1 className='text-5xl bg-yellow-300'>{num}</h1>
//       <button onClick={()=>setnum(num+1)}>Increament</button>
//       <button onClick={()=>num>0 && setnum(num-1)}>Decreament</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";

export const App = () => {
  const [username, setusername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!\n Thankyou, " + username);
    setusername("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="px-4 py-3 bg-cyan-300 m-5 text-xl"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-3 text-xl m-5 font-semibold
         bg-green-500 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;
