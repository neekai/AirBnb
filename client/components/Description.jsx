import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }


    render() {
        return (
            <div id="listing_description">
                {this.props.listingInfo.description}
            </div>
        )
    }
}

export default Description;