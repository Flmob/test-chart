import React, {Component} from 'react';

class MainBilling extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log('state ', this.state);

        return (
            <div className={'main-dashboard'}>
                MainBilling
            </div>
        );
    }
}

export default MainBilling;