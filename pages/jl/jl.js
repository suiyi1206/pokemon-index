// pages/index/index.js
Page({
  data: {
    pokemons: [],
    displayedPokemons: [],
    searchText: '',
    currentFilter: 'all',
    isGridView: true,
    showSortOptions: false,
    sortBy: 'number',
    favorites: [],
    typeNames: {
      normal: '一般',
      fire: '火',
      water: '水',
      grass: '草',
      electric: '电',
      ice: '冰',
      fighting: '格斗',
      poison: '毒',
      ground: '地面',
      flying: '飞行',
      psychic: '超能',
      bug: '虫',
      rock: '岩石',
      ghost: '幽灵',
      dragon: '龙',
      dark: '恶',
      steel: '钢',
      fairy: '妖精'
    }
  },

  onLoad() {
    this.loadPokemonData();
    this.loadFavorites();
  },

  goTotujianpage:function() {
    wx.navigateTo({
      url: '/pages/tujian/tujian',
      success: () => console.log('跳转攻略成功')
    });
  },  

  loadPokemonData() {
    // 示例数据 - 包含多种属性的宝可梦
    const sampleData = [
      { id: 1, name: '妙蛙种子', type1: 'grass', type2: 'poison', image: '/pages/images/10164.gif' },
      { id: 4, name: '小火龙', type1: 'fire', image: '/pages/images/10212.gif' },
      { id: 7, name: '杰尼龟', type1: 'water', image: '/pages/images/11210.gif' },
      { id: 152, name: '菊草叶', type1: 'grass', image: '/pages/images/10221.gif' },
      { id: 155, name: '火球鼠', type1: 'fire', image: '/pages/images/10285.gif' },
      { id: 158, name: '小锯鳄', type1: 'water', image: '/pages/images/11300.gif' },
      { id: 252, name: '木守宫', type1: 'grass', image: '/pages/images/11311.gif' },
      { id: 255, name: '火稚鸡', type1: 'fire', image: '/pages/images/11292.gif' },
      { id: 258, name: '水跃鱼', type1: 'water', image: '/pages/images/10828.gif' },
      { id: 387, name: '草苗龟', type1: 'grass', image: '/pages/images/11318.gif' },
      { id: 390, name: '小火焰猴', type1: 'fire', image: '/pages/images/10222.gif' },
      { id: 393, name: '波加曼', type1: 'water', image: '/pages/images/10948.gif' },
      { id: 495, name: '藤藤蛇', type1: 'grass', image: '/pages/images/11183.gif' },
      { id: 498, name: '暖暖猪', type1: 'fire', image: '/pages/images/11273.gif' },
      { id: 501, name: '水水獭', type1: 'water', image: '/pages/images/10886.gif' },
      { id: 650, name: '哈力栗', type1: 'grass', image: '/pages/images/10219.gif' },
      { id: 653, name: '火狐狸', type1: 'fire', image: '/pages/images/10405.gif' },
      { id: 656, name: '呱呱泡蛙', type1: 'water', image: '/pages/images/10448.gif' },
      { id: 722, name: '木木枭', type1: 'grass', type2: 'flying', image: '/pages/images/11061.gif' },
      { id: 725, name: '火斑喵', type1: 'fire', image: '/pages/images/10693.gif' },
      { id: 728, name: '球球海狮', type1: 'water', image: '/pages/images/10978.gif' },
      { id: 810, name: '敲音猴', type1: 'grass', image: '/pages/images/10537.gif' },
      { id: 813, name: '炎兔儿', type1: 'fire', image: '/pages/images/11093.gif' },
      { id: 816, name: '泪眼蜥', type1: 'water', image: '/pages/images/11191.gif' },
      { id: 906, name: '新叶喵', type1: 'grass', image: '/pages/images/11204.gif' },
      { id: 909, name: '呆火蟋', type1: 'fire', image: '/pages/images/10452.gif' },
      { id: 912, name: '念磁狐', type1: 'water', image: '/pages/images/11001.gif' },
      { id: 913, name: '念磁狐', type1: 'electric', image: '/pages/images/10018.gif' },
      { id: 914, name: '电守宫', type1: 'electric', image: '/pages/images/10061.gif' },
      { id: 915, name: '大黄蜂', type1: 'electric',type2: 'poison', image: '/pages/images/10121.gif' },
      { id: 916, name: '疾风电狼', type1: 'electric', image: '/pages/images/10146.gif' },
      { id: 917, name: '小豆芽', type1: 'electric', image: '/pages/images/10127.gif' },
      { id: 918, name: '雷麒麟', type1: 'electric', image: '/pages/images/10185.gif' },
      { id: 919, name: '深海电心', type1: 'electric', image: '/pages/images/10258.gif' },
      { id: 920, name: '刺电狐', type1: 'electric', image: '/pages/images/10613.gif' },
      { id: 921, name: '皮卡丘', type1: 'electric', image: '/pages/images/10926.gif' },
      { id: 922, name: '冰冻海马', type1: 'ice', image: '/pages/images/10082.gif' },
      { id: 923, name: '海珀蜘蛛', type1: 'ice', image: '/pages/images/10068.gif' },
      { id: 924, name: '冰雹龙', type1: 'ice', image: '/pages/images/10660.gif' },
      { id: 925, name: '急冰人', type1: 'ice', image: '/pages/images/11025.gif' },
      { id: 926, name: '雌鼠拉', type1: 'ice', image: '/pages/images/11077.gif' },
      { id: 927, name: '海鸭', type1: 'ice', image: '/pages/images/10266.gif' },
      { id: 928, name: '乖乖龙', type1: 'ice', image: '/pages/images/10333.gif' },
      { id: 929, name: '深海星', type1: 'ice', image: '/pages/images/10501.gif' },
      { id: 930, name: '虾锤王', type1: 'ice', image: '/pages/images/10569.gif' },
      { id: 931, name: '大力神', type1: 'fighting', image: '/pages/images/10106.gif' },
      { id: 932, name: '漩涡狐', type1: 'fighting', image: '/pages/images/10140.gif' },
      { id: 933, name: '超雄小子', type1: 'fighting', image: '/pages/images/10228.gif' },
      { id: 934, name: '月牙鲨', type1: 'fighting', image: '/pages/images/10472.gif' },
      { id: 935, name: '忍者蛙', type1: 'fighting', image: '/pages/images/10531.gif' },
      { id: 936, name: '怪管搏击手', type1: 'fighting', image: '/pages/images/10577.gif' },
      { id: 937, name: '燃猴', type1: 'fighting', image: '/pages/images/10603.gif' },
      { id: 938, name: '超梦', type1: 'fighting', image: '/pages/images/10789.gif' },
      { id: 939, name: '甘多啦', type1: 'fighting', image: '/pages/images/10961.gif' },
      { id: 940, name: '毒瓦斯', type1: 'poison', image: '/pages/images/10238.gif' },
      { id: 941, name: '坏罐王', type1: 'poison', image: '/pages/images/10275.gif' },
      { id: 942, name: '融合毒瓦斯', type1: 'poison', image: '/pages/images/10337.gif' },
      { id: 943, name: '怀梦', type1: 'poison', image: '/pages/images/10482.gif' },
      { id: 944, name: '骷髅狼', type1: 'poison', image: '/pages/images/10639.gif' },
      { id: 945, name: '毒鼠', type1: 'poison', image: '/pages/images/10849.gif' },
      { id: 946, name: '阿米诺', type1: 'poison', image: '/pages/images/10952.gif' },
      { id: 947, name: '底座', type1: 'ground', image: '/pages/images/10096.gif' },
      { id: 948, name: '坚墙犀牛', type1: 'ground', image: '/pages/images/10115.gif' },
      { id: 949, name: '混狮', type1: 'ground', image: '/pages/images/10226.gif' },
      { id: 950, name: '地钻鼠', type1: 'ground', image: '/pages/images/10243.gif' },
      { id: 951, name: '鳄龟', type1: 'ground', image: '/pages/images/10340.gif' },
      { id: 952, name: '珊瑚鲇鱼', type1: 'ground', image: '/pages/images/10398.gif' },
      { id: 953, name: '地炎蛛', type1: 'ground', image: '/pages/images/10409.gif' },
      { id: 954, name: '登山羚羊', type1: 'ground', image: '/pages/images/10462.gif' },
      { id: 955, name: '恐鸟', type1: 'ground', image: '/pages/images/10488.gif' },
      { id: 956, name: '急冻鸟', type1: 'flying', image: '/pages/images/10011.gif' },
      { id: 957, name: '彩蝶', type1: 'flying', image: '/pages/images/10090.gif' },
      { id: 958, name: '鸽蜂', type1: 'flying', image: '/pages/images/10120.gif' },
      { id: 959, name: '暗翼鸟', type1: 'flying', image: '/pages/images/10154.gif' },
      { id: 960, name: '始祖鸟', type1: 'flying', image: '/pages/images/10255.gif' },
      { id: 961, name: '猫头鹰', type1: 'flying', image: '/pages/images/10403.gif' },
      { id: 962, name: '巨岩蝙蝠', type1: 'flying', image: '/pages/images/10451.gif' },
      { id: 963, name: '蚊兽', type1: 'flying', image: '/pages/images/10505.gif' },
      { id: 964, name: '高能慈湖', type1: 'flying', image: '/pages/images/10595.gif' },
      { id: 965, name: '神圣提亚', type1: 'psychic', image: '/pages/images/10017.gif' },
      { id: 966, name: '小姑娘', type1: 'psychic', image: '/pages/images/10076.gif' },
      { id: 967, name: '玩偶兽', type1: 'psychic', image: '/pages/images/10104.gif' },
      { id: 968, name: '极冰帕亚', type1: 'psychic', image: '/pages/images/10314.gif' },
      { id: 969, name: '暗光龙', type1: 'psychic', image: '/pages/images/10313.gif' },
      { id: 970, name: '固多啦', type1: 'psychic', image: '/pages/images/10492.gif' },
      { id: 971, name: '帕环多面王', type1: 'psychic', image: '/pages/images/10540.gif' },
      { id: 972, name: '神火提亚', type1: 'psychic', image: '/pages/images/10583.gif' },
      { id: 973, name: '冰炎兽', type1: 'psychic', image: '/pages/images/10661.gif' },
      { id: 974, name: '毛毛虫', type1: 'bug', image: '/pages/images/10195.gif' },
      { id: 975, name: '电蚕', type1: 'bug', image: '/pages/images/10350.gif' },
      { id: 976, name: '岩蚂蚁', type1: 'bug', image: '/pages/images/10572.gif' },
      { id: 977, name: '神光蚕', type1: 'bug', image: '/pages/images/10622.gif' },
      { id: 978, name: '冰电甲虫', type1: 'bug', image: '/pages/images/10625.gif' },
      { id: 979, name: '栗子兽', type1: 'bug', image: '/pages/images/11103.gif' },
      { id: 980, name: '瓢虫兽', type1: 'bug', image: '/pages/images/10681.gif' },
      { id: 981, name: '火炎瓢虫', type1: 'bug', image: '/pages/images/10680.gif' },
      { id: 982, name: '蠕虫兽', type1: 'bug', image: '/pages/images/10786.gif' },
      { id: 983, name: '山石', type1: 'rock', image: '/pages/images/10249.gif' },
      { id: 984, name: '面包岩', type1: 'rock', image: '/pages/images/10277.gif' },
      { id: 985, name: '葫芦使者', type1: 'rock', image: '/pages/images/10359.gif' },
      { id: 986, name: '面包岩', type1: 'rock', image: '/pages/images/10527.gif' },
      { id: 987, name: '大岩蛇', type1: 'rock', image: '/pages/images/10877.gif' },
      { id: 988, name: '石甲兽', type1: 'rock', image: '/pages/images/11040.gif' },
      { id: 989, name: '石块机甲', type1: 'rock', image: '/pages/images/11211.gif' },
      { id: 990, name: '大嘴岩蛇', type1: 'rock', image: '/pages/images/11222.gif' },
      { id: 991, name: '滚球岩', type1: 'rock', image: '/pages/images/11360.gif' },
      { id: 992, name: '飘絮兽', type1: 'ghost', image: '/pages/images/10063.gif' },
      { id: 993, name: '小姑娘', type1: 'ghost', image: '/pages/images/10104.gif' },
      { id: 994, name: '鬼灯', type1: 'ghost', image: '/pages/images/10204.gif' },
      { id: 995, name: '暗翼蝙蝠', type1: 'ghost', image: '/pages/images/10708.gif' },
      { id: 996, name: '归瓦斯', type1: 'ghost', image: '/pages/images/10561.gif' },
      { id: 997, name: '比利亚', type1: 'ghost', image: '/pages/images/10535.gif' },
      { id: 998, name: '大嘴秋', type1: 'ghost', image: '/pages/images/10494.gif' },
      { id: 999, name: '鬼魅', type1: 'ghost', image: '/pages/images/10446.gif' },
      { id: 1000, name: '黑白煞', type1: 'ghost', image: '/pages/images/10287.gif' },
      { id: 1001, name: '迪亚波罗', type1: 'dragon', image: '/pages/images/10075.gif' },
      { id: 1002, name: '喷火龙x', type1: 'dragon', image: '/pages/images/10208.gif' },
      { id: 1003, name: '喷火龙', type1: 'dragon', image: '/pages/images/10209.gif' },
      { id: 1004, name: '水麒麟', type1: 'dragon', image: '/pages/images/10241.gif' },
      { id: 1005, name: '乖龙', type1: 'dragon', image: '/pages/images/10334.gif' },
      { id: 1006, name: '快龙', type1: 'dragon', image: '/pages/images/10669.gif' },
      { id: 1007, name: '念龙', type1: 'dragon', image: '/pages/images/10797.gif' },
      { id: 1008, name: '光圣龙', type1: 'dragon', image: '/pages/images/10845.gif' },
      { id: 1009, name: '基多拉', type1: 'dragon', image: '/pages/images/10892.gif' },
      { id: 1010, name: '炎翅龙', type1: 'dragon', image: '/pages/images/11067.gif' },
      { id: 1011, name: '冰利亚', type1: 'dark', image: '/pages/images/10201.gif' },
      { id: 1012, name: '烟笋', type1: 'dark', image: '/pages/images/10239.gif' },
      { id: 1013, name: '陀螺兽', type1: 'dark', image: '/pages/images/10275.gif' },
      { id: 1014, name: '坏鬼', type1: 'dark', image: '/pages/images/10483.gif' },
      { id: 1015, name: '大锤超人', type1: 'dark', image: '/pages/images/10770.gif' },
      { id: 1016, name: '幽灵兽', type1: 'dark', image: '/pages/images/10814.gif' },
      { id: 1017, name: '鬼烟雾', type1: 'dark', image: '/pages/images/10890.gif' },
      { id: 1018, name: '触手兽', type1: 'dark', image: '/pages/images/10960.gif' },
      { id: 1019, name: '恶晶兽', type1: 'dark', image: '/pages/images/11064.gif' },
      { id: 1020, name: '钢金字塔', type1: 'steel', image: '/pages/images/10476.gif' },
      { id: 1021, name: '齿轮兽', type1: 'steel', image: '/pages/images/10645.gif' },
      { id: 1022, name: '磁力兽', type1: 'steel', image: '/pages/images/10734.gif' },
      { id: 1023, name: '钢x', type1: 'steel', image: '/pages/images/10783.gif' },
      { id: 1024, name: '方块兽', type1: 'steel', image: '/pages/images/10839.gif' },
      { id: 1025, name: '闹钟兽', type1: 'steel', image: '/pages/images/10964.gif' },
      { id: 1026, name: '裂空座', type1: 'steel', image: '/pages/images/11024.gif' },
      { id: 1027, name: '推土兽', type1: 'steel', image: '/pages/images/11057.gif' },
      { id: 1028, name: '机械鸟', type1: 'steel', image: '/pages/images/11132.gif' },
      { id: 1029, name: '粉鱼', type1: 'fairy', image: '/pages/images/10054.gif' },
      { id: 1030, name: '苹果兽', type1: 'fairy', image: '/pages/images/10067.gif' },
      { id: 1031, name: '乖精灵', type1: 'fairy', image: '/pages/images/10093.gif' },
      { id: 1032, name: '不倒葫芦', type1: 'fairy', image: '/pages/images/10103.gif' },
      { id: 1033, name: '飘絮叶', type1: 'fairy', image: '/pages/images/10126.gif' },
      { id: 1034, name: '种子兽', type1: 'fairy', image: '/pages/images/10161.gif' },
      { id: 1035, name: '草精灵', type1: 'fairy', image: '/pages/images/10197.gif' },
      { id: 1036, name: '乖黄豆', type1: 'fairy', image: '/pages/images/10225.gif' },
      { id: 1037, name: '青草团子', type1: 'fairy', image: '/pages/images/10260.gif' },
    ];

    const pokemonsWithFavorite = sampleData.map(pokemon => ({
      ...pokemon,
      isFavorite: this.data.favorites.includes(pokemon.id)
    }));

    this.setData({
      pokemons: pokemonsWithFavorite,
      displayedPokemons: this.applyFilters(pokemonsWithFavorite)
    });
  },

  loadFavorites() {
    const favorites = wx.getStorageSync('pokemon_favorites') || [];
    this.setData({ favorites });
  },

  getTypeName(type) {
    return this.data.typeNames[type] || type;
  },

  onSearchInput(e) {
    const text = e.detail.value.toLowerCase();
    this.setData({
      searchText: text,
      displayedPokemons: this.applyFilters(this.data.pokemons)
    });
  },

  changeFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter,
      displayedPokemons: this.applyFilters(this.data.pokemons)
    });
  },

  applyFilters(pokemons) {
    let filtered = [...pokemons];
    const { searchText, currentFilter } = this.data;

    // 搜索过滤
    if (searchText) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchText) || 
        p.id.toString().includes(searchText)
      );
    }

    // 类型过滤
    if (currentFilter !== 'all') {
      if (currentFilter === 'favorite') {
        filtered = filtered.filter(p => p.isFavorite);
      } else {
        filtered = filtered.filter(p => 
          p.type1 === currentFilter || p.type2 === currentFilter
        );
      }
    }

    return this.sortPokemons(filtered);
  },

  sortPokemons(pokemons) {
    const { sortBy } = this.data;
    return [...pokemons].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'weight':
          return b.weight - a.weight;
        case 'height':
          return b.height - a.height;
        default:
          return a.id - b.id;
      }
    });
  },

  showSortMenu() {
    this.setData({ showSortOptions: !this.data.showSortOptions });
  },

  setSort(e) {
    const sortBy = e.currentTarget.dataset.sort;
    this.setData({
      sortBy,
      showSortOptions: false,
      displayedPokemons: this.applyFilters(this.data.pokemons)
    });
  },

  toggleViewMode() {
    this.setData({ isGridView: !this.data.isGridView });
  },

  showAdvancedFilter() {
    wx.showModal({
      title: '高级筛选',
      content: '双属性筛选、世代筛选等功能将在后续版本推出',
      showCancel: false
    });
  },

  toggleFavorite(e) {
    const id = e.currentTarget.dataset.id;
    let favorites = [...this.data.favorites];
    
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
    } else {
      favorites.push(id);
    }

    wx.setStorageSync('pokemon_favorites', favorites);
    
    const updatedPokemons = this.data.pokemons.map(pokemon => ({
      ...pokemon,
      isFavorite: favorites.includes(pokemon.id)
    }));

    this.setData({
      favorites,
      pokemons: updatedPokemons,
      displayedPokemons: this.applyFilters(updatedPokemons)
    });
  },

  viewPokemonDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/tujian/tujian?id=${id}`
    });
  },

  stopPropagation() {
    return false;
  }
});