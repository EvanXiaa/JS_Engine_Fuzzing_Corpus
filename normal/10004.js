function bt(id,after)
{
eval(id+'.filters.blendTrans.stop();');
eval(id+'.filters.blendTrans.Apply();');
eval(id+'.src="'+after+'";');
eval(id+'.filters.blendTrans.Play();');
}

function m_stop(n) {
	n.stop();
}

function m_start(n) {
	n.start();
}

function goSearch(formObj) {
	if (squeeze(formObj.keyword.value)<2) {
		alert("2臂磊 捞惑 涝仿秦 林绞矫坷.");
		formObj.keyword.focus();
		return false;
	}
    if (formObj.bbs.value=='memo') {
        formObj.act.value="MEMORECENT";
    } else if (formObj.bbs.value=='site') {
        formObj.act.value="SITESEARCH";
    } else {
        formObj.act.value="LIST";
    }
}

// 巩磊凯 郴狼 傍归 力芭 饶 辨捞 馆券
function squeeze(str) {
    str = str.replace(/ /g, "");
    return str.length;
}

/* @author kenu@okjsp.pe.kr
*  @date 2003-04-07 12:47坷傈
*  @contact http://okjsp.pe.kr
*/
/*
 辑宏皋春甫 焊看促 救 焊看促 配臂窍绰 窃荐
*/
function toggleMenu(currMenu) {
	if (document.all) {
        thisMenu = eval("document.all." + currMenu + ".style")
    } else {
		thisMenu = document.getElementById(currMenu).style
    }
	thisMenu.display = (thisMenu.display == "block")
						? "none"
						: "block";
    setCookie(currMenu, thisMenu.display, 30);
	return false
}

/*
 捻虐 蔼俊 蝶扼 辑宏皋春甫 焊捞绰 窃荐
*/
function setMenuDefault(currMenu) {
    if (document.all) {
        thisMenu = eval("document.all." + currMenu)
    } else {
        thisMenu = document.getElementById(currMenu)
    }
    var state = getCookie(currMenu);
    if (thisMenu && state != null) {
        thisMenu.style.display = state;
        setCookie(currMenu, thisMenu.style.display, 30);
    }
    return false
}

var oldMenu = null;
/*
 辑宏皋春甫 焊捞绰 窃荐
*/
function showMenu(currMenu) {
	if (document.all) {
        thisMenu = eval("document.all." + currMenu + ".style")
    } else {
		thisMenu = document.getElementById(currMenu).style
    }
    if (oldMenu != null) {
        oldMenu.display = "none";
    }
	thisMenu.display = "block"; // show
	oldMenu = thisMenu;
	return false;
}

// 俊矾捞固瘤 钎矫
function errImage(n) {
    n.src = "/images/bnr_okjsp.gif";
}

/* @author kenu@okjsp.pe.kr
*  @date 2003-01-07 4:58坷傈
*  @contact http://okjsp.pe.kr
*/
/*
 屈怕俊 蝶扼辑 硅呈甫 焊咯霖促.
 0: 老馆 捞固瘤, 1: 敲贰矫硅呈
 抗力
    <script>
    for(var i=0;i<banner.length;i++) {
        showBanner(banner[i]);
        if(i%2==1) document.write("<br/>");
    }
    </script>
 单捞磐绰 bannerData.js 俊 硅凯肺 历厘
*/
var item;
var bannerContent='';
function showBanner(n) {
    item = n.split(",,");
    switch (item[0]) {
        case "0":
            var altText = item[5];
            if(!altText)  altText = item[2];
            bannerContent+=("<a href='"+item[2]+"' target=_blank title='"+altText+"'>");
            bannerContent+=("<img src='"+item[1]+"' border=0 width="+item[3]+", height="+item[4] );
            bannerContent+=(" onerror='errImage(this)' style='margin:1'></a>");
        break;
        case "1":
            bannerContent+=('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+item[3]+'" height="'+item[4]+'">');
            bannerContent+=('<param name="movie" value="'+item[1]+'"><param name="quality" value="high">');
            bannerContent+=('<embed src="'+item[1]+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+item[3]+'" height="'+item[4]+'" style="margin:1"></embed></object>');
        break;
        default:
        break;
    }
}

// 咆胶飘 硅呈
function showTextBanner(n) {
    item = n.split(",,");
    bannerContent+=("<a href='"+item[2]+"' target=_blank class='banner'>");
    bannerContent+=(item[2].substring(7)+"</a><br>");
}

function makeBannerContent(n, col) {
    if ( n == banner2 ) {
        changeModeButton();
    }
    for(var i=0;i<n.length;i++) {
        if (col>0) {
            showBanner(n[i]);
            if(i%col==(col-1)) bannerContent+=("<br/>");
        } else {
            showTextBanner(n[i]);
        }
    }
}

// 硅呈 钎矫窍扁
function displayBanner(n, col) {
    this.col = col;
    box = n;
    makeBannerContent(n, col);
    document.write(bannerContent);
    bannerContent='';
}

// 硅呈 官操扁
function changeModeButton() {
    bannerContent+=("<div onClick='changeMode()' style='cursor:hand'><font color='white'>"+
        "<font color='red'>♂</font> <b>Click to Change</b></font></div>");
}
// 硅呈 官操扁
function changeMode() {
    col = 2-col;
    makeBannerContent(box, col);
    document.getElementById('banner2').innerHTML=bannerContent;
    bannerContent = '';
}

// 硅呈集扁 扁夯 1临
function bannerShuffle(n, count){
    bannerShuffle(n, count, 1);
}

// 硅呈集扁
var box;
var col;
function bannerShuffle(n, count, col){
    // 硅呈 第集绢辑, box 硅凯俊 持扁
    this.col = col;
    box = new Array();
    var idx = 0;
    var len = n.length;
    // 硅呈单捞磐焊促 钎矫肮荐啊 腹阑 版快 弥措蔼栏肺 茄沥
    if(count>len) count=len;
    // 硅呈 第集扁
    for(var i=0; i<count; i++) {
        idx = Math.floor(Math.random()*(len-i));
        box[i] = n[idx];
        for(var j=idx; j<len-1-i; j++){
            n[j] = n[j+1];
        }
    }
    displayBanner(box, col);
    document.write(bannerContent);
    bannerContent='';
}


// 捻虐 扁废
function setCookie( name, value, expiredays )
{
 var todayDate = new Date();
 todayDate.setDate( todayDate.getDate() + expiredays );
 document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

// 捻虐 汗盔
function getCookie(sName)
{
  var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++)
  {
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0])
      return unescape(aCrumb[1]);
  }
  return null;
}

/**
 * 胶挪 汲沥
 */
function setSkin(skinType) {
	setCookie('skin', skinType, 100);
	document.location.reload();
}
