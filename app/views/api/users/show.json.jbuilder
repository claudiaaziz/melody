json.user do
  json.extract! @user, :id, :email, :username
  json.playlists @user.playlists.pluck(:id)
end