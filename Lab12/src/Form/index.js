const React = require('react')
require('./style.less');

module.exports = Form;

function Form(props) {
    React.Component.call(this, props);
    this.state = {
        studentName: "",
        studentAddr: "",
        studentGPA: ""
    }

    this.nameChange = nameChange.bind(this);
    function nameChange(e) {
        this.setState({studentName: e.currentTarget.value});
    }

    this.addrChange = addrChange.bind(this);
    function addrChange(e) {
        this.setState({studentAddr: e.currentTarget.value});
    }

    this.gpaChange = gpaChange.bind(this);
    function gpaChange(e) {
        this.setState({studentGPA: e.currentTarget.value});
    }

    this.handleOk = handleOk.bind(this);
    function handleOk(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onNewStudent({
            name: this.state.studentName,
            addr: this.state.studentAddr,
            gpa: this.state.studentGPA
        });
        console.log(this.state.studentName);
    }
    
    this.handleReset = handleReset.bind(this);
    function handleReset(event) {
        this.setState({
            studentName:"",
            studentAddr: "",
            studentGPA: ""
        });
    }
    
    this.render = function() {
        return (
            <div>
                <div className="r1">
                    <label>Name</label>
                    <label>Address</label>
                    <label>GPA</label>
                </div>
                <div className="r2">
                    <input type="text" value ={this.state.studentName} onChange={this.nameChange}>
                    </input>
                    <input type="text" value = {this.state.studentAddr} onChange={(e) => this.addrChange(e)} >
                    </input>
                    <input type="text" value = {this.state.studentGPA} onChange={(e) => this.gpaChange(e)}>
                    </input>
                    
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleOk}>OK</button>
                </div>
                
            </div>
        );
    }
}

Form.prototype = Object.create(React.Component.prototype);