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
						position:"absolute",
						width:1,
						height:1,
						border:"0px solid red",
						overflow:"hidden",
						backgroundColor:this.options.color || "black",
						zIndex:this.options.zIndex || 4
					});
					this.options.target.appendChild(a);
					this.elements.push(a);
				}
				var b= document.createElement("img");
				b.src=this.options.arrow || "../../processmap/core/images/arrowB.gif";
				this.parent.dom.setStyle(b,{
					position:"absolute",
					width:9,
					height:9,
					zIndex:this.options.zIndex || 4
				});
				this.options.target.appendChild(b);
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
				var co={
					x1 : parseInt(el0.style.left,10)+(el0.offsetWidth/2),
					y1 : parseInt(el0.style.top,10)+(el0.offsetHeight),
					x2 : parseInt(el1.style.left || 0,10)+(el1.offsetWidth/2),
					y2 : parseInt(el1.style.top || 0,10)
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
				//alert(3)
				//window.status=kase;
				return kase;
			};
			this.paint=function()
			{
				this.rootSize=15;
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
					this.codo[0]={x:this.options.x1,y:(this.options.y1+this.rootSize)};
					this.codo[3]={x:this.options.x2,y:(this.options.y2-this.rootSize)};
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
					this.codo[3]={x:this.options.x2,y:(this.options.y2-this.rootSize)};
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
		},
		menuRight:function(options){
			this.elements = {};
			this.yy=33;
			this.make=function(options)
			{
				this.options = options || {};
				if(!this.validate()){return false;}
				this.parent=this.options.parent;
				this.parent.event.add(this.options.target,"click",this.parent.closure({instance:this,method:this.updateObservers,event:true}));
				//this.parent.event.add(this.options.target,"contextmenu",function(){return false;});
				this.options.target.oncontextmenu=this.parent.closure({instance:this,method:this.menu,event:true});
			};
			this.menu=function(evt)
			{
				this.updateObservers();
				this.parent.dom.bubble(false,evt);
				//this.remove();
				this.maked=true;
				this.cursor	= this.parent.dom.mouse(evt);
				this.positionTarget =	this.parent.dom.position(this.options.target);
				this.elements.container = document.createElement("div");				
				this.parent.dom.setStyle(this.elements.container,{
					position:"absolute",
					border:"1px solid #808080",
					backgroundColor:"#D4D0C8",
					width:this.options.width || 150,
					//left:(this.cursor.x-this.positionTarget.x)-5,
					left:this.cursor.x-5,
					//top:(this.cursor.y-this.positionTarget.y)-5
					overflow:"hidden",
					zIndex:10000,
					top:this.cursor.y-5
				});
				this.parent.dom.nullContextMenu([this.elements.container]);
				//this.options.target.appendChild(this.elements.container);
				//document.body.appendChild(this.elements.container);
				this.parseOptionsMenu();
				this.parent.dom.capture("tag.body 0").appendChild(this.elements.container);
				return false;
			};
			this.parseOptionsMenu=function()
			{
				/*
				808080
				D4D0C8
				*/
				/*this.elements.table = document.createElement("table");
				this.parent.dom.setStyle(this.elements.table,{
					cellPadding:0,
					cellSpacing:0,
					borderCollapse:"collapse"
				});
				this.elements.table.border=1;
				this.elements.container.appendChild(this.elements.table);*/
				for(var i=0;i<this.options.menu.length;i++)
				{
					var dv=document.createElement("div");
					var spI=document.createElement("span");
					spI.innerHTML="";
					this.parent.dom.setStyle(spI,{
						width:20,
						height:18,
						padding:0,
						font:"normal 8pt Tahoma,MiscFixed",
						overflow:"hidden",
						position:"absolute",
						left:1,
						cursor:"pointer",
						top:1
					//	backgroundColor:"red"
					});
					dv.appendChild(spI);

					var spT=document.createElement("div");
					spT.innerHTML=this.options.menu[i].text || "";
					this.parent.dom.setStyle(spT,{
						//backgroundColor:"blue",
						padding:0,
						height:18,
						font:"normal 8pt Tahoma,MiscFixed",
						position:"absolute",
						cursor:"pointer",
						background:((this.options.menu[i].image)?"url("+this.options.menu[i].image+")":""),
						left:22,
						top:4
					});
					dv.appendChild(spT);

					this.elements.container.appendChild(dv);
					this.parent.dom.setStyle(dv,{
						//backgroundColor:"yellow",
						padding:1,
						margin:1,
						position:"relative",
						cursor:"pointer",
						height:18
					});
					dv.onmouseover=function(){
						this.style.backgroundColor="#0A246A";
						this.style.color="white";
					};
					dv.onmouseout=function(){
						this.style.backgroundColor="";
						this.style.color="black";
					};
					dv.onclick=this.parent.closure({instance:this,method:this.launch,Return:false,args:i});
					this.parent.dom.nullContextMenu([spI,spT,dv]);
				}
			};
			this.launch=function(opt)
			{
				this.remove();
				var lch = this.options.menu[opt];
				if(lch && typeof lch.launch=="function")
				{
					lch.launch();
				}
			};
			this.validate=function()
			{
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
					this.maked=false;
				}
			};
		}
	}
});