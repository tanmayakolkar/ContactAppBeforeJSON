import React from "react";
import { Link } from "react-router-dom";

let ContactList=()=>
{
    return(
        <React.Fragment>
        <section className="contact-search">
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <p className="fw-bold">Contact-Manger
                            <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                            <i class="fa-solid fa-plus"></i>  New
                            </Link>
                        </p>
                        <p className="fst-italic">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form className="row">
                            <div className="col">
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="SearchName"/>
                                </div>
                            </div>
                            <div className="col">
                                < div className="mb-2">
                                    <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row d-flex align-item-center justify-contant-around">
                                <div className="col-md-4">
                                    <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className="contact-img"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name:<span className="fw-bold">Ranjan</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile:<span className="fw-bold">+91-8109177667</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email:<span className="fw-bold">mail.tony24@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>  
                                <div className="col-md-1 align-item-center">
                                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning btn-sm my-1">
                                        <i className="fa fa-eye "></i> </Link>
                                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary btn-sm my-1">
                                        <i className="fa fa-pen"></i> </Link>    
                                 <button className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash my-1"></i> 
                                </button>    

                                </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row d-flex align-item-center justify-contant-around">
                                <div className="col-md-4">
                                    <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className="contact-img"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name:<span className="fw-bold">Ranjan</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile:<span className="fw-bold">+91-8109177667</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email:<span className="fw-bold">mail.tony24@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>  
                                <div className="col-md-1 align-item-center">
                                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning btn-sm my-1">
                                        <i className="fa fa-eye "></i> </Link>
                                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary btn-sm my-1">
                                        <i className="fa fa-pen"></i> </Link>    
                                 <button className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash my-1"></i> 
                                </button>    

                                </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    </React.Fragment>
    )

}
export default ContactList;