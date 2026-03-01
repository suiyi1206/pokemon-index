// pages/dw/dw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pokemonList: [
      {url: '/pages/images/10076.gif',name: '圣光座',gender: '♂',
      types: [
          { type: '光', typeColor: 'gold' },
          { type: '圣神', typeColor: 'violet' }
        ],
        abilities: ['沉稳', '光系'],
        hp: 666,attack: 200,defense: 199,item: '雷电甲胄',
        moves: [
          { move: '圣光闪', moveTypeColor: 'gold' },{ move: '近身战', moveTypeColor: '#C03028' },
          { move: '光罩', moveTypeColor: 'gold' },{ move: '退化光波', moveTypeColor: 'pink' }
        ]
      },
      {url: '/pages/images/10789.gif',name: '超梦',gender: '♂',
      types: [
          { type: '圣神', typeColor: 'violet' },
          { type: '格斗', typeColor: '#C03028' }
        ],
        abilities: ['沉稳', '猛攻'],
        hp: 333,attack: 333,defense: 333,item: '拳击手套',
        moves: [
          { move: '急速折返', moveTypeColor: '#70C0F0' },{ move: '近身战', moveTypeColor: '#C03028' },
          { move: '削弱拳', moveTypeColor: '#F8D030' },{ move: '闪避拳', moveTypeColor: 'pink' }
        ]
      },
      {url: '/pages/images/10313.gif',name: '水麒麟',gender: '♂',
      types: [
          { type: '圣神', typeColor: 'violet' },
          { type: '水', typeColor: 'blue' }
        ],
        abilities: ['易怒', '水龙卷'],
        hp:400,attack: 345,defense:200,item: '避火珠',
        moves: [
          { move: '海潮汐', moveTypeColor: 'blue' },{ move: '急速移动', moveTypeColor: 'pink' },
          { move: '水珠', moveTypeColor: '#F8D030' },{ move: '水龙卷', moveTypeColor: 'blue' }
        ]
      },
      {url: '/pages/images/10930.gif',name: '皮卡丘',gender: '♂',
      types: [
          { type: '光', typeColor: 'gold' },
          { type: '传说', typeColor: 'silver' }
        ],
        abilities: ['活泼', '猛电'],
        hp: 152,attack: 156,defense: 91,item: '小智的帽子',
        moves: [
          { move: '十万伏特', moveTypeColor: 'gold' },{ move: '电击', moveTypeColor: 'gold' },
          { move: '闪避', moveTypeColor: 'pink' },{ move: '百万伏特', moveTypeColor: 'gold' }
        ]
      },
      {url: '/pages/images/10961.gif',name: '班多拉',gender: '♂',
      types: [
          { type: '草', typeColor: 'green' },
          { type: '格斗', typeColor: '#C03028' }
        ],
        abilities: ['暴躁', '甩尾'],
        hp: 152,attack: 156,defense: 91,item: '破甲剑',
        moves: [
          { move: '急速折返', moveTypeColor: '#70C0F0' },{ move: '近身战', moveTypeColor: '#C03028' },
          { move: '旋风叶', moveTypeColor: '#F8D030' },{ move: '枯木卷', moveTypeColor: '#F08030' }
        ]
      },
      {url: '/pages/images/11023.gif',name: '烈空座',gender: '♂',
      types: [
          { type: '圣神', typeColor: 'violet' },
          { type: '传说', typeColor: 'silver' }
        ],
        abilities: ['神秘', '电击'],
        hp: 152,attack: 156,defense: 91,item: '增幅背环',
        moves: [
          { move: '全体进化', moveTypeColor: 'pink' },{ move: '瞬移', moveTypeColor: '#C03028' },
          { move: '天鸣闪', moveTypeColor: 'gold' },{ move: '空间压缩', moveTypeColor: 'pink' }
        ]
      },
    


      // 继续添加烈咬陆鲨、罗丝雷朵等宝可梦的数据...
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})