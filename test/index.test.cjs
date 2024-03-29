const test = require('node:test');
const assert = require('node:assert/strict');
const checkSchema = require('../index.cjs');

test('ActivityStreams CJS', function () {
    assert.equal(checkSchema({}), false);
    assert.equal(checkSchema(undefined), false);
    assert.equal(checkSchema(null), false);
    assert.equal(checkSchema(''), false);
    assert.equal(checkSchema([]), false);
    assert.equal(typeof require('../index.cjs').schemaOrg, 'object');

    assert.equal(
        checkSchema({
            '@context': 'http://schema.org',
            '@type': 'CreateAction',
            'agent': {
                '@type': 'Person',
                'name': 'John',
            },
            'result': {
                '@type': 'ExercisePlan',
                'name': 'Some plan',
            },
            'participant': {
                '@type': 'Person',
                'name': 'Steve',
            },
        }), true
    );
});
