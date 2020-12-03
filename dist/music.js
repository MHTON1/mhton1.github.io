const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [{
            name: "Variations on the Kanon By Pachelbel",
            artist: 'George Winston',
            url: 'http://music.163.com/song/media/outer/url?id=1374348.MP3',
            cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
        },
        {
            name: 'DANDAN心魅かれてく（渐渐被你吸引）',
            artist: 'Zard',
            url: 'http://music.163.com/song/media/outer/url?id=477331768.mp3',
            cover: '',
        },
        {
            name: '能看见海的城市',
            artist: '久石让',
            url: 'http://music.163.com/song/media/outer/url?id=28457555.mp3',
            cover: '',
        },
        {
            name: 'Normal',
            artist: 'Sasha Sloan',
            url: 'http://music.163.com/song/media/outer/url?id=534544522.mp3',
            cover: '',
        },
        {
            name: '我喜欢',
            artist: '上海彩虹室内合唱团',
            url: 'http://music.163.com/song/media/outer/url?id=464647435.mp3,
            cover: '',
        }
    ]
});