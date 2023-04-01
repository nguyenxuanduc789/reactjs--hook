import React, { Component } from 'react';

class ProductListkh extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Popular Right Now</h1>
                <div className="row">{this.props.children}</div>
            </section>
        );
    }
}

export default ProductListkh;
