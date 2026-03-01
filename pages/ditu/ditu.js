// pages/map/map.js
Page({
  data: {
    currentMap: 0,
    mapList: [
      {
        id: 1,
        name: '关都',
        emoji: '🏮',
        image: '/pages/images/地图/关都.jpg',
        description: '宝可梦系列的起点地区，以日本关东地区为原型。地图左上角有富士山形状的山峰，中部有大片水域，城镇和道路网络分布合理，充满经典宝可梦风格。',
        features: ['富士山', '大片水域', '城镇密集', '经典风格'],
        versions: '红/绿/蓝/黄、火红/叶绿、Let\'s Go! 皮卡丘/伊布'
      },
      {
        id: 2,
        name: '城都',
        emoji: '🏯',
        image: '/pages/images/地图/成都.jpg',
        description: '关都地区的西部邻接地区，以日本关西地区为原型。地图呈现纵向延伸，顶端有雪山和现代化都市，中部有古代遗迹，底部是平原和农庄。',
        features: ['纵向延伸', '雪山都市', '古代遗迹', '平原农庄'],
        versions: '金/银/水晶、心金/魂银'
      },
      {
        id: 3,
        name: '丰缘',
        emoji: '🌴',
        image: '/pages/images/地图/丰缘.jpg',
        description: '以日本九州为原型的地区，特点是陆地和海洋面积各占一半。地图上有大片海洋、多个岛屿、山脉和森林，气候温暖多样。',
        features: ['海陆各半', '多岛屿', '温暖气候', '火山地形'],
        versions: '红宝石/蓝宝石/绿宝石、欧米伽红宝石/阿尔法蓝宝石'
      },
      {
        id: 4,
        name: '神奥',
        emoji: '🗻',
        image: '/pages/images/地图/神奥.jpg',
        description: '以日本北海道为原型的地区，地图中央有高耸的山脉，山顶积雪，山腰有巨大洞穴。周围有茂密森林、湖泊和河流，地形复杂多样。',
        features: ['中央山脉', '雪山洞穴', '茂密森林', '复杂地形'],
        versions: '钻石/珍珠/白金、晶灿钻石/明亮珍珠'
      },
      {
        id: 5,
        name: '合众',
        emoji: '🗽',
        image: '/pages/images/地图/合众.jpg',
        description: '以美国纽约为原型的地区，地图被中央大河分为东西两岸。东岸有现代化大都市，西岸有森林、雪山和丘陵，体现了现代与自然的融合。',
        features: ['大河流域', '现代都市', '自然景观', '东西分化'],
        versions: '黑/白、黑2/白2'
      },
      {
        id: 6,
        name: '卡洛斯',
        emoji: '🗼',
        image: '/pages/images/地图/卡洛斯.jpg',
        description: '以法国为原型的地区，地图中心有大型圆形竞技场，周围分布着城堡、塔楼等地标。整体布局呈现放射状，充满欧洲风情。',
        features: ['圆形竞技场', '欧洲风格', '城堡塔楼', '放射布局'],
        versions: 'X/Y'
      },
      {
        id: 7,
        name: '阿罗拉',
        emoji: '🏝️',
        image: '/pages/images/地图/阿罗拉.jpg',
        description: '以夏威夷为原型的地区，由多个大小不一的岛屿组成。岛屿植被茂密，有白色山峰和环形道路，周围是色彩鲜艳的温暖水域。',
        features: ['多岛屿','温暖水域', '茂密植被', '夏威夷风情'],
        versions: '太阳/月亮、究极之日/究极之月'
      },
      {
        id: 8,
        name: '伽勒尔',
        emoji: '🏰',
        image: '/pages/images/地图/迦勒尔.jpg',
        description: '以英国为原型的地区，地图上有大片绿色植被、山脉、城镇和铁路网络。北部有云雾缭绕的区域，整体布局紧凑而详细。',
        features: ['英国风格', '铁路网络', '绿色植被', '云雾山脉'],
        versions: '剑/盾'
      }
    ]
  },

  onLoad() {
    this.setData({
      currentMapData: this.data.mapList[this.data.currentMap]
    });
    console.log('地图数据加载完成');
  },

  // 切换地图
  switchMap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentMap: index,
      currentMapData: this.data.mapList[index]
    });
  },

  // 上一张地图
  prevMap() {
    let newIndex = this.data.currentMap - 1;
    if (newIndex < 0) {
      newIndex = this.data.mapList.length - 1;
    }
    this.setData({
      currentMap: newIndex,
      currentMapData: this.data.mapList[newIndex]
    });
  },

  // 下一张地图
  nextMap() {
    let newIndex = this.data.currentMap + 1;
    if (newIndex >= this.data.mapList.length) {
      newIndex = 0;
    }
    this.setData({
      currentMap: newIndex,
      currentMapData: this.data.mapList[newIndex]
    });
  },

  // 地图加载错误处理
  onMapError(e) {
    console.error('地图加载失败:', e.detail.errMsg);
    wx.showToast({
      title: '地图加载失败',
      icon: 'none'
    });
  }
});