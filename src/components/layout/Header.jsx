import React from 'react'
import { Link } from 'react-router-dom'

export default function AddTodo() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    background: '#5D1411',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    fontFamily: 'monospace',
}