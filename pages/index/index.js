// pages/index/index.js
Page({
  data: {
    currentRegion: '帕底亚地区',
    currentRegionShort: '帕底亚',
    currentRegionKey: 'paldea',
    showRegionDropdown: false,
    regionDescription: '帕底亚地区以西班牙为原型，拥有丰富的自然景观和多样的宝可梦生态。这里有着广阔的原野、险峻的山脉和美丽的海岸线。',
    regions: [
      { key: 'kanto', name: '关都', emoji: '🏮', desc: '关都地区是宝可梦世界的起点，以日本关东地区为原型，有着丰富的城市和自然景观。' },
      { key: 'johto', name: '城都', emoji: '🏯', desc: '城都地区以日本关西地区为原型，拥有悠久的历史和传统文化，神社古迹遍布。' },
      { key: 'hoenn', name: '丰缘', emoji: '🌴', desc: '丰缘地区以日本九州为原型，被大海环绕，拥有丰富的海洋资源和热带气候。' },
      { key: 'sinnoh', name: '神奥', emoji: '🗻', desc: '神奥地区以日本北海道为原型，气候寒冷，有着雄伟的山脉和神秘的传说。' },
      { key: 'unova', name: '合众', emoji: '🗽', desc: '合众地区以美国纽约为原型，是现代感十足的大都市地区，文化多元。' },
      { key: 'kalos', name: '卡洛斯', emoji: '🗼', desc: '卡洛斯地区以法国为原型，充满浪漫气息，以时尚、艺术和美食闻名。' },
      { key: 'alola', name: '阿罗拉', emoji: '🏝️', desc: '阿罗拉地区以夏威夷为原型，由多个岛屿组成，拥有独特的岛屿文化和生态系统。' },
      { key: 'galar', name: '伽勒尔', emoji: '🏰', desc: '伽勒尔地区以英国为原型，有着悠久的工业历史和美丽的乡村风光。' },
      { key: 'paldea', name: '帕底亚', emoji: '🍇', desc: '帕底亚地区以西班牙为原型，拥有丰富的自然景观和多样的宝可梦生态。' }
    ],
    debugMode: false,
    regionPokemons: [],
    allPokemons: {
      kanto: [
        { id: 1, name: '妙蛙种子', type1: 'grass', type2: 'poison', image: '/pages/images/10164.gif' },
        { id: 4, name: '小火龙', type1: 'fire', image: '/pages/images/10212.gif' },
        { id: 7, name: '杰尼龟', type1: 'water', image: '/pages/images/11210.gif' }
      ],
      johto: [
        { id: 152, name: '菊草叶', type1: 'grass', image: '/pages/images/10221.gif' },
        { id: 155, name: '火球鼠', type1: 'fire', image: '/pages/images/10285.gif' },
        { id: 158, name: '小锯鳄', type1: 'water', image: '/pages/images/11300.gif' }
      ],
      hoenn: [
        { id: 252, name: '木守宫', type1: 'grass', image: '/pages/images/11311.gif' },
        { id: 255, name: '火稚鸡', type1: 'fire', image: '/pages/images/11292.gif' },
        { id: 258, name: '水跃鱼', type1: 'water', image: '/pages/images/10828.gif' }
      ],
      sinnoh: [
        { id: 387, name: '草苗龟', type1: 'grass', image: '/pages/images/11318.gif' },
        { id: 390, name: '小火焰猴', type1: 'fire', image: '/pages/images/10222.gif' },
        { id: 393, name: '波加曼', type1: 'water', image: '/pages/images/10948.gif' }
      ],
      unova: [
        { id: 495, name: '藤藤蛇', type1: 'grass', image: '/pages/images/11183.gif' },
        { id: 498, name: '暖暖猪', type1: 'fire', image: '/pages/images/11273.gif' },
        { id: 501, name: '水水獭', type1: 'water', image: '/pages/images/10886.gif' }
      ],
      kalos: [
        { id: 650, name: '哈力栗', type1: 'grass', image: '/pages/images/10219.gif' },
        { id: 653, name: '火狐狸', type1: 'fire', image: '/pages/images/10405.gif' },
        { id: 656, name: '呱呱泡蛙', type1: 'water', image: '/pages/images/10448.gif' }
      ],
      alola: [
        { id: 722, name: '木木枭', type1: 'grass', type2: 'flying', image: '/pages/images/11061.gif' },
        { id: 725, name: '火斑喵', type1: 'fire', image: '/pages/images/10693.gif' },
        { id: 728, name: '球球海狮', type1: 'water', image: '/pages/images/10978.gif' }
      ],
      galar: [
        { id: 810, name: '敲音猴', type1: 'grass', image: '/pages/images/10537.gif' },
        { id: 813, name: '炎兔儿', type1: 'fire', image: '/pages/images/11093.gif' },
        { id: 816, name: '泪眼蜥', type1: 'water', image: '/pages/images/11191.gif' }
      ],
      paldea: [
        { id: 906, name: '新叶喵', type1: 'grass', image: '/pages/images/11204.gif' },
        { id: 909, name: '呆火蟋', type1: 'fire', image: '/pages/images/10452.gif' },
        { id: 912, name: '润水鸭', type1: 'water', image: '/pages/images/11001.gif' }
      ]
    },
    regionNames: {
      kanto: '关都地区',
      johto: '城都地区',
      hoenn: '丰缘地区',
      sinnoh: '神奥地区',
      unova: '合众地区',
      kalos: '卡洛斯地区',
      alola: '阿罗拉地区',
      galar: '伽勒尔地区',
      paldea: '帕底亚地区'
    },
    shortNames: {
      kanto: '关都',
      johto: '城都',
      hoenn: '丰缘',
      sinnoh: '神奥',
      unova: '合众',
      kalos: '卡洛斯',
      alola: '阿罗拉',
      galar: '伽勒尔',
      paldea: '帕底亚'
    }
  },

  onLoad() {
    this.setData({
      regionPokemons: this.data.allPokemons[this.data.currentRegionKey]
    });
    this.checkGifAvailability();
  },
  checkGifAvailability() {
    this.data.regionPokemons.forEach((pokemon, index) => {
      wx.getImageInfo({
        src: pokemon.image,
        success: (res) => {
          console.log(`图片 ${pokemon.image} 加载成功`, res);
        },
        fail: (err) => {
          console.error(`图片 ${pokemon.image} 加载失败`, err);
          this.setData({
            [`regionPokemons[${index}].image`]: '/images/default-pokemon.gif'
          });
        }
      });
    });
  },

  onImageError(e) {
    const index = e.currentTarget.dataset.index;
    const failedUrl = this.data.regionPokemons[index].image;
    console.error(`图片加载失败: ${failedUrl}`, e.detail);
    
    this.setData({
      [`regionPokemons[${index}].image`]: '/images/default-pokemon.gif'
    });
  },
  getTypeName(type) {
    const typeMap = {
      normal: '一般', fire: '火', water: '水', grass: '草',
      electric: '电', ice: '冰', fighting: '格斗', poison: '毒',
      ground: '地面', flying: '飞行', psychic: '超能', bug: '虫',
      rock: '岩石', ghost: '幽灵', dragon: '龙', dark: '恶',
      steel: '钢', fairy: '妖精'
    };
    return typeMap[type] || type;
  },
  toggleRegionDropdown() {
    this.setData({
      showRegionDropdown: !this.data.showRegionDropdown
    });
  },

  selectRegion(e) {
    const regionKey = e.currentTarget.dataset.region;
    const regionName = this.data.regionNames[regionKey];
    const regionShort = this.data.shortNames[regionKey];
    const regionDesc = this.data.regions.find(r => r.key === regionKey)?.desc || '';
    
    this.setData({
      currentRegion: regionName,
      currentRegionShort: regionShort,
      currentRegionKey: regionKey,
      regionDescription: regionDesc,
      regionPokemons: this.data.allPokemons[regionKey] || [],
      showRegionDropdown: false
    });

    wx.showToast({
      title: `已切换到${regionName}`,
      icon: 'success',
      duration: 1500
    });
  },

  viewPokemonDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&region=${this.data.currentRegionKey}`
    });
  },

  onImageLoad(e) {
  console.log('图片加载成功:', {
    src: e.currentTarget.dataset.src,
    width: e.detail.width,
    height: e.detail.height
  });
  
  // 强制更新视图
  this.setData({
    debugImageLoaded: true 
  });
},

// 精灵图鉴
navigateToPokedex() {
  wx.navigateTo({
    url: '/pages/jl/jl',
    success: () => console.log('跳转精灵图鉴成功')
  });
},

// 属性克制
navigateToTypeChart() {
  wx.navigateTo({
    url: '/pages/sxkg/sxkg',
    success: () => console.log('跳转属性克制成功')
  });
},

// 道具
navigateToItems() {
  wx.navigateTo({
    url: '/pages/daoju/daoju',
    success: () => console.log('跳转道具成功')
  });
},
//队伍
navigateTodw() {
  wx.navigateTo({
    url: '/pages/dw/dw',
    success: () => console.log('跳转精灵队伍成功')
  });
},
// 地图
navigateToMaps() {
  wx.navigateTo({
    url: '/pages/ditu/ditu',
    success: () => console.log('跳转地图成功')
  });
},

// 攻略
navigateToGuide() {
  wx.navigateTo({
    url: '/pages/gl/gl',
    success: () => console.log('跳转攻略成功')
  });
},
//神兽
navigateTosso() {
  wx.navigateTo({
    url: '/pages/sso/sso',
    success: () => console.log('跳转神兽成功')
  });
},
// 道馆
navigateTodaoguan() {
  wx.navigateTo({
    url: '/pages/daoguan/daoguan',
    success: () => console.log('跳转道馆成功')
  });
},
});