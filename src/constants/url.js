export const base = "https://api.noroff.dev/api/v1/social/";

export const login = base + "auth/login/";

export const register = base + "auth/register/";

export const profiles = base + "profiles/";

export const posts = {
  base: base + "posts",
  unsorted: base + "posts?_author=true",
  sortDate: {
    desc: base + "posts?sort=created&sortOrder=desc",
    asc: base + "posts?sort=created&sortOrder=asc",
  },
};

export const updateMedia = (userName) => profiles + userName + "/media";
export const URLSingleUserPost = (userName) => profiles + userName + "/posts";
export const URLUserdata = (userName) => profiles + userName;
