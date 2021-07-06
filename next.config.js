module.exports = {
  async headers() {
    return [
      {
        source: "/api/randomblob",
        headers: [{ key: "Content-Type", value: "text/html" }],
      },
    ];
  },
};
