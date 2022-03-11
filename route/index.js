const express = require("express");

let router = express.Router(),
{
    flipkartMobile,
    snapdealTShirt,
    flipkartMobileFull
} = require("../controller/fetchRoute");

router.post("/flipkart/mobile",flipkartMobile);
router.post("/snapdeal/t-shirt",snapdealTShirt);
router.post("/flipkart/mobile/full",flipkartMobileFull);

module.exports = router;