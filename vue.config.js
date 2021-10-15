module.exports = {
  pages: {
    admin: {
      entry: "src/pages/admin/main.js",
      template: "public/admin.html",
      filename: "admin.html",
      title: "Admin Page",
      chunks: ["chunk-vendors", "chunk-common", "admin"],
    },
    index: {
      entry: "src/pages/home/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
