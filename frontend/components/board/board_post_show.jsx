import React from 'react';
import BoardCommentShowContainer from './board_comment_show_container';

class BoardPostShow extends React.Component {

    constructor(props){
        super(props);
        this.state = { body: "", board_post_id: this.props.match.params.boardPostId };
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBoardPost(this.props.match.params.boardPostId);
    }

    renderButtons(){
        if(this.props.loggedIn && this.props.boardPost.author.id === this.props.currentUser.id) {
            return(
                <div className="board-post-user-buttons flex absolute">
                    <div className="board-post-user-button border flex-center hover">Edit</div>
                    <div className="board-post-user-button border flex-center hover">Delete</div>
                </div>
            )
        } else return null;
    }

    updateBody(e){
        this.setState({ body: e.currentTarget.value });
    }

    handleSubmit(e){
        this.props.createBoardComment(this.state)
            .then(res => {
                if (res.type === "RECEIVE_BOARD_COMMENT") {
                    this.setState({body: ""})
                }
            })
    }

    renderWriteComments(){
        if(this.props.loggedIn){
            return (
              <div className="board-post-show-write-comments border">
                <div>{this.props.currentUser.nick_name} </div>
                <textarea placeholder="Leave a comment" value={this.state.body} onChange={this.updateBody}/>
                <div className="flex board-post-show-comment-button hover">
                  <div className="border" onClick={this.handleSubmit}>Post Comment</div>
                </div>
              </div>
            );
        } else return <div> Please Log In to Comment </div>
    }

    showTime(){
        const now = new Date();
        const nowString = now.toString();
        const past = new Date(this.props.boardPost.updated_at);
        const pastString = past.toString();

        if (nowString.slice(4,15) === pastString.slice(4,15)) {
            if (Number(pastString.slice(16, 18)) > 12 ) {
                const hour = Number(pastString.slice(16,18)) - 12;
                return String(hour) + pastString.slice(18, 24) + " PM";
            } else {
                    return pastString.slice(16,24) + " AM";
            }
        } else {
                return this.props.boardPost.updated_at.slice(0, 10);
        }
    }

    render(){

        const {boardPost} = this.props;
        if (!boardPost) return <div>No Such Post Exists</div>

        return(
            <div className="board-post-show-container">
                <div className="board-post-show-limit">
                    <div className="board-post-show bg-white border relative">
                        {this.renderButtons()}
                        <div className="board-post-show-title">
                            {boardPost.title}
                        </div>
                        <div className="board-post-show-body">
                            {boardPost.body}
                        </div>
                        <div className="board-post-show-detail flex">
                            <span>  @{boardPost.author.user_name}</span>
                            written by {boardPost.author.nick_name} 
                        </div>
                        <div className="board-post-show-detail flex">
                            <span>Post last updated at {this.showTime()}</span>
                        </div>
                        {this.renderWriteComments()}
                        <div>
                            {boardPost.board_comment_ids.map( id => <BoardCommentShowContainer key={id} boardCommentId={id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardPostShow;