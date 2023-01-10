const test = require('node:test');
const assert = require('node:assert/strict');
const {isSchemaOrg} = require('../index.cjs');

test('ActivityStreams', () => {
    assert.equal(isSchemaOrg({}), false);
    // eslint-disable-next-line unicorn/no-useless-undefined
    assert.equal(isSchemaOrg(undefined), false);
//   // eslint-disable-next-line unicorn/no-null
    assert.equal(isSchemaOrg(null), false);
    assert.equal(isSchemaOrg(''), false);
    assert.equal(isSchemaOrg([]), false);
    // assert.equal(
    //   isJSONLD({
    //     '@id': 'something',
    //   }),
    // );

    assert.equal(
        isSchemaOrg({
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
