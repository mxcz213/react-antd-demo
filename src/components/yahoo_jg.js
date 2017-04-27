import React from 'react';
export default class YHJG extends React.Component {
	render(){
		return(
			<div className="yahu-jg">
				<h1>前端优化：雅虎军规35条（大家共勉）</h1>
				<p>[内容]尽量减少HTTP请求数</p>
				<p>[服务器]使用CDN（Content Delivery Network）</p>
				<p>[服务器]添上Expires或者Cache-Control HTTP头</p>
				<p>[服务器]Gzip组件</p>
				<p>[css]把样式表放在顶部</p>
				<p>[js]把脚本放在底部</p>
				<p>[css]避免使用CSS表达式</p>
				<p>[js, css]把JavaScript和CSS放到外面</p>
				<p>[内容]减少DNS查找</p>
				<p>[js, css]压缩JavaScript和CSS</p>
				<p>[内容]避免重定向</p>
				<p>[js]去除重复脚本</p>
				<p>[服务器]配置ETags</p>
				<p>[内容]让Ajax可缓存</p>
				<p>[服务器]尽早清空缓冲区</p>
				<p>[服务器]对Ajax用GET请求</p>
				<p>[内容]延迟加载组件</p>
				<p>[内容]预加载组件</p>
				<p>[内容]减少DOM元素的数量</p>
				<p>[内容]跨域分离组件</p>
				<p>[内容]尽量少用iframe</p>
				<p>[内容]杜绝404</p>
				<p>[cookie]给Cookie减肥</p>
				<p>[cookie]把组件放在不含cookie的域下</p>
				<p>[js]尽量减少DOM访问</p>
				<p>[js]用智能的事件处理器</p>
				<p>[css]选择 舍弃@import</p>
				<p>[css]避免使用滤镜</p>
				<p>[图片]优化图片</p>
				<p>[图片]优化CSS Sprite</p>
				<p>[图片]不要用HTML缩放图片</p>
				<p>[图片]用小的可缓存的favicon.ico（P.S. 收藏夹图标）</p>
				<p>[移动端]保证所有组件都小于25K</p>
				<p>[移动端]把组件打包到一个复合文档里</p>
				<p>[服务器]避免图片src属性为空</p>
			</div>
		);
	}
}