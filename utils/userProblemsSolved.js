const axios = require('axios');

module.exports.getUserProblemsSolved = async function (username) {
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
        const query = `query userProblemsSolved($username: String!) {
                          allQuestionsCount {
                            difficulty
                            count
                          }
                          matchedUser(username: $username) {
                            problemsSolvedBeatsStats {
                              difficulty
                              percentage
                            }
                            submitStatsGlobal {
                              acSubmissionNum {
                                difficulty
                                count
                              }
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
        console.log(data.matchedUser);
        console.log(data.matchedUser.submitStatsGlobal);
    } catch (e) {
        console.error(e);
    }
}
