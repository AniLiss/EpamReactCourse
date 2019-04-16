import React, {Component} from 'react';
import './search.scss';
import {Button} from '../search-btn/serch-btn';

export class Search extends Component {
    state = {
        isButtonActive: false
    };

    handleClick = () => {
        this.setState(() => ({
            isButtonActive: !this.state.isButtonActive
        }));
    };

    render() {
        const {isButtonActive} = this.state;
        return (
            <div className="search">
                <h2 className="search__title">Find your movie</h2>
                <input className="search__input" />
                <div className="search__filters">
                    <h2 className="search__filters-title">Search by</h2>
                    <Button dataId="Title" text="Title" active={!isButtonActive} onClick={this.handleClick} />
                    <Button dataId="Genre" text="Genre" active={isButtonActive} onClick={this.handleClick} />
                </div>
                <Button text="Search" active/>
            </div>
        )
    }
};
