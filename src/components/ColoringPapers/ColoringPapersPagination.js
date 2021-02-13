import React from "react"
import {connect} from "react-redux"

import { displayNewPage } from "../../actions/paginationAction"


class ColoringPapersPagination extends React.Component{
    handleClick = (event) => {
        const pageNumber = event.target.id
        this.props.displayNewPage(pageNumber)
    }

    render() {
        let renderPagesNumber = this.props.paginationArray.map((item) => {
            return (
                <li key={item}>
                    <button
                    id={item}
                    onClick={this.handleClick}
                    > 
                    {item} 
                    </button>
                </li>
            )    
        })

        return(
            <nav>
                <ul>
                    {renderPagesNumber}
                </ul>
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return({
        paginationArray: state.catalogue.paginationArray
    })
}

const mapDispatchToProps = (dispatch)=>{
    return{
        displayNewPage: (id)=>{ dispatch(displayNewPage(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColoringPapersPagination)