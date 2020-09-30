json.extract! @membership_request, :id, :character_id, :community_id, :user_id, :admin_id, :status
json.url @membership_request.community.url