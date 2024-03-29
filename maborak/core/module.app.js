leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.app.js",
		Name	:"app",
		Type	:"module",
		Version	:"0.1"
	},
	content	:{
		line:function(options)
		{
			this.options = options || {};
			this.make=function()
			{
				this.options.concat(this.coords());
				this.direction  = this.getDirection();
				this.lines	= this.createLines();
				this.elements	= [];
				for(var i=0;i<5;i++)
				{
					var a = document.createElement("div");
					this.parent.dom.setStyle(a,{
						position	:"absolute",
						width		:this.options.size || 1,
						height		:this.options.size || 1,
						border		:"0px solid red",
						overflow	:"hidden",
						backgroundColor	:this.options.color || "black",
						zIndex		:this.options.zIndex || 4
					});
					this.options.target.appendChild(a);
					this.elements.push(a);
				}
				var b= document.createElement("img");
				b.src=this.options.arrow || this.parent.info.base+"/images/arrowB.gif";
				this.parent.dom.setStyle(b,{
					position:"absolute",
					width:9,
					height:9,
					zIndex:this.options.zIndex || 4
				});
				if(this.options.arrow!==false)
				{
					this.options.target.appendChild(b);
				}
				this.elements.push(b);
				this.paint();
			};
			this.changed=function()
			{
				var probe = this.coords();
				return (this.options.x1!==probe.x1 || this.options.y1!==probe.y1 || this.options.x2!==probe.x2 || this.options.y2!==probe.y2)?true:false;
			};
			this.remove=function()
			{
				this.parent.dom.remove(this.elements);
			};
			this.coords=function()
			{
				var el0 = this.options.elements[0];
				var el1 = this.options.elements[1];
				var fBug = (this.parent.browser.isGK)?1:0;
				var co={
					x1 : ((parseInt(el0.style.left,10)+(el0.offsetWidth/2))-fBug),
					y1 : (parseInt(el0.style.top,10)+(el0.offsetHeight)),
					x2 : ((parseInt(el1.style.left || 0,10)+(el1.offsetWidth/2))-fBug),
					y2 : (parseInt(el1.style.top || 0,10))
				};
				return co;
			};
			this.getDirection=function()
			{
				var d ={
					l:((this.options.x2<this.options.x1)?true:false),
					r:((this.options.x2>this.options.x1)?true:false),
					t:((this.options.y2<this.options.y1)?true:false),
					b:((this.options.y2>this.options.y1)?true:false)
				};
				return d;
			};
			this.createLines=function()
			{
				return (this.direction.t)?5:3;
			};
			this.kase=function()
			{
				var kase;
				if(this.options.y2>this.options.y1 && this.options.x2<this.options.x1)
				{
					kase=1;
				}
				else if(this.options.y1>this.options.y2 && this.options.x2<=this.options.x1)
				{
					kase=2;
				}
				else if(this.options.y2>this.options.y1 && this.options.x2>this.options.x1)
				{
					kase=3;
				}
				else if(this.options.y1>this.options.y2 && this.options.x2>this.options.x1)
				{
					kase=4;
				}
				else if(this.options.y2>this.options.y1 && this.options.x1 === this.options.x2)
				{
					kase=1;
				}
				//alert(kase)
				//window.status=kase;
				return kase;
			};
			this.paint=function()
			{
				this.rootSize=this.options.indexRootSize || 15;
				this.rootLastSize=this.options.indexRootLastSize || 15;
				this.codo=[];
				var height0=((this.options.y2-this.options.y1)/2);
				this.codo[0]={x:this.options.x1,y:(this.options.y1+height0)};
				this.codo[1]={x:this.options.x2,y:this.codo[0].y};
				if(this.kase()==1)
				{
					this.parent.dom.setStyle(this.elements[0],{
						height:height0,
						top:this.options.y1,
						left:this.codo[0].x
					});
					this.parent.dom.setStyle(this.elements[1],{
						width:this.codo[0].x-this.codo[1].x,
						top:this.codo[1].y,
						left:this.codo[1].x
					});
					this.parent.dom.setStyle(this.elements[2],{
						top:this.codo[1].y,
						left:this.codo[1].x,
						height:height0
					});

				}
				else if(this.kase()==3)
				{
					this.parent.dom.setStyle(this.elements[0],{
						height:height0,
						top:this.options.y1,
						left:this.codo[0].x
					});
					this.parent.dom.setStyle(this.elements[1],{
						width:this.codo[1].x-this.codo[0].x,
						top:this.codo[0].y,
						left:this.codo[0].x
					});
					this.parent.dom.setStyle(this.elements[2],{
						top:this.codo[1].y,
						left:this.codo[1].x,
						height:height0
					});
				}
				else if (this.kase()==2)
				{
					this.codo[0]={x:this.options.x1,y:(this.options.y1+this.rootSize+1)};
					this.codo[3]={x:this.options.x2,y:(this.options.y2-this.rootLastSize)};
					//this.codo[2]={x:this.codo[3].x-((this.options.elements[1].offsetWidth/2)+this.rootSize),y:this.codo[3].y};
					//this.codo[1]={x:this.codo[2].x,y:this.codo[0].y};
					this.codo[2]={x:this.codo[0].x+((this.options.elements[0].offsetWidth/2)+this.rootSize),y:this.codo[3].y};
					this.codo[1]={x:this.codo[2].x,y:this.codo[0].y};
					this.parent.dom.setStyle(this.elements[0],{
						height:(this.codo[0].y-this.options.y1)+1,
						top:this.options.y1,
						left:this.options.x1
					});
					this.parent.dom.setStyle(this.elements[1],{
						width:this.codo[1].x-this.codo[0].x,
						top:this.codo[0].y,
						left:this.codo[0].x
					});
					/*this.parent.dom.setStyle(this.elements[1],{
					width:this.codo[0].x-this.codo[1].x,
					top:this.codo[1].y,
					left:this.codo[1].x
					});*/
					this.parent.dom.setStyle(this.elements[2],{
						top:this.codo[2].y,
						left:this.codo[2].x,
						height:this.codo[1].y-this.codo[2].y
					});
					this.parent.dom.setStyle(this.elements[3],{
						top:this.codo[3].y,
						left:this.codo[3].x,
						width:this.codo[2].x-this.codo[3].x
					});
					/*this.parent.dom.setStyle(this.elements[3],{
					top:this.codo[2].y,
					left:this.codo[2].x,
					width:this.codo[3].x-this.codo[2].x
					});*/
					this.parent.dom.setStyle(this.elements[4],{
						top:this.codo[3].y,
						left:this.codo[3].x,
						height:this.options.y2-this.codo[3].y
					});
				}
				else if (this.kase()==4)
				{
					this.codo[0]={x:this.options.x1,y:(this.options.y1+this.rootSize)};
					this.codo[3]={x:this.options.x2,y:(this.options.y2-this.rootLastSize)};
					//this.codo[2]={x:this.codo[3].x+((this.options.elements[1].offsetWidth/2)+this.rootSize),y:this.codo[3].y};
					//this.codo[1]={x:this.codo[2].x,y:this.codo[0].y};
					this.codo[2]={x:this.codo[0].x-((this.options.elements[0].offsetWidth/2)+this.rootSize),y:this.codo[3].y};
					this.codo[1]={x:this.codo[2].x,y:this.codo[0].y};
					this.parent.dom.setStyle(this.elements[0],{
						height:this.codo[0].y-this.options.y1,
						top:this.options.y1,
						left:this.options.x1
					});
					this.parent.dom.setStyle(this.elements[1],{
						width:this.codo[0].x-this.codo[1].x,
						top:this.codo[1].y,
						left:this.codo[1].x
					});
					/*this.parent.dom.setStyle(this.elements[1],{
					width:this.codo[1].x-this.codo[0].x,
					top:this.codo[0].y,
					left:this.codo[0].x
					});*/
					this.parent.dom.setStyle(this.elements[2],{
						top:this.codo[2].y,
						left:this.codo[2].x,
						height:this.codo[1].y-this.codo[2].y
					});
					this.parent.dom.setStyle(this.elements[3],{
						top:this.codo[2].y,
						left:this.codo[2].x,
						width:this.codo[3].x-this.codo[2].x
					});
					/*this.parent.dom.setStyle(this.elements[3],{
					top:this.codo[3].y,
					left:this.codo[3].x,
					width:this.codo[2].x-this.codo[3].x
					});*/
					this.parent.dom.setStyle(this.elements[4],{
						top:this.codo[3].y,
						left:this.codo[3].x,
						height:this.options.y2-this.codo[3].y
					});
				}
				var im = this.elements[5];
				//alert(this.elements[5])
				this.parent.dom.setStyle(im,{
					top:this.options.y2-7,
					left:this.options.x2-4
				});
			};
			this.update=function()
			{
				if(this.changed())
				{
					//alert(9)
					this.options.concat(this.coords());
					if(this.kase()%2===0)
					{
						this.elements[3].style.visibility="visible";
						this.elements[4].style.visibility="visible";
					}
					else
					{
						this.elements[3].style.visibility="hidden";
						this.elements[4].style.visibility="hidden";
					}
					this.paint();
				}
			};
			this.expand(this);
		},
		menuRight:function(options){
			this.elements = {};
			this.yy=33;
			this.make=function(options)
			{
				this.options = {bubble:true,theme:"firefox"}.concat(options) || {};
				if(!this.validate()){alert(6);return false;}
				this.parent.event.add(this.options.target,"click",this.parent.closure({instance:this,method:this.updateObservers,event:true}));
				//this.parent.event.add(document.body,"click",this.parent.closure({instance:this,method:this.remove}));
				//this.parent.event.add(this.options.target,"contextmenu",function(){return false;});
				//this.options.target.oncontextmenu=this.parent.closure({instance:this,method:this.menu,event:true});
				this.options.target.oncontextmenu=this.menu;
			};
			this.menu=function(evt)
			{
				this.updateObservers();
				this.parent.dom.bubble(false,evt);
				//this.remove();
				this.maked=true;
				this.cursor	= this.parent.dom.mouse(evt);
				this.positionTarget =	this.parent.dom.position(this.options.target);
				this.elements.shadow = document.createElement("div");
				this.elements.shadow.className = "app_menuRight_shadow___"+this.options.theme;
				this.elements.container = document.createElement("div");
				this.elements.container.className = "app_menuRight_container___"+this.options.theme;
				this.parent.dom.setStyle(this.elements.container,{
					width:this.options.width || 150,
					left:this.cursor.x-5,
					top:this.cursor.y-5
				});
				this.parent.dom.capture("tag.body 0").appendChild(this.elements.shadow);
				this.parseOptionsMenu();
				this.parent.dom.capture("tag.body 0").appendChild(this.elements.container);
				this.parent.dom.setStyle(this.elements.shadow,{
					width		: this.elements.container.clientWidth,
					height		: this.elements.container.clientHeight,
					left		: this.cursor.x-((this.parent.browser.isIE)?1:3),
					top			: this.cursor.y-((this.parent.browser.isIE)?1:3)
				});
				this.parent.dom.nullContextMenu([this.elements.container]);
				return false;
			};
			this.parseOptionsMenu=function()
			{
				var ii=0;
				for(var i=0;i<this.options.menu.length;i++)
				{
					if(this.options.menu[i].separator!==true)
					{
						var dv=document.createElement("div");
						dv.className = "app_menuRight_option___"+this.options.theme;
						this.elements.container.appendChild(dv);
						var spI=document.createElement("div");
						spI.innerHTML="";
						spI.className = "app_menuRight_option_image___"+this.options.theme;
						this.parent.dom.setStyle(spI,{
							//background:((this.options.menu[i].image)?"url("+this.options.menu[i].image+")":"")
						});

						dv.appendChild(spI);
						var im;
						if(this.options.menu[i].image)
						{
							im = document.createElement("img");
							im.className="app_menuRight_option_image_element___"+this.options.theme;
							im.src=this.options.menu[i].image;
							spI.appendChild(im);
						}

						var spT=document.createElement("div");
						spT.className = "app_menuRight_option_text___"+this.options.theme;
						spT.innerHTML=this.options.menu[i].text || "";
						dv.appendChild(spT);
						this.parent.dom.setStyle(dv,{
							//height:(this.parent.browser.isIE?20:18)
						});
						dv.onmouseover=function(evt,el){
							var dv=(this.parent.browser.isIE?evt:el);
							dv.a.className="app_menuRight_option_over___"+this.options.theme;
							dv.b.className="app_menuRight_option_image_over___"+this.options.theme;
						}.extend(this,{a:dv,b:spI});
						dv.onmouseout=function(evt,el){
							var dv=(this.parent.browser.isIE?evt:el);
							dv.a.className="app_menuRight_option___"+this.options.theme;
							dv.b.className="app_menuRight_option_image___"+this.options.theme;
						}.extend(this,{a:dv,b:spI});
						dv.onclick=this.launch.args(i);
						this.parent.dom.nullContextMenu([spI,spT,dv]);
					}
					else
					{
						var dv=document.createElement("div");
						dv.className = "app_menuRight_optionNull___"+this.options.theme;
						this.elements.container.appendChild(dv);

						var spI=document.createElement("div");
						spI.innerHTML="";
						spI.className = "app_menuRight_option_imageNull___"+this.options.theme;
						dv.appendChild(spI);

						var sep=document.createElement("div");
						sep.className = "app_menuRight_separator___"+this.options.theme;
						dv.appendChild(sep);
						this.parent.dom.setStyle([dv,sep],{
							height:(this.parent.browser.isIE?2:1)
						});
					}
					ii++;
				}
			};
			this.launch=function(evt,opt)
			{
				this.remove();
				opt=this.parent.browser.isIE?evt:opt;
				var lch = this.options.menu[opt];
				if(lch && typeof lch.launch=="function")
				{
					lch.launch(evt);
				}
			};
			this.validate=function()
			{
				this.options.target = this.parent.dom.element(this.options.target);
				return (!this.options.target || !this.options.menu)?false:true;
			};
			this.updateObservers=function()
			{
				try{this.observer.update();}catch(e){this.remove();}
			};
			this.remove=function()
			{
				if(this.maked===true)
				{
					this.parent.dom.remove(this.elements.container);
					this.parent.dom.remove(this.elements.shadow);
					this.maked=false;
				}
			};
			this.expand(this);
		},
		submit:function(options)
		{
			this.options = options || {};
			if(!this.parent.dom.element(this.options.form)){return false;}
			this.make = function(onSub)
			{
				var Rt = true;
				onSub = arguments[1] || arguments[0];
				if(onSub && typeof onSub==="function"){
					Rt=onSub();
					if(Rt===false){return false;}
				}
				var arg = new this.parent.dom.serializer(this.options.form,false);
				//alert(arg.parent)
				//return false;
				this.rpc = new this.parent.module.rpc.xmlhttp({
					url	: this.options.form.action,
					method	: this.options.form.method,
					args	: arg.form()
				});
				this.rpc.callback=this.callback || false;
				this.rpc.make();
				return false;
			};
			this.expand(this);
			this.options.form.onsubmit = this.make.args(this.options.form.onsubmit);
			/*this.options.form.onsubmit = function(){
			alert(3)
			return false;
			};*/
		},
		iframe:function(element,post)
		{
			//alert(this.parent)
			this.element 	= this.parent.dom.element(element);
			this.post	= (post===true)?true:false;
			if(!this.element){return false;}
			var links = this.element.getElementsByTagName("a");
			this.href = function(event,opt)
			{
				//alert(event);
				opt = arguments[1] || arguments[0];
				link = opt.l;
				onCl = opt.c;
				var loadIn=(link.target && this.parent.dom.element(link.target))?this.parent.dom.element(link.target):this.element;
				var Rt = true;
				if(onCl && typeof onCl==="function"){Rt=onCl();
				if(Rt===false){return false;}
				}
				if(this.post)
				{
					var a = link.href.split("?");
					this.url = a[0];
				}
				else
				{
					this.url = link.href;
				}
				var rpc = new this.parent.module.rpc.xmlhttp({
					url	: this.url,
					nocache	: true,
					method	: (this.post===true)?"POST":"GET",
					args	: ((this.post===true && a[1])?a[1]:"")
				});
				rpc.callback=function(rpc,inn){
					inn.innerHTML=rpc.xmlhttp.responseText;
					new this.parent.module.app.iframe(inn,this.post)
				}.extend(this,loadIn);
				rpc.make();
				return false;
			};
			this.expand(this);
			for(var i=0;i<links.length;i++)
			{
				var onC=links[i].onclick;
				links[i].onclick=this.href.args({l:links[i],c:onC});
				//links[i].onclick=this.href.args(456);
			}
		},
		lightbox:function()
		{
			this.inPlay=false;
			this.make=function(options)
			{
				this.options = {
					initIn	: 0,
					counter	: true,
					target	: document.body,
					resize	: true,
					size	: {w:400,h:310},
					position: {x:0,y:0,center:true},
					images:[]
				}.concat(options || {});
				this.windowImage();
				this.image=document.createElement("img");
				this.image.id=this.id;
				this.panel.elements.content.appendChild(this.image);
				this.load(this.options.initIn);
			};
			this.windowImage=function()
			{
				this.panel = new this.parent.module.panel();
				this.panel.options={
					size	:this.options.size,
					position:this.options.position,
					title	:"",
					theme	:"firefox",
					target	:this.options.target,
					statusBar:true,
					limit	:true,
					control	:{close:true},
					fx	:{shadow:false,modal:true,opacity:true,rolled:false,rollWidth:150}
				};
				this.panel.setStyle={
					content:{
						overflow	: "hidden",
						textAlign	: "center",
						verticalAlign	: "center"
					},
					containerWindow:{
						border:"1px solid black"
					},
					modal:{
						backgroundColor:"black"
					},
					shadow:{
						backgroundColor:"black"
					},
					frontend:{
						backgroundColor:"white"
					}
				};
				this.panel.styles.fx.opacityShadow.Static=90;
				this.panel.make();
				this.panel.elements.modal.onmouseup=this.panel.remove;
				this.buttons();
			};
			this.load=function(evt,index)
			{
				index = (typeof evt ==="number")?evt:index;
				index = (index>this.options.images.length-1)?0:index;
				index = (index<0)?this.options.images.length-1:index;
				this.current = index;
				this.setLoad();
				var image = new Image();
				image.onload=this.show.args(image);
				image.src=this.options.images[index];
				if(this.options.counter)
				{
					this.domCounter.innerHTML="<b>"+(index+1)+"</b> de <b>"+(this.options.images.length-1)+"</b>";
				}
			};
			this.show=function(evt,image)
			{
				image = arguments[1] || arguments[0];
				if(this.options.resize)
				{
					this.panel.resize({w:image.width+10,h:image.height+50});
					this.panel.center();
				}
				this.image.src=image.src;
				this.unsetLoad();
				if(this.inPlay)
				{
					setTimeout(this.control.next,5000);
				}
			};
			this.setLoad=function()
			{
				this.image.style.display="none";
				this.panel.elements.content.style.borderWidth=1;
				this.panel.loader.show();
			};
			this.unsetLoad=function()
			{
				this.panel.elements.content.style.borderWidth=0;
				this.panel.loader.hide();
				this.image.style.display="";
			};
			this.buttons=function()
			{
				var target	 = this.panel.elements.statusBar;
				var end		 = document.createElement("div");
				this.parent.dom.setStyle(end,{
					right	:5
				});
				var next	 = document.createElement("div");
				this.parent.dom.setStyle(next,{
					right	:parseInt(end.style.right,10)+20
				});
				var play	 = document.createElement("div");
				this.parent.dom.setStyle(play,{
					right	:parseInt(next.style.right,10)+20
				});
				var prev	 = document.createElement("div");
				this.parent.dom.setStyle(prev,{
					right	:parseInt(play.style.right,10)+20
				});
				var begin	 = document.createElement("div");
				this.parent.dom.setStyle(begin,{
					right	:parseInt(prev.style.right,10)+20
				});
				var title;
				this.domTitle = title = document.createElement("div");
				var counter;
				this.domCounter = counter= document.createElement("div");
				target.appendChild(end);
				target.appendChild(next);
				target.appendChild(play);
				target.appendChild(prev);
				target.appendChild(begin);
				target.appendChild(title);
				target.appendChild(counter);
				this.parent.dom.setStyle([end,next,play,prev,begin,title,counter],{
					position:"absolute",
					backgroundColor:"#006699",
					top		:3,
					width	:15,
					height	:15,
					overflow:"hidden"
				});
				this.parent.dom.setStyle([title,counter],{
					left	:5,
					backgroundColor:"white",
					color	:"black",
					font	:"normal 8pt Tahoma,MiscFixed"
				});
				this.parent.dom.setStyle(counter,{
					left	:"auto",
					right	:parseInt(begin.style.right,10)+30,
					width	:60
				});
				begin.onmouseup	= this.control.first;
				play.onmouseup	= this.control.play;
				prev.onmouseup	= this.control.previous;
				next.onmouseup	= this.control.next;
				end.onmouseup	= this.control.last;
			};
			this.control={
				play:function()
				{
					if(!this.inPlay)
					{
						this.control.next();
					}
					this.inPlay=!this.inPlay;
				},
				next:function(){
					this.load(this.current+1);
				},
				previous:function(){
					this.load(this.current-1);
				},
				first:function()
				{
					this.load(0);
				},
				last:function()
				{
					this.load(this.options.images.length-1);
				}
			}.expand(this);
			this.expand(this);
		},
		slide:function()
		{


			this.inPlay		= false;
			this.last		= false;
			this.elements	= {};
			this.stopped	= false;
			this.inM		= 0;
			this.make=function(options)
			{
				this.options = {
					initIn	: 0,
					counter	: true,
					playTimeOut:3,
					tactil	: false,
					target	: document.body,
					resize	: true,
					size	: {w:522,h:363},
					position: {x:0,y:30,centerX:true},
					skin_images:this.parent.info.base+"images/app.slide/",
					images:[]
				}.concat(options || {});
				//510 - 310
				//90 - 65
				//alert(this.parent.info.base)
				this.options.thumbnail = {
					show:4,
					size:{w:90,h:55},
					images:[]
				}.concat(options.thumbnail || {});
				//alert(this.options.target)
				this.windowImage();
				this.toolbarImage();
				this.image=document.createElement("img");
				this.panel.elements.content.appendChild(this.image);
				this.load(this.options.initIn);
				this.current=this.options.initIn;
				//this.control.play();
			};
			this.windowImage=function()
			{
				this.panel = new this.parent.module.panel();
				//alert(this.options.target)
				this.panel.options={
					size		:this.options.size,
					position	:this.options.position,
					target		:this.options.target,
					statusBar	:false,
					titleBar	:false,
					limit		:true,
					control	:{drag:false,close:false},
					fx		:{shadow:false,modal:true,opacity:true,rolled:false,rollWidth:150}
				};
				this.panel.events={
					remove:function(){
						var el=[

						this.domNext,
						this.domPlay,
						this.domPrev,
						this.buttonNext,
						this.domCounter,
						this.domTitle,
						this.domClose,
						this.toolbar,
						this.footer
						];
						if(this.options.banner)
						{
							el.push(this.banner);
						}
						new this.parent.module.fx.fade().make({
							duration:200,
							end		:0,
							dom		:el,
							onFinish	:function(el){
								this.parent.dom.remove(el);
							}.extend(this,el)
						});
					}.extend(this)
				};
				this.panel.setStyle={
					content:{
						overflow	: "hidden",
						textAlign	: "center",
						verticalAlign: "center",
						margin:10,
						marginBottom:40,
						border:"1px solid #fff"
					},
					containerWindow:{
						border:"0px solid black",
						backgroundColor:"transparent"
					},
					modal:{
						backgroundColor:"black"
					},
					shadow:{
						backgroundColor:"black"
					},
					frontend:{
						background:"",
						backgroundColor:"#DFF2FD"
					},
					backend:{
						backgroundColor:"transparent"
					},
					titleBar:{
						background:"transparent"
					},
					title:{
						textAlign	: "left",
						color		: "white"
					}
				};
				this.panel.styles.fx.opacityModal.Static=90;
				this.panel.make();
				if(this.options.tactil)
				{
					this.panel.elements.modal.onmouseup=this.panel.remove;
				}
			};
			this.toolbarImage=function()
			{
				this.toolbar = document.createElement("div");
				var div = document.createElement("div");
				var thu = this.options.thumbnail;
				var g = this.options.thumbnail.images.length;
				var h = 4-(g % 4);
				var j = (h===4)?0:h;
				var tw = ((thu.show*thu.size.w)+(thu.show*(4)));
				//alert(tw)
				this.toolbar.appendChild(div);
				this.toolbar.scrollLeft=0;
				this.options.target.appendChild(this.toolbar);
				this.parent.dom.setStyle(this.toolbar,{
					position	:"absolute",
					border		:"1px solid #666",
					width		:tw+((this.parent.browser.isIE)?4:0),
					height		:thu.size.h+((this.parent.browser.isIE)?8:4),
					padding		:1,
					//backgroundColor:"#DFF2FD",
					backgroundColor:"#000",
					overflow	:"hidden",
					zIndex		:this.panel.elements.containerWindow.style.zIndex+1
				});
				this.parent.dom.opacity(this.toolbar,80);
				var w = (thu.size.w*(thu.images.length+j))+(4*(thu.images.length+j));
				//alert(w)
				this.parent.dom.setStyle(div,{
					border		:"0px solid blue",
					overflow	:"hidden",
					width		:w
				});
				this.elements.thumbs=[];
				for(var i=0;i<this.options.thumbnail.images.length;i++)
				{
					var image = document.createElement("img");
					image.src=this.options.thumbnail.images[i].src;
					div.appendChild(image);
					this.parent.dom.setStyle(image,{
						margin	:2,
						overflow:"hidden",
						width	:thu.size.w,
						cursor	:"pointer",
						height	:thu.size.h
					});
					this.parent.dom.opacity(image,50)
					image.onmouseup=this.load.args(i);
					this.elements.thumbs.push(image);
				}
				this.buttons();
				this.posComponents();
			};
			this.posComponents=function()
			{
				var cn = this.panel.elements.containerWindow;
				var l =((parseInt(cn.style.left,10)+(cn.clientWidth/2))-(this.toolbar.clientWidth/2));
				this.parent.dom.setStyle(this.toolbar,{
					top:parseInt(cn.style.top,10)+290,
					left:l
				});
				this.parent.dom.setStyle(this.buttonPrevious,{
					top:parseInt(this.toolbar.style.top,10),
					left:parseInt(this.toolbar.style.left,10)-(this.buttonPrevious.clientWidth+5)
				});
				this.parent.dom.setStyle(this.buttonNext,{
					top:parseInt(this.toolbar.style.top,10),
					left:parseInt(this.toolbar.style.left,10)+this.toolbar.clientWidth+5
				});
				this.parent.dom.setStyle(this.domCounter,{
					top:parseInt(parseInt(this.toolbar.style.top,10)+65,10),
					left:parseInt(this.toolbar.style.left,10)+310
				});
				this.parent.dom.setStyle(this.domTitle,{
					top:parseInt(this.panel.options.position.y,10)-20,
					color:"#666",
					left:parseInt(this.panel.options.position.x,10)+5
				});
				this.parent.dom.setStyle(this.domClose,{
					top:parseInt(this.panel.options.position.y,10)+3,
					color:"#666",
					left:parseInt(this.panel.options.position.x+this.panel.options.size.w,10)-20
				});
				if(this.options.banner)
				{
					this.parent.dom.setStyle(this.banner,{
						width:777,
						height:105,
						top:parseInt(this.domTitle.style.top)-110,
						left:(((this.options.target.clientWidth/2)+this.options.target.scrollLeft)-(777/2)),
						position:"absolute",
						zIndex: this.panel.elements.containerWindow.style.zIndex+1
					});
				}
			};
			this.load=function(evt,index)
			{
				//alert("in Play: "+this.inPlay)
				index = (typeof evt ==="number")?evt:index;
				if(index>this.options.images.length-1 || index<0)
				{
					if(this.inPlay)
					{
						this.control.play();
					}
					return false;
				}
				//alert(55);
				//index = (index>this.options.images.length-1)?0:index;
				//index = (index<0)?this.options.images.length-1:index;
				this.current = index;
				//alert(this.current)
				this.setLoad();
				this.domCounter.innerHTML="Foto <b>"+(index+1)+"</b> de <b>"+this.options.images.length+"</b>";
				this.domTitle.innerHTML=" <b>"+this.options.thumbnail.images[index].title || "Untitled"+"/b> ";
				if(this.last!==false)
				{
					this.parent.dom.setStyle(this.elements.thumbs[this.last],{
						borderWidth:0,
						margin:2
					});
					this.parent.dom.opacity(this.elements.thumbs[this.last],50)
				}
				this.parent.dom.setStyle(this.elements.thumbs[index],{
					border:"2px solid orange",
					margin:0
				});
				this.parent.dom.opacity(this.elements.thumbs[index],100)
				this.last=index;
				var image = new Image();
				image.onload=this.show.args(image);
				/*image.onload=function(){
				setTimeout(this.show.args(image),5000);
				}.extend(this);*/
				image.src=this.options.images[index];
				this.panel.addContentTitle(this.options.thumbnail.images[this.current].title || "");
			};
			this.show=function(evt,image)
			{
				image = arguments[1] || arguments[0];
				if(this.options.resize)
				{
					this.panel.resize({w:image.width+10,h:image.height+50});
					this.panel.center();
				}
				this.image.src=image.src;
				this.unsetLoad();
				//alert(this.inPlay);
				if(this.inPlay)
				{
					//alert(444);
					setTimeout(this.control.next,this.options.playTimeOut*1000);
				}
			};
			this.setLoad=function()
			{
				this.image.style.display="none";
				this.parent.dom.opacity(this.image,0);
				this.panel.loader.show();
			};
			this.unsetLoad=function()
			{
				//this.panel.elements.content.style.borderWidth=0;
				this.panel.loader.hide();
				this.image.style.display="";
				new this.parent.module.fx.fade().make({
					duration	:500,
					end		:1,
					dom		:this.image,
					onFinish	:function(){

					}.extend(this)
				});
				this.image.style.display="";
			};
			this.buttons=function()
			{
				var target	 = this.options.target;
				this.footer	 = document.createElement("div");
				target.appendChild(this.footer);
				this.buttonNext	 = document.createElement("div");
				var rr = this.panel.elements.containerWindow;
				this.parent.dom.setStyle(this.footer,{
					position	: "absolute",
					background	:"url("+this.options.skin_images+"background_bottom.png) no-repeat",
					width		:524,
					height		:56,
					top			:this.panel.options.position.y+rr.offsetHeight,
					left		:this.panel.options.position.x,
					zIndex		:this.panel.elements.containerWindow.style.zIndex
				});
				//alert(this.panel.options.position.y+rr.offsetHeight)
				this.buttonPrevious = document.createElement("div");
				this.parent.dom.setStyle([this.buttonNext,this.buttonPrevious],{
					position	: "absolute",
					backgroundColor:"#006699",
					width		: 20,
					cursor	: "pointer",
					height	: this.toolbar.clientHeight,
					zIndex	: this.panel.elements.containerWindow.style.zIndex
				});
				/*var play	 = document.createElement("div");
				this.parent.dom.setStyle(play,{
				right	:parseInt(next.style.right,10)+20
				});*/
				//target.appendChild(this.buttonNext);
				this.buttonNext.onmouseup=this.control.right;
				this.buttonPrevious.onmouseup=this.control.left;
				//target.appendChild(this.buttonPrevious);




				/*var end		 = document.createElement("div");
				this.parent.dom.setStyle(end,{
				right	:5
				});
				var begin	 = document.createElement("div");
				this.parent.dom.setStyle(begin,{
				right	:parseInt(prev.style.right,10)+20
				});*/
				this.domNext	 = document.createElement("img");
				this.domNext.src = this.options.skin_images+"next.png";
				this.domNext.onmouseover = function()
				{
					this.domNext.src = this.options.skin_images+"next_on.png";
				}.extend(this);
				this.domNext.onmouseout = function()
				{
					this.domNext.src = this.options.skin_images+"next.png";
				}.extend(this);
				this.parent.dom.setStyle(this.domNext,{
					position	: "absolute",
					//background:"url("+this.options.skin_images+"next.png)",
					cursor	:"pointer",
					width	:30,
					height	:56,
					top		:this.panel.options.position.y+rr.offsetHeight+1,
					left	:this.panel.options.position.x+295,
					zIndex	:this.panel.elements.containerWindow.style.zIndex+1
				});
				this.domPlay	 = document.createElement("img");
				this.control.setPlay();
				this.parent.dom.setStyle(this.domPlay,{
					position	: "absolute",
					//background:"url("+this.options.skin_images+"play.png)",
					cursor	:"pointer",
					width	:46,
					height	:56,
					top		:this.panel.options.position.y+rr.offsetHeight+1,
					left	:this.panel.options.position.x+239,
					zIndex	:this.panel.elements.containerWindow.style.zIndex+1
				});
				this.domPrev = document.createElement("img");
				this.domPrev.src = this.options.skin_images+"back.png";
				this.domPrev.onmouseover = function()
				{
					this.domPrev.src = this.options.skin_images+"back_on.png";
				}.extend(this);
				this.domPrev.onmouseout = function()
				{
					this.domPrev.src = this.options.skin_images+"back.png";
				}.extend(this);
				this.parent.dom.setStyle(this.domPrev,{
					position	: "absolute",
					//background:"url("+this.options.skin_images+"back.png)",
					cursor	:"pointer",
					width	:30,
					height	:56,
					top		:this.panel.options.position.y+rr.offsetHeight+1,
					left		:this.panel.options.position.x+200,
					zIndex	:this.panel.elements.containerWindow.style.zIndex+1
				});

				var counter;
				this.domCounter = counter= document.createElement("div");
				this.domTitle	= document.createElement("div");
				this.domClose	= document.createElement("img");
				this.domClose.src=this.options.skin_images+"close.gif";
				this.parent.dom.setStyle(this.domClose,{
					cursor	: "pointer"
				});
				this.domClose.onmousedown=this.panel.remove;

				//target.appendChild(end);
				target.appendChild(this.domNext);
				target.appendChild(this.domPlay);
				target.appendChild(this.domPrev);
				//target.appendChild(begin);
				//target.appendChild(title);
				target.appendChild(this.domCounter);
				target.appendChild(this.domTitle);
				target.appendChild(this.domClose);
				//counter.innerHTML="1 [b]/[/b] 12"
				this.parent.dom.setStyle([counter,this.domTitle,this.domClose],{
					position:"absolute",
					font	:"normal 8pt Tahoma,MiscFixed",
					//top	:3,
					//width	:15,
					//height	:15,
					color	:"black",
					overflow:"hidden",
					zIndex	: this.panel.elements.containerWindow.style.zIndex+1
				});
				/*this.parent.dom.setStyle(counter,{
				left	:5,
				backgroundColor:"white",
				color	:"black",
				font	:"normal 8pt Tahoma,MiscFixed",
				left	:20,
				width	:60
				});*/
				//begin.onmouseup	= this.control.first;
				this.domPlay.onmouseup	= this.control.play;
				this.domPrev.onmouseup	= this.control.previous;
				this.domNext.onmouseup	= this.control.next;
				//end.onmouseup	= this.control.last;
				if(this.options.banner)
				{
					this.banner=document.createElement("img");
					this.banner.src=this.options.banner;
					this.options.target.appendChild(this.banner);
				}
			};
			this.control={
				setPlay:function()
				{
					this.domPlay.src = this.options.skin_images+"play.png";
					this.domPlay.onmouseover = function()
					{
						this.domPlay.src = this.options.skin_images+"play_on.png";
					}.extend(this);
					this.domPlay.onmouseout = function()
					{
						this.domPlay.src = this.options.skin_images+"play.png";
					}.extend(this);
				},
				setPause:function()
				{
					this.domPlay.src = this.options.skin_images+"pause.png";
					this.domPlay.onmouseover = function()
					{
						this.domPlay.src = this.options.skin_images+"pause_on.png";
					}.extend(this);
					this.domPlay.onmouseout = function()
					{
						this.domPlay.src = this.options.skin_images+"pause.png";
					}.extend(this);
				},
				play:function()
				{
					if(!this.inPlay)
					{
						this.control.setPause();
						this.stopped=false;
						this.inPlay=!this.inPlay;
						this.control.next();
					}
					else
					{
						this.control.setPlay();
						this.stopped=true;
						this.inPlay=!this.inPlay;
					}
					//alert(!this.inPlay)
					//this.inPlay=!this.inPlay;
					//alert("=> "+this.inPlay);
				},
				next:function(){
					//alert("in NExt: "+this.inPlay)
					if(this.Null===true){return false;}
					if(this.stopped===false)
					{
						var t = this.current+1;
						if(t%4===0)
						{
							this.control.right();
						}
						else
						{
							this.load(t);
						}
					}
					else
					{
						this.stopped=false;
					}
				},
				previous:function(){
					if(this.Null===true){return false;}
					var t = this.current;
					if(t%4===0)
					{
						this.control.left();
					}
					else
					{
						this.load(this.current-1);
					}
				},
				left:function()
				{
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft-((this.options.thumbnail.size.w*4)+4);
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft-((this.options.thumbnail.size.w*4)+(4*4));
					this.Null=true;
					new this.parent.module.fx.algorithm().make({
						transition	:"sineInOut",
						duration	:1000,
						begin		:this.toolbar.scrollLeft,
						end			:this.toolbar.scrollLeft-((this.options.thumbnail.size.w*4)+(4*4)),
						onTransition:function(fx){
							this.toolbar.scrollLeft=fx.result;
						}.extend(this),
						onFinish	:function(fx){
							this.toolbar.scrollLeft=fx.options.end;
							this.load(this.current-1);
							this.Null=false;
						}.extend(this)
					});
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft-25;
				},
				right:function()
				{
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft+(this.options.thumbnail.size.w+4);
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft+((this.options.thumbnail.size.w*4)+(4*4));
					this.Null=true;
					//alert(this.options.thumbnail.images.length / 4);
					new this.parent.module.fx.algorithm().make({
						transition	:"sineInOut",
						duration	:1000,
						begin		:this.toolbar.scrollLeft,
						end			:this.toolbar.scrollLeft+((this.options.thumbnail.size.w*4)+(4*4)),
						onTransition	:function(fx){
							this.toolbar.scrollLeft=fx.result;
						}.extend(this),
						onFinish	:function(fx){
							this.toolbar.scrollLeft=fx.options.end;
							var t = this.current+1;
							this.load(t);
							this.Null=false;
						}.extend(this)
					});
					//this.toolbar.scrollLeft=this.toolbar.scrollLeft+25;
				}
			}.expand(this);
			this.expand(this);
		},
		box:function()
		{
			this.panel = new this.parent.module.panel();
			this.panel.options={
				size:{w:300,h:200},
				title	:"Prueba panel",
				headerBar:true,
				titleBar:false,
				elementToDrag:"backend",
				position:{x:5,y:5,center:true},
				fx:{shadow:false,modal:true,opacity:false}
			};
			this.panel.setStyle={
				containerWindow:{
					border:"0px solid red"
				},
				frontend:{
					backgroundColor:"transparent"
				},
				content:{
					margin:0,
					border:"0px solid red",
					borderLeft:"1px solid #DADADA",
					borderRight:"1px solid #DADADA",
					backgroundColor:"white"
				},
				headerBar:{
					display:''
					//height:16,
					//border:"1px solid red"
				},
				statusBar:{
				}
			};
			this.panel.styles.fx.opacityModal.Static=0;
			this.panel.make();
			this.panel.elements.headerBar.className="boxTopPanel";
			this.panel.elements.headerBar.innerHTML="<div class='a'></div><div class='b'></div><div class='c'></div>";

			this.panel.elements.statusBar.className="boxBottom";
			this.panel.elements.statusBar.innerHTML="<div class='a'></div><div class='b'></div><div class='c'></div>";
			return this.panel;
		},
		confirm:function()
		{
			this.make=function(options)
			{
				var label={
					accept:((G_STRINGS)?G_STRINGS.ACCEPT:"Aceptar"),
					cancel:((G_STRINGS)?G_STRINGS.CANCEL:"Cancelar")
				};
				this.panel = new this.parent.module.panel();
				this.options = {
					action:function(){}
				}.concat(options || {});
				this.panel.options={
					statusBarButtons:[
					{value:label.accept},
					{value:label.cancel}
					],
					position:{center:true},
					size:{w:350,h:100},
					control:{
						close	:true,
						resize	:false
					},
					fx:{
						modal:true
					}
				};
				//alert(this.parent.info.path_images)
				this.panel.setStyle={
					content:{
						padding:10,
						paddingBottom:2,
						textAlign:"left",
						paddingLeft:50,
						background:"url("+this.parent.info.images+"question.png)",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"10 50%",
						backgroundColor:"transparent",
						borderWidth:0
					}
				};
				this.panel.make();
				this.panel.addContent(this.options.label || "");
				this.panel.fixContent();
				this.panel.elements.statusBarButtons[0].onmouseup=function()
				{
					this.options.action();
					this.panel.remove();
					return false;
				}.extend(this);
				this.panel.elements.statusBarButtons[1].onmouseup=function()
				{
					if(this.options.cancel)
					{
						this.options.cancel();
					}
					this.panel.remove();
					return false;
				}.extend(this);
			};
		},
		alert:function()
		{
			this.make=function(options)
			{
				var label={
					accept:((G_STRINGS)?G_STRINGS.ACCEPT:"Aceptar")
				};
				this.panel = new this.parent.module.panel();
				this.options = {
					action:function(){},
					target:document.body
				}.concat(options || {});
				this.panel.options={
					statusBarButtons:[
					{value:label.accept}
					],
					target:this.options.target,
					position:{center:true},
					size:{w:300,h:110},
					control:{
						close	:true,
						resize	:false
					},
					fx:{
						modal:true
					}
				};
				this.panel.setStyle={
					content:{
						padding:10,
						paddingBottom:2,
						textAlign:"left",
						paddingLeft:65,
						background:"url("+this.parent.info.images+"warning.png)",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"10 50%",
						backgroundColor:"transparent",
						borderWidth:0
					}
				};
				this.panel.make();
				this.panel.addContent(this.options.label || "");
				this.panel.fixContent();
				this.panel.elements.statusBarButtons[0].onmouseup=function()
				{
					this.options.action();
					this.panel.remove();
					return false;
				}.extend(this);
				return this;
			};
		},
		prompt:function()
		{
			this.make=function(options)
			{
				var lb	= (typeof G_STRINGS!=='undefined')?G_STRINGS:{};
				var label={
					accept:lb.ACCEPT || "Aceptar",
					cancel:lb.CANCEL || "Cancelar"
				};
				this.panel = new this.parent.module.panel();
				this.options = {
					action:function(){}
				}.concat(options || {});
				this.panel.options={
					statusBarButtons:[
					{value:label.accept},
					{value:label.cancel}
					],
					position:{center:true},
					size:{w:300,h:110},
					control:{
						close	:true,
						resize	:false
					},
					fx:{
						modal:true
					}
				};
				this.panel.setStyle={
					content:{
						padding:10,
						paddingBottom:2,
						textAlign:"left",
						paddingLeft:50,
						background:"url("+this.parent.info.images+"question.png)",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"10 50%",
						backgroundColor:"transparent",
						borderWidth:0
					}
				};
				this.panel.make();
				this.panel.addContent(this.options.label || "");
				this.panel.addContent("<br>");
				this.input = document.createElement("input");
				this.input.type="text"
				this.parent.dom.setStyle(this.input,{
					font:"normal 8pt Tahoma,MiscFixed",
					color:"#000",
					width:"100%",
					marginTop:3,
					backgroundColor:"white",
					border:"1px solid #919B9C"
				});
				this.panel.addContent(this.input);
				this.input.focus();
				this.input.onkeyup=function(evt)
				{
					//alert(searchText)
					var evt = (window.event)?window.event:evt;
					var key = (evt.which)?evt.which:evt.keyCode;
					if(key==13)
					{
						this.functionOnTRUE();
					}
					else if(key==27)
					{
						this.functionOnFALSE();
					}
					//this.renderSearched();
				}.extend(this);

				this.panel.fixContent();
				this.panel.elements.statusBarButtons[0].onmouseup=this.functionOnTRUE;
				this.panel.elements.statusBarButtons[1].onmouseup=this.functionOnFALSE;
				return this;
			};
			this.functionOnTRUE=function()
			{
				this.options.action(this.input.value);
				this.panel.remove();
				return false;
			};
			this.functionOnFALSE=function()
			{
				if(this.options.cancel)
				{
					this.options.cancel();
				}
				this.panel.remove();
				return false;
			};
			this.expand(this);
		}
	}
});
