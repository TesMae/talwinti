import React from "react"
import { Link } from 'react-router-dom'
import {connect} from "react-redux"
import { removeFromCart } from "../../actions/cartAction"


class ShoppingCart extends React.Component {
    handleClick = (item)=>{
        this.props.removeFromCart(item)
    }

    render() {
        let itemList = this.props.addedItems.map(item => {            
            return(
                <div className="collection-item avatar" key={item.id}>
                    <div className="item-img"> 
                    <img src={item.img}/>
                </div>

                    <div className="item-desc">
                        <span className="title"> {item.title} </span>
                    </div>
                    <button 
                    className="waves-effect waves-light btn pink remove" 
                    onClick={()=>{ this.handleClick(item) }}
                    >
                        Remove
                    </button>
                </div>
            )
        })

        return( 
            <div className="container">
                <div className="cart">
                    <h5>Wish list:</h5>
                    <ul className="collection">
                        {itemList}
                    </ul>
                </div>
                <div>
                    { itemList.length > 0 && <button><Link to="/command-form"> Command </Link></button> } 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        addedItems: state.cart.addedItems
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item)=>{dispatch(removeFromCart(item))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)