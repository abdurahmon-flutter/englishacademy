import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmail = async (e) => {
    e.preventDefault();
  
    const requestData = {
      id: 1,
      name: "1",
      phoneNumber: email,  // Use the email state value
      description: "1",
      requestProvider: 1,
      lcenterId: 1,
      branchId: 1,
    };
  
    try {
      const response = await fetch("https://keshvista1.pythonanywhere.com/request-to-study/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        alert("Yuborildi");
        setEmail(""); // Clear the input field after successful submission
      } else {
        const errorData = await response.json();
        console.error("Failed to send email:", errorData);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  return (
    <div className="flex items-center justify-center content-center justify-items-center relative">
      <div className="sm:flex-col sm:py-10 bottom-14 h-full flex justify-evenly bg-darkBlue w-4/5 py-24 rounded-xl translate-y-32 duration-700">
        <div>
          <h2 className="sm:text-2xl w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pl-8">
            So'rov qoldiring
          </h2>
          <p className="sm:text-lg block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white text-xl pl-8 ">
            1 kun ichida sizga aloqaga chiqamiz
          </p>
        </div>
        <div className="sm:flex-col flex items-center justify-center content-center">
          <div className="pb-4 pt-4 w-64 text-white">
            <Input
              name="phone"
              type="phone"
              placeholder="Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              label="Phone"
            />
          </div>
          <div>
            <Button onClick={handleEmail} ripple={true} className="ml-2 ">
              Qoldirish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
