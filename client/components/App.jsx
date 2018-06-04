import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './Title.jsx';
import Stats from './Stats.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenity from './Amenity.jsx';
import Arrangements from './Arrangements.jsx';
import Rules from './Rules.jsx';
import Cancellations from './Cancellations.jsx';
import Calendar from 'react-calendar';

const TopAndBottomBorder = styled.div`
  border-top: 1px solid #DBDBDB;
  border-bottom: 1px solid #DBDBDB;
  width: 32%;
  padding-top: 2.5%;
  margin-left: 17%;
  padding-bottom: 2.5%;
`;

const HouseRulesDiv = styled.p`
  margin-top: 2.5%;
  display: block;
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`;

const HostPicture = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 0,
            listingInfo: {},
            statsInfo: {},
            amenitiesInfo: {},
            rulesInfo: [],
            hostInfo: {},
            date: new Date()
        };
    }

    componentDidMount() {
        this.fetchListingTitleAndLocationFromDB();
        this.fetchListingStatsFromDB();
        this.fetchListingAmenitiesFromDB();
        this.fetchRulesFromDB();
        this.fetchHostInfo();
    }

    fetchListingTitleAndLocationFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/listings', {
          params: {
              listing_id: id
          }
      }).then(res => {
               this.setState({
                   listingInfo: res.data[id]
               });
           }).catch(err => {console.log("There was an err retrieving listing info..", err)});
    }

    fetchListingStatsFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/stats', {
          params: {
              listing_id: id
          }
      }).then(res => {
                // console.log("This is stats data..", res.data);
                this.setState({
                    statsInfo: res.data[id]
                })
            }).catch(err => console.log("There was an err fetching stats from controller..", err));
    }

    fetchListingAmenitiesFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/amenities', {
        params: {
          listing_id: id
        }
      }).then(res => {
            //   console.log("This is amenities data..", res.data);
              this.setState({
                amenitiesInfo: res.data[id]
              })  
           }).catch(err => console.log("There was an err fetching amenities from controller..", err)); 
    }
    
    fetchRulesFromDB() {
      axios.get('/api/rules', {
        params: {
          listing_id: 0
        }
      }).then(res => {
              this.setState({
                rulesInfo: [...res.data[0].rules]
             })
           }).catch(err => console.log("There was an err fetching rules from controller..", err));
    }

    fetchHostInfo() {
      const id = this.state.listing_id;
      axios.get('/api/hosts', {
        params: {
          listing_id: id
        }
      }).then(res => this.setState({
          hostInfo: res.data[id]
      }))
        .catch(err => console.log("There was an err fetching host from controller..", err))
    }
    
    OnChangeForDate(date) {
      this.setState({
        date: date
      });
    }





    render() {
        return(
            <div>
                <Title hostInfo={ this.state.hostInfo } listingInfo={ this.state.listingInfo } />
                {/* <HostPicture>
                <img src="" alt="Avatar" id="image"/>
                </HostPicture> */}
                <Stats statsInfo={ this.state.statsInfo }/>
                <Highlights/>
                <Description listingInfo={ this.state.listingInfo }/>
                <Amenity amenitiesInfo={ this.state.amenitiesInfo }/>
                <Arrangements statsInfo={ this.state.statsInfo }/>
                <TopAndBottomBorder>
                  <HouseRulesDiv>
                    House Rules
                  </HouseRulesDiv>
                  {this.state.rulesInfo.map((ruleInfo, index) => <Rules ruleInfo={ ruleInfo } key={ index }/>)}
                </TopAndBottomBorder>
                <Cancellations/>
                <TopAndBottomBorder>
                  <Calendar onChange={(date) => this.OnChangeForDate()} value={ this.state.date }/>
                </TopAndBottomBorder>
                
            </div>
        )
    }
}

export default App;