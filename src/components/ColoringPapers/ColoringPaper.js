import React from "react"
import { connect } from "react-redux"
import { addToCart } from "../../actions/cartAction"

class ColoringPaper extends React.Component{
    handleClick = (item) => {
        this.props.addToCart(item)
    }

    render() {
        return (
            <div className="card" key={this.props.paper.id}>
                <div className="card-image">
                    <img 
                    src={this.props.paper.img}
                    alt={this.props.paper.title}
                    />
                    <span className="card-title"> {this.props.paper.title} </span>
                    <span 
                    to="/"
                    className="btn-floating halfway-fab-wavres-effect waves-light red"
                    onClick={()=>{this.handleClick(this.props.paper)}}
                    > 
                    <i className="material-icons">add</i> 
                    </span>                
                </div>
                <div className="card-content">
                    <p> {this.props.paper.desc} </p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item)=>{dispatch(addToCart(item))}
    }
}

export default connect(null, mapDispatchToProps)(ColoringPaper)