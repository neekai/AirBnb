import React from 'react';
import styled from 'styled-components';

const RulesDiv = styled.p`
  margin-top: 2.5%;
  display: block;
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
`;

const Rules = ( { ruleInfo } ) => (
      <RulesDiv>{ruleInfo}</RulesDiv> 
);

export default Rules;
