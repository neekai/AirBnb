import React from 'react';
import styled from 'styled-components';

const ExitPopUpButton = styled.span`
  float: right;
`;

const ShowAllAmenities = styled.a`
  cursor: pointer;
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: #008489;
  &:hover {
    text-decoration: underline;
  }
`;

const TopAndBottomBorder = styled.div`
  border-top: 1px solid #DBDBDB;
  border-bottom: 1px solid #DBDBDB;
  width: 32%;
  padding: 2.5% 0;
  margin-left: 17%;
`;

const AmenityDiv = styled.div`
  margin-bottom: 10%
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 17px;
`; 

const AmenitySpan = styled.span`
  float: right;
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
      this.setState({
        modalShow: false
      })
    }

    render() {
      return (
            

            <TopAndBottomBorder>
              <AmenityDiv>
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Wifi') ? 
                <span><i class="fas fa-wifi"></i> Wi-fi </span> : <span><i class="fas fa-beer"></i> Essentials </span> }
                <AmenitySpan>  
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Accessible') ? 
                <span>Accessible <i class="fab fa-accessible-icon"></i></span> : <span>Bicycle <i class="fas fa-bicycle"></i></span> }
                </AmenitySpan>
              </AmenityDiv>

              <AmenityDiv>
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Indoor fireplace') ? 
                <span><i class="fab fa-free-code-camp"></i> Indoor Fireplace </span> : <span><i class="fas fa-blender"></i> Blender </span> }
                <AmenitySpan>  
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Kitchen') ? 
                <span>Kitchen <i class="fas fa-utensils"></i></span> : <span>Anchor <i class="fas fa-anchor"></i></span> }
                </AmenitySpan>
              </AmenityDiv>

              <AmenityDiv>
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Smart TV') ? 
                <span><i class="fas fa-tv"></i> Smart TV </span> : <span><i class="fas fa-medkit"></i> Medkit </span> }
                <AmenitySpan>  
                { this.props.amenitiesInfo.amenities !== undefined && this.props.amenitiesInfo.amenities.includes('Free parking on premises') ? 
                <span>Free parking on premises <i class="fas fa-parking"></i>  </span> : <span>Gaming Consoles <i class="fas fa-gamepad"></i></span> }
                </AmenitySpan>
              </AmenityDiv>

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
                                          <p>Basic</p>
                                      </div>
                                    </div> : null }<ShowAllAmenities> Show all amenities <i class="fas fa-angle-down"></i> </ShowAllAmenities>  
              </a>
            </TopAndBottomBorder>       
          
      )
    }
}

export default Amenity;