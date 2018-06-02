var TwoFer = function () { };

String.prototype.format = function () {
  var content = this;
  for (var i = 0; i < arguments.length; ++i) {
    var replacement = '{' + i + '}';
    content = content.replace(replacement, arguments[i]);
  }
  return content;
}

TwoFer.prototype.twoFer = function (who) {
  return 'One for {0}, one for me.'.format(who == null ? 'you' : who);
};

module.exports = TwoFer;
