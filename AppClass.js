import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Headercomponent from "./HeaderComponent.js";
import DataService from './DataService';
import CreateUser from './CreateUser';


class AppClass extends React.Component {
    constructor() {
        super()
        this.state = {
            records: [], id:0
        }
        this.updateUser = this.updateUser.bind(this)
        this.boom = this.boom.bind(this)
    }
  
    boom(userid) {
        this.setState({
           id:userid
        })
    }
    
    updateUser() {

        const Person = document.getElementsByClassName("inputs1");
        let userData = {};

        for (let i = 0; i < Person.length; i++){
            userData[Person[i].id]= Person[i].value;
        }

        let promise = DataService.updateRecord(this.state.id, userData);
        promise.then(Response => {
        })
    }

    render() {
        let promise = DataService.retrieveShowAllRecords();
        promise.then(Response => {
            this.setState({
                records: Response.data
            })
        })
        return (
            <>
            <Headercomponent />
         
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Ops</th>
                    </tr>
                </thead>
                <tbody>{
                    this.state.records.map((record, i) => {
                        return (
                            <tr key={"A" + i}>
                                <td> {record.id} </td>
                                <td> {record.firstname} </td>
                                <td> {record.lastname} </td>
                                <td> {record.location} </td>
                                <td> <button className="btn btn-danger" onClick={(e)=> {DataService.deleteRecord(record.id)} }>DELETE</button> &nbsp;
                                <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={(e)=>   this.boom(record.id)  }>UPDATE</button>
                                </td>
                            </tr>
                        )
                    })

                }</tbody>
                </table>   <Router> 
         <Route path="/create" component={CreateUser}/>
       </Router>
       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="form-label-group">
                            First Name: <br /> 
                            <br />
                            <input type="text" id="firstname" className="form-control inputs1" ></input>
                            <br />

                        </div>
                        <div className="form-label-group">
                            Last Name: <br />
                            <br />
                            <input type="text" id="lastname" className="form-control inputs1" ></input>
                            <br />

                        </div>
                        <div className="form-label-group">
                            City: <br />
                            <br />
                            <input type="text" id="location" className="form-control inputs1" ></input>
                            <br />
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={this.updateUser}>Save changes</button>
      </div>
    </div>
  </div>
</div>
       
       
       
       </>
                )
                    }
                
                
}

export default AppClass;
