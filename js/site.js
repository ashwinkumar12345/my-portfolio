var ChatApp = window.ChatApp || {};

(function scopeWrapper($) {

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var currentUsername = 'Student';

    var lastChat = null;

    var apiClient = apigClientFactory.newClient();


    ChatApp.signup = function () {
        var username = $('#username').val();
        var password = $('#password').val();
        var email = new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'email',
            Value: $('#email').val()
        });

        userPool.signUp(username, password, [email], null, function (err, result) {
            if (err) {
                alert(err);
            }
        });
    };

}(jQuery));
