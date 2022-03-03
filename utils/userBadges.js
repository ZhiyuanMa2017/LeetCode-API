const axios = require('axios');

module.exports.getUserBadges = async function (username) {
    try {
        const endpoint = "https://leetcode.com/graphql"
        const headers = {
            'authority': 'leetcode.com',
            'content-type': 'application/json',
            'origin': 'https://leetcode.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': ' cors',
            'sec-fetch-dest': 'empty',
            'referer': `https://leetcode.com/${username}/`
        }
        const query = `query userBadges($username: String!) {
                          matchedUser(username: $username) {
                            badges {
                              id
                              name
                              shortName
                              displayName
                              icon
                              hoverText
                              medal {
                                slug
                                config {
                                  iconGif
                                  iconGifBackground
                                }
                              }
                              creationDate
                              category
                            }
                            upcomingBadges {
                              name
                              icon
                              progress
                            }
                          }
                        }`;
        const variables = {
            username: username
        };

        let res = await axios({
            method: 'post',
            url: endpoint,
            data: {query, variables},
            headers: headers
        });
        let data = res.data.data;
        console.log(data.matchedUser.badges);
        console.log(data.matchedUser.upcomingBadges);
    } catch (e) {
        console.error(e);
    }
}
