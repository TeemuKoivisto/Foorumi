FoorumApp.service('Api', function($http){
  // Aihealueiden Api-funktiot
  this.getTopics = function(){
    return $http.get('/topics');
  }
  this.getTopic = function(id){
    return $http.get('/topics/' + id);
  }
  this.addTopic = function(topic){
    return $http.post('/topics', topic);
  }

  // Viestien Api-funktiot
  this.getMessage = function(id){
      return $http.get('/messages/' + id, id);
  }
//  this.addMessage = function(message, topicId){
  this.addMessage = function(message){
      return $http.post('/topics/:id/message', message);
  }

  // Vastausten Api-funktiot
  
//  this.addReply = function(reply, messageId){
  this.addReply = function(reply){
      return $http.post('/messages/:id/reply', reply);
  }

  // Käyttäjän Api-funktiot
  this.login = function(user){
      return $http.post('/users/authenticate', user);
  }
  this.register = function(user){
      return $http.post('/users', user);
  }
  this.getUserLoggedIn = function(){
      return $http.get('/users/logged-in');
    // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
  }
  this.logout = function(){
    return $http.get('/users/logout');
  }
});
