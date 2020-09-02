import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '13px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { title, id } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
                    { title }
                    <button style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#5D1411',
    color: '#fff',
    border: 'none',
    padding: '5px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem
