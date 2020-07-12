// This script change webpack-configs for "ng serve"
const fs = require("fs");

const f_angular = "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js";
const { getConfigs } = require("./postinstall.config");

getConfigs()
    .then(({ webConfig }) => {
        fs.readFile(f_angular, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }

            var result = data.replace(/return {([\s\S]+)}[\s]+,/, "return {");
            var result = result.replace(/target: "web",/g, "");
            var result = result.replace(/return \{/g, `return {${webConfig}`);

            fs.writeFile(f_angular, result, "utf8", (err) => {
                if (err) return console.log(err);
            });
        });
    });
