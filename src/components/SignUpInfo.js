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
          <div className="sign-up-container">
            <input
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phonenumber}
              onChange={(event) =>
                setFormData({ ...formData, phonenumber: event.target.value })
              }
            />
            <input
              type="text"
              style={{ height: 150 }}
              placeholder="Delivery Address"
              value={formData.deliveryaddress}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  deliveryaddress: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-auto pr-5">

          <div className="topping" style={{ marginTop: -68, marginLeft: 30 }}>
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />
            Send as dropshipper
          </div>

          <div className="sign-up-container" style={{ marginTop: 45 }}>
            <input
              type="text"
              style={{ width: 300 }}
              placeholder="Dropshipper Name"
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
            />
            <br />
            <input
              type="text"
              style={{ width: 300, marginTop: -20 }}
              placeholder="Dropshipper Phone Number"
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="col-auto pr-5">
          <div className="sign-up-container">
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
