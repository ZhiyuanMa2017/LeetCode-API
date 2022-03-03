const lc = require('./utils/index.js');

async function test() {
    const myArgs = process.argv.slice(2);
    console.log('Input arguments: ', myArgs);
    if (myArgs.length !== 1) {
        console.log('Illegal arguments, please provide your username');
        return;
    }
    name = myArgs[0];
    await lc.contestRatingHistogram.getContestRatingHistogram(name);
    await lc.getUserDiscussTopics.getGetUserDiscussTopics(name);
    await lc.getUserProfile.getGetUserProfile(name);
    await lc.languageStats.getLanguageStats(name);
    await lc.recentAcSubmissions.getRecentAcSubmissions(name);
    await lc.skillStats.getSkillStats(name);
    await lc.userBadges.getUserBadges(name);
    await lc.userContestRankingInfo.getUserContestRankingInfo(name);
    await lc.userProblemsSolved.getUserProblemsSolved(name);
    await lc.userProfile.getUserProfile(name);
    await lc.userProfileCalendar.getUserProfileCalendar(name);
    await lc.userSolutionTopics.getUserSolutionTopics(name);
}

test();