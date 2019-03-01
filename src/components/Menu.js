import React, {Component} from 'react';
import { FaHome, FaComments, FaEllipsisH } from "react-icons/fa";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMainItem: 'home',
            currentSubItem: 0
        };

        this.values = {
            home: {
                icon: <FaHome/>,
                subValues: ['Dashboard', 'Billing']
            },
            chat: {
                icon: <FaComments/>,
                subValues: ['Programmable SMS', 'Dashboard', 'SMS']
            },
            options: {
                icon: <FaEllipsisH/>,
                subValues: ['main']
            }
        };
    }

    onMainMenuChange = (id) => {
        if(id === this.state.currentMainItem) return;

        this.setState({
            currentMainItem: id,
            currentSubItem: 0
        }, this.returnValue)
    };

    onSubMenuChange = (id) => {
        if(id === this.state.currentSubItem) return;

        this.setState({
            currentSubItem: id
        }, this.returnValue);
    };

    returnValue = _ => {
        this.props.onChange({
            mainItem: this.state.currentMainItem,
            subItem: this.values[this.state.currentMainItem].subValues[this.state.currentSubItem]
        });
    };

    render() {
        const {values} = this;
        const {currentMainItem, currentSubItem} = this.state;

        return (
            <div className="menu-wrapper">
                <div className="menu main-menu">
                    {Object.keys(values).map(key => {
                        let item = values[key];
                        return (
                            <div
                                className={`menu-el ${key == currentMainItem ? 'selected' : ''}`}
                                onClick={()=>{
                                    this.onMainMenuChange(key);
                                }}
                                key={key}
                            >
                                <div className="icon-wrapper">
                                    {item.icon}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="menu submenu">
                    {values[currentMainItem].subValues.map((item, i) => {
                        return (
                            <div
                                className={`menu-el ${i === currentSubItem ? 'selected' : ''}`}
                                onClick={()=>{
                                    this.onSubMenuChange(i);
                                }}
                                key={`${currentMainItem}${i}`}
                            >
                                <span>{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;