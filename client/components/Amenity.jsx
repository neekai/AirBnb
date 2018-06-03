import React from 'react';
import styled from 'styled-components';

const ExitPopUpButton = styled.span`
  float: right;
`;

const ShowAllAmenities = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: #008489;
  &:hover {
    text-decoration: underline;
  }
`;



class Amenity extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        modalShow: false
      }
    }

    toggleModal() {
      console.log(!this.state.modalShow);
      this.setState({
        modalShow: !this.state.modalShow
      }); 
    }

    toggleModalOff() {
      console.log('lul')
      this.setState({
        modalShow: false
      })
    }

    render() {
      return (
          <div>
            
            <a onClick={() => {this.toggleModal()}}>
            {this.state.modalShow ? <div class="ui active longer modal">
                                      <div class="header">Amenities
                                        <ExitPopUpButton> 
                                          <span>
                                            <button class="ui mini red button"><i class="fas fa-times"></i></button>
                                          </span>
                                        </ExitPopUpButton>
                                      </div>
                                      <div class="scrolling content">
                                        <p>Very long content goes here</p>
                                      </div>
                                    </div> : null }<ShowAllAmenities> Show all amenities </ShowAllAmenities>  
            </a>
                
          </div>
      )
    }
}

export default Amenity;