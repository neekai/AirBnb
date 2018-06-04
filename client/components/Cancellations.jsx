import React from 'react';
import styled from 'styled-components';

const CancellationWrapper = styled.div`
  margin-left: 17%;
  padding-bottom: 2.5%;
`

const CancellationsDiv = styled.div`
  margin-top: 2.5%;
  display: block;
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`;

const CancellationInfo = styled.p`
  margin-top: 2.5%;
  display: block;
  width: 38%;
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
`;

const GetDetails = styled.a`
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  cursor: pointer;
  color: #008489;
  &:hover{
    text-decoration: underline;
}
`;

const Cancellations = () => (
    <CancellationWrapper>
      <CancellationsDiv>
        Cancellations
      </CancellationsDiv>
      <CancellationInfo>
        Strict
      </CancellationInfo>
      <CancellationInfo>
      Cancel up to 30 days before your trip and get a full refund. 
      Cancel within 30 days of the trip and get a 50% refund of the nightly rate, 
      as well as a full refund of fees.
      </CancellationInfo>
      <CancellationInfo>
        <a href="https://www.airbnb.com/home/updated_cancellation_policies?guest_fee_policy=full_refund#strict"><GetDetails>Get Details</GetDetails></a>
      </CancellationInfo>
    </CancellationWrapper>
)

export default Cancellations;