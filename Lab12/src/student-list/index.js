const React = require('react');
require('./style.less');

module.exports = List;
function List(props) {
    React.Component.call(this, props);
    this.props = props;
    
    this.render = function() {
        return (
            <div className="list">
                <table className="">
                    <tr>
                        <th>Name</th>
                        <th>Adress</th>
                        <th>GPA</th>
                    </tr>
                    {this.props.students.map( (student, idx) =>
                    (
                        <tr className="" key={idx}>
                            <td>{student.name}</td>
                            <td>{student.addr}</td>
                            <td>{student.gpa}</td>
                        </tr>
                    )
                    )}
                </table>
            </div>
        )
    }
}
List.prototype = Object.create(React.Component.prototype);


