import React, {Component} from 'react';

import Menu from './Menu';
import MainDashboard from './MainDashboard';
import MainBilling from './MainBilling';
import MainDefault from "./MainDefault";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainItem: 'home',
            subItem: 'Dashboard'
        };

        this.components = {
            home: {'Dashboard': <MainDashboard user={props.user}/>, 'Billing': <MainBilling/>},
            chat: {'Programmable SMS': '', 'Dashboard': '', 'SMS': ''},
            options: {'main': ''}
        };
    }

    onMenuChange = (value) => {
        this.setState(value);
    };

    render() {
        console.log('state ', this.state);

        return (
            <div className={'content'}>
                <Menu onChange={this.onMenuChange}/>
                <div className="main">
                    {this.components[this.state.mainItem][this.state.subItem] || <MainDefault/>}
                </div>
            </div>
        );
    }
}

export default Content;