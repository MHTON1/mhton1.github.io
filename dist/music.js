const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [{
            name: "平凡之路",
            artist: '朴树',
            url: 'http://www.ytmp3.cn/down/59211.mp3',
            cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
        },
        {
            name: ' 夏を待つセイル(帆)のように ',
            artist: 'Zard',
            url: 'http://music.163.com/song?id=677325&userid=104456876',
            cover: '',
        },
        {
            name: '能看见海的城市',
            artist: '久石让',
            url: 'http://music.163.com/song?id=28457555&userid=104456876',
            cover: '',
        },
        {
            name: 'Normal',
            artist: 'Sasha Sloan',
            url: 'http://music.163.com/song?id=534544522&userid=104456876',
            cover: '',
        },
        {
            name: '我喜欢',
            artist: '上海彩虹室内合唱团',
            url: 'http://music.163.com/song?id=464647435&userid=104456876',
            cover: '',
        }
    ]
});