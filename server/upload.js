import formidable from "formidable"

export default function upload(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = "/img_uploads";
    form.keepExtensions = true;

    form.on("file", (name, file) => {
        // Do somethin with the file
        console.log("File received");
    });

    form.on("end", () => {
        const res = {};
        res.status = 200;
        res.json = { foo: 'bar' };
        return res;
    });
    form.parse(req);
}