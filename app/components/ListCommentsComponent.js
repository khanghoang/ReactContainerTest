import React, {Component} from 'react';
import CommentItemComponent from './CommentItemComponent.js'

class ListCommentsComponent extends Component {
    render() {
        let comments = this.props.comments.map(c => <CommentItemComponent comment={c} />)
        return (
            <ul>
                {comments}
            </ul>
        );
    }
}

export default ListCommentsComponent;
