(function($) {
  "use strict";

  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#idealPostcodes');

  var defaults, $input_field, $lookup_button;

  test('has postcode input box', 6, function () {
    $('#postcode_lookup').idealPostcodes({});
    defaults = $.fn.idealPostcodes.defaults;
    $input_field = $("#"+defaults.input_id);
    $lookup_button = $("#"+defaults.button_id);

    ok($input_field.length, "there appears to be an input");
    ok($lookup_button.length, "there appears to be button");
    strictEqual($lookup_button.html(), defaults.button_label,"button has correct labeling");
    strictEqual($input_field.val(), defaults.input_label,"input has correct labeling");
    $input_field.trigger("focus");
    strictEqual($input_field.val(), "","input responds correctly when clicked on");
    $input_field.trigger("blur");
    strictEqual($input_field.val(), defaults.input_label, "input responds correctly when defocused with no input");
  });

  test('postcode validation', 2, function () {
    $('#postcode_lookup').idealPostcodes({});
    defaults = $.fn.idealPostcodes.defaults;
    $input_field = $("#"+defaults.input_id);
    $lookup_button = $("#"+defaults.button_id);

    $input_field.val("BOGUSPOSTCODE");
    $lookup_button.trigger("click");
    ok($("#" + defaults.error_message_id).length, "it has an error message");
    strictEqual($("#" + defaults.error_message_id).html(), defaults.error_message_invalid_postcode,"it has the correct error message");
  });

  

  // Testing below this point requires an API key to work 

  /* Requires a functioning api key. This will not consume any lookups
  var api_key = "ak_hiz3hxtptxNJLibBOHFrzzC0u3Zhq";

  var $dropdown;

  asyncTest('successful postcode lookup', 7, function () {
    $('#postcode_lookup').idealPostcodes({
      api_key: api_key,
      disable_interval: 0
    });

    defaults = $.fn.idealPostcodes.defaults;
    $input_field = $("#"+defaults.input_id);
    $lookup_button = $("#"+defaults.button_id);

    $input_field.val("ID11QD");
    $lookup_button.trigger("click");
    $(document).off("completedJsonp").on("completedJsonp", function () {
      start();
      $dropdown = $("#"+defaults.dropdown_id);
      ok($dropdown.length, "it has a dropdown menu");
      strictEqual($dropdown.children('option[value=ideal]').text(), defaults.dropdown_select_message, "it has the correct display text");
      $dropdown.val("5").trigger("change"); // Select 3 lined output
      [defaults.address_line_one, defaults.address_line_two, defaults.address_line_three, defaults.post_town_line, defaults.postcode_line].forEach(function (elem) {
        ok($(elem).val(), elem + "has content");
      });
    });
  });

  asyncTest('no postcode result', 2, function () {
    $('#postcode_lookup').idealPostcodes({
      api_key: api_key,
      disable_interval: 0
    });

    defaults = $.fn.idealPostcodes.defaults;
    $input_field = $("#"+defaults.input_id);
    $lookup_button = $("#"+defaults.button_id);

    $input_field.val("ID11QE");
    $lookup_button.trigger("click");
    $(document).off("completedJsonp").on("completedJsonp", function () {
      start();
      ok($("#" + defaults.error_message_id).length, "it has an error message");
      strictEqual($("#" + defaults.error_message_id).html(), defaults.error_message_not_found, "it has the correct error message");
    });
  });

  */

}(jQuery));
