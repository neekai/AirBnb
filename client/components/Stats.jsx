import React from 'react';

const Stats = ( { statsInfo } ) => {
  return (
    <div>
      <ul id='stats'>
        <li><i class="fas fa-users"></i> {statsInfo.guests} guests</li>
        <li><i class="fas fa-door-open"></i> {statsInfo.bedrooms > 1 ? `${statsInfo.bedrooms} bedrooms` : `${statsInfo.bedrooms} bedroom`}</li>
        <li><i class="fas fa-bed"></i> {statsInfo.beds > 1 ? `${statsInfo.beds} beds` : `${statsInfo.beds} bed`}</li>
        <li><i class="fas fa-bath"></i> {statsInfo.baths > 1 ? `${statsInfo.baths} baths` : `${statsInfo.baths} bath`}</li>
      </ul>
    </div>
  )
}

export default Stats;

