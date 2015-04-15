if (Meteor.isClient) {
  Template.body.onRendered(function() {
    var answer, num1, num123, num2, num3, num4, num45;
    num1 = 94;
    num2 = 49;
    num3 = 84;
    num4 = 28;
    num45 = 45;
    num123 = 234;
    answer = (num1 * num2) * num3 * num45 * num123;
    $('#me').html("" + num1 + " - " + num2 + " - " + num3 + "<br>= <b>" + answer + "</b>");
    return $('#main').html('Hello this is a test');
  });
}
