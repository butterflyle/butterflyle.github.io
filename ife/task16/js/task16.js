/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var myHtml='';
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var aqiCity=document.getElementById("aqi-city-input").value;
	aqiCity=aqiCity.trim();
	var aqiValue=document.getElementById("aqi-value-input").value;
	aqiValue=aqiValue.trim();
	var str="";
	var strr="";
	if(checkCity(aqiCity)){
		strr="ok";
	}else{
		alert("城市名称必须为中英文字符！");
	}
	if(checkValue(aqiValue)){
		str="ok";
	}else{
		alert("空气指数必须为整数！")
	}
	aqiData.aqiCity=aqiValue;
	if(str=="ok"&&strr=="ok"){
		renderAqiList(aqiCity,aqiValue);
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList(aqiCity,aqiValue) {
	myHtml+='<tr><td>'+aqiCity+'</td><td>'+aqiValue+'</td><td><button onclick="delBtnHandle(this)">删除</button></td></tr>';
	document.getElementById("aqi-tbody").innerHTML=myHtml;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(r) {
  // do sth.
    /*var tr1 = node.parentNode.parentNode;  
    alert(tr1.rowIndex);  
    alert(tr1.cells[0].childNodes[0].value); //获取的方法一*/
    if(window.confirm('你确定要删除这条信息？')){
        var i=r.parentNode.parentNode.rowIndex;
		document.getElementById('aqi-table').deleteRow(i);
    }
//renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").onclick=function(){
		addBtnHandle();
	}
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}
/*判断输入的城市名必须是中英文字符*/
function checkCity(aqiCity){
	var CheckTestName=/((^[\u4E00-\u9FA5]{0,5}$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/
	 //var CheckTestName=/((^[\u4E00-\u9FA5]$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/
    aqiCity=aqiCity.replace(/^\s+/g,"");
    aqiCity=aqiCity.replace(/\s+$/g,"");
    if(aqiCity.length!=0)
    {
        if(CheckTestName.test(aqiCity))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
	
}
/*判断输入空气指数必须为整数*/
function checkValue(aqiValue){
	var r = /^[-+]?\d*$/;
	if(r.test(aqiValue)){
		return true;
	}else{
		return false;
	}
}
