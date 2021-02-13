import React from "react"
import {connect} from "react-redux"

class CommandForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userMail: "",
            userName: "",
            userAddress: "",
            userPhone: ""

        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        // Send mails
        console.log(this.props.addedItems)

        console.log(this.state.userMail)
        console.log(this.state.userName)
        console.log(this.state.userAddress)
        console.log(this.state.userPhone)

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    E-Mail:
                    <input
                    name="userMail"
                    type="text"
                    value={this.state.userMail}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Name:
                    <input 
                    name="userName"
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input 
                    name="userAddress"
                    type="text"
                    value={this.state.userAddress}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input 
                    name="userPhone"
                    type="text"
                    value={this.state.userPhone}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input 
                type="submit"
                value="Submit"
                />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.cart.addedItems
    }
}

export default connect(mapStateToProps)(CommandForm)