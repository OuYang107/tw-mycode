<template>
  <div>
    <div>
      <ul v-for="(item,index) in goods"
          :key="index">
        <li>此商品还有{{item.count_down}}秒结束抢购</li>
        <!-- <li></li>
        <li></li>
        <li></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // list: [300, 200, 100, 50, 25, 15],
      // array: [
      //   { time: 3000 },
      //   { time: 2000 },
      //   { time: 1000 },
      //   { time: 500 },
      //   { time: 250 },
      //   { time: 125 },
      // ],
      // type: '600',
      goods: [{
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '500'
      }, {
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '400'
      }, {
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '200'
      }, {
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '100'
      }, {
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '500'
      }, {
        name: '衣服',
        classify: '衣物',
        price: '200',
        count_down: '224'
      }]
    }
  },
  mounted () {
    // this.dome()
    // this.query()
    this.a()
  },
  methods: {
    // let a = count_d
    // dome () {
    a () {
      for (let i of this.goods) {
        let t = setInterval(() => {
          i.count_down--
          // let secondTime = parseInt(i.count_down); // 秒
          // let minuteTime = 0; // 分
          // let hourTime = 0; // 小时
          // if (secondTime > 60) { // 如果秒数大于60，将秒数转换成整数
          //   // 获取分钟，除以60取整数，得到整数分钟
          //   minuteTime = parseInt(secondTime / 60);
          //   // 获取秒数，秒数取佘，得到整数秒数
          //   secondTime = parseInt(secondTime % 60);
          //   // 如果分钟大于60，将分钟转换成小时
          //   if (minuteTime > 60) {
          //     // 获取小时，获取分钟除以60，得到整数小时
          //     hourTime = parseInt(minuteTime / 60);
          //     // 获取小时后取佘的分，获取分钟除以60取佘的分
          //     minuteTime = parseInt(minuteTime % 60);
          //   }
          // }
          if (i.count_down == 0) {
            clearInterval(t)
          }
        }, 10)
      }
    }
    //   // console.log(this.list[0])
    //   let i = 0 - 1
    //   let t = setInterval(() => {
    //     i++
    //     if (i >= 5) {
    //       clearInterval(t)
    //     }
    //     this.type = this.list[i]
    //     // console.log(this.type)
    //     // for (let i of arr) {
    //     // console.log(i)
    //     // obj.push(i)
    //   }, 1000)
    // },
    // query () {
    //   let obj = []
    //   let arr = this.array
    //   let j = 0
    //   let t = setInterval(() => {
    //     j++
    //     for (let i in arr) {
    //       // console.log(i)
    //       if (j == i)
    //         console.log(arr[i].time)
    //     }
    //     // setTimeout(() => {
    //     //   clearInterval(t)
    //     // }, 3000);
    //   }, 1000)

    // }




    // console.log(i.aa)
    // console.log(Object.keys(i))
    // obj.splice(0, 1, Object.values(i))
    // console.log(obj)

    // setInterval(() => {
    // for (let i of arr) {
    //   obj.push(i)
    // }

    // }, 1000);





    // let item = arr
    //       for (var _demo in item) {
    //         if (_demo.indexOf('exception') != -1)
    //           // console.log(item[_demo])
    //           obj.push(item[_demo])
    //       }
    // obj.push(res.data.data.msg)

    // let result = [];
    // let obj = {}
    // let a = [4, 4, 784, 8, 45, 4, 48, 56, 15, 485, 15, 45, 8]
    // a.forEach(item => {
    //   if (!obj[item]) {
    //     result.push(item)
    //     obj[item] = true
    //   }
    // })
    // console.log(result)
    // let arr = []
    // a.forEach(item => {
    //   arr += item
    // })
    // console.log(arr)
    // }
  },
}
</script>

<style>
</style>