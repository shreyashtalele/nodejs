const fs = require('fs')
function logReqRes() {

    // ==============================
    // Custom Middleware
    // ==============================

    // app.use((req, res, next) => {
    //     console.log("Middleware 1");
    //     next();
    // });

    // app.use((req, res, next) => {
    //     console.log("Middleware 2");

    //     // File logging (Old)
    //     // fs.appendFile(
    //     //     "log.txt",
    //     //     `${req.ip} ${Date.now()} ${req.method} ${req.path}\n`,
    //     //     (err) => {
    //     //         next();
    //     //     }
    //     // );

    //     next();
    // });

    return (req, res, next, filename) => {
        fs.appendFile(
            filename,
            `${req.ip} ${Date.now()} ${req.method} ${req.path}\n`,
            (err) => {
                next();
            }
        );

        next();
    }
}

module.exports = {
    logReqRes,
}