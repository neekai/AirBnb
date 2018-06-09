import React from 'react';
import styled from 'styled-components';

const ArrangementsWrapper = styled.div`
  margin: 2.5% 0 2.5% 17%;
  widith: 60%;
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`;

const ArrangementsBorder = styled.div`
  border: 1px solid #DBDBDB;
  margin-top: 2%;
  width: 14.5%;
  padding: 3%; 
  margin-right: 3%;
  display: inline-block;
`;

const ArrangementsSpan = styled.span`
  border: 1px solid #DBDBDB;
  width: 12.5%;
  padding: 3%;
  margin-left: 15%;
`;

const Bed = styled.div`
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  mrgin-bottom: 2.5%;
  font-family: 'Source Sans Pro', sans-serif;  
`

const Arrangements = ({ statsInfo }) => (
  
  <ArrangementsWrapper>
    <div>Sleeping arrangements</div>
    <ArrangementsBorder>
      { statsInfo.bedrooms === 1 && statsInfo.beds === 1 ? <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 1</div><div>1 King Bed</div></Bed> : statsInfo.bedrooms === 2 && statsInfo.beds === 2 ? <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 1</div><div>1 Queen Bed</div></Bed> : statsInfo.bedrooms >= 1 && statsInfo.beds < 4 ? <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 1</div><div>2 Queen Beds</div></Bed> : <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 1</div><div>2 Queen Beds</div></Bed> }   
    </ArrangementsBorder>
    { statsInfo.bedrooms === 1 ? null : 
    <ArrangementsBorder>
      { statsInfo.bedrooms > 1 && statsInfo.beds < 4 ? <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 2</div><div>1 King Bed</div></Bed> : <Bed><div><i class="fas fa-bed"></i></div><div>Bedroom 2</div><div>2 Queen Beds</div></Bed> }   
    </ArrangementsBorder>}
  </ArrangementsWrapper>
)

export default Arrangements;