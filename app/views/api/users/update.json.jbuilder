json.extract! @user, :id, :user_name, :nick_name, :bio
json.photoUrl url_for(@user.photo) if @user.photo.attached?