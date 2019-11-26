const React = require('react');
const ReactDOM = require('react-dom');
const Form = require('./Form');
var List = require('./student-list');
require('./style.less');

function App() {
	React.Component.call(this);
	this.state = {
		students : []
    }
    
    this.addStudent = addStudent.bind(this);
    function addStudent(student) {
        this.setState(state => {
            state.students.push(student);
            return {
                students: state.students
            }
        })
        console.log(this.state.students);
        
    }

	this.render = function() {
		return <div>
            <div className="main">
                <div className="col1"><Form onNewStudent={this.addStudent}/></div>
                <div className="col2"><List students={this.state.students}/></div>
            </div>
            
		</div>
	}
}

App.prototype = Object.create(React.Component.prototype);
ReactDOM.render(<App />, document.getElementById('app'));