import React, { Component } from "react"
import digiarty from "../../assets/images/brand/digiarty.png"
import gear from "../../assets/images/brand/gearbest.svg"
import imobie from "../../assets/images/brand/imobie.svg"
import fone from "../../assets/images/brand/imyfone.svg"
import le from "../../assets/images/brand/leawo.webp"
import ten from "../../assets/images/brand/tenorshare.svg"

const brand = () => {
  return (
    <>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "30px",
          textAlign: "center",
          color: "#6c757d",
        }}
      >
        I'm proud to have collaborated with some awesome companies
      </p>

      <ul style={{ filter: "invert(1)" }} className="brand-style-2">
        <li>
          <img src={digiarty} alt="Logo digiarty" />
        </li>
        <li>
          <img src={gear} alt="Logo gearbest" />
        </li>
        <li>
          <img src={imobie} alt="Logo imobie" />
        </li>
        <li>
          <img src={fone} alt="Logo fone" />
        </li>
        <li>
          <img src={le} alt="Logo leawo" />
        </li>
        <li>
          <img style={{ width: "150px" }} src={ten} alt="Logo tenorshare" />
        </li>
      </ul>
    </>
  )
}
export default brand
