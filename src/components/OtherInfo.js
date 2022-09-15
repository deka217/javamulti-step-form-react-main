import React, { useState } from "react";

function SignUpInfo({ formData, setFormData }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        
        <div className="col-auto pr-5">

          <h1> Thank You </h1>
        </div>

        <div className="col-auto pr-5">
          <div className="sign-up-container" style={{ marginLeft: 450 }}>
            <h1
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginTop: -70,
                marginLeft: -220,
              }}
            >
              Summary
            </h1>

            <div className="vl"></div>

            <h1
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginTop: -100,
                marginLeft: -278,
              }}
            >
              Total
            </h1>

            <div className="result" style={{ marginTop: -80, marginLeft: -175 }}>
              Dropshipping fee {isChecked ? "5900" : " "}.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpInfo;
