<template>
    <div class="panda_container">
      <!--顶部导航-->
      <div class="panda_nav_bar">
        <div class="panda_nav_bar_cont">
          <div class="slogan">旅行的意义</div>
          <ul class="nav-bar-set">
            <li class="set-list set-logIn">
              <a class="person-text" href="javascript:void(0);">
                <span class="set-text">你好，请登录</span>
              </a>
            </li>
            <li class="set-list">
              <a class="person-text" href="javascript:void(0);">
                <span class="set-text">免费注册</span>
              </a>
            </li>
            <li class="set-list">
              <a class="person-text" href="javascript:void(0);">
                <span class="set-text">个人中心</span>
              </a>
            </li>
            <li class="set-list">
              <a class="person-text" href="javascript:void(0);">
                <span class="set-text">易腾创想</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--头部-->
      <el-container class="panda_hd_cont">
        <el-header class="panda_hd">
          <el-container class="pandaLogo">
            <a href="javascript:void(0);">
              <img src="../assets/logo.png" alt="">
            </a>
          </el-container>
          <el-container class="panda_search">
            <!--v-model 数据的双向绑定-->
            <el-input v-model="inputValue" placeholder="搜索旅行地/酒店/旅游/景点门票/交通"></el-input>
            <el-button  @click="search">
              <img src="../assets/search.png"/>
            </el-button>
          </el-container>
        </el-header>
      </el-container>
      <!--主导航-->
      <div class="panda_nav_single">
        <div class="panda_nav">
          <ul class="panda_nav_ul">
            <template v-for="(item,index) in nav">
              <li :class="[classObj,curIndex == index?active:'']" @click="getIndex(index)">
                <a v-bind:href="item.url">{{item.name}}</a>
              </li>
              <li class="divider"></li>
            </template>
          </ul>
        </div>
      </div>
      <!--轮播图-->
      <div class="panda_banner">
        <el-carousel trigger="click" height="340px">
          <el-carousel-item v-for="item in imgUrlList" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--主体内容-->
      <div class="panda_content">
        <!--热门景点-->
        <div class="mod">
          <div class="mod_hd">
            <div class="title">
							<span>
								热门景点
								<img src="../assets/triangle_up.png" alt="" />
							</span>
            </div>
          </div>
          <div class="popular_destination_body">
            <div class="product">
              <!--头部导航-->
              <div class="product_head">
                <ul class="inner-tabs-nav">
                  <li v-for="(item,index) in arealist" :key="index" :class="[productIndex ==index?'active':'']" @click="product(index)"><a href="javascript:void(0)">{{item.areaname}}</a></li>
                </ul>
              </div>
              <!--主体内容-->
              <div class="product_body">
                <div class="destination_list_left">
                  <template v-for="(item,index) in productData" v-if="productIndex == index ? true:false">
                    <a href="#" v-for="itemList in item.data">
                      <div class="product_item">
                        <div class="item" @click="goRouters">
                          <img :src="itemList.imgurl"/>
                          <span class="tag_saleNum">月销{{itemList.num}}笔</span>
                        </div>
                        <div class="item_msg">
                          <p class="item_name">{{itemList.name}}</p>
                          <p class="item_info">
                            <span class="price">￥<i>{{itemList.price}}</i>/人起</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </template>
                </div>
                <div class="destination_list_right">
                  <a><img src="../assets/content/baoditu.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 酒店住宿 -->
      <div class="mod hotel_content">
        <div class="mod_hd hotel_head">
          <div class="title">
                        <span>酒店住宿
                            <img src="../assets/triangle_up.png">
                        </span>
          </div>
        </div>
        <div class="hotel_body">
          <div class="hotel_msg_left">
            <dl class="keyword_long">
              <dt>游记</dt>
              <dd><span><a>成都网红景点和美食全攻略！</a></span></dd>
              <dd><span><a>再遇天府之国</a></span></dd>
              <dd><span><a>成都三日游攻略，打卡成都</a></span></dd>
              <dd><span><a>成都崽儿168小时。</a></span></dd>
              <dd><span><a>世界茶文化发源地蒙顶山</a></span></dd>
            </dl>
            <dl class="keyword_long">
              <dt>促销</dt>
              <dd><span><a>睡遍全世界—新加坡国家馆</a></span></dd>
              <dd><span><a>睡遍全世界—日本国家馆</a></span></dd>
              <dd><span><a>睡遍全世界—澳大利亚站</a></span></dd>
              <dd><span><a>暑期亲子游世界</a></span></dd>
              <dd><span><a>睡遍全世界—泰国国家馆</a></span></dd>
            </dl>
          </div>
          <div class="product">
            <div class="product_head">
              <ul class="inner-tabs-nav">
                <li class="active">
                  <a>热门城市</a>
                </li>
                <li @click="clickMe">
                  <a>都市购物</a>
                </li>
                <li>
                  <a>海岛休假</a>
                </li>
                <li>
                  <a>旅游胜地</a>
                </li>
              </ul>
            </div>
            <div class="product_body">
              <div class="hotel_list_middle">
                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/singapore.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">云居度假</p>
                      <p class="item-num">715家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>70</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/bangkok.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">华纳丽尊</p>
                      <p class="item-num">3948家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>18</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/tokyo.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">亚朵S同道</p>
                      <p class="item-num">3993家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>121</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/kualalumpur.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">玫瑰坊酒店</p>
                      <p class="item-num">2193家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>27</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>
                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/osaka.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">和颐酒店</p>
                      <p class="item-num">4093家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>44</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>

                <a href="./html/hotel_detail.html">
                  <div class="product_item">
                    <div class="item">
                      <img src="../assets/content/phuket.jpg">
                    </div>
                    <div class="item_msg">
                      <p class="item_name">亚奥国际</p>
                      <p class="item-num">5093家酒店</p>
                      <p class="item_info">
                        <span class="price">￥<i>41</i>起</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="hotel_list_right">
                <a>
                  <img src="../assets/content/220330.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 机票 -->
      <div class="mod airplane_content">
        <div class="mod_hd airplane_head">
          <div class="title">
                        <span>国内特价机票
                            <img src="../assets/triangle_up.png">
                        </span>
          </div>
        </div>
        <div class="airplane_body">
          <div class="product">
            <div class="product_head">
              <ul class="inner-tabs-nav">
                <li class="active">
                  <a>国内热门</a>
                </li>
                <li>
                  <a>华南/西南</a>
                </li>
                <li>
                  <a>西北/东北</a>
                </li>
                <li>
                  <a>华中/华北</a>
                </li>
              </ul>
            </div>
            <div class="product_body">
              <div class="airplane_list_left">
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
                <div class="product_item">
                  <a>
                    <p class="item-name">成都 <i class="icon_round"></i> 大阪</p>
                    <p class="item-info">
                      <span class="date">11月25日</span>
                    </p>
                    <p class="item-info">
                      <span class="price">¥<i class="price_info">256</i>起</span>
                      <span class="button gobuy">立抢</span>
                    </p>
                  </a>
                </div>
              </div>
              <div class="destination_list_right">
                <a>
                  <img src="../assets/content/airport.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footerH-->
      <div class="panda_footer">
        <div class="mod copyright">
          <p class="copyright">
            Copyright©1999-2019,&nbsp;http://www.edu-learn4fun.com/.
          </p>
          <p>All rights reserved.&nbsp;|&nbsp;蜀ICP备17005xxx号</p>
          <p class="supervision-call">
            旅游咨询：12345678丨成都易腾创想旅游有限公司
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import {isDataValid} from "../util/validate";
import {service} from "../util/service";
import axios from 'axios';
// import Lalala from '../components/Lalala'

