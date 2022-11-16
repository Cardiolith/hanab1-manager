module.exports = {
    'GET /api/posts': [
        {
            id: 1,
            title: "Ariticle 1",

            cover: "https://pbs.twimg.com/media/Fho-FCJWAAI9PJ9?format=jpg&name=large",
            content: "Message 1"
        },
        {
            id: 2,
            title: "Ariticle 1",
            cover: "https://pbs.twimg.com/media/Fho-FCJWAAI9PJ9?format=jpg&name=large",
            content: "Message 1"
        },
        {
            id: 3,
            title: "Ariticle 1",
            cover: "https://pbs.twimg.com/media/Fho-FCJWAAI9PJ9?format=jpg&name=large",
            content: "Message 1"
        }
    ],

    'POST /api/posts/publish': {
        id: 1,
        title: '123',
        content: '4556',
        category: 'Java',
        tags: ["test", "java"],
        status: "published"
    },

    'GET /api/posts/1': {
        id: 1,
        title: "Article 2",
        cover: "https://pbs.twimg.com/media/Fho-FCJWAAI9PJ9?format=jpg&name=large",
        content: "Hello today",
        category: "Java",
        tags: ["1", "2", "test"]
    },

    'GET /api/category': [
        {
            id: 1,
            name: 'Java'
        },
        {
            id: 2,
            name: 'Javascript'
        },
        {
            id: 3,
            name: 'Docker'
        }
    ],
}