import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px', fontFamily: 'monospace' }}
                    placeholder="Add To DO ..."
                />
                <input 
                    type="submit"  
                    value="Submit"
                    className="btn"
                    style={{ flex: '1', fontFamily: 'monospace' }}
                />
            </form>
        )
    }
}

export default AddTodo
