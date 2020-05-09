import React, { Component } from 'react'
import Photo from '.\\Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// Stateless functions
function Photowall(props){
    return <div>
            <Link className="addIcon" to="/AddPhoto" />
        <div className="photoGrid"> 
            {props.posts
            .sort(function(x,y) {
                return y.id - x.id
            })
            .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
        </div>
}

Photowall.propTypes ={
    posts: PropTypes.array.isRequired
}

// class Photowall extends Component{
//     render() {
//         return <div className="photoGrid"> 
//             {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
//         </div>
//     }
// }

export default Photowall;