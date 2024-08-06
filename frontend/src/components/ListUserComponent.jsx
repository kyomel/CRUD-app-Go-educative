import React, { Component } from 'react'
import UserService from '../services/UserService'

// Task 9: Write your code here
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
         if (window.confirm("Do you want to delete this information?")) {
        UserService.deleteUser(id).then( res => {
            this.setState({users: 
                this.state.users.filter(user => user.id !== id)});
        });
    }
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers()
            .then((res) => {
                if (res === null) {
                    this.props.history.push('/add-user/_add');
                }
                this.setState({ users: res});
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }   

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary"
                     onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className 
                        = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Middle Name</th>
                                    <th> Last Name</th>
                                    <th> Email </th>
                                    <th> Gender </th>
                                    <th> Civil Status </th>
                                    <th> Birthday </th>
                                    <th> Age </th>
                                    <th> Contact </th>
                                    <th> Address </th>
                                    <th width="1%"> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                   <td> {user.firstName} </td>   
                                   <td> {user.middleName}</td>
                                   <td> {user.lastName}</td>
                                   <td> {user.email}</td>
                                   <td> {user.gender}</td>
                                   <td> {user.civilStatus}</td>
                                   <td> {user.birthday}</td>
                                   <td> {user.age}</td>
                                   <td> {user.contact}</td>
                                   <td> {user.address}</td>
                                             <td>
                      <div className="btn-group">                      
                      <button onClick={ () => 
                          this.editUser(user.id)} 
                               className="btn btn-info">Update 
                                 </button>
                       <button style={{marginLeft: "10px"}}
                          onClick={ () => this.deleteUser(user.id)} 
                             className="btn btn-danger">Delete 
                                 </button>
                       <button style={{marginLeft: "10px"}} 
                           onClick={ () => this.viewUser(user.id)}
                              className="btn btn-success">View 
                                  </button>
                                  </div>
                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}
export default ListUserComponent