const express = require("express");
const router = express.Router();
const gymController = require("../controllers/gymController");

//App routes for pages linked to the controller

router.get("/", gymController.homepage);
router.get("/routine/:id", gymController.exploreRoutine);
router.get("/categories", gymController.exploreCategories);
router.get("/categories/:id", gymController.exploreCategoriesById);
router.post("/search", gymController.searchRoutine);
router.get("/explore-latest", gymController.exploreLatest);
router.get("/explore-random", gymController.exploreRandom);
router.get("/submit-routine", gymController.submitRoutine);
router.post("/submit-routine", gymController.submitRoutineOnPost);

module.exports = router;