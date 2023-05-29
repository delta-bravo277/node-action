const core = require('@actions/core');
const github = require('@actions/github');
try {
    const { exec } = require('child_process');
    var yourscript = exec('sh entrypoint.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

} catch (error) {
    core.setFailed(error.message);
}