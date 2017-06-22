/**
 * Wudo
 * @flow
 */

export default {
    activities: {
        id23233223: {
            name: 'Climbing',
            followers: [
                { id: 'id878458', allow: true },
                { id: 'id8808872', allow: false },
            ],
        },
        id2999923: {
            name: 'Running',
            followers: [],
        },
    },
    friends: {
        id878458: {
            name: 'Nina Hueber',
            avatar: '',
            activities: {
                id34435: { name: 'Climbing', allow: true },
                id37775: { name: 'Smoking', allow: false },
                id37995: { name: 'Drinking', allow: false },
            },
        },
        id8808872: {
            name: 'Cori Wakba',
            avatar: '',
            activities: {
                id34905: { name: 'Climbing', allow: true },
            },
        },
        id88777972: {
            name: 'Alex my friend',
            avatar: '',
            activities: {
                id23435: { name: 'Party', allow: true },
            },
        },
    },
    feeds: {
        id45: {
            idFriend: 'id878458',
            idActivity: 'id34435',
            time: 'Sun May 21 2017 00:18:50 GMT+0200 (CEST)',
            description: 'Boulder walfishgasse at 4',
            // no need join, but there would be a button "me too", that would create the same activity, only if user has same activity
        },
        id42: {
            idFriend: 'id88777972',
            idActivity: 'id23435',
            time: 'Sat May 20 2017 23:18:50 GMT+0200 (CEST)',
            description: 'EKH',
            // no need join, but there would be a button "me too", that would create the same activity, only if user has same activity
        },
    },
};
