var app = getApp();
// var server = require('../../utils/server');
var ser = require('../../utils/requestUtils.js')
var categroy = require('../../utils/param.js')
Page({
  data: {
    cart: {
      count: 0,
      total: 0,
      list: []// 购物车的集合
    },
    goodsList: [
      {
        category_name: "热销", category_id: "25", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }]
      }
      ,
      {
        category_name: "蔬菜", category_id: "26", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "主食", category_id: "27", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "火锅", category_id: "24", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "我很帅", category_id: "35", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }]}
      ,
      {
        category_name: "吉吉", category_id: "52", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "hdhd", category_id: "53", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }]}
      ,
      {
        category_name: "提提", category_id: "29", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "全系", category_id: "48", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "设酒杀鸡", category_id: "49", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "好吃的", category_id: "50", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }
      ,
      {
        category_name: "shsh", category_id: "51", list: [{
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }, {
          item_description
          :
          "",
          item_id
          :
          "35",
          item_name
          :
          "开水白菜",
          item_picture
          :
          "http://hbimg.kepiture.com/fcfc65dc64039394aaaaae1f194c80ac.jpg",
          item_price
          :
          "0.01",
          item_status
          :
          "1",
          item_stock
          :
          ""
        }] }],
    showCartDetail: false,
    dataCartList: []
  },
  onLoad: function (options) {
    var that = this


   
    var shopId = options.id;
    for (var i = 0; i < app.globalData.shops.length; ++i) {
      if (app.globalData.shops[i].id == shopId) {
        this.setData({
          shop: app.globalData.shops[i]
        });
        break;
      }
    }
  },
  onShow: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        classifySeleted: 'sp' + that.data.goodsList[0].category_id
      });
    }, 1000)

  },
  tapAddCart: function (e) {

    //得到分类的id，和item的id
    this.addCart(e.target.dataset.categoryid, e.target.dataset.itemid);
    this.setData({
      showCartDetail: false
    });
  },
  // 增加回调
  addCart: function (categoryId, itemid) {
    var that = this
    for (var goodIndex in that.data.goodsList) {
      // 通过菜品分类来查询集合
      if (categoryId == that.data.goodsList[goodIndex].category_id) {
        for (var itemIndex in that.data.goodsList[goodIndex].list) {
          //通过item_id来查询你点击的菜品
          if (itemid == that.data.goodsList[goodIndex].list[itemIndex].item_id) {

            // 得到购物车的集合
            var cartList = that.data.cart.list

            cartList.push({
              item_name: that.data.goodsList[goodIndex].list[itemIndex].item_name,
              item_id: that.data.goodsList[goodIndex].list[itemIndex].item_id,
              item_price: that.data.goodsList[goodIndex].list[itemIndex].item_price,
              item_picture: that.data.goodsList[goodIndex].list[itemIndex].item_picture,
            })
            //增加到购物车的集合
            that.data.cart.list.concat(cartList)

          }
        }
      }
    }
    this.countCart();
  },
  countCart: function () {
    var that = this
    var count = 0,
      total = 0;
    // 数量  钱的相加
    for (var id in this.data.cart.list) {
      var cartItem = this.data.cart.list[id];
      count += 1;
      total += cartItem.item_price * 1;

    }
    that.data.cart.count = count;
    that.data.cart.total = total;

    that.setData({
      cart: that.data.cart
    });

    // 判断数量
    var dataList = that.data.dataCartList

    //如果dataList为0，增加数据
    if (dataList.length == 0) {
      dataList.push({
        item_name: that.data.cart.list[0].item_name,
        item_id: that.data.cart.list[0].item_id,
        item_price: that.data.cart.list[0].item_price,
        item_picture: that.data.cart.list[0].item_picture,
        sum: 1
      })
      //遍历查询
    } else {
      var isEqlest = false //来判断dataList是否有点击相同的数据  false没有  true 有
      for (var dataIndex = 0; dataIndex < dataList.length; dataIndex++) {
        //如果购物车最后的id == dataList的id
        if (dataList[dataIndex].item_id == that.data.cart.list[that.data.cart.list.length - 1].item_id) {
          var sum = 'dataList[' + dataIndex + '].sum'
          this.setData({
            [sum]: dataList[dataIndex].sum += 1
          })
          isEqlest = true
        }
      }
      //如果没有重复的增加数据
      if (!isEqlest) {
        dataList = dataList.concat({
          item_name: that.data.cart.list[that.data.cart.list.length - 1].item_name,
          item_id: that.data.cart.list[that.data.cart.list.length - 1].item_id,
          item_price: that.data.cart.list[that.data.cart.list.length - 1].item_price,
          item_picture: that.data.cart.list[that.data.cart.list.length - 1].item_picture,
          sum: 1
        })
      }


    }
    that.setData({
      dataCartList: dataList
    })

  },
  //数据库里面的加
  tapAddCartitem: function (e) {
    var that = this
    console.log(e.currentTarget.dataset.itemid)
    //得到购物车的集合
    var dataList = that.data.dataCartList
    //遍历
    for (var dataListIndex in dataList) {
      //如果你点击的item_id在dataList的item_id有一样的
      if (dataList[dataListIndex].item_id == e.currentTarget.dataset.itemid) {
        // 将sum - 1 
        var sum = 'dataList[' + dataListIndex + '].sum'
        this.setData({
          [sum]: dataList[dataListIndex].sum += 1
        })

      }
    }
    //跟新数据
    that.setData({
      dataCartList: dataList
    })

    // that.data.cart 集合
    var isSum = false;// 确定增加cart数据cart。list是否有
    var isIndex = 0;//记录cart数据的索引
    for (var cartIndex in that.data.cart.list) {
      if (that.data.cart.list[cartIndex].item_id == e.currentTarget.dataset.itemid) {
        isSum = true
        isIndex = cartIndex
      }
    }

    if (isSum) {
      // 得到购物车的集合
      var cartList = that.data.cart.list

      cartList.push({
        item_name: that.data.cart.list[isIndex].item_name,
        item_id: that.data.cart.list[isIndex].item_id,
        item_price: that.data.cart.list[isIndex].item_price,
        item_picture: that.data.cart.list[isIndex].item_picture,
      })
      //增加到购物车的集合
      that.data.cart.list.concat(cartList)
    }

    var count = 0,
      total = 0;
    // 数量  钱的相加
    for (var id in this.data.cart.list) {
      var cartItem = this.data.cart.list[id];
      count += 1;
      total += cartItem.item_price * 1;

    }
    that.data.cart.count = count;
    that.data.cart.total = total;

    that.setData({
      cart: that.data.cart
    });
    //钱 加减
    var count = 0,
      total = 0;
    // 数量  钱的相加
    for (var id in this.data.cart.list) {
      var cartItem = this.data.cart.list[id];
      count += 1;
      total += cartItem.item_price * 1;

    }
    that.data.cart.count = count;
    that.data.cart.total = total;

    that.setData({
      cart: that.data.cart
    });
  },
  tapReduceCart: function (e) {
    var that = this
    console.log(e.currentTarget.dataset.itemid)
    //得到购物车的集合
    var dataList = that.data.dataCartList
    //遍历
    for (var dataListIndex in dataList) {
      //如果你点击的item_id在dataList的item_id有一样的
      if (dataList[dataListIndex].item_id == e.currentTarget.dataset.itemid) {
        // 将sum - 1 
        var sum = 'dataList[' + dataListIndex + '].sum'
        this.setData({
          [sum]: dataList[dataListIndex].sum -= 1
        })
        //如果是0  清除数据
        if (dataList[dataListIndex].sum == 0) {
          dataList.splice(dataListIndex, 1)
          if (that.data.dataCartList.length == 0) {
            this.setData({
              showCartDetail: false
            });
          }
        }
      }
    }
    //跟新数据
    that.setData({
      dataCartList: dataList
    })

    // that.data.cart 集合
    var isCartSum = false;//是否有相同的数据
    var isCartIndex = 0;// 保存删除的index
    for (var cartIndex in that.data.cart.list) {
      if (that.data.cart.list[cartIndex].item_id == e.currentTarget.dataset.itemid) {
        isCartSum = true
        isCartIndex = cartIndex
      }
    }
    if (isCartSum) {
      that.data.cart.list.splice(isCartIndex, 1)
    }
    var count = 0,
      total = 0;
    // 数量  钱的相加
    for (var id in this.data.cart.list) {
      var cartItem = this.data.cart.list[id];
      count += 1;
      total += cartItem.item_price * 1;

    }
    that.data.cart.count = count;
    that.data.cart.total = total;

    that.setData({
      cart: that.data.cart
    });
    //钱 加减
    var count = 0,
      total = 0;
    // 数量  钱的相加
    for (var id in this.data.cart.list) {
      var cartItem = this.data.cart.list[id];
      count += 1;
      total += cartItem.item_price * 1;

    }
    that.data.cart.count = count;
    that.data.cart.total = total;

    that.setData({
      cart: that.data.cart
    });
  },

  reduceCart: function (id) {

  },

  follow: function () {
    this.setData({
      followed: !this.data.followed
    });
  },
  onGoodsScroll: function (e) {
    if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }

    var scale = e.detail.scrollWidth / 570,
      scrollTop = e.detail.scrollTop / scale,
      h = 0,
      classifySeleted,
      len = this.data.goodsList.length;
    this.data.goodsList.forEach(function (classify, i) {
      var _h = 70 + classify.list.length * (46 * 3 + 20 * 2);
      if (scrollTop >= h - 100 / scale) {
        classifySeleted = 'sp' + classify.category_id;
      }
      h += _h;
    });
    this.setData({
      classifySeleted: classifySeleted
    });
  },
  tapClassify: function (e) {
    var id = e.target.dataset.id;
    this.setData({
      classifyViewed: id
    });
    var self = this;
    setTimeout(function () {
      self.setData({
        classifySeleted: id
      });
    }, 100);
  },
  showCartDetail: function (e) {
    if (this.data.cart.count == 0) {
      this.setData({
        showCartDetail: false
      });
      console.log(this.data.cart.count)
      return
    }
    console.log("..............")

    this.setData({
      showCartDetail: !this.data.showCartDetail
    });

  },
  hideCartDetail: function () {

    this.setData({
      showCartDetail: false
    });
  },
  submit: function (e) {
    server.sendTemplate(e.detail.formId, null, function (res) {
      if (res.data.errorcode == 0) {
        wx.showModal({
          showCancel: false,
          title: '恭喜',
          content: '订单发送成功！下订单过程顺利完成，本例不再进行后续订单相关的功能。',
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack();
            }
          }
        })
      }
    }, function (res) {
      console.log(res)
    });
  }
});

