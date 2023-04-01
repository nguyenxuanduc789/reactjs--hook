import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import menu from '../../svg/menu.svg';
import logoIcon from '../../svg/logoicon.svg';
import CartIcon from '../../svg/carticon.svg';
import '../../css/header.css';
import { connect } from 'react-redux';
const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Product',
        to: '/product',
        exact: false,
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false,
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false,
    },
    {
        name: 'Blog',
        to: '/Blog',
        exact: false,
    },
    {
        name: 'Login / Register',
        to: '/login',
        exact: false,
    },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <ul className={active}>
                        <li>
                            <Link to={to}>{label}</Link>
                        </li>
                    </ul>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        var { cart } = this.props;
        console.log(this.props);
        return (
            <header>
                <div className="menu">
                    <img src={menu} alt="" width="20" />
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logoIcon} alt="" />
                    </Link>
                </div>
                <nav>
                    {this.showMenus(menus)}
                    <Link to="/cart">
                        {' '}
                        <div className="nav-cart">
                            <span>{cart.length}</span>
                            <img src={CartIcon} alt="" width="20" />
                        </div>
                    </Link>
                </nav>
            </header>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />;
            });
        }
        return result;
    };
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};
export default connect(mapStateToProps)(Menu);
