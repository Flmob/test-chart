import React, {Component} from 'react';
import { FaAngleDown, FaRegTimesCircle, FaBug, FaQuestion, FaRegSun, FaSearch } from "react-icons/fa";

const defaultUser = {
    name: 'No user',
    email: 'No user'
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user || defaultUser
        };
    }

    render() {
        let { user } = this.state;

        return (
            <div className={'header'}>
                <div className={'top'}>
                    <div className="left-block">
                        <FaRegTimesCircle/>
                        <span>twillo</span>
                    </div>
                    <div className="right-block">
                        <div className={'docs'}>
                            <span>DOCS</span>
                            <FaAngleDown/>
                        </div>
                        <div className={'user'}>
                            <span>{user.name}</span>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className={'bottom'}>
                    <div className="left-block">
                        <span>{user.email}</span>
                        <FaAngleDown/>
                    </div>
                    <div className="right-block">
                        <div className="input-wrapper">
                            <input type={'text'} placeholder={'Go to...'}/>
                            <div className="icon-wrapper">
                                <FaSearch/>
                            </div>
                        </div>
                        <FaBug/>
                        <FaQuestion/>
                        <FaRegSun/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;