import React, { Component } from 'react';
import styles from './InputsRadio.module.css';

export default class List extends Component {

    state = {
        elements: [],
        selected: null
    }
    state = {

    };
    handleOptionChange = event => {
        this.setState({
            selected: event.target.value
        });
    };
    componentDidMount() {
        const selected = this.props.selected;
        this.setState({
            selected: selected
        });
    }



    render() {

        const elements = this.props.elements;
        console.log('render ' + this.props.selected)
        const elementList = elements.map(elem => (
            < div key={elem} className={styles.Inputs} >
                {console.log(styles[elem])}
                <label className={styles.Inputs}>
                    <span className={this.state.selected === elem ? `${styles[elem]} ${styles.red}` : `${styles.Medicine} ${styles.gray}`}></span>
                    <input
                        type="radio"
                        name="react-tips"
                        value={elem}
                        extra={this.state.selected}
                        checked={this.state.selected === elem}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                </label>
            </div >
        ))
        return (
            <div>
                {elementList}
            </div>

        )

    }
}