const axios = require('axios');

module.exports.getUserContestRankingInfo = async function (username) {
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
        const query = `query userContestRankingInfo($username: String!) {
                          userContestRanking(username: $username) {
                            attendedContestsCount
                            rating
                            globalRanking
                            totalParticipants
                            topPercentage
                            badge {
                              name
                            }
                          }
                          userContestRankingHistory(username: $username) {
                            attended
                            trendDirection
                            problemsSolved
                            totalProblems
                            finishTimeInSeconds
                            rating
                            ranking
                            contest {
                              title
                              startTime
                            }
                          }}`;
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
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}
