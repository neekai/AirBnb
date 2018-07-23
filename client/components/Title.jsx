import React from 'react';
import styled from 'styled-components';

const HostName = styled.div`
  margin-left: 42%;
  position: absolute;
  left: 3%;
  top: 18.5%;
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
`;

const Title = ({ listingInfo, hostInfo }) => (
    <div>
      {console.log('this is img src..', hostInfo.picture)}
      <div id='listing_title'>{listingInfo.title}<img id='host_avatar' src={hostInfo.picture} alt=""/></div>
      <HostName>{hostInfo.name}</HostName>
      <div id='listing_location'>{listingInfo.location} </div>
    </div>
)

export default Title;