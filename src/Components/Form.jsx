import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comment: "",
            profession: "",
            gender: "",
            tac: "",
            boolTac: false
        };
    }

    handleUserChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleProfessionChange = event => {
        this.setState({
            profession: event.target.value,
        })
    }

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value,
        })
    }

    handleTacChange = event => {
        if (event.target.value === 'on') {
            this.setState({
                tac: this.state.tac,
                boolTac: !(this.state.boolTac)
            })
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.comment);
        console.log(this.state.profession);
        console.log(this.state.gender);
        console.log(this.state.boolTac);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="All-container">
                    <div className="Component-container">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" placeholder="Username..." onChange={this.handleUserChange} />
                    </div>

                    <div className="Component-container">
                        <label htmlFor="comment">Comment: </label>
                        <textarea id="comment" placeholder="Comment..." onChange={this.handleCommentChange} />
                    </div>

                    <div className="Component-container">
                        <label htmlFor="profession">Profession: </label>
                        <select placeholder="Select profession" onChange={this.handleProfessionChange} >
                            <option value="Professor">Professor</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>

                    <div className="Component-container">
                        <label htmlFor="Gender">Gender: </label>
                        <input type="radio" id="gender" value="Male" onChange={this.handleGenderChange} checked={this.state.gender === "Male"} /> Male
                        <input type="radio" id="gender" value="Female" onChange={this.handleGenderChange} checked={this.state.gender === "Female"} /> Female
                    </div>

                    <div className="Component-container">
                        <label htmlFor="Agree with terms and conditions:">Agree with terms and conditions: </label>
                        <input type="checkbox" id="tac" onClick={this.handleTacChange} />
                    </div>
                    <div className="Component-container">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form