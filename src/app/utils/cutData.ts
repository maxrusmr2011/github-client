export const cutData = (item) => ({
  id: String(item.id),
  full_name: item.full_name,
  description: item.description,
  html_url: item.html_url,
  avatar_url: item.owner.avatar_url,
  login: item.owner.login,
  owner_html_url: item.owner.html_url,
  stargazers_count: item.stargazers_count,
  fav: false,
});
