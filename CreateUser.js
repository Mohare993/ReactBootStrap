import React, { Component } from 'react';
import DataService from './DataService';

class CreatePage extends Component {
    constructor() {
        super()
        this.state = {
            records: []
        }
    }

  

    createUser() {

        const Person = document.getElementsByClassName("inputs");
        let userData = {};

        for (let i = 0; i < Person.length; i++){
            userData[Person[i].id]= Person[i].value;
        }

        let promise = DataService.createRecord(userData);

        promise.then(Response => {
        })
    }

    render() {
        return (
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center"> Create User : </h5>

                        <div className="form-label-group">
                            First Name: <br />
                            <br />
                            <input type="text" id="firstname" className="form-control inputs" ></input>
                            <br />

                        </div>
                        <div className="form-label-group">
                            Last Name: <br />
                            <br />
                            <input type="text" id="lastname" className="form-control inputs" ></input>
                            <br />

                        </div>
                        <div className="form-label-group">
                            City: <br />
                            <br />
                            <input type="text" id="location" className="form-control inputs" ></input>
                            <br />
                        </div>
                        <div className="form-label-group"><br />
                            <button type="button" onClick={this.createUser}> Create !</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePage;