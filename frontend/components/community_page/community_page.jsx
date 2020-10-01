import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
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
    }

    componentDidMount(){
        this.props.fetchCommunityByUrl(this.props.worldUrl);
    }

    isAdmin(){
        return (this.props.loggedIn && this.props.currentUser.id === this.props.community.admin_id) ? true : false ;
    }

    renderAdminButtons(){
        if(this.isAdmin()) {
            return (
                <>
                    <div className="world-show-action hover flex-center">Edit World</div>
                    <div className="world-show-action hover flex-center" onClick={() => this.props.openModal('apocalypse', this.props.community)}>Destroy World</div>
                </>
                )
            } else return null;
    }

    render(){

        if(!this.props.community) return <div className="warning">No Such World Exists</div>

        const { community } = this.props;        
        const logo = community.logoUrl ? <img src={community.logoUrl} /> : <div className="flex-center world-show-nologo"><p>No Logo</p></div>
        const manager = this.isAdmin() ? "Manage" : "View";
        const apply = this.isAdmin() ? "Add Character" : "Apply To Join";

        return(
            <div className="world-show-container">
                <div className="world-show-limit">
                    <div className="world-show-full-name">{community.name}</div>
                    <div className="world-show flex">
                        <div className="world-show-left">
                            <div className="world-show-details">
                                <div className="world-show-logo">{logo}</div>
                                <div className="world-show-intro">{community.intro}</div>
                                <div className="world-show-others">Admin: {community.admin.nick_name} <span>@{community.admin.user_name}</span></div>
                                <div className="world-show-others">Created at: 2020 09 27</div>
                                <div className="world-show-others">Current members: 1</div>
                                <div className="world-show-others">Visible to Public vs Member Only</div>
                                <div className="world-show-others world-show-seeking flex-center">Open For New Members</div>
                            </div>
                            <div className="world-show-actions">
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}`)}>World</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/members`)}>{manager} Members</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/story`)}>View Story</div>
                                <div className="world-show-action hover flex-center">View Board</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/apply`)}>{apply}</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.history.push(`/world/${community.url}/applications`)}>{manager} Applications</div>
                                {/* <div className="world-show-action hover flex-center">Edit World</div>
                                <div className="world-show-action hover flex-center" onClick={() => this.props.openModal('apocalypse', community)}>Destroy World</div> */}
                                {this.renderAdminButtons()}
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