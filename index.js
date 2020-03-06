require("dotenv").config();
const makeRequestCallback = require("./src/adapters/request-callback");
const { createBlog, deleteBlog } = require("./src/controllers");
const validator = require("./src/validators");

const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true
});

fastify.get("/", (req, res) => {
  return res.send("OK");
});

fastify.post(
  "/blogs",
  makeRequestCallback(createBlog, { validator: validator.createBlog })
);
fastify.delete("/blogs/:id", makeRequestCallback(deleteBlog));

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Server has started on ${address}`);
});
