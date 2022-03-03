const axios = require('axios');

module.exports.getUserProfile = async function (username) {
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
        const query = `query userProfile($username: String!) {
                          matchedUser(username: $username) {
                            contestBadge {
                              name
                              expired
                              hoverText
                              icon
                            }
                            username
                            githubUrl
                            twitterUrl
                            linkedinUrl
                            profile {
                              ranking
                              userAvatar
                              realName
                              aboutMe
                              school
                              websites
                              countryName
                              company
                              jobTitle
                              skillTags
                              postViewCount
                              postViewCountDiff
                              reputation
                              reputationDiff
                              solutionCount
                              solutionCountDiff
                              categoryDiscussCount
                              categoryDiscussCountDiff
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
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

