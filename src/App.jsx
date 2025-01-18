// // // // import React, { useState } from 'react'

// // // // const App = () => {
// // // //   const [user, setuser] = useState("Ellia")
// // // //   const changeUserName=()=>{
// // // //     setuser("Issa");
// // // //   }
// // // //   return (
// // // //     <div>
// // // //       <h1>Your Name is {user}</h1>
// // // //       <button onClick={changeUserName}>ChangeUser</button>
// // // //       </div>
// // // //   )
// // // // }

// // // // export default App
// // // import React, { useState } from 'react'

// // // const App = () => {
// // //   const [num, setnum] = useState(0)

// // //   return (
// // //     <div>
// // //       <h1 className='text-5xl bg-yellow-300'>{num}</h1>
// // //       <button onClick={()=>setnum(num+1)}>Increament</button>
// // //       <button onClick={()=>num>0 && setnum(num-1)}>Decreament</button>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // import React, { useState } from "react";

// // export const App = () => {
// //   const [username, setusername] = useState("");
// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     console.log("Form Submitted!\n Thankyou, " + username);
// //     setusername("");
// //   };
// //   return (
// //     <div>
// //       <form
// //         onSubmit={(e) => {
// //           submitHandler(e);
// //         }}
// //       >
// //         <input
// //           className="px-4 py-3 bg-cyan-300 m-5 text-xl"
// //           type="text"
// //           placeholder="Name"
// //           value={username}
// //           onChange={(e) => {
// //             setusername(e.target.value);
// //           }}
// //         ></input>
// //         <button
// //           className="px-4 py-3 text-xl m-5 font-semibold
// //          bg-green-500 rounded-full"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Cards from "./components/Cards";

// const App = (props) => {
//   const users = [
//     {
//       name: "Alice Johnson",
//       age: 28,
//       city: "New York",
//       country: "USA",
//       profession: "Software Engineer",
//     },
//     {
//       name: "Liam Smith",
//       age: 35,
//       city: "London",
//       country: "UK",
//       profession: "Project Manager",
//     },
//     {
//       name: "Mia Chen",
//       age: 24,
//       city: "Shanghai",
//       country: "China",
//       profession: "Graphic Designer",
//     },
//     {
//       name: "Carlos Gonzalez",
//       age: 40,
//       city: "Madrid",
//       country: "Spain",
//       profession: "Data Analyst",
//     },
//     {
//       name: "Aisha Khan",
//       age: 30,
//       city: "Dubai",
//       country: "UAE",
//       profession: "Marketing Specialist",
//     },
//     {
//       name: "Akira Tanaka",
//       age: 29,
//       city: "Tokyo",
//       country: "Japan",
//       profession: "Mobile App Developer",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header>
//         <Navbar />
//       </header>

//       <main className="flex-grow p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {users.map(function (elem, index) {
//             return (
//               <Cards
//                 key={index}
//                 name={elem.name}
//                 age={elem.age}
//                 city={elem.city}
//                 country={elem.country}
//                 profession={elem.profession}
//               />
//             );
//           })}
//         </div>
//       </main>

//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Empcard from "./components/Empcard";

const App = (props) => {
  const employees = [
    {
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Alice Johnson",
      id: "EMP001",
      designation: "Senior Developer",
      joiningDate: "2021-05-10",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "Bob Smith",
      id: "EMP002",
      designation: "UI/UX Designer",
      joiningDate: "2020-08-22",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=7",
      name: "Charlie Davis",
      id: "EMP003",
      designation: "Product Manager",
      joiningDate: "2019-11-15",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=9",
      name: "Diana Cooper",
      id: "EMP004",
      designation: "QA Engineer",
      joiningDate: "2022-03-18",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=12",
      name: "Edward Lee",
      id: "EMP005",
      designation: "Backend Developer",
      joiningDate: "2023-01-04",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=15",
      name: "Fiona Green",
      id: "EMP006",
      designation: "Data Scientist",
      joiningDate: "2021-09-12",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=17",
      name: "George Brown",
      id: "EMP007",
      designation: "DevOps Engineer",
      joiningDate: "2020-12-01",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=19",
      name: "Helen White",
      id: "EMP008",
      designation: "Cloud Architect",
      joiningDate: "2022-07-25",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=21",
      name: "Ian Black",
      id: "EMP009",
      designation: "Front-End Developer",
      joiningDate: "2021-03-30",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=23",
      name: "Jessica Adams",
      id: "EMP010",
      designation: "Marketing Specialist",
      joiningDate: "2019-06-10",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=25",
      name: "Kevin Taylor",
      id: "EMP011",
      designation: "Technical Writer",
      joiningDate: "2020-04-22",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=27",
      name: "Laura Hill",
      id: "EMP012",
      designation: "HR Manager",
      joiningDate: "2018-11-05",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=29",
      name: "Mike Wilson",
      id: "EMP013",
      designation: "Network Engineer",
      joiningDate: "2023-02-14",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-xl font-semibold">Employee Profiles</h1>
      </header>
      <main className="flex-grow container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {employees.map(function (elem, index) {
            return (
              <Empcard
                key={index}
                avatar={elem.avatar}
                name={elem.name}
                id={elem.id}
                designation={elem.designation}
                joiningDate={elem.joiningDate}
              >
                {" "}
              </Empcard>
            );
          })}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
