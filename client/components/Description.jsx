import React from 'react';
import styled from 'styled-components';
// import ListingDescription from './Style.jsx';

const ListingDescription = styled.div`
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
`;

const ReadMoreAndHide = styled.a`
font-size: 16px;
font-family: 'Source Sans Pro', sans-serif;
font-weight: 600;
cursor: pointer;
color: #008489;
&:hover{
  text-decoration: underline;
}
`;

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            description: ''
        }
    }

    expandedText() {
      this.setState({
        expanded: true
      });
    }

    collapseText() {
      this.setState({
        expanded: false
      });
    }

    


    render() {
        let firstLine = this.props.listingInfo.description;
        let rest = this.props.listingInfo.description;
        // firstLine = firstLine.split('.');
        return (
          <div id="listing_description">
            <ListingDescription>
              { firstLine !== undefined ? firstLine.split('.')[0] : null }
            </ListingDescription>
              <div>
                { !this.state.expanded ? <a onClick={() => {this.expandedText()}}><ReadMoreAndHide>Read more about the space</ReadMoreAndHide></a> : null }
                  { this.state.expanded ? <ListingDescription>
                  { rest !== undefined ? rest.split('.').slice(1).join('.') : null }
                </ListingDescription> : null }
                { this.state.expanded ? <a onClick={() => {this.collapseText()}}><ReadMoreAndHide>Hide</ReadMoreAndHide></a> : null }
              </div>
          </div>
        )
    }
}

export default Description;