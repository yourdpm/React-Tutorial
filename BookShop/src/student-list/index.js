const React = require('react');
require('./style.less');

module.exports = List;
function List(props) {
    React.Component.call(this, props);
    this.props = props;
    
    this.render = function() {
        return (
            <div className="StudentList">
                {this.props.students.map( (student, idx) =>
                (
                    <div className="StudentItem" key={idx}>
                        <div>{student.name}</div>
                        <div>{student.addr}</div>
                        <div>{student.gpa}</div>
                    </div>
                )
                )}
            </div>
        )
    }
}
List.prototype = Object.create(React.Component.prototype);


