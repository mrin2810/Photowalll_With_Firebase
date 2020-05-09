import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// Stateless functions
function Photo(props){
    const post = props.post;
    return <figure className="figure">
                <Link to={`/single/${post.id}`}>
                    <img className="photo" src={post.imageLink} alt={post.description}/>
                </Link>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                <button onClick={() => {
                    props.startRemovingPost(props.index, post.id)
                    props.history.push('/')
                }}>Remove</button>
                <Link to={`/single/${post.id}`} className="button">
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>
                </Link>
                </div>
            </figure>
}

//inject the state to this component
function mapStateToProps(state){
    return{
        posts: state
    }
}


Photo.propTypes ={
    post: PropTypes.object.isRequired
}

// class Photo extends Component{
//     render(){
//         const post = this.props.post;
//     return <figure className="figure">
//                 <img className="photo" src={post.imageLink} alt={post.description}/>
//                 <figcaption><p>{post.description}</p></figcaption>
//                 <div className="button-container">
//                     <button className="button" onClick={() => {
//                         this.props.onRemovePhoto(post)
//                     }}>Remove</button>
//                 </div>
//             </figure>
//     }
// }

export default connect(mapStateToProps)(Photo)