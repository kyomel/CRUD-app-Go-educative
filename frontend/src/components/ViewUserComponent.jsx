import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> 
                    View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.user.firstName }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Middle Name: </label>
                            <div> { this.state.user.middleName }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lastName }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Email : </label>
                            <div> { this.state.user.email }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Gender : </label>
                            <div> { this.state.user.gender }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Civil status : </label>
                            <div> { this.state.user.civil_status }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Birthday : </label>
                            <div> { this.state.user.birthday }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Age : </label>
                            <div> { this.state.user.age }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Contact number(s) : </label>
                            <div> { this.state.user.contact }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Address : </label>
                            <div> { this.state.user.address }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent