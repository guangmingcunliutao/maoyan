import Mock from 'mockjs'

const Random = Mock.Random;

let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }],
    img: Random.image(),
    name: Random.cname()
});

let movieData = Mock.mock({
    'coming': [],
    'movieIds|50-100': [],
    'movieLisy|10-12': [
        {
            'id|1-100': 1,
            'haspromotionTag|1': true,
            'img': Random.image('80x190')
        }
    ]
});

// console.log(movieData);