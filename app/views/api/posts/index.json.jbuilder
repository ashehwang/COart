json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :user_id, :body, :updated_at, :user_comment_ids, :visibility
            json.photoUrl url_for(post.photo) if post.photo.attached?
        end
    end
end

@posts.each do |post|
    json.user_comments do 
        post.user_comments.each do |user_comment|
            json.set! user_comment.id do 
                json.extract! user_comment, :id, :user_id, :post_id, :body, :updated_at
                json.author do
                    json.extract! user_comment.user, :id, :user_name, :nick_name
                end
            end
        end
    end
end