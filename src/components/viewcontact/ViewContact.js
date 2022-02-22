import React from "react";
import { Link } from "react-router-dom";

let ViewContact=()=>
{
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fw-bold text-success">View-Contact</p>
                            <p className="fst-italic">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                       </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-md-4">
                        <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className="contact-img"/>

                        </div>
                        <div className="col-md-8">
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
                                        <li className="list-group-item list-group-item-action">
                                            Company:<span className="fw-bold">mail.tony24@gmail.com</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Title:<span className="fw-bold">mail.tony24@gmail.com</span>
                                        </li>
                        </ul>

                        </div>
                     </div>
                     <div className="row">
                         <div className="col">
                             <Link to={'/contacts/list'} className="btn btn-warning ">Back</Link>

                         </div>
                      </div>
                </div>

            </section>
        </React.Fragment>
    )

}
export default ViewContact;