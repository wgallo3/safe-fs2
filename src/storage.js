// The storage object only needs to contain "save", "clear", and "get"
module.exports = {
  localStorage: {
    set: function(string) {
      localStorage.setItem('auth', string);
    },
    get: function() {
      return localStorage.getItem('auth');
    },
    clear: function() {
      localStorage.removeItem('auth');
    }
  }
}