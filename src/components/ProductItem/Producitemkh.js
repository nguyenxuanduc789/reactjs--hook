import React, { Component } from 'react';
import * as Message from '../../constants/Message';

class Productitemkh extends Component {
    render() {
        var { product } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.id}</a>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>{this.showRatings(product.price)}</li>
                        </ul>
                        <p className="card-text">{product.price}</p>
                        <div className="card-footer">
                            <span className={`label label-${statusClass}`}>{statusName}</span>
                            <span className="left">{product.price}$</span>
                            <button type="button" class="btn btn-primary" onClick={() => this.onAddToCart(product)}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        alert('Bạn có chắc chắn thêm vào giỏ hàng ');
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    };
    showRatings(price) {
        var result = [];
        for (var i = 1; i <= price; i++) {
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var j = 1; j <= 5 - price; j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result;
    }
}

export default Productitemkh;
