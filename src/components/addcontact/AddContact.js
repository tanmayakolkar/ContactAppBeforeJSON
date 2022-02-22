import React from "react";
import { Link } from "react-router-dom";

let AddContact=()=>
{
    return(
        <React.Fragment>
            <section className="add-contact">
            <div className="container">
            <div className="row">
                    <div className="col">
                        <p className="fw-bold text-success">Create-Contact</p>
                        <p className="fst-italic">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
            </div>
            <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group mb-2">
                                <input type="text" className=" form-control" placeholder="Name" />
                            </div>
                            <div className="form-group  mb-2">
                                <input type="text" className="form-control" placeholder="Photo-Url" />
                            </div>
                            <div className="form-group  mb-2">
                                <input type="number" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className="form-group  mb-2">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group  mb-2">
                                <input type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="form-group  mb-2">
                                <input type="text" className="form-control" placeholder="Title" />
                            </div>
                            <div className="form-group  mb-2">
                                <select className="form-control">
                                    <option>Select a group</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="Create-Contact"/>
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
            </div>

            </div>

            </section>
        </React.Fragment>
    )

}
export default AddContact;