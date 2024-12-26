const express = require("express");
const UserRoutes = require("../module/user/user.routes");
const AuthRoutes = require("../module/auth/authRoutes");
const aboutRoutes = require("../module/About/aboutRoutes");
const projectRoutes = require("../module/Project/projectRoutes");
const blogRoutes = require("../module/blog/blogRoutes");

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/about",
    route: aboutRoutes,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/blogs",
    route: blogRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
