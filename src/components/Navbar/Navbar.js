import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render() {
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo left">Shopping</Link>

                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {this.props.itemsCounter !== null && this.props.itemsCounter > 1
                        ? <li><Link to="/cart"> {this.props.itemsCounter} Book Items</Link></li> 
                        : <li><Link to="/cart"> {this.props.itemsCounter} Book Item</Link></li>}
                        

                    </ul>
                </div>
            </nav> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemsCounter: state.cart.itemsCounter
    }
}

export default connect(mapStateToProps)(Navbar)