export default {
  name: 'panda',
  // components: {
  //   Lalala
  // },
  data () {
    return {
      inputValue:"",
      username:"张三",
      password:"123",
      dataList:[],
      nav:[{id:0,name:"首页",url:"#"},
          {id:1,name:"酒店",url:"#"},
        {id:2,name:"旅游",url:"#"},
        {id:3,name:"攻略",url:"#"},
        {id:4,name:"自由行",url:"#"},
        {id:5,name:"机票",url:"#"},
        {id:6,name:"火车",url:"#"},
        {id:7,name:"门票",url:"#"},
        {id:8,name:"全球购",url:"#"}],
      curIndex:0,
      classObj:"panda_nav_li",
      active:"active",
      imgUrlList:[require("../assets/banner/banner1.jpg"),
        require("../assets/banner/banner2.jpg"),
        require("../assets/banner/banner3.jpg"),
        require("../assets/banner/banner4.jpg")
      ],
      productData:[
        {id:0,title:"境内",data:[
            {shopid:0,num:"41600",name:"峨眉山",price:"1220",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"青城山",price:"45",imgurl:require("../assets/content/pop2.jpg")},
            {shopid:2,num:"41600",name:"乐山大佛",price:"0",imgurl:require("../assets/content/pop3.jpg")},
            {shopid:3,num:"41600",name:"九寨沟",price:"1000",imgurl:require("../assets/content/pop4.jpg")},
            {shopid:4,num:"41600",name:"西岭雪山",price:"0",imgurl:require("../assets/content/pop5.jpg")},
            {shopid:5,num:"41600",name:"大熊猫",price:"30",imgurl:require("../assets/content/pop6.jpg")},
            {shopid:6,num:"41600",name:"宽窄巷子",price:"0",imgurl:require("../assets/content/pop7.jpg")},
            {shopid:7,num:"41600",name:"泸沽湖",price:"0",imgurl:require("../assets/content/pop8.jpg")},
        ]},
        {id:1,title:"日本",data:[
            {shopid:0,num:"41600",name:"富士山",price:"0",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"樱花道",price:"45",imgurl:require("../assets/content/pop2.jpg")},
          ]},
        {id:2,title:"东南亚",data:[
            {shopid:0,num:"41600",name:"泰国",price:"1000",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"老挝",price:"45",imgurl:require("../assets/content/pop2.jpg")},
          ]},
        {id:3,title:"欧洲",data:[
            {shopid:0,num:"41600",name:"巴黎铁塔",price:"1220",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"青城山",price:"45",imgurl:require("../assets/content/pop2.jpg")},
            {shopid:2,num:"41600",name:"乐山大佛",price:"0",imgurl:require("../assets/content/pop3.jpg")},
          ]},
        {id:4,title:"美洲",data:[
            {shopid:0,num:"41600",name:"美洲豹",price:"2000",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"青城山",price:"45",imgurl:require("../assets/content/pop2.jpg")},
            {shopid:2,num:"41600",name:"乐山大佛",price:"0",imgurl:require("../assets/content/pop3.jpg")},
            {shopid:3,num:"41600",name:"九寨沟",price:"1000",imgurl:require("../assets/content/pop4.jpg")},
          ]},
        {id:5,title:"澳中东非",data:[
            {shopid:0,num:"41600",name:"考拉",price:"1220",imgurl:require("../assets/content/pop1.jpg")},
            {shopid:1,num:"41600",name:"青城山",price:"45",imgurl:require("../assets/content/pop2.jpg")},
            {shopid:2,num:"41600",name:"乐山大佛",price:"0",imgurl:require("../assets/content/pop3.jpg")},
          ]}
      ],
      productIndex:0,
      arealist: [],
      spotslist:[]
    }
  },
  methods:{
    goRouters(){
      this.$router.replace('/lalala')
    },
    clickMe(){
      alert('我是111')
    },
    search(){
      if(!isDataValid(this.inputValue)){
        alert("搜索框不能为空");
        return false;
      }else{
        //这里需要使用axios进行数据请求/提交
        //安装axios npm install --save axios vue-axios
        //在main.js中载入
        // alert("11111")
        service.getData().then((res)=>{
          console.log(res.data)
          //路由跳转-跳转的时候一定要存在该路由
          this.$router.push("/HelloWorld")

        }).catch((err)=>{
          console.log("err:"+err.data)
        });
        // service.login(this.username,this.password).then((ers)=>{
        //   // 这里数据请求成功
        //   //当我们数据请求成功之后我们可以跳转页面
        //   //路由跳转
        //   this.$router.push("/HelloWorld")
        // }).catch((err)=>{
        //   //这里是数据请求失败
        // })
      }
    },
    getData(){
      service.getData().then((res)=>{
        //console.log(res.data)
        //把我们获取到的数据赋值给 dataList
        //获取到的数据是在 请求成功之后进行的操作把操作完成之后的数据在赋值
        this.dataList = res.data.data;
        //console.log(this.dataList)
      }).catch((err)=>{
        console.log("err:"+err.data)
      });
    },
    getIndex(index){
      //console.log(index)
      this.curIndex = index;
    },
    product(index){
      this.productIndex = index;
    },
    getApi1 () {
      var that =this;
      that.getData()
      axios.get('http://127.0.0.1:8082/arealist').then(res =>{
        this.arealist = res.data
        console.log('我是接口arealist',res.data)
      })
    },
    getApi2(){
      var that =this;
      that.getData()
      axios.get('http://127.0.0.1:8082/hotlist').then(res =>{
        console.log(res.data)
        this.spotslist = res.data
        console.log('我是接口spotslist',spotslist)
      }).catch(()=>{console.log('并没有请求到数据')})
    }
  },
  // created:function(){
  //   //this.getData();
  //   console.log("111")
  // },
  // beforeMount:function(){
  //   console.log("222")
  // },
  //生命周期-在生命周期中进行函数调用
  //数据一般在 创建后或者挂载前/后进行处理
  // mounted
  mounted(){
   this.getApi1();
    this.getApi2()
  }
}
</script>

