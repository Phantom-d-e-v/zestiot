import React from "react";
import "react-phone-input-2/lib/style.css"; // Import the library's CSS
import PhoneInput from "react-phone-input-2";

function PhoneInputComponent() {
  return (
    <div className="relative w-full rounded-[10px] ">
      <PhoneInput
        inputStyle={{
          width: "100%",
          height: "50px",
          border: "1px solid #ccc",
          outline: "none",
          paddingLeft: "55px",
          color: "#000000",
        }}
        containerStyle={{
          display: "flex",
          alignItems: "center",
        }}
        dropdownStyle={{
          width: "auto",
          border: "1px solid #ccc",
          zIndex: 10,
          margin: "5px",
        }}
        buttonStyle={{
          width: "40px",
          height: "40px",
          margin: "5px",
          borderRadius: "2px",
          backgroundColor: "#C8C8C8",
        }}
      />
    </div>
  );
}

export default PhoneInputComponent;
