import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;

        const post= {
            id: Number(new Date()),
            description: description,
            imageLink: imgLink
        }
        if (description && imgLink){
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="link" placeholder="Link"/>
                        <input type="text" name="description" placeholder="Description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto