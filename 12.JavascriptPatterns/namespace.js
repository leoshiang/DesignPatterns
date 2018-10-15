var DesignPatterns = {
    namespace: function (name) {
        var parts = name.split(".");
        var ns = this;
        for (var i = 0, len = parts.length; i < len; i++) {
            ns[parts[i]] = ns[parts[i]] || {};
            ns = ns[parts[i]];
        }
        return ns;
    }
};

DesignPatterns.namespace('Examples').saySomething = function(message) {
    alert(message);
};

DesignPatterns.Examples.saySomething('How are you?');

var Exampless = DesignPatterns.Examples;

Exampless.saySomething('Leo Shiang');