'use strict';

angular
    .module('app')
    .controller('AuthController', AuthController);

function AuthController(AuthService) {

    var Auth = this;

    Auth.login = function (account) {
        AuthService.login(account,
            function (res) {
                console.log(res.data.sessionToken);
            },
            function (error) {
                console.log(error.data.error);
            });
        console.log(account);
    };

}
