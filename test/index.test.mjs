import test from 'node:test';
import assert from 'node:assert/strict';
import checkSchema, {schemaOrg} from '../index.mjs';

test('ActivityStreams MJS', function () {
    assert.equal(checkSchema({}), false);
    assert.equal(checkSchema(undefined), false);
    assert.equal(checkSchema(null), false);
    assert.equal(checkSchema(''), false);
    assert.equal(checkSchema([]), false);
    assert.equal(typeof schemaOrg, 'object');

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
