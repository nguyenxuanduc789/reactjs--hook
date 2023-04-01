import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Productitemkh from '../components/ProductItem/Producitemkh';
import ProductListkh from '../components/ProductList/ProductListkh';

import { actFetchProductsRequest, actAddToCart, actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    render() {
        var { products } = this.props;
        return <ProductListkh>{this.showProducts(products)}</ProductListkh>;
    }
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Productitemkh
                        key={index}
                        product={product}
                        index={index}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}
                    />
                );
            });
        }
        return result;
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
