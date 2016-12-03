import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dongers');

test('visiting / redirects to /dongers', function(assert) {
  visit('/dongers');
  andThen(function() {
    assert.equal(currentURL(), '/dongers');
  });
});

test('visiting / shows dongers', function(assert) {
  visit('/dongers');
  andThen(function() {
    assert.equal(find('.listing').length, 5);
  });
});
