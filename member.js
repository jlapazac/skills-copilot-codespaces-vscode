function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: function($scope) {
      $scope.getSkill = function(id) {
        var skill = $scope.skills.filter(function(skill) {
          return skill.id === id;
        });
        return skill[0];
      };
    }
  };
}