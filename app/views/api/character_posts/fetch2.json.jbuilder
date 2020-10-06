# json.characterPosts do
#     @character_posts.each do |character_post|
#         json.set! character_post.id do
#             json.extract! character_post, :id, :user_id, :character_id, :body, :visibility, :updated_at, :comment_ids
#             json.photoUrl url_for(character_post.photo) if character_post.photo.attached?
#         end
#     end
# end

# @character_posts.each do |character_post|
#     json.comments do
#         character_post.comments.each do |comment|
#             json.set! comment.id do
#                 json.extract! comment, :id, :user_id, :character_post_id, :body, :updated_at
#                 json.user do
#                     json.extract! comment.user, :id, :user_name, :nick_name
#                 end
#             end
#         end
#     end
# end