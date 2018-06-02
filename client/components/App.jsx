import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listing_id: 0,
            listingInfo: {}
        };
    }

    componentDidMount() {
        this.fetchListingTitleAndLocationFromDB();
    }

    fetchListingTitleAndLocationFromDB() {
      const id = this.state.listing_id;
      axios.get('/api/listings', {
          params: {
              listing_id: this.state.listing_id
          }
      })
           .then(res => {
               console.log("this is res data..", res.data)
               this.setState({
                   listingInfo: res.data[id]
               });
           })
           .catch(err => {console.log("There was an err retrieving listing info..", err)});
    }







    render() {
        return(
            <div>
                <h1>Hi</h1>
                <Title listingInfo={this.state.listingInfo}/>
            </div>
        )
    }
}

export default App;