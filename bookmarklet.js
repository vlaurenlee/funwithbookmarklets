//javascript:%28function%28%29%7Bvar%20jsdom%3Ddocument.createElement%28%27script%27%29%3Bjsdom.src%3D%27file%3A%2F%2F%2FUsers%2Fvanessalee%2FDesktop%2Fbookmarklet%2Fbookmarklet.js%27%3Bdocument.body.appendChild%28jsdom%29%3B%7D%29%28%29%3B


//crawl DOM
//var x=document.getElementById("main");
//var y=x.getElementsByTagName("h1");
//var z=x.getElementsByTagName("img");

//create pop up
//myWindow=window.open('','','width=400,height=400');
//myWindow.document.write("<h1>Hello There!</h1>");
//myWindow.document.write("<p>This is 'myWindow'</p>");
//myWindow.focus();

alert("HELLO THERE 1");

function prepareFrame() {
	ifrm = document.createElement("IFRAME");
	ifrm.setAttribute("src", "file:///Users/vanessalee/Documents/Canvas Beacon/bookmarklet/test.html");
	ifrm.style.width = 640+"px";
	ifrm.style.height = 480+"px";
	document.body.appendChild(ifrm);
}

prepareFrame();

//Trying iframe implementation 
/*var iframe  = {obj:null, id:prefix+'iframe', win: null, url:"https://s3.amazonaws.com/bookmarkletdocuments/test.html"},
	factory = document.createElement('div'),
	body    = document.body,
	latest = {img:null, images:[]};
	factory = document.createElement('div'),
	body    = document.body,
	latest  = {img:null, images:[]};

extend(iframe, {
	show: function(){
		var im = document.images, i, c, imgs=[], idx=-1, data;
		for(i=0, c=im.length; i<c; i++){
			if(im[i].src && im[i].offsetWidth > 150 && im[i].offsetHeight > 150) {
				if(latest.img && latest.img === im[i]) 
					idx = imgs.length;
				imgs[imgs.length] = im[i];
			}
		}
		latest.images = imgs;

		if(!latest.img || idx <0) 
			idx = 0;

		data = imageData(idx); 

		this.obj.style.display = 'block'
		send(data);
	},
	hide: function(){
		this.obj.style.display = 'none';
		this.obj.setAttribute('src', 'about:blank');
	}
}); 

extend(marker, {
	show : function(){
		if(this.obj) this.obj.style.display = 'block';
	},
	hide : function(){
		if(this.obj) this.obj.style.display = 'none';
	}
});


(function(){
	if(document.readyState !== 'complete') return setTimeout(arguments.callee, 100);

	iframe.obj = elem(iframe.id);
	if(!iframe.obj) {
		factory.innerHTML = '<iframe id="'+iframe.id+'" allowtransparency="true" style="display:none;position:fixed;top:10px;right:10px;border:1px solid #4c515c;z-index:100001;margin:0;background:#eff1f7;width:279px;height:372px"></iframe>';
		iframe.obj = factory.lastChild;
		body.insertBefore(iframe.obj, body.firstChild);
		iframe.win = iframe.obj.contentWindow || iframe.obj;
	}
	iframe.show();

	marker.obj = elem(marker.id);
	if(!marker.obj){
		factory.innerHTML = '<div id="'+marker.id+'" style="visibility:hidden;position:absolute;border:10px solid #8f0;z-index:100000;background:transparent;"></div>';
		marker.obj = factory.lastChild; 
		body.insertBefore(marker.obj, body.firstChild);
		css(marker.obj, {top:0, left:0});
		if(offset(marker.obj).top == 0) {
			css(marker.obj, {marginTop:'-10px',marginLeft:'-10px'});
		}
		css(marker.obj, {display:'none', visibility:'visible'});
	}
});

//myWindow.document.write('Heading of the page is:' + y[0].innerHTML);

//for (var i=0; i<z.length; i++)
//{
	//myWindow.document.write('Images on the screen have src of' + z[0].getAttribute("src"));
//}
*/
