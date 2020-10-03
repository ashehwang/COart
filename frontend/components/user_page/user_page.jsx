import React from 'react';
import { Route } from 'react-router-dom';

import UserCharsShowContainer from './user_chars_show_container';
import UserPostsContainer from './user_posts_container';

class UserPage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUserByUsername(this.props.username);
    }

    componentDidUpdate(prevProps){
        if (this.props.username !== undefined && prevProps.username !== undefined ){
            if (this.props.username !== prevProps.username) {
                this.props.fetchUserByUsername(this.props.username);
            }
        }
    }

    renderButtons(){
        const { loggedIn, currentUser, user } = this.props;
        if(!loggedIn || !user) return null; 
        if (currentUser.id === user.id) { //user on his/her own page
            return(
                <>
                    <div className="user-page-buttons hover flex-center" onClick={() => this.props.openModal('edituser', user)}>
                        Edit Your Profile
                    </div>
                    <div className="user-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Check Messages
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="user-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Send Messages to {user.nick_name}
                    </div>
                </>
            )
        }

    }

    render(){
        const { user } = this.props;
        if (!user) return <div className="warning">No User</div>

        return(
            <div className="user-page-container align-center">
                <div className="relative flex">
                    <div className="char-page-left">
                        <div className="user-page-profile flex">
                            <img src={user.photoUrl} className="small-profile-pic" />
                            <div className="user-page-profile-name">
                                {user.nick_name} <span>@{user.user_name}</span>
                                <div className="user-page-bio">
                                    {user.bio}
                                </div>
                            </div>
                        </div>
                        <div className="char-page-buttons-center flex-center">
                            <div className="user-page-buttons hover flex-center" onClick={() => this.props.history.push(`/user/${user.user_name}/characters`)}>
                                View {user.nick_name}'s Characters
                            </div>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className="user-page-right">
                        <Route exact path="/user/:username/characters" component={UserCharsShowContainer}/>
                        <Route exact path="/user/:username" component={UserPostsContainer}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserPage;