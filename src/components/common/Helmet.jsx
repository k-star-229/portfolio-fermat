import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="web development, react development, javascript, html, css, redux, mechanical engineering, design, photoshop, illustrator." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