<style scoped>

  ul{
    list-style: none !important;
  }
  a{
    text-decoration: none;
    color: #2ca182;
  }
  /*当鼠标移动到a标签的时候显示颜色并去掉下划线*/
  a:hover{
    text-decoration: none;
    color: #2ca182;
  }
  .panda_container{
    width: 100%;
    font-size: 12px;
    color: #333;
    background-color: #fff;
  }

  /*顶部导航条样式*/
  .panda_nav_bar{
    color: #333;
    background: #f4f4f4;
  }
  .panda_nav_bar_cont{
    position: relative;
    /*如果出现定位-就会出现重叠效果*/
    z-index: 27;
    /*最小宽度*/
    min-width: 980px;
    /*最大宽度*/
    max-width: 1180px;
    height: 36px;
    margin: 0 auto;
    background: #f4f4f4;
  }
  .panda_nav_bar .slogan{
    font-size: 12px;
    color: #666;
    /*把元素变成行内块级元素*/
    /*块级元素独占一行*/
    /*行内元素 占一行里面的一小块 且设置宽高无效*/
    /*行内块级元素 占一行里面的一小块 且设置宽高有效*/
    display: inline-block;
    margin: 10px 0 0 14px;
    float:left;
  }

  /*顶部导航右边部分*/
  .nav-bar-set{
    position: absolute;
    top: 0;
    right: 0;
    height: 36px;
  }
  .panda_nav_bar .set-list{
    /*浮动布局-可以把垂直排列的元素变成水平排列--元素的宽度之和一定不能超过父元素的宽度*/
    float: left;
    height: 12px;
    line-height: 12px;
    margin: 11px 0 0 0;
    border-right: 1px solid #dddddd;
    position: relative;
  }
  .panda_nav_bar .person-text{
    display: inline-block;
    margin: -12px -1px 0;
  }
  .panda_nav_bar .person-text .set-text{
    position: relative;
    display: inline-block;
    padding: 12px 0px;
    width: 92px;
    color: #666;
    text-align: center;
    /*transparent 颜色透明*/
    border: 1px solid transparent;
    border-bottom: none;
  }
  .panda_nav_bar .set-logIn.set-list .person-text .set-text{
    width: 120px;
    color: #2ca182;
    border-right: none;
  }

  /*头部样式*/
  .panda_hd{
    position: relative;
    min-width: 980px;
    max-width: 1180px;
    height: 80px !important;
    margin: 0 auto;
  }
  .panda_hd .pandaLogo{
    display: inline-block;
    width: 126px;
    height: 43px;
    margin: 18px 0;
    /*超出部分隐藏*/
    overflow: hidden;
    float: left;
  }
  .panda_hd .pandaLogo a{
    display: block;
    width: 126px;
    height: 43px;
    /*背景图片 no-repeat禁止平铺*/
    overflow: hidden;
    /*首航缩进 -可以使用首航缩进的技术把文字进行隐藏*/
  }
  .panda_hd .pandaLogo a img{
    width: 100%;
    height: 100%;
  }
  /*头部搜索框样式*/
  .panda_search{
    position: absolute;
    top: 20px;
    left: 170px;
    width: 42%;
  }
  .el-input__inner{
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 28px !important;
    line-height: 28px !important;
    padding: 0 45px 0 5px;
    font-size: 12px;
    border: 1px solid #35b795;
    /*盒子阴影 1:左右 2:上下 3:模糊程度 4:模糊距离 5:颜色 6:内阴影*/
    box-shadow: 2px 2px 1px 0 rgba(164,203,255,.25) inset;
    /*轮廓*/
    outline: 0 none;
    /*盒子大小*/
    box-sizing:content-box;
  }
  .el-button{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 60px;
    height: 40px;
    cursor: pointer;
    background-color: rgb(53,183,149);
    border: 0;
  }
  .el-button img{
    width: 18px;
    height: 18px;
    margin:auto;
  }

  /*主导航样式*/
  .panda_nav_single{
    width: 100%;
    background: #35B795;
    height: 40px;
  }
  .panda_nav_single .panda_nav{
    min-width: 980px;
    max-width: 1180px;
    margin: 0 auto;
    height: 40px;
    background: #35B795;
  }
  .panda_nav_ul{
    width: 100%;
    margin: 0 auto;
    padding: 0;
    height: 40px;
  }
  .panda_nav_ul li{
    float: left;
  }
  .panda_nav_ul .panda_nav_li a{
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-size: 15px;
    padding: 0 12px;
  }
  .panda_nav_ul .divider{
    width: 1px;
    height: 14px;
    padding-left: 0;
    margin: 13px 0 0;
    background: #2CA182;
    /*清除*/
    clear: none;
    border: none;
  }
  .panda_nav_ul li.active{
    background: #2CA182;
  }
  .panda_nav_ul li.panda_nav_li:hover{
    background: #2CA182;
  }


  /*轮播图*/

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .panda_banner{
    width: 100%;
    height: 340px;
    overflow: hidden;
    margin-top: 42px;
  }
  .panda_banner img{
    width: 1920px;
    height: 340px;
  }


  /*热门景点*/
  /*主体内容样式*/
  .panda_content{
    overflow: hidden;
    width: 100%;
    height: auto;
    background: #f6f6f6;
    padding-top: 50px;
    padding-bottom: 40px;
  }
  /*热门景点头部样式*/
  .mod{
    width: 1180px;
    margin: 28px auto 0;
  }
  .mod_hd{
    height: 36px;
    border-bottom: 2px solid #35B795;
    text-align: left;
  }
  .mod_hd .title{
    width: 100%;
    height: 36px;
  }
  .mod_hd .title span{
    line-height: 30px;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    color: #35B795;
  }
  .mod_hd .title span img{
    position: absolute;
    bottom: -26px;
    left: 50%;
    margin-left: -16px;
  }

  /*热门景点内容样式*/
  .popular_destination_body{
    height: 395px;
    padding: 15px 19px 0px;
    border: 1px solid #ddd;
    border-top: 0px;
    background: #fff;
    overflow: hidden;
  }
  .product{
    overflow: hidden;
  }
  /*热门景点头部导航*/
  .inner-tabs-nav{
    height: 20px;
    margin-bottom: 10px;
  }
  .inner-tabs-nav li{
    display: inline-block;
    line-height: 20px;
    margin-right: 15px;
    padding: 0 8px;
  }
  .inner-tabs-nav li.active a{
    color: #fff;
    cursor: default;
  }
  .inner-tabs-nav li.active,.inner-tabs-nav li:hover,.inner-tabs-nav li:hover a{
    background: #35B795;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }

  /*热门景点主体内容布局*/
  .product_body{
    overflow: hidden;
  }
  .destination_list_left{
    margin-left: -10px;
    width: 920px;
    height: 330px;
    float: left;
  }
  .destination_list_right{
    float: right;
  }
  .destination_list_right a{
    display: inline-block;
  }

  .product .product_item{
    height: 160px;
    width: 220px;
    margin:0 0 10px 10px;
    position: relative;
    float: left;
  }
  .product .product_item .item{
    height: 160px;
    width: 220px;
    overflow: hidden;
    position: relative;
  }
  .product .product_item .item img{
    height: 160px;
    width: 220px;
  }
  .product .product_item .item span{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background: #ff6913;
    color: #fff;
    /*1：上边2：右边3：下边4：左边*/
    padding: 0 11px 0 6px;
    height: 20px;
    line-height: 20px;
    /*1:左上角 2：右上角3：右下角4：左下角*/
    border-radius:0 0 10px 0;
  }


  .product .product_item .item_msg{
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0,0,0,.5);
    width: 110px;
    height: 110px;
    margin: -55px 0 0 -55px;
    color: #fff;
    text-align: center;
    border-radius:50%;
  }
  p{
    margin: 0;
  }
  .item_msg .item_name{
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
  }
  .item_msg .item_info{
    border-top: 1px solid rgba(255,255,255,.5);
  }
  .item_msg .item_info .price i{
    color: #ff6600;
    font-size: 22px;
    /*取消字体默认样式 i标签有一个默认的斜体效果*/
    font-style: normal;
  }
  .product_head{
    overflow: hidden;
  }
  .hotel_list_middle{
    width: 700px;
    height: 330px;
    float: left;
    margin-left: -10px;
  }
  .hotel_list_right{
    float: right;
  }
  .hotel_list_right a{
    display: inline-block;
  }
  .hotel_list_right{
    float: right;
  }
  .hotel_list_right a{
    display: inline-block;
  }
  .hotel_msg_left{
    float: left;
    width: 187px;
    height: 360px;
    padding: 0 20px 15px;
    overflow: hidden;
  }
  .product_head{
    overflow: hidden;
  }
  .popular_destination_body{
    height: 395px;
    padding: 15px 19px 0px;
    background: #fff;
    border: 1px solid #dddddd;
    border-top: 0px;
    overflow: hidden;
  }


