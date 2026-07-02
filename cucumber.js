module.exports={
    default:{
        "formatOptions":{
            "snippetInterface":"async-await"
        },
        requireModule:[
            "ts-node/register"
        ],
        require:[
            "src/test/steps/**/*.ts",
            "src/hooks/**/*.ts",
            //"src/test/support/**/*.ts"
        ],
        paths: [
    "src/test/features/**/*.feature",
],
        publishQuiet: true,
        dryRun:false,
        format:[
            "progress",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ]
    }
}