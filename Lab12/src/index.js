const React = require('react');
const ReactDOM = require('react-dom');
const Form = require('./Form');
var List = require('./student-list');

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
			<Form onNewStudent={this.addStudent}/>
            <List students={this.state.students}/>
		</div>
	}
}

App.prototype = Object.create(React.Component.prototype);
ReactDOM.render(<App />, document.getElementById('app'));