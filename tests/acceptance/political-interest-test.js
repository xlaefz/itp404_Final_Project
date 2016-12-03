import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | political interest');

test('visiting /political-interest', function(assert) {
  visit('/political-interest');

  andThen(function() {
    assert.equal(currentURL(), '/political-interest');
  });
});

test('visiting /political-interest', function(assert) {
  visit('/political-interest');

  andThen(function() {
    assert.equal(find(".chart").length, 1);
  });
});
