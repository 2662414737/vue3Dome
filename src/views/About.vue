<template>
    <el-container style="height:100%">
        <el-header style="height:72px;padding:0;background:#333333;color:#fff" class="display space-between aligncenter">
			<div class=" display aligncenter">
				<div class="img-dx">图标</div>
				<div>{{xtName}}</div>
			</div>
			<div class="display">
				<div>{{time}}</div>
				<div class="userInfo">{{userInfo}}</div>
			</div>
		</el-header>
        <el-container>
            <el-aside :width="asidewidth" style="height:100%;position: relative;padding-right:10px;">
                <div style="height:100%;background:#f0f">
                    <el-scrollbar>
                        <router-link class="aside-item" v-for="(item,index) in bbb" :key="index" :to="item.path">{{item.name}}</router-link>
                    </el-scrollbar>
                </div>
				<div :class="asideBqName" @click="asideClikc"></div>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import { onMounted, ref, onUnmounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      timeFunction()
    })
    onUnmounted(() => {
      clearInterval(timeId)
    })
    const aaa = ref([1, 2, 3, 4])
    const xtName = ref('系统名字')
    const time = ref('')
    let timeId = ref('')
    const asidewidth = ref('200px')
    const userInfo = ref('用户名')
    const asideBqName = ref('aside-bq')
    const add0 = (val) => {
      return val > 10 ? val : '0' + val
    }
    const timeFunction = () => {
      timeId = setInterval(() => {
        const date = new Date()
        time.value = `${date.getFullYear()}-${add0(date.getMonth() + 1)}-${add0(date.getDate())} ${add0(date.getHours())}:${add0(date.getMinutes())}:${add0(date.getSeconds())}`
      }, 1000)
    }
    const asideClikc = () => {
      asidewidth.value = asidewidth.value === '200px' ? '0' : '200px'
      asideBqName.value = asideBqName.value === 'aside-bq' ? 'aside-bqfz' : 'aside-bq'
    }
    const bbb = ref([
      { name: 'a', path: '/a' },
      { name: 'b', path: '/b' },
      { name: 'c', path: '/c' }
    ])
    const obj = {}
    const a = new Proxy(obj, {
      get: function (target, propKey, receiver) { return 10 }
    })
    console.log(obj.a, a.a)
    return { aaa, bbb, xtName, time, userInfo, asidewidth, asideClikc, asideBqName }
  }
}
</script>
<style lang="scss" scoped>
.aside-item {
    // border: 1px solid #e8e8e8;
    display: block;
    line-height: 40px;
    text-decoration: none;
    color: #000;
}

.aside-item:hover {
	color: aqua;
}

.aside-item:focus{
	color: aquamarine;
}

.img-dx{
	width: 40px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #e8e8e8;
	margin: 16px ;
	font-size: 12px;
	border-radius: 100%;
}

.display{
	display: flex;
}

.flexcenter{
	align-items: center;
	justify-content: center;
}

.space-between{
	justify-content: space-between;
}

.aligncenter{
	align-items: center;
}

.userInfo{
	font-size: 14px;
	padding: 0 16px;
}

.aside-bq{
	width: 0;
	height: 10px;
	// background: #000;
	position: absolute;
	top: 50%;
	right:10px;
	border: 10px solid;
	border-left-color: transparent;
	border-top-color: transparent;
	border-bottom-color: transparent;
	border-right-color: #000;
}

.aside-bqfz{
	width: 0;
	height: 10px;
	position: absolute;
	top: 50%;
	right:-10px;
	border: 10px solid;
	border-left-color: #000;
	border-top-color: transparent;
	border-bottom-color: transparent;
	border-right-color: transparent;
}

</style>
