// pages/daoguan/daoguan.js
Page({
  data: {
    currentRegion: 'kanto',
    currentRegionName: '关都',
    regions: [
      { key: 'kanto', name: '关都', emoji: '🏮' },
      { key: 'johto', name: '城都', emoji: '🏯' },
      { key: 'hoenn', name: '丰缘', emoji: '🌴' },
      { key: 'sinnoh', name: '神奥', emoji: '🗻' },
      { key: 'unova', name: '合众', emoji: '🗽' },
      { key: 'kalos', name: '卡洛斯', emoji: '🗼' },
      { key: 'alola', name: '阿罗拉', emoji: '🏝️' },
      { key: 'galar', name: '伽勒尔', emoji: '🏰' },
      { key: 'paldea', name: '帕底亚', emoji: '🍇' }
    ],
    currentGyms: []
  },

  onLoad(options) {
    this.loadGymData(this.data.currentRegion);
  },

  // 切换地区
  switchRegion(e) {
    const region = e.currentTarget.dataset.region;
    const regionData = this.data.regions.find(r => r.key === region);
    this.setData({
      currentRegion: region,
      currentRegionName: regionData.name
    });
    this.loadGymData(region);
  },

  // 加载道馆数据
  loadGymData(region) {
    const gyms = this.getAllGyms()[region] || [];
    this.setData({ currentGyms: gyms });
  },

  // 获取所有道馆数据
  getAllGyms() {
    return {
      // 关都地区（根据图片1）
      kanto: [
        {
          id: 1,
          leader: '小刚',
          image: '/pages/images/馆主/brock.png', // 第1张图 - 小刚
          gym: '尼比道馆',
          city: '尼比市',
          otherJob: '宝可梦培育家、宝可梦医生',
          type: 'rock',
          rule: '二对二单打对战',
          pokemons: ['小拳石', '大岩蛇', '隆隆石'],
          battle: '灰色徽章',
        },
        {
          id: 2,
          leader: '樱花_菖蒲_牡丹',
          image: '/pages/images/馆主/樱花_菖蒲_牡丹.png', // 第5张图 -樱花_菖蒲_牡丹
          gym: '华蓝道馆',
          city: '华蓝市',
          otherJob: '水上芭蕾演员',
          type: 'water',
          rule: '三对三单打对战',
          pokemons: ['海星星', '宝石海星', '角金鱼'],
          battle: '蓝色徽章',
        },
        {
          id: 3,
          leader: '马志士',
          image: '/pages/images/馆主/200px-马志士_动画中.png', // 第3张图 - 马志士
          gym: '枯叶道馆',
          city: '枯叶市',
          otherJob: '美军士兵',
          type: 'electric',
          rule: '一对一单打对战',
          pokemons: ['皮卡丘', '雷丘', '电击兽'],
          battle: '橙色徽章',
        },
        {
          id: 4,
          leader: '莉佳',
          image: '/pages/images/馆主/莉佳.png', // 第2张图 - 莉佳
          gym: '玉虹道馆',
          city: '玉虹市',
          otherJob: '香水店老板',
          type: 'grass',
          rule: '三对三单打对战',
          pokemons: ['口呆花', '蔓藤怪', '霸王花'],
          battle: '彩虹徽章',
        },
        {
          id: 5,
          leader: '娜姿',
          image: '/pages/images/馆主/娜姿.png', // 第4张图 - 娜姿
          gym: '金黄道馆',
          city: '金黄市',
          otherJob: '超能力者',
          type: 'psychic',
          rule: '二对二单打对战',
          pokemons: ['凯西', '勇基拉', '吸盘魔偶'],
          battle: '黄金徽章',
        },
        {
          id: 6,
          leader: '阿桔',
          image: '/pages/images/馆主/200px-阿桔_动画中.png', // 第7张图 - 格斗馆主
          gym: '浅红道馆',
          city: '浅红市',
          otherJob: '忍者',
          type: 'fighting',
          rule: '一对一单打对战',
          pokemons: ['毛球', '摩鲁蛾', '大嘴蝠'],
          battle: '粉红徽章',
        },
        {
          id: 7,
          leader: '夏伯',
          image: '/pages/images/馆主/200px-夏伯_动画中.png', // 第6张图 - 夏伯
          gym: '红莲道馆',
          city: '红莲岛',
          otherJob: '无',
          type: 'fire',
          rule: '三对三单打对战',
          pokemons: ['卡蒂狗', '风速狗', '鸭嘴火龙'],
          battle: '深红徽章',
        },
        {
          id: 8,
          leader: '坂木',
          image: '/pages/images/馆主/200px-坂木_SS_动画中.png', // 第8张图 - 坂木
          gym: '常青道馆',
          city: '常青市',
          otherJob: '火箭队老大',
          type: 'ground',
          rule: '一对一单打对战',
          pokemons: ['穿山鼠', '穿山王', '尼多后'],
          battle: '绿色徽章',
        }
      ],

      // 城都地区（根据图片2）
      johto: [
        {
        id: 1,
        leader: '阿速',
        image: '/pages/images/馆主/160px-阿速_动画中.png',
        gym: '桔梗道馆',
        city: '桔梗市',
        type: 'flying',
        rule: '三对三单打对战',
        pokemons: ['猫头夜鹰', '比比鸟', '大嘴雀'],
        battle: '飞翼徽章',
        description: '飞行系专家，性格严肃认真'
      },
      {
        id: 2,
        leader: '小椿',
        image: '/pages/images/馆主/200px-小椿_BW_动画中.png',
        gym: '烟墨道馆',
        city: '烟墨市',
        type: 'dragon',
        rule: '一对一单打对战',
        pokemons: ['哈克龙', '快龙', '刺龙王'],
        battle: '升龙徽章',
        description: '龙系大师，御龙家族传人'
      },
      {
        id: 3,
        leader: '松叶',
        image: '/pages/images/馆主/120px-松葉_動畫中.png',
        gym: '缘朱道馆',
        city: '缘朱市',
        type: 'rock',
        rule: '三对三单打对战',
        pokemons: ['鬼斯', '鬼斯通', '耿鬼'],
        battle: '岩石徽章',
        description: '岩石系专家，训练家学校老师'
      },
      {
        id: 4,
        leader: '阿笔',
        image: '/pages/images/馆主/200px-阿筆_動畫中.png',
        gym: '桧皮道馆',
        city: '桧皮市',
        type: 'bug',
        rule: '三对三单打对战',
        pokemons: ['线球', '飞天螳螂', '赫拉克罗斯'],
        battle: '昆虫徽章',
      },
      {
        id: 5,
        leader: '阿蜜',
        image: '/pages/images/馆主/200px-阿蜜_DP_动画中.png',
        gym: '浅葱道馆',
        city: '浅葱市',
        type: 'poison',
        rule: '二对二的单打对战	',
        pokemons: ['小磁怪', '大钢蛇'],
        battle: '钢铁徽章',
      },
      {
        id: 6,
        leader: '小茜',
        image: '/pages/images/馆主/200px-小茜_動畫中.png',
        gym: '满金道馆',
        city: '满金市',
        type: 'normal',
        rule: '二对二单打对战',
        pokemons: ['皮皮', '大奶罐', '卡比兽'],
        battle: '标准徽章',
        description: '一般系专家，活泼开朗的少女'
      },
      {
        id: 7,
        leader: '柳伯',
        image: '/pages/images/馆主/200px-柳伯_动画中.png',
        gym: '卡吉道馆',
        city: '卡吉镇',
        type: 'ice',
        rule: '一对一单打对战',
        pokemons: ['白海狮', '长毛猪', '迷唇姐'],
        battle: '冰之徽章',
        description: '冰系大师，性格严肃的老者'
      },
      {
        id: 8,
        leader: '阿四',
        image: '/pages/images/馆主/200px-阿四_SS_动画中.png',
        gym: '湛蓝道馆',
        city: '湛蓝市',
        type: 'fighting',
        rule: '二对二单打对战',
        pokemons: ['蚊香泳士', '豪力'],
        battle: '打击徽章',
      },
      ],

      // 丰缘地区（根据图片3）
      hoenn: [
        {
          id: 1,
          leader: '杜娟',
          image: '/pages/images/馆主/150px-杜娟_动画中.png', // 第1张图 - 学生装杜娟
          gym: '卡那兹道馆',
          city: '卡那兹市',
          type: 'rock',
          rule: '二对二的单打对战',
          pokemons: ['小拳石', '朝北鼻', '大岩蛇'],
          battle: '岩石徽章',
          otherJob: '训练家学校老师'
        },
        {
          id: 2,
          leader: '藤树',
          image: '/pages/images/馆主/120px-藤树_动画中.png', // 第3张图 - 冲浪手藤树
          gym: '武斗道馆',
          city: '武斗镇',
          type: 'fighting',
          rule: '二对二的单打对战',
          pokemons: ['幕下力士', '玛沙那', '恰雷姆'],
          battle: '拳击徽章',
          otherJob: '冲浪手'
        },
        {
          id: 3,
          leader: '铁旋',
          image: '/pages/images/馆主/200px-铁旋_动画中.png',
          gym: '紫堇道馆',
          city: '紫堇市',
          type: 'electric',
          rule: '三对三的单打对战',
          pokemons: ['落雷兽', '雷电球', '三合一磁怪'],
          battle: '电力徽章',
          otherJob: '发明家'
        },
        {
          id: 4,
          leader: '亚莎',
          image: '/pages/images/馆主/200px-亚莎_动画中.png',
          gym: '釜炎道馆',
          city: '釜炎镇',
          type: 'fire',
          rule: '三对三的单打对战',
          pokemons: ['熔岩虫', '煤炭龟', '鸭嘴火龙'],
          battle: '烈焰徽章',
          otherJob: '无'
        },
        {
          id: 5,
          leader: '千里',
          image: '/pages/images/馆主/200px-千里_动画中.png',
          gym: '橙华道馆',
          city: '橙华市',
          type: 'normal',
          rule: '三对三的单打对战',
          pokemons: ['懒人獭', '过动猿', '请假王'],
          battle: '天秤徽章',
          otherJob: '无'
        },
        {
          id: 6,
          leader: '娜琪',
          image: '/pages/images/馆主/200px-娜琪_动画中.png',
          gym: '茵郁道馆',
          city: '茵郁市',
          type: 'flying',
          rule: '三对三的单打对战',
          pokemons: ['七夕青鸟', '大王燕', '盔甲鸟'],
          battle: '白羽徽章',
          otherJob: '无'
        },
        {
          id: 7,
          leader: '小枫与小南',
          image: '/pages/images/馆主/200px-小枫与小南_动画中.png',
          gym: '绿岭道馆',
          city: '绿岭市',
          type: 'psychic',
          rule: '双打对战',
          pokemons: ['太阳岩', '月石', '天然鸟'],
          battle: '心灵徽章',
          otherJob: '无'
        },
        {
          id: 8,
          leader: '亚当',
          image: '/pages/images/馆主/200px-亚当_动画中.png',
          gym: '琉璃道馆',
          city: '琉璃市',
          type: 'water',
          rule: '未知',
          pokemons: ['爱心鱼', '美纳斯', '巨翅飞鱼'],
          battle: '雨滴徽章',
          otherJob: '顶尖协调训练家'
        }
      ],

      // 神奥地区（根据图片4）
      sinnoh: [
        {
          id: 1,
          leader: '瓢太',
          image: '/pages/images/馆主/200px-瓢太_動畫中.png', // 第1张图 - 瓢太
          gym: '黑金道馆',
          city: '黑金市',
          type: 'rock',
          rule: '三对三的单打对战',
          pokemons: ['小拳石', '大岩蛇', '头盖龙'],
          battle: '煤炭徽章',
          description: '矿工，岩石系专家',
          otherJob: '矿工'
        },
        {
          id: 2,
          leader: '菜种',
          image: '/pages/images/馆主/120px-菜种_动画中.png', // 第2张图 - 菜种
          gym: '百代道馆',
          city: '百代市',
          type: 'grass',
          rule: '三对三的单打对战',
          pokemons: ['樱花宝', '樱花儿', '罗丝雷朵'],
          battle: '森林徽章',
          description: '幼师，草系专家',
          otherJob: '幼师'
        },
        {
          id: 3,
          leader: '阿李',
          image: '/pages/images/馆主/200px-阿李_动画中.png', // 第3张图 - 阿李
          gym: '帷幕道馆',
          city: '帷幕市',
          type: 'fighting',
          rule: '三对三的单打对战',
          pokemons: ['玛沙那', '恰雷姆', '路卡利欧'],
          battle: '铺石徽章',
          description: '格斗家，格斗系专家',
          otherJob: '格斗家'
        },
        {
          id: 4,
          leader: '吉宪',
          image: '/pages/images/馆主/200px-吉宪_动画中.png', // 第4张图 - 吉宪
          gym: '野原道馆',
          city: '野原市',
          type: 'water',
          rule: '三对三的单打对战',
          pokemons: ['暴鲤龙', '沼跃鱼', '暴飞龙'],
          battle: '湿地徽章',
          description: '祭典的司仪和裁判，水系专家',
          otherJob: '祭典的司仪和裁判'
        },
        {
          id: 5,
          leader: '梅丽莎',
          image: '/pages/images/馆主/140px-梅麗莎_動畫中.png', // 第5张图 - 梅丽莎
          gym: '家缘道馆',
          city: '家缘市',
          type: 'ghost',
          rule: '三对三的单打对战',
          pokemons: ['梦妖魔', '附和气球', '黑夜魔灵'],
          battle: '遗迹徽章',
          description: '顶尖协调训练家，幽灵系专家',
          otherJob: '顶尖协调训练家'
        },
        {
          id: 6,
          leader: '东瓜',
          image: '/pages/images/馆主/200px-東瓜_動畫中.png', // 第6张图 - 东瓜
          gym: '水脉道馆',
          city: '水脉市',
          type: 'steel',
          rule: '三对三的单打对战',
          pokemons: ['大钢蛇', '青铜钟', '护城龙'],
          battle: '矿山徽章',
          description: '矿工，钢系专家',
          otherJob: '矿工'
        },
        {
          id: 7,
          leader: '小菘',
          image: '/pages/images/馆主/200px-小菘_動畫中.png', // 第7张图 - 小菘
          gym: '雪峰道馆',
          city: '雪峰市',
          type: 'ice',
          rule: '四对四的单打对战',
          pokemons: ['雪童子', '冰鬼护', '暴雪王', '雪妖女'],
          battle: '冰河徽章',
          description: '训练家学校的老师，冰系专家',
          otherJob: '训练家学校老师'
        },
        {
          id: 8,
          leader: '电次',
          image: '/pages/images/馆主/200px-电次_动画中.png', // 第8张图 - 电次
          gym: '滨海道馆',
          city: '滨海市',
          type: 'electric',
          rule: '三对三的单打对战',
          pokemons: ['雷丘', '电击魔兽', '自爆磁怪'],
          battle: '灯塔徽章',
          description: '电系专家，直接送出徽章',
          otherJob: '无'
        }
      ],

      // 合众地区（根据图片5）
      unova: [
        {
          id: 1,
          leader: '天桐',
          image: '/pages/images/馆主/200px-天桐_动画中.png',
          gym: '三曜道馆',
          city: '三曜市',
          type: 'grass',
          rule: '挑战者选择三位馆主中的其中一人进行一对一的单打对战',
          pokemons: ['花椰猴', '藤藤蛇', '君主蛇'],
          battle: '三元徽章',
          description: '宝可梦酒侍，草系专家',
          otherJob: '服务生/宝可梦酒侍',
          specialRule: '三曜道馆的特殊规则：挑战者可以选择与天桐、伯特或寇恩中的一人对战'
        },
        {
          id: 2,
          leader: '伯特',
          image: '/pages/images/馆主/200px-伯特_動畫中.png',
          gym: '三曜道馆',
          city: '三曜市',
          type: 'fire',
          rule: '挑战者选择三位馆主中的其中一人进行一对一的单打对战',
          pokemons: ['爆香猴', '暖暖猪', '炎武王'],
          battle: '三元徽章',
          description: '宝可梦酒侍，火系专家',
          otherJob: '服务生/宝可梦酒侍',
          specialRule: '三曜道馆的特殊规则：挑战者可以选择与天桐、伯特或寇恩中的一人对战'
        },
        {
          id: 3,
          leader: '寇恩',
          image: '/pages/images/馆主/200px-寇恩_动画中.png',
          gym: '三曜道馆',
          city: '三曜市',
          type: 'water',
          rule: '挑战者选择三位馆主中的其中一人进行一对一的单打对战',
          pokemons: ['冷水猴', '水水獭', '大剑鬼'],
          battle: '三元徽章',
          description: '宝可梦酒侍，水系专家',
          otherJob: '服务生/宝可梦酒侍',
          specialRule: '三曜道馆的特殊规则：挑战者可以选择与天桐、伯特或寇恩中的一人对战'
        },
        {
          id: 4,
          leader: '芦荟',
          image: '/pages/images/馆主/200px-芦荟_动画中.png',
          gym: '七宝道馆',
          city: '七宝市',
          type: 'normal',
          rule: '二对二的单打对战',
          pokemons: ['小约克', '哈约克', '长毛狗'],
          battle: '基础徽章',
          description: '七宝博物馆馆长，一般系专家',
          otherJob: '七宝博物馆馆长'
        },
        {
          id: 5,
          leader: '亚堤',
          image: '/pages/images/馆主/200px-亚堤_动画中.png',
          gym: '飞云道馆',
          city: '飞云市',
          type: 'bug',
          rule: '三对三的单打对战',
          pokemons: ['虫宝包', '宝包茧', '保姆虫'],
          battle: '甲虫徽章',
          description: '虫系艺术家，擅长虫系宝可梦',
          otherJob: '无'
        },
        {
          id: 6,
          leader: '夏卡',
          image: '/pages/images/馆主/200px-夏卡_动画中.png',
          gym: '双龙道馆',
          city: '双龙市',
          type: 'dragon',
          rule: '二对二的单打对战',
          pokemons: ['牙牙', '斧牙龙', '双斧战龙'],
          battle: '传说徽章',
          description: '双龙市市长兼双龙学园学园长，龙系大师',
          otherJob: '双龙市市长/双龙学园学园长'
        },
        {
          id: 7,
          leader: '小菊儿',
          image: '/pages/images/馆主/200px-小菊儿_动画中.png',
          gym: '雷文道馆',
          city: '雷文市',
          type: 'electric',
          rule: '三对三的单打对战',
          pokemons: ['斑斑马', '雷电斑马', '电飞鼠'],
          battle: '伏特徽章',
          description: '知名模特，电系专家',
          otherJob: '模特'
        },
        {
          id: 8,
          leader: '菊老大',
          image: '/pages/images/馆主/200px-菊老大_动画中.png',
          gym: '帆巴道馆',
          city: '帆巴市',
          type: 'ground',
          rule: '三对三的单打对战',
          pokemons: ['螺钉地鼠', '龙头地鼠', '泥偶巨人'],
          battle: '震动徽章',
          description: '矿工，地面系专家',
          otherJob: '矿工'
        },
        {
          id: 9,
          leader: '风露',
          image: '/pages/images/馆主/200px-风露_动画中.png',
          gym: '吹寄道馆',
          city: '吹寄市',
          type: 'flying',
          rule: '三对三的空想对战',
          pokemons: ['咕咕鸽', '高傲雉鸡', '勇士雄鹰'],
          battle: '喷射徽章',
          description: '飞行员，飞行系专家',
          otherJob: '飞行员',
          specialRule: '三对三的空想对战：使用飞行系宝可梦进行特殊空战'
        },
        {
          id: 10,
          leader: '哈奇库',
          image: '/pages/images/馆主/200px-哈奇库_动画中.png',
          gym: '雪花道馆',
          city: '雪花市',
          type: 'ice',
          rule: '三对三的单打对战',
          pokemons: ['喷嚏熊', '冻原熊', '冰岩怪'],
          battle: '冰柱徽章',
          description: '宝可梦好莱坞演员，冰系专家',
          otherJob: '宝可梦好莱坞演员'
        },
        {
          id: 11,
          leader: '霍米加',
          image: '/pages/images/馆主/200px-霍米加_动画中.png',
          gym: '立涌道馆',
          city: '立涌市',
          type: 'poison',
          rule: '挑战者使用六只宝可梦与她的三只宝可梦进行的单打对战',
          pokemons: ['破破袋', '灰尘山', '毒骷蛙'],
          battle: '毒烟徽章',
          description: '乐队贝斯手，毒系专家',
          otherJob: '乐队贝斯手',
          specialRule: '特殊规则：挑战者使用6只宝可梦对战馆主的3只宝可梦'
        },
        {
          id: 12,
          leader: '西子伊',
          image: '/pages/images/馆主/200px-西子伊_动画中.png',
          gym: '青海波道馆',
          city: '青海波市',
          type: 'water',
          rule: '二对二的单打对战',
          pokemons: ['龟脚脚', '龟足巨铠', '巨翅飞鱼'],
          battle: '海浪徽章',
          description: '水系专家，擅长冲浪和潜水',
          otherJob: '无'
        },
        {
          id: 13,
          leader: '黑连',
          image: '/pages/images/馆主/160px-黑連_動畫中.png',
          gym: '桧扇道馆',
          city: '桧扇市',
          type: 'normal',
          rule: '一对一的单打对战',
          pokemons: ['探探鼠', '步哨鼠', '长尾怪手'],
          battle: '未知徽章',
          description: '训练家学校的老师，一般系专家',
          otherJob: '训练家学校老师'
        }
      ],

      // 卡洛斯地区（根据图片6）
      kalos: [
        {
          id: 1,
          leader: '紫罗兰',
          image: '/pages/images/馆主/200px-宝可TV_XY134_紫罗兰.png',
          gym: '白檀道馆',
          city: '白檀市',
          type: 'bug',
          rule: '二对二的单打对战',
          pokemons: ['溜溜糖球', '雨翅蛾', '碧粉蝶'],
          battle: '虫虫徽章',
          description: '摄影师，虫系专家',
          otherJob: '摄影师',
          specialRule: '使用虫系宝可梦进行二对二对战'
        },
        {
          id: 2,
          leader: '查克洛',
          image: '/pages/images/馆主/200px-宝可TV_XY134_查克洛.png',
          gym: '遥香道馆',
          city: '遥香市',
          type: 'rock',
          rule: '挑战者需在对战前先攀登上道馆内的岩壁，挑战者全部的宝可梦与他的两只宝可梦的单打对战',
          pokemons: ['石丸子', '地幔岩', '庞岩怪'],
          battle: '岩壁徽章',
          description: '攀岩手，岩石系专家',
          otherJob: '攀岩手',
          specialRule: '特殊挑战：先攀岩后对战，全队对战两只宝可梦'
        },
        {
          id: 3,
          leader: '可尔妮',
          image: '/pages/images/馆主/200px-宝可TV_XY134_可尔妮.png',
          gym: '娑罗道馆',
          city: '娑罗市',
          type: 'fighting',
          rule: '三对三的单打对战',
          pokemons: ['利欧路', '路卡利欧', '功夫鼬'],
          battle: '战斗徽章',
          description: '格斗系专家，路卡利欧训练家',
          otherJob: '无',
          specialRule: '使用格斗系宝可梦进行三对三对战'
        },
        {
          id: 4,
          leader: '福爷',
          image: '/pages/images/馆主/200px-宝可TV_XY134_福爷.png',
          gym: '比翼道馆',
          city: '比翼市',
          type: 'grass',
          rule: '三对三的单打对战',
          pokemons: ['毽子草', '毽子花', '毽子绵'],
          battle: '植物徽章',
          description: '园丁兼祭典司仪，草系专家',
          otherJob: '园丁/祭典司仪',
          specialRule: '使用草系宝可梦进行三对三对战'
        },
        {
          id: 5,
          leader: '希特隆',
          image: '/pages/images/馆主/200px-希特隆_动画中.png',
          gym: '密阿雷道馆',
          city: '密阿雷市',
          type: 'electric',
          rule: '三对三的单打对战',
          pokemons: ['电电虫', '电蜘蛛', '洛托姆'],
          battle: '电压徽章',
          description: '发明家，电系专家',
          otherJob: '发明家',
          specialRule: '使用电系宝可梦进行三对三对战'
        },
        {
          id: 6,
          leader: '玛绣',
          image: '/pages/images/馆主/200px-宝可TV_XY134_玛绣.png',
          gym: '香薰道馆',
          city: '香薰市',
          type: 'fairy',
          rule: '一对一的单打对战或二对二的单打对战',
          pokemons: ['粉香香', '绵绵泡芙', '仙子伊布'],
          battle: '妖精徽章',
          description: '时装设计师，妖精系专家',
          otherJob: '时装设计师',
          specialRule: '可选择一对一或二对二对战模式'
        },
        {
          id: 7,
          leader: '葛吉花',
          image: '/pages/images/馆主/200px-宝可TV_XY134_葛吉花.png',
          gym: '百刻道馆',
          city: '百刻市',
          type: 'psychic',
          rule: '双打对战',
          pokemons: ['歌德宝宝', '哥德小童', '哥德小姐'],
          battle: '超能徽章',
          description: '占卜师，超能力系专家',
          otherJob: '占卜师',
          specialRule: '双打对战模式'
        },
        {
          id: 8,
          leader: '得抚',
          image: '/pages/images/馆主/200px-宝可TV_XY134_得抚.png',
          gym: '映雪道馆',
          city: '映雪市',
          type: 'ice',
          rule: '三对三的单打对战',
          pokemons: ['冰宝', '冰岩怪', '暴雪王'],
          battle: '冰山徽章',
          description: '冰系专家，性格豪爽',
          otherJob: '无',
          specialRule: '使用冰系宝可梦进行三对三对战'
        }
      ],
      //
      galar:[
        {
          id: 1,
          leader: '亚洛',
          image: '/pages/images/馆主/亞洛.png',
          gym: '草路竞技场',
          city: '草路镇',
          type: 'grass',
          version: 'both',
          badge: '草之徽章',
          battleTypes: ['道馆赛', '极巨团体战', '作为搭档', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['幼棉棉', '白蓬蓬', '丰蜜龙'],
          description: '草系专家，性格温和的农场主',
          otherJob: '农场主'
        },
        {
          id: 2,
          leader: '露璃娜',
          image: '/pages/images/馆主/露璃娜.png',
          gym: '水舟竞技场',
          city: '水舟镇',
          type: 'water',
          version: 'both',
          badge: '水之徽章',
          battleTypes: ['道馆赛', '冠军杯', '极巨团体战', '作为搭档', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['刺梭鱼', '戽斗尖梭', '巨钳蟹'],
          description: '水系专家，模特兼道馆馆主',
          otherJob: '模特'
        },
        {
          id: 3,
          leader: '卡芜',
          image: '/pages/images/馆主/卡蕪.png',
          gym: '机擎竞技场',
          city: '机擎市',
          type: 'fire',
          version: 'both',
          badge: '火之徽章',
          battleTypes: ['道馆赛', '极巨团体战', '作为搭档', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['焚焰蚣', '巨炭山', '风速狗'],
          description: '火系专家，前职业摔角手',
          otherJob: '前职业摔角手'
        },
        {
          id: 4,
          leader: '彩豆',
          image: '/pages/images/馆主/彩豆.png',
          gym: '溯传竞技场',
          city: '溯传镇',
          type: 'fighting',
          version: 'sword',
          badge: '格斗徽章',
          battleTypes: ['道馆赛', '冠军杯', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['战舞郎', '葱游兵', '摔角鹰人'],
          description: '格斗系专家，空手道大师',
          otherJob: '空手道大师'
        },
        {
          id: 5,
          leader: '欧尼奥',
          image: '/pages/images/馆主/歐尼奧.png',
          gym: '溯传竞技场',
          city: '溯传镇',
          type: 'ghost',
          version: 'shield',
          badge: '幽灵徽章',
          battleTypes: ['道馆赛', '冠军杯', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['谜拟Q', '耿鬼', '水晶灯火灵'],
          description: '幽灵系专家，性格内向的神秘少年',
          otherJob: '无'
        },
        {
          id: 6,
          leader: '波普菈',
          image: '/pages/images/馆主/波普菈.png',
          gym: '舞姿竞技场',
          city: '舞姿镇',
          type: 'fairy',
          version: 'both',
          badge: '妖精徽章',
          battleTypes: ['道馆赛'],
          pokemons: ['霜奶仙', '波克基斯', '沙奈朵'],
          description: '妖精系专家，前伽勒尔明星',
          otherJob: '前伽勒尔明星'
        },
        {
          id: 7,
          leader: '彼特',
          image: '/pages/images/馆主/彼特.png',
          gym: '舞姿竞技场',
          city: '舞姿镇',
          type: 'fairy',
          version: 'both',
          badge: '妖精徽章',
          battleTypes: ['冠军杯', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['霜奶仙', '波克基斯', '布莉姆温'],
          description: '妖精系专家，波普菈的孙子',
          otherJob: '无'
        },
        {
          id: 8,
          leader: '玛瓜',
          image: '/pages/images/馆主/瑪瓜.png',
          gym: '战竞竞技场',
          city: '战竞镇',
          type: 'rock',
          version: 'sword',
          badge: '岩石徽章',
          battleTypes: ['道馆赛', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['巨石丁', '庞岩怪', '班基拉斯'],
          description: '岩石系专家，美蓉的弟弟',
          otherJob: '无'
        },
        {
          id: 9,
          leader: '美蓉',
          image: '/pages/images/馆主/美蓉.png',
          gym: '战竞竞技场',
          city: '战竞镇',
          type: 'ice',
          version: 'shield',
          badge: '冰之徽章',
          battleTypes: ['道馆赛', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['冰砌鹅', '踏冰人偶', '冰岩怪'],
          description: '冰系专家，玛瓜的姐姐',
          otherJob: '无'
        },
        {
          id: 10,
          leader: '聂梓',
          image: '/pages/images/馆主/聂梓.png',
          gym: '尖钉镇',
          city: '尖钉镇',
          type: 'dark',
          version: 'both',
          badge: '恶之徽章',
          battleTypes: ['道馆赛'],
          pokemons: ['堵拦熊', '乌鸦头头', '班基拉斯'],
          description: '恶系专家，摇滚歌手',
          otherJob: '摇滚歌手'
        },
        {
          id: 11,
          leader: '玛俐',
          image: '/pages/images/馆主/玛俐.png',
          gym: '尖钉镇',
          city: '尖钉镇',
          type: 'dark',
          version: 'both',
          badge: '恶之徽章',
          battleTypes: ['淘汰赛', '伽勒尔明星赛'],
          pokemons: ['莫鲁贝可', '长毛巨魔', '堵拦熊'],
          description: '恶系专家，聂梓的妹妹',
          otherJob: '无'
        },
        {
          id: 12,
          leader: '奇巴纳',
          image: '/pages/images/馆主/奇巴納.png',
          gym: '拳关竞技场',
          city: '拳关市',
          type: 'dragon',
          version: 'both',
          badge: '龙之徽章',
          battleTypes: ['道馆赛', '冠军杯', '淘汰赛', '伽勒尔明星赛'],
          pokemons: ['铝钢龙', '暴飞龙', '三首恶龙'],
          description: '龙系专家，伽勒尔地区冠军的有力竞争者',
          otherJob: '天气播报员'
        }
      ],
      // 帕底亚地区（根据图片7）
      paldea: [
        {
          id: 1,
          leader: '阿枫',
          image: '/pages/images/馆主/200px-阿枫_动画中.png',
          gym: '圆模道馆',
          city: '圆模镇',
          type: 'bug',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['豆蟋蟀', '虫甲圣', '缠红鹤'],
          description: '虫系专家，圆模道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶虫属性',
          teraType: 'bug',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 2,
          leader: '寇沙',
          image: '/pages/images/馆主/200px-寇沙_动画中.png',
          gym: '深钵道馆',
          city: '深钵镇',
          type: 'grass',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['迷你芙', '奥利纽', '奇麒麟'],
          description: '草系专家，深钵道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶草属性',
          teraType: 'grass',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 3,
          leader: '奇树',
          image: '/pages/images/馆主/200px-奇树_动画中.png',
          gym: '酿光道馆',
          city: '酿光市',
          type: 'electric',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['电海燕', '电肚蛙', '巴布土拨'],
          description: '电系专家，人气主播',
          otherJob: '网络主播',
          specialRule: '太晶化对战：太晶电属性',
          teraType: 'electric',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 4,
          leader: '海岱',
          image: '/pages/images/馆主/200px-海岱_动画中.png',
          gym: '玻瓶道馆',
          city: '玻瓶市',
          type: 'water',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['球球海狮', '普隆隆姆', '轻身鳕'],
          description: '水系专家，玻瓶道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶水属性',
          teraType: 'water',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 5,
          leader: '青木',
          image: '/pages/images/馆主/200px-青木_动画中.png',
          gym: '锦汇道馆',
          city: '锦汇镇',
          type: 'normal',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['狗仔包', '麻花犬', '土龙节节'],
          description: '一般系专家，锦汇道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶一般属性',
          teraType: 'normal',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 6,
          leader: '莱姆',
          image: '/pages/images/馆主/200px-萊姆_动画中.png',
          gym: '冰柜道馆',
          city: '冰柜镇',
          type: 'ghost',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['墓仔狗', '赛富豪', '振翼发'],
          description: '幽灵系专家，冰柜道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶幽灵属性',
          teraType: 'ghost',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 7,
          leader: '莉普',
          image: '/pages/images/馆主/200px-莉普_动画中.png',
          gym: '焙固道馆',
          city: '焙固镇',
          type: 'psychic',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['爱管侍', '巨锻匠', '超能艳鸵'],
          description: '超能力系专家，焙固道馆馆主',
          otherJob: '道馆馆主',
          specialRule: '太晶化对战：太晶超能力属性',
          teraType: 'psychic',
          reBattle: '登入名人堂后可作为特邀教员再战'
        },
        {
          id: 8,
          leader: '古鲁夏',
          image: '/pages/images/馆主/200px-古鲁夏_动画中.png',
          gym: '霜抹山道馆',
          city: '霜抹山',
          type: 'ice',
          version: 'both',
          badge: '道馆徽章',
          battleTypes: ['道馆赛', '登入名人堂后作为特邀教员再战'],
          pokemons: ['雪童子', '浩大鲸', '冰砌鹅'],
          description: '冰系专家，前滑雪冠军',
          otherJob: '前滑雪冠军',
          specialRule: '太晶化对战：太晶冰属性',
          teraType: 'ice',
          reBattle: '登入名人堂后可作为特邀教员再战'
        }
        // 其他帕底亚道馆...
      ]
    };
  },

  // 获取属性中文名
  getTypeName(type) {
    const typeMap = {
      normal: '一般', fire: '火', water: '水', grass: '草',
      electric: '电', ice: '冰', fighting: '格斗', poison: '毒',
      ground: '地面', flying: '飞行', psychic: '超能', bug: '虫',
      rock: '岩石', ghost: '幽灵', dragon: '龙', dark: '恶',
      steel: '钢', fairy: '妖精'
    };
    return typeMap[type] || type;
  }
});