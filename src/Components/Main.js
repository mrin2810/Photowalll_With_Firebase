import React, { Component } from 'react'
import Photowall from '.\\Photowall'
import AddPhoto from '.\\AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from '.\\Single'
import { startLoadingPost } from '../redux/actions'

class Main extends Component{
    constructor() {
        super() 
        // Very important step as the context of this is lost when we traverse through Components. We have to resrore it by writing the above line.
        // this.navigate = this.navigate.bind(this)  
    }

    state = { loading: true}

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading : false})
        })
        this.props.startLoadingComments()
    }
    
    render(){
        return(
        <div>
            <h1><Link to="/">Photowall</Link></h1>
            <Route exact path="/" render={() => (
                <div>
                    <Photowall {...this.props} />
                    {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>     */}
                </div>
            )} />
            <Route path="/AddPhoto" render={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
                // <AddPhoto onAddPhoto={(addedPost) => {
                //     history.push('/')
                // }}/>
            )}/>

            <Route path="/single/:id" render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params}/>
            )} />
        </div>
        )
    }
}

// function SimulateFetchFromDatabase(){
//     return [{
//         id: "0",
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//         }, {
//         id: "1",
//         description: "Aliens???",
//         imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//         "08323785_735653395_n.jpg"
//         }, {
//         id: "2",
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//         }]
// }

export default Main;

{/* this.posts.state makes the render method trigger every time posts array is updated. Hence updating the UI as well */}
{/* removePhoto method is being called from Photo(onRemovePhoto) ==> Photowall(onRemovePhoto) ==> Main(removePhoto)*/}