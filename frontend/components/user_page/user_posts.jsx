import React from 'react';
import UserPost from './user_post';

class UserPosts extends React.Component {

    constructor(props){
        super(props);
        this.state = { page_num: 0, next_avail: true };
        this.getNextPosts = this.getNextPosts.bind(this);
        this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPagePosts(this.props.user.id, 0);
    }

    getNextPosts(e){
        this.setState({ page_num: this.state.page_num + 1 }, () => {
            this.props.fetchPagePosts(this.props.user.id, this.state.page_num)
                      .then( res => this.checkResLength(res));
        });
    }

    getPreviousPosts(e){
        this.setState({ page_num: this.state.page_num - 1 }, () => {
            this.props.fetchPagePosts(this.props.user.id, this.state.page_num)
                      .then( res => this.checkResLength(res));
        });
    }

    checkResLength(res){
        if(Object.values(res.payload.posts).length === 3) {
            this.setState({next_avail: true})
        } else this.setState({next_avail: false})
    }

    renderPrevious(){
        if(this.state.page_num > 0){
            return <div className="hover" onClick={this.getPreviousPosts}><i className="fas fa-chevron-left" ></i>  Previous</div>
        } else return null;
    }

    renderNext(){
        if (this.state.next_avail) {
            return (
              <div className="hover" onClick={this.getNextPosts}>
                <i className="fas fa-chevron-right"></i> Next
              </div>
            );
        } else return null;
    }

    isMine(){
        const { loggedIn, currentUser, user } = this.props;
        return (loggedIn && currentUser.id === user.id) ? true : false ;
    }

    renderWrite(){
        if(this.isMine()){
            return(
                <div className="user-page-write hover border" onClick={() => this.props.openModal('createpost')}>
                    <i className="fas fa-marker" ></i> Write something on your wall...
                </div>
            )
        } else return null;
    }

    render(){
        const { posts, loggedIn, currentUser, user, deletePost, openModal, createUserComment, userComments } = this.props;
        if(!posts) return <div className="warning">This User Has No Posts.</div>

        return(
            <div>
                {this.renderWrite()}
                {Object.keys(posts).reverse().map( postId => 
                    <UserPost 
                        key={postId} 
                        post={posts[postId]}
                        loggedIn={loggedIn}
                        user={user}
                        currentUser={currentUser}
                        deletePost={deletePost} 
                        openModal={openModal}
                        createUserComment={createUserComment}
                        userComments={userComments}
                    />)}
                <div className="board-page-flip flex">
                    {this.renderNext()}
                    {this.renderPrevious()}
                </div>
            </div>
        )
    }
}

export default UserPosts;