const axios = require('axios');

module.exports.getUserSolutionTopics = async function (username) {
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
        const query = `query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
                          userSolutionTopics(username: $username, orderBy: $orderBy, skip: $skip, first: $first) {
                            pageInfo {
                              hasNextPage
                            }
                            edges {
                              node {
                                id
                                title
                                url
                                viewCount
                                questionTitle
                                post {
                                  creationDate
                                  voteCount
                                }
                              }
                            }
                          }
                        }`;
        const variables = {
            username: username,
            orderBy: "most_votes",
            skip: 0,
            first: 15
        };

        let res = await axios({
            method: 'post',
            url: endpoint,
            data: {query, variables},
            headers: headers
        });
        let data = res.data.data;
        console.log(data);
        console.log(data.userSolutionTopics.edges.length);
        console.log(data.userSolutionTopics.edges);
        console.log(data.userSolutionTopics.edges[0].node.post);
    } catch (e) {
        console.error(e);
    }
}
