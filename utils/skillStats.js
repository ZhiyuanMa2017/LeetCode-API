const axios = require('axios');

module.exports.getSkillStats = async function (username) {
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
        const query = `query skillStats($username: String!) {
                          matchedUser(username: $username) {
                            tagProblemCounts {
                              advanced {
                                tagName
                                problemsSolved
                              }
                              intermediate {
                                tagName
                                problemsSolved
                              }
                              fundamental {
                                tagName
                                problemsSolved
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
        console.log(data.matchedUser.tagProblemCounts);
    } catch (e) {
        console.error(e);
    }
}
