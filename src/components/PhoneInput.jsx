import React from "react";
import "react-phone-input-2/lib/style.css"; // Import the library's CSS
import PhoneInput from "react-phone-input-2";

function PhoneInputComponent() {
  return (
    <div className="relative w-full h-[50px]">
      <PhoneInput
        inputStyle={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          outline: "none",
          paddingLeft: "50px",
        }}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        dropdownStyle={{
          width: "auto",
          border: "1px solid #ccc",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default PhoneInputComponent;
