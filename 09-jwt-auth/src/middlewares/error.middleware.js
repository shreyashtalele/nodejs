function errorHandler(error, req, res, next) {
    if (error.message.includes("required")) {
        return res.status(400).json({
            message: error.message
        })
    }

    if (error.message.includes("Email already exists")) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}