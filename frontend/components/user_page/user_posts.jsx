import React from 'react';
import UserPost from './user_post';

class UserPosts extends React.Component {

    constructor(props){
        super(props);
        this.state = { page_num: 1, next_avail: true };
        // this.getNextPosts = this.getNextPosts.bind(this);
        // this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    // checkResLength(res){
    //     if(Object.values(res.posts).length === 15) {
    //         this.setState({next_avail: true})
    //     } else this.setState({next_avail: false})
    // }

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
        const { posts, loggedIn, currentUser, user, deletePost } = this.props;
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
                    />)}
            </div>
        )
    }
}

export default UserPosts;