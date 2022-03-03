const axios = require('axios');

module.exports.getRecentAcSubmissions = async function (username, limit = 15) {
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
        const query = `query recentAcSubmissions($username: String!, $limit: Int!) {
                          recentAcSubmissionList(username: $username, limit: $limit) {
                            id
                            title
                            titleSlug
                            timestamp
                          }
                        }`;
        const variables = {
            username: username,
            limit: limit
        };

        let res = await axios({
            method: 'post',
            url: endpoint,
            data: {query, variables},
            headers: headers
        });
        let data = res.data.data;
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}
