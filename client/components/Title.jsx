import React from 'react';

const Title = ({ listingInfo }) => (
    <div>
      <div id='listing_title'>{listingInfo.title}</div>
      <div id='listing_location'>{listingInfo.location}</div>
    </div>
)

export default Title;