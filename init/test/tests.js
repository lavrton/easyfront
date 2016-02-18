import * as utils from '../src/scripts/utils';

describe('Testing app', () => {
    it('getTwo', () => {
        expect(utils.getTwo()).to.equal(2);
    });
});
