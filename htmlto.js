import htmlToPdf from "html-to-pdf";
import path from "path";

htmlToPdf.convertHTMLFile(
  path.resolve("dist/index.html"),
  path.resolve("dest.pdf"),
  function (error, success) {
    if (error) {
      console.log("Oh noes! Errorz!");
      console.log(error);
    } else {
      console.log("Woot! Success!");
      console.log(success);
    }
  }
);
