const FB = require("fb");

//
//
//

const baseURI = 'https://graph.facebook.com/v8.0/';

module.exports = {
    getFriendsListFromProfile(profileId) {
        // https://developers.facebook.com/docs/graph-api/reference/friend-list/
        FB.api(
            "/{friend-list-id}",
            function (response) {
                console.log(response);
                if (response && !response.error) {
                    /* handle the result */
                }
            }
        );
    },
    parseListData() {

    },
    showFriendsListAsMap() {

    }
}

// https://developers.facebook.com/docs/graph-api/reference/user/
// FB.api(
//     "/{person-id}/",
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//       }
//     }
// );