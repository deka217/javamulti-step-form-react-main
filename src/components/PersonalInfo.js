import React, { useState } from "react";
import { shipment } from "./utils/shipment";
import { payment } from "./utils/payment";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function PersonalInfo({ formData, setFormData }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [total, setTotal] = useState(0);

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="sign-up-container">
          <div className="shipment-list" style={{ marginLeft: -500 }}>
            {shipment.map(({ name, price }, index) => {
              return (
                <div key={index}>
                  <div className="shipment-list-item">
                    <div className="row-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        // checked={isChecked}
                        onChange={handleOnChange}
                        style={{ marginLeft: -390 }}
                      />
                      <label
                        htmlFor={`custom-checkbox-${index}`}
                        style={{ marginLeft: -150 }}
                      >
                        {name}
                      </label>
                    </div>
                    <div className="right-section" style={{ marginLeft: -140 }}>
                      {getFormattedPrice(price)}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-auto pr-5">
              <div className="sign-up-container">
                <h1
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginTop: -70,
                    marginRight: -950,
                  }}
                >
                  Summary
                </h1>

                <div
                  className="vl"
                  style={{ marginRight: -1170, marginTop: -400 }}
                ></div>

                <h1
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginTop: -100,
                    marginRight: -900,
                  }}
                >
                  Total
                </h1>
              </div>
            </div>
          </div>

          

          <div className="shipment-list-item">
            <div
              className="left-section"
              style={{ marginTop: -190, marginLeft: 1000 }}
            >
              {getFormattedPrice(total)}
            </div>
          </div>

          <div className="payment-list" style={{ marginTop: -583 }}>
            {payment.map(({ name, price }, index) => {
              return (
                <div key={index}>
                  <div className="payment-list-item">
                    <div className="row-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        style={{ marginLeft: -390 }}
                      />
                      <label
                        htmlFor={`custom-checkbox-${index}`}
                        style={{ marginLeft: -150 }}
                      >
                        {name}
                      </label>
                    </div>
                    <div className="right-section" style={{ marginLeft: -140 }}>
                      {getFormattedPrice(price)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
