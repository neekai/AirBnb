import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Stats from './Stats.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenity from './Amenity.jsx';
import Arrangements from './Arrangements.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 0,
            listingInfo: {},
            statsInfo: {},
            amenitiesInfo: {}
        };
    }

    componentDidMount() {
        this.fetchListingTitleAndLocationFromDB();
        this.fetchListingStatsFromDB();
        this.fetchListingAmenitiesFromDB();
    }

    fetchListingTitleAndLocationFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/listings', {
          params: {
              listing_id: id
          }
      })
           .then(res => {
               this.setState({
                   listingInfo: res.data[id]
               });
           })
           .catch(err => {console.log("There was an err retrieving listing info..", err)});
    }

    fetchListingStatsFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/stats', {
          params: {
              listing_id: id
          }
      })
            .then(res => {
                console.log("This is stats data..", res.data);
                this.setState({
                    statsInfo: res.data[id]
                })
            })
            .catch(err => console.log("There was an err fetching stats from controller..", err));
    }

    fetchListingAmenitiesFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/amenities', {
        params: {
          listing_id: id
        }
      })
            .then(res => {
              console.log("This is amenities data..", res.data);
              this.setState({
                amenitiesInfo: res.data[id]
              })  
           })
           .catch(err => console.log("There was an err fetching amenities from controller..", err)); 
    }       






    render() {
        return(
            <div>
                <Title listingInfo={this.state.listingInfo} />
                <Stats statsInfo={this.state.statsInfo}/>
                <Highlights/>
                <Description listingInfo={this.state.listingInfo}/>
                <Amenity amenitiesInfo={this.state.amenitiesInfo}/>
                <Arrangements statsInfo={this.state.statsInfo}/>    
            </div>
        )
    }
}

export default App;