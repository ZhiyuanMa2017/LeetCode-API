const lc = require('./utils/index.js');

async function test() {
    await lc.contestRatingHistogram.getContestRatingHistogram('hongsuzu');
    await lc.getUserDiscussTopics.getGetUserDiscussTopics('hongsuzu');
    await lc.getUserProfile.getGetUserProfile('hongsuzu');
    await lc.languageStats.getLanguageStats('hongsuzu');
    await lc.recentAcSubmissions.getRecentAcSubmissions('hongsuzu');
    await lc.skillStats.getSkillStats('hongsuzu');
    await lc.userBadges.getUserBadges('hongsuzu');
    await lc.userContestRankingInfo.getUserContestRankingInfo('hongsuzu');
    await lc.userProblemsSolved.getUserProblemsSolved('hongsuzu');
    await lc.userProfile.getUserProfile('hongsuzu');
    await lc.userProfileCalendar.getUserProfileCalendar('hongsuzu');
    await lc.userSolutionTopics.getUserSolutionTopics('hongsuzu');
}

test();