<!--这是一条华丽的分割线-->

    .hotel_body{
      height: 395px;
      padding: 15px 19px 0px;
      background: #fff;
      border: 1px solid #dddddd;
      border-top: 0px;
      overflow: hidden;
    }

  .hotel_msg_left{
    float: left;
    width: 187px;
    height: 360px;
    padding: 0 20px 15px;
    overflow: hidden;
  }
  .hotel_msg_left dl.keyword-long{
    margin: 0px 0 7px 0;
    overflow: hidden;
  }
  .hotel_msg_left dt{
    padding: 4px 0 0 0;
    font-size: 14px;
    font-weight: bold;
  }
  .hotel_msg_left dd {
    margin-left: -10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hotel_msg_left dd span{
    position: relative;
    float: left;
    display: block;
    border-left: 1px solid #ececec;
    padding: 0 10px;
    line-height: 18px;
    height: 18px;
    margin: 7px 0;
  }
  .hotel_msg_left dd span a{
    color: #666;
    text-decoration: none;
  }
  .hotel_msg_left dd span a:hover{
    color: #2ca182;
  }
  .hotel_list_middle .product_item .item_msg{
    padding: -2px 5px !important;
  }





  .airplane_list_left{
    float: left;
    width: 920px;
  }

  .airplane_body{
    height: 395px;
    padding: 15px 19px 0px;
    background: #fff;
    border: 1px solid #dddddd;
    border-top: 0px;
    overflow: hidden;
  }
  .airplane_list_left .product_item{
    margin: 0 10px 10px 0;
    width: 180px;
    height: 80px;
    padding: 15px 12px;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    cursor: pointer;
  }
  .airplane_list_left .product_item a{
    display: block;
    text-decoration: none;
  }
  .airplane_list_left .product_item:hover{
    box-shadow: 0 1px 4px rgba(0, 0, 0, .25);
  }
  .airplane_list_left .product_item .item-name {
    margin-bottom: 3px;
    color: #333;
    height: 20px;
    line-height: 20px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
    display: flex;
  }
  .airplane_list_left .product_item .item-name i.icon_round{
    background: url(../assets/icon_right.png) no-repeat;
    width: 16px;
    height: 16px;
    margin: 2px;
    display: inline-block;
  }
  .airplane_list_left .product_item .item-info {
    height: 27px;
    text-align: right;
    padding: 0 5px;
    color: #666;

  }
  .airplane_list_left .product_item .item-info span.date{
    padding: 0;
    color: #999;
    float: left;
  }
  .airplane_list_left .product_item .item-info span.price{
    float: left;
  }
  .airplane_list_left .product_item .item-info span.price i{
    font-size: 22px;
    color: #f60;
    font-style: normal;
  }
  span.button.gobuy{
    display: inline-block;
    width: auto;
    height: 27px;
    line-height: 27px;
    padding: 0 15px;
    font-size: 14px;
    margin: 3px 0 0 0;
    background-color: #ffb000;
    color: #fff;
    border: none;
    text-align: center;
    border-radius: 3px;
  }
  .panda_footer{
    padding: 28px 0 30px 0;
    color: #666;
    margin-top: 0;
    /* width: 1280px; */
    margin: 28px auto 0;
    text-align: center;
  }
</style>
