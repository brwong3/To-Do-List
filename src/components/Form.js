import "../styles/Form.css"

import React, { Component } from 'react'

export default function Form() {

    return (
      <div id="container">
        <input placeholder='Water My Cat' value={this.state.input} onChange={this.handleChange}></input>
        <button type="submit" >Add Reminder!</button>
      </div>
    )
}
