const { exec } = require('child_process');
var yourscript = exec('sh \entrypoint.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });