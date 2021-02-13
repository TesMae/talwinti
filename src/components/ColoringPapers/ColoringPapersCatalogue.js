import React from "react"
import {connect} from "react-redux"

import ColoringPaper from "./ColoringPaper"
import ColoringPapersPagination from "./ColoringPapersPagination"
import ColoringPapersCategories from "./ColoringPapersCategories"


class ColoringPapersCatalogue extends React.Component {
    render() { 
        let coloringPapers = this.props.currentItems.map(item => {            
            const paper = {
                id: item.id,
                title: item.title,
                desc: item.desc,
                img: item.img
            }
            return (
                <ColoringPaper 
                key={paper.id}
                paper={paper}
                />
            )            
        })

        return(
            <div>
                <ColoringPapersCategories/>
                <div className="container">
                    <h3 className="center"> Our Coloring Papers </h3>
                    <div className="box">
                        { coloringPapers } 
                    </div>   
                    <ColoringPapersPagination/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        currentItems: state.catalogue.currentItems
    })
}

export default connect(mapStateToProps)(ColoringPapersCatalogue)