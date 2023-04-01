import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Body extends Component {
    render() {
        return (
            <div className="card-group">
                <div className="card">
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_599,c_limit/542da702-6fc8-4399-9bbe-60939527469c/nike-just-do-it.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_599,c_limit/e923830f-772f-46d9-877f-47e3bd70ac06/nike-just-do-it.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_0.7,cs_srgb/w_599,c_limit/73bf91ef-aa7e-4e3e-8acb-f1983529cc0f/nike-just-do-it.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This card has even longer content than the first to show that equal height action.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
