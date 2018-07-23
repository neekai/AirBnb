import React from 'react';
import styled from 'styled-components';
// import ListingDescription from './Style.jsx';

const ListingDescription = styled.div`
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  margin-bottom: 2.5%;
`;

const ReadMoreAndHide = styled.a`
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  cursor: pointer;
  color: #008489;
  &:hover{
    text-decoration: underline;
}
`;

const Wrapper = styled.div`
  width: 32%;
  margin-left: 17%; 
  margin-top: 2.5%;
  margin-bottom: 2.5%;
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
          <Wrapper>
          <div id="listing_description">
            <ListingDescription>
              { firstLine !== undefined ? firstLine.split('.')[0] : null }
            </ListingDescription>
              <div>
                { !this.state.expanded ? <a onClick={() => {this.expandedText()}}><ReadMoreAndHide>Read more about the space<i class="fas fa-angle-down"></i></ReadMoreAndHide></a> : null }
                  { this.state.expanded ? <ListingDescription>
                  { rest !== undefined ? rest.split('.').slice(1).join('.') : null }
                </ListingDescription> : null }
                { this.state.expanded ? <a onClick={() => {this.collapseText()}}><ReadMoreAndHide>Hide</ReadMoreAndHide></a> : null }
              </div>
          </div>
          </Wrapper>
        )
    }
}

export default Description;