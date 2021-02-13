import React from "react"
import {connect} from "react-redux"

import { filterByCategory, displayAllCategory } from "../../actions/filterAction"
import {categories} from "../../data/categories"


class ColoringPapersCategories extends React.Component {
    handleFilterByCategory = (e) => {
        const categoryName = e.target.name   
        this.props.filterByCategory(categoryName)
    }

    handleAllCategory = () => {
        this.props.displayAllCategory()
    }

    render() {
        let coloringPapersCategories = categories.map((category,index) => (
            <li key={index}>
                <button                             
                name={category}
                onClick={this.handleFilterByCategory}
                >
                    {category}
                </button>
                <span></span>                            
            </li>
        ))

        return(
            <div>
                <div>
                    <h4>Coloring Papers Categories</h4>
                </div>
                <div>                
                    <button onClick={this.handleAllCategory}>
                        All
                    </button>
                    <ul>                    
                        {coloringPapersCategories}
                    </ul>
                </div>
            </div>
        )
    }    
}

const mapDispatchToProps = (dispatch)=>{
    return{
        filterByCategory: (categoryName)=>{ dispatch(filterByCategory(categoryName)) },
        displayAllCategory: ()=>{ dispatch(displayAllCategory()) }
    }
}

export default connect(null, mapDispatchToProps)(ColoringPapersCategories)
