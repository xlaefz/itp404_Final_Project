import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | coffee');

test('visiting /coffee', function(assert) {
  visit('/coffee-tracker');

  andThen(function() {
    assert.equal(currentURL(), '/coffee-tracker');
  });
});

test('visiting /coffee', function(assert) {
  visit('/coffee-tracker');

  andThen(function() {
    assert.equal(find('.meme').length, 3);
  });
});

test('visiting /coffee', function(assert) {
  visit('/coffee-tracker');

  andThen(function() {
    assert.equal(find('.meimei').length, 3);
  });
});
