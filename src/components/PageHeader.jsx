import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PageHeader() {
  return (
    <Row id="top">
      <Col>
        <h1 className="font-weight-bold">
          Run the Data
          <svg width="2em" height="2em" x="0px" y="0px" viewBox="0 0 100 125">
                <path d="M61.6,23.7c-0.4,0.3-0.6,0.7-0.8,1.1c-0.6,0.9-1.2,1.8-1.8,2.8c-1.3,2-2.6,4-3.9,6c-1,1.5-2,3-3.1,4.5    c-0.1,0.2-0.3,0.3-0.4,0.5c-0.4,0.5-0.9,0.9-1.4,1.3c1.2,1.4,2.3,3,3.1,5.1c0.6-0.3,1-0.6,1.4-1c1.5-1.7,7.7-10.5,11.4-16    c0,0,1.4-2-1.2-3.8c-0.5-0.4-1.1-0.7-1.7-0.7c-0.5-0.1-1,0-1.5,0.2C61.7,23.6,61.6,23.7,61.6,23.7z" />
                <path d="M68.1,30.6c-0.5,0.3-0.8,0.8-1.1,1.3c-0.3,0.4-0.6,0.8-0.9,1.3c-0.7,1.1-1.5,2.1-2.2,3.2c-1.5,2.1-3,4.2-4.5,6.3    c-0.2,0.3-0.4,0.6-0.6,0.9c0,0.5,0.2,1.9,1.9,2.8c0.4,0.2,1.2,0.1,3-1.7c2-1.9,3.6-4.3,5.2-6.6l0.1-0.1c0.7-1,1.4-2,1.9-3.1    c0.5-0.9,0.9-2.1,0.8-3.2c0-0.4-0.3-0.7-0.6-0.9c-0.7-0.6-1.8-0.7-2.6-0.3C68.4,30.4,68.3,30.5,68.1,30.6z" />
                <path d="M71.5,39.7L71.5,39.7c-1.8,2.5-3.5,5-5.7,7.1c-0.7,0.7-2.6,2.6-4.8,2.6c-0.5,0-1.1-0.1-1.6-0.4c-1.5-0.7-2.4-1.7-2.9-2.7    c-0.6,0.6-1.4,1.1-2.2,1.4c0.6,2.2,0.9,4.7,0.9,7.7c0,0.8-0.7,1.5-1.5,1.5c0,0,0,0,0,0c-0.8,0-1.5-0.7-1.5-1.5    c0-7.6-2.5-12.1-5.3-14.7c-0.2-0.1-0.3-0.2-0.5-0.4C43.3,37.5,40,37,39.7,37c-0.5-0.1-0.9-0.3-1.1-0.7s-0.3-0.9-0.1-1.3l2.4-6.7    c0.2-0.4,0.5-0.8,1-0.9c0.1,0,2-0.6,5.4-1.4c1.1-0.2,1.9-0.8,2.4-1.6c0.7-1.2,0.7-2.8,0.6-3.9H37c-2.5,0.1-4.4,2.1-6,4.6    c-2.2,3.3-4.4,6.6-6.3,10.1c-2.8,4.9-0.2,9.3-0.2,9.3s5.5,6.1,7.7,9.3c4.7,6.9,1.5,16.7,0.8,24.3c-0.4,3.7-0.7,7.5-1.1,11.2h35.8    c0,0-3-24.2-3.4-26.5c-0.5-2.7,2.8-5.4,4.5-7.2c1.8-1.9,3-4.6,3-7.2c0,0,0.1-4.7,0.1-9.4C71.7,39.3,71.6,39.5,71.5,39.7z" />
                <path d="M53.2,18.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.2,0.3-0.2,0.4c0.1,0.3,1.1,4.3-0.7,7.4c-0.9,1.5-2.4,2.5-4.3,3    c-2.1,0.5-3.6,0.9-4.4,1.1l-1.6,4.4c1.5,0.5,3.8,1.4,6.1,3.2c0.5-0.3,1-0.6,1.3-1c1.4-1.7,7-10.3,10.3-15.6c0.4-1.1,0.5-2.6-2-4.1    c-0.9-0.5-1.9-0.5-2.8-0.1C54.1,17.1,53.5,17.6,53.2,18.1z" />
                <path d="M50,17.5l0.7-1.3c0.3-0.8,0.2-1.8-0.3-2.5c-0.4-0.7-1-1-1.7-1.4c-3.9-2.5-6.1,0.7-6.1,0.7l-3.3,4.5H50z" />
          </svg>
          <svg viewBox="0 0 100 125" x="0px" y="0px" width="1.5em" height="1.5em">
            <path d="M9.73523,26.49457c8.06506,6.12347,24.51752,9.35626,40.26465,9.35626,15.74682,0,32.1994-3.23279,40.26459-9.35626V39.29633c0,6.08422-17.21973,12.88909-40.26459,12.88909S9.73523,45.38055,9.73523,39.29633Zm0,34.2091c0,6.08417,17.21979,12.889,40.26465,12.889s40.26459-6.80487,40.26459-12.889V47.90155c-8.06519,6.12329-24.51777,9.35608-40.26459,9.35608-15.74713,0-32.19959-3.23279-40.26465-9.35608Zm0,21.40729C9.73523,88.19513,26.955,95,49.99988,95s40.26459-6.80487,40.26459-12.889V69.30884c-8.06519,6.12329-24.51777,9.35608-40.26459,9.35608-15.74713,0-32.19959-3.23279-40.26465-9.35608ZM90.26447,17.889C90.26447,11.80487,73.04474,5,49.99988,5S9.73523,11.80487,9.73523,17.889c0,6.08471,17.21979,12.88959,40.26465,12.88959S90.26447,23.97375,90.26447,17.889Z" />
          </svg>
        </h1>

        <p>
          Visualizing Austin Police Department expenditures from{" "}
          <a href="https://data.austintexas.gov/Budget-and-Finance/Austin-Finance-Online-eCheckbook/8c6z-qnmj">
            open financial data
          </a>
          .
        </p>
      </Col>
    </Row>
  );
}
