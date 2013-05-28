
/**
 * Module dependencies.
 */

db = {
  '17': [
    { title: "Step 17" }
  ],
  '54': [
    { title: "Step 54.a" },
    { title: "Step 54.b" }
  ],
  '23': [
    { title: "Step 23" }
  ]
};

/**
 * Expose the app
 */
exports.load = function(req, res, next) {
  var checklist = {
    href: "/checklist/" + req.params.id,
    owner: { href: "/me" },
    steps: {
      data: db[req.params.id]
    }
  };

  res.json(checklist);
}