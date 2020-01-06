"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
function default_1(promise, timeout, timeoutError) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        var fulfilled = false;
        promise
            .then(function (res) {
            if (fulfilled) {
                return;
            }
            fulfilled = true;
            resolve(res);
        })["catch"](function (err) {
            if (fulfilled) {
                return;
            }
            fulfilled = true;
            reject(err);
        });
        setTimeout(function () {
            if (fulfilled) {
                return;
            }
            fulfilled = true;
            if (timeoutError) {
                reject(timeoutError);
                return;
            }
            reject(new Error('timeout error [' + timeout + 'ms]'));
        }, timeout);
    });
}
exports["default"] = default_1;
