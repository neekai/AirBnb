import React from 'react';
import styled from 'styled-components';

const CancellationWrapper = styled.div`
  margin-left: 17%;
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
`

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
    </CancellationWrapper>
)

export default Cancellations;