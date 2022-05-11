const router = require("express").Router();

const {
  getThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getThought).post(addThought);

router.route("/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
