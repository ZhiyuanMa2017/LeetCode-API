const axios = require('axios');

module.exports.getGetUserDiscussTopics = async function (username) {
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
        const query = `query getUserDiscussTopics($username: String!, $orderBy: TopicSortingOption, $first: Int, $skip: Int) {
                          userCategoryTopics(username: $username, orderBy: $orderBy, first: $first, skip: $skip) {
                            pageInfo {
                              hasNextPage
                            }
                            edges {
                              node {
                                id
                                title
                                url
                                viewCount
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
    } catch (e) {
        console.error(e);
    }
}
