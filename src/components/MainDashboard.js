import React, {Component} from 'react';

import {IoMdClose, IoMdInformationCircle, IoIosArrowDown, IoIosArrowUp, IoIosChatboxes} from 'react-icons/io';

import Chart from './Chart';

const ProjectInfo = (props) => {
    return <div className={'project-info'}>
        <div className={'prinfo-head'}>
            <span>Project info</span>
            <div className="arrow-wrapper" onClick={props.onArrowClick}>
                {props.isProjectInfo ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </div>
        </div>
        <div className={`prinfo-body ${props.isProjectInfo?'visible':''}`}>
            <div className="left-part">
                <p>We've customised your dashboard based on the products you selected. Use the product getting started guides to get up and running</p>
                <p>We can't wait to see what you'll build!</p>
            </div>
            <div className="right-part">
                <div className="table">
                    <div className="t-row">
                        <div className="t-name">PROJECT NAME</div>
                        <div className="t-value">{props.user.projectName}</div>
                    </div>
                    <div className="t-row">
                        <div className="t-name">ACCOUNT SID</div>
                        <div className="t-value">{props.user.accSID}</div>
                    </div>
                    <div className="t-row">
                        <div className="t-name">AUTH TOKEN</div>
                        <div className="t-value">view</div>
                    </div>
                    <div className="t-row">
                        <div className="t-name">BALANCE</div>
                        <div className="t-value">{props.user.balance}</div>
                    </div>
                </div>
                <div className="additional-info"></div>
            </div>
        </div>
    </div>
};

const InfoBoard = (props) => {
    return <div className={'info-window'}>
        <div className="info-icon">
            <IoMdInformationCircle/>
        </div>
        <span>We are updating our online terms of service. <a href={'#'}>Learn more</a></span>
        <div className={'close-icon'} onClick={props.onXClick}>
            <IoMdClose/>
        </div>
    </div>
};

class MainDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInfo: true,
            isProjectInfo: true
        };

        console.log(props);
    }

    removeInfo = () => {
        this.setState({isInfo:false});
    };

    toggleProjectInfo = () => {
        this.setState({isProjectInfo:!this.state.isProjectInfo});
    };

    render() {
        console.log('state ', this.state);
        const {isInfo, isProjectInfo} = this.state;
        const {user} = this.props;

        return (
            <div className={'main-dashboard'}>
                {isInfo && <InfoBoard onXClick={this.removeInfo}/>}
                <h1>{`${user.projectName || 'Project'} Dashboard`}</h1>
                <ProjectInfo onArrowClick={this.toggleProjectInfo} isProjectInfo={isProjectInfo} user={user}/>
                <div className="dashboard">
                    <div className="chart-wrapper">
                        <div className="chart-header">
                            <div className="icon-wrapper">
                                <IoIosChatboxes/>
                                <span>Programmable SMS</span>
                            </div>
                        </div>
                        <span>Messages</span>
                        <Chart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainDashboard;