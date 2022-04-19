const fs = require('fs');

const typeOfFile = (name, callback) =>
    fs.lstat(name, (err, data) =>
        err ?
            callback(err) :
            data.isFile() ?
                showFile(name, (err, data) =>
                    err ? callback(err) : callback(false, 'File\n' + data)
                ) :
                data.isDirectory() ?
                    callback(false, 'Directory') :
                    callback(true)
    );
const showFile = (name, callback) => {
    fs.readFile(name, 'utf-8', (err, data) =>
        err ? callback(err) : callback(err, data)
    );
};

exports.params = {
    f: typeOfFile,
    g: showFile,
};
