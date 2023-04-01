import React, { Component } from 'react';
import Productitemkh from '../../components/ProductItem/Producitemkh';
import MessageContainer from '../../containers/MessageContainer';
import ProductsContainer from '../../containers/ProductsContainer';
// import Login from '../Login/Login';
import Body from './body/Body';
import Footer from './Footer/footer';
class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1745,c_limit/5811f5b7-9e86-47a5-981b-89b6056b690d/nike-just-do-it.jpg"
                    className="card bg-dark text-white"
                    alt="..."
                    width="1300px"
                />
                <ProductsContainer></ProductsContainer>
                <Body></Body>
                <MessageContainer></MessageContainer>
                <Footer></Footer>
            </div>
        );
    }
}

export default HomePage;
