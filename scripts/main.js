//Vue实例
var app=new Vue({
	el:'#app',
	data:{
		isCollapse: false,
		dialogs:[
			{header:'images/b_header.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
			{header:'images/b_header1.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
			{header:'images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
			{header:'images/b_header.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
			{header:'images/b_header.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'},
		],
		//defaultTab:'product-cate'   //默认tab(测试)
	},
	mounted () {

    },
	methods:{
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		toggleCallapse(){  //左侧菜单的展开和折叠
			this.isCollapse=!this.isCollapse;
		},
	},
	computed: {
		
	},
	watch: {
		
    }
});