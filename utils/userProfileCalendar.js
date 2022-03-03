const axios = require('axios');

module.exports.getUserProfileCalendar = async function (username) {
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
        const query = `query userProfileCalendar($username: String!, $year: Int) {
                          matchedUser(username: $username) {
                            userCalendar(year: $year) {
                              streak
                              totalActiveDays
                              dccBadges {
                                timestamp
                                badge {
                                  name
                                  icon
                                }
                              }
                              submissionCalendar
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
        console.log(data.matchedUser.userCalendar);
        console.log(data.matchedUser.userCalendar.dccBadges);
    } catch (e) {
        console.error(e);
    }
}
