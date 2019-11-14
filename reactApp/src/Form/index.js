import React, {Component} from 'react';
import './style.less';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
            studentAddr: "",
            studentGPA: ""
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleOk(event) {
        console.log(this.state.studentName);
    }
    handleReset(event) {

    }
    
    render() {
        return (
            <div>
                <div className="r1">
                    <label>Name</label>
                    <label>Address</label>
                    <label>GPA</label>
                </div>
                <div className="r2">
                    <input type="text" name="name" value = {this.state.studentName}
                        onChange = {(evnet, newValue) => this.setState({studentName: newValue})}>
                    </input>
                    <input type="text" name="addr" value = {this.state.studentAddr} 
                    onChange = {(event, newValue) => this.setState({studentAddr: newValue})}>
                    </input>
                    <input type="text" name="gpa" value = {this.state.studentGPA}
                    onChange = {(event, newValue) => this.setState({studentGPA: newValue})}>
                    </input>
                </div>
                <div className="r3">
                    <button onClick = {this.handleReset}>Reset</button>
                    <button onClick = {this.handleOk}>OK</button>
                </div>
            </div>
        );
    }
}
export default Form;