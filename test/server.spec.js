const assert = require('assert');

const { SERVER } = require('../app/utils/constants/server');

describe('Server config', function () {
    it('The server port should be 3333', () => {
        assert.equal(SERVER.PORT, 3333);
    });
});
