const express = require('express');
const { handleGenerateShortURL, handleRedirectURL, handleAnalytis } = require('../controllers/url')
const router = express.Router()

router.post("/", handleGenerateShortURL)

router.get('/:shortId', handleRedirectURL)
router.get('/analytics/:shortId', handleAnalytis)
module.exports = router
