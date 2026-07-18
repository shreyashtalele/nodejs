const { nanoid } = require("nanoid")
const URL = require('../models/url')
async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is Required" })
    const shortId = nanoid(8);
    await URL.create(
        {

            shortId: shortId,
            redirectedUrl: body.url,
            visitHistory: [],
        }
    );
    return res.json({ id: shortId })
}

async function handleRedirectURL(req, res) {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        { shortId: shortId },
        {
            $push: {
                visitHistory: {
                    timeStamps: Date.now()
                }
            }
        }
    )
    res.redirect(entry.redirectedUrl)
}

async function handleAnalytis(req, res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({ shortId })
    res.json({
        totalclicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}



module.exports = {
    handleGenerateShortURL
    , handleRedirectURL
    , handleAnalytis
    , handlegetAllUrls
}