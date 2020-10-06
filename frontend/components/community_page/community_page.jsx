import React from 'react';

import { Route } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";

import CommunityDetailShowContainer from './community_detail_show_container';
import CommunityApplyContainer from '../community_forms/community_apply_container';
import ManageMembershipRequestsContainer from '../community_forms/manage_membership_requests_container';
import ShowMembersContainer from '../community_forms/show_members_container';
import CommunityStoryContainer from './community_story_container';

class CommunityPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { detail: true, members: false, feed: false, apply: false, edit: false };
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    componentDidMount(){
        this.props.fetchCommunityByUrl(this.props.worldUrl);
    }

    handleFollow(){
        // console.log(this.props.following_community_ids)
        const follow = { id: this.props.community.id };
        this.props.followCommunity(follow)
            // .then(()=> console.log(this.props.following_community_ids))
            .then(() => this.forceUpdate());
    }
    
    handleUnfollow(){
        // console.log(this.props.following_community_ids)
        const unfollow = { id: this.props.community.id };
        this.props.unfollowCommunity(unfollow)
            // .then(res => console.log(this.props.following_community_ids))
            .then(() => this.forceUpdate());
    }

    showFollows(){
        const { loggedIn, currentUser, community } = this.props;

        if (!loggedIn || !community) return null;
        if (currentUser.following_community_ids.includes(community.id)) {
            return (
                <div className="world-show-action hover flex-center" onClick={this.handleUnfollow} >UnFollow</div>
                )
            } else {
                return (
                    <div className="world-show-action hover flex-center" onClick={this.handleFollow} >Follow</div>
                )
            }
    }

    renderFollowing(){
        const { loggedIn, currentUser, community } = this.props;

        if (!loggedIn || !community) return null;
        if (currentUser.following_community_ids.includes(community.id)) {
            return (
                <div className="world-show-following absolute"><i className="fas fa-heart"></i> Following</div>
                )
            } else return null;
    }


    isAdmin(){
        return (this.props.loggedIn && this.props.currentUser.id === this.props.community.admin_id) ? true : false ;
    }

    isOpen(){
        if(!this.props.community) return null;

        if(this.isAdmin()){
            return (<div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${this.props.community.url}/apply`)}>Add Character</div>)
        } else if (this.props.loggedIn && this.props.community.recruiting === "active") {
            return (<div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${this.props.community.url}/apply`)}>Apply To Join</div>)
        } else return null;
    }

    isOpen2(){
        if(!this.props.community) return null;
        if (this.props.community.recruiting === "active") {
            const manager = this.isAdmin() ? "Manage" : "View";
            return (<div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${this.props.community.url}/applications`)}>{manager} Applications</div>)
        } else return null;
    }
    
    renderAdminButtons(){
        if(this.isAdmin()) {
            return (
                <>
                    <div className="world-show-action hover flex-center" onClick={() => this.props.openModal('editworld', this.props.community)}>Edit World</div>
                    <div className="world-show-action hover flex-center" onClick={() => this.props.openModal('apocalypse', this.props.community)}>Destroy World</div>
                </>
                )
            } else return null;
        }
        
        render(){
            console.log(this.props)

            if(!this.props.community) return <div className="warning">No Such World Exists</div>

            const { community } = this.props;        
            const logo = community.logoUrl ? <img src={community.logoUrl} /> : <div className="flex-center world-show-nologo"><p>No Logo</p></div>
            // const apply = this.isAdmin() ? "Add Character" : "Apply To Join";
            const openOrNot = community.recruiting === "active" ? "Open For New Members" : <span>Members Only</span>
            const manager = this.isAdmin() ? "Manage" : "View";
            // console.log(this.props)
            
        return(
            <div className="world-show-container">
                <div className="world-show-limit">
                    <div className="world-show-full-name">{community.name}</div>
                    <div className="world-show flex">
                        <div className="world-show-left">
                            <div className="world-show-details relative">
                                {this.renderFollowing()}
                                <div className="world-show-logo">{logo}</div>
                                <div className="world-show-intro">{community.intro}</div>
                                <div className="world-show-others">Admin: {community.admin.nick_name} <span>@{community.admin.user_name}</span></div>
                                <div className="world-show-others">Created at: {community.created_at.slice(0,10)}</div>
                                <div className="world-show-others">Current members: {community.member_ids.length}</div>
                                {/* <div className="world-show-others">Visible to Public vs Member Only</div> */}
                                <div className="world-show-others world-show-seeking flex-center">{openOrNot}</div>
                            </div>
                            <div className="world-show-actions">
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}`)}>World</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/members`)}>{manager} Members</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/story`)}>View Story</div>
                                <div className="world-show-action hover flex-center">View Board</div>
                                {this.isOpen()}
                                {/* <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/apply`)}>{apply}</div> */}
                                {/* <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/applications`)}>{manager} Applications</div> */}
                                {this.isOpen2()}
                                {/* <div className="world-show-action hover flex-center">Edit World</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.openModal('apocalypse', community)}>Destroy World</div> */}
                                {this.renderAdminButtons()}
                                {this.showFollows()}
                            </div>
                        </div>
                        <div className="world-show-right-limit">
                            <div className="world-show-right">
                                {/* <Route exact path="/world/:worldUrl/detail" component={CommunityDetailShowContainer} /> */}
                                <Route exact path="/world/:worldUrl" component={CommunityDetailShowContainer} />
                                <ProtectedRoute exact path="/world/:worldUrl/apply" component={CommunityApplyContainer} />
                                <Route exact path="/world/:worldUrl/applications" component={ManageMembershipRequestsContainer} />
                                <Route exact path="/world/:worldUrl/members" component={ShowMembersContainer} />
                                <Route exact path="/world/:worldUrl/story" component={CommunityStoryContainer} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunityPage;