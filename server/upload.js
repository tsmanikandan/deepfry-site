import formidable from "formidable"

module.exports = function upload(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "/img_uploads";
    form.keepExtensions = true;

    form.on("file", (name, file) => {
        // Do somethin with the file
        console.log("File received");
    });

    form.on("end", () => {
        res.json();
    });
    form.parse(req);
}