const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const {
  baseURI,
  format_query,
  list_view,
  single_node_view,
} = require("../constants.json");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define route for listing publishing articles
router.get("/list", async (req, res) => {
  let _res = await axios.get(`${baseURI}${list_view}${format_query}`);
  res.send(_res.data);
});

// define the route for a single node article
router.get("/article/:nid", async (req, res) => {
  const nid = req.params?.nid;
  console.log("nid", nid);
  let _res = await axios.get(
    `${baseURI}${single_node_view}/${nid}${format_query}`
  );
  res.send(_res.data);
});

module.exports = router;
