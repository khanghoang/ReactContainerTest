import React, {Component} from 'react';
import ListCommentsComponent from '../components/ListCommentsComponent';

class ListCommentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                comments: [
                    "this is first comment",
                    "this is second comment",
                    "this is third comment",
                    "this is fourth comment",
                    "this is fifth comment",
                ]
            });
        }, 1000);
    }

    render() {
        return (
            <ListCommentsComponent
                comments={this.state.comments}
            />
        )
    }
}

export default ListCommentsContainer;
