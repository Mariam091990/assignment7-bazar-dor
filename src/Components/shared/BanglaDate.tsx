// "use client";

// import { useState } from 'react';

// const BanglaDate = () => {

//   const [date, setdate] = useState(new Date().toLocaleDateString("bn-bd",


//     {
//       dateStyle: "full",
//     }
//   ));
//   setInterval(() => {
//     setdate(new Date().toLocaleDateString("bn-bd",
//       {
//         dateStyle: "full",
//       }
//     ));
//   }, 1000);

//   return (
//     <div>
//       <p className="mt-1  text-gray-500">
//         {date}
//       </p>
//     </div>
//   );
// };

// export default BanglaDate;


"use client";

import { useEffect, useState } from "react";

const getBanglaDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const BanglaDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setDate(getBanglaDate());
    };

    // Set the date after the component mounts
    updateDate();

    // Update periodically to detect a new day
    const intervalId = setInterval(updateDate, 60_000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="mt-1 text-gray-500">
        {date || "\u00A0"}
      </p>
    </div>
  );
};

export default BanglaDate;
