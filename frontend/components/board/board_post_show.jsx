import React from 'react';

class BoardPostShow extends React.Component {

    constructor(props){
        super(props);
        this.state = { body: "" };
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
                        <div className="board-post-show-write-comments border">
                            <div>{this.props.currentUser.nick_name} </div>
                            <textarea placeholder="Leave a comment"/>
                            <div className="flex board-post-show-comment-button hover">
                                <div className="border">Post Comment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardPostShow;