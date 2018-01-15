'use-strict';

const fetch = require('isomorphic-fetch');

/*
 * 1. Check How fetch works
 * https://developers.google.com/web/updates/2015/03/introduction-to-fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * https://github.com/matthew-andrews/isomorphic-fetch
 */

it('downloads data from herokuapp', (done) => {
  fetch('http://offline-news-api.herokuapp.com/stories')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((stories) => {
      expect(stories[1].author).toEqual('Tim Bradshaw');
      done();
    });
})
