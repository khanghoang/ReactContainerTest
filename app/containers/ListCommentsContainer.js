import React, {Component} from 'react';
import ListCommentsComponent from '../components/ListCommentsComponent';

class ListCommentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            isLoading: true
        }
    }

    componentDidMount() {
        // in the real world, this will be async call to
        // some APIs and get response.
        setTimeout(() => {
            this.setState(Object.assign({}, {
                comments: [
                    "this is first comment",
                    "this is second comment",
                    "this is third comment",
                    "this is fourth comment",
                    "this is fifth comment",
                ]
            }, {isLoading: false}));
        }, 1000);
    }

    render() {
        return (
            this.state.isLoading ?
            <div>Loading...</div> :
            <ListCommentsComponent
                comments={this.state.comments}
            />
        )
    }
}

export default ListCommentsContainer;
