leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.drag.js",
		Name	:"drag",
		Type	:"module",
		Version	:"0.1"
	},
	content	:function(options){
		this.options	= options || {};
		this.loaded	= false;
		this.eventHandlers=[];
		this.cursor = "move";
		this.uid	= this.parent.tools.createUID();
		this.make=function()
		{
			//alert(this.options.elements.isArray);
			//this.options.elements=(this.options.elements && !this.options.elements.length)?[this.options.elements]:this.options.elements
			this.options.elements=this.set();
			this.events =this.events || {};
			//alert(this.options.elements.length);
			var elements=(this.options.elements || []).length;
			this.flagEvents=[];
			var oThis = this;
			for(var i=0;i<elements;i++)
			{
				
				var revent=this.parent.event.add(this.options.elements[i],"mousedown",this.parent.execHandler({
					method:this.onInit,
					instance:this,
					event:true,
					args:[i,this.options.elements[i]]
				}),false);
				/*var oj=this.options.elements[i];
				var revent = this.parent.event.add(this.options.elements[i],"mousedown",function(rrr){
					oThis.onInit(rrr || window.event,i,oj);
				},false);*/

				//this.flagEvents.push(revent);
				//this.parent.event.add(this.options.elements[i],"mousedown",x,false);
			}
			//alert(5);
		};
		this.set=function()
		{
			if(this.options.elements)
			{
				this.type="simple";				
				/*return ((!this.options.elements.isArray && (this.options.elements.isObject || (this.parent.browser.isIE && !this.options.elements.isObject))) || this.options.elements.isArray)?this.options.elements:[this.options.elements];*/
				return (this.options.elements.isArray)?this.options.elements:[this.options.elements];
			}
			else if(this.options.group)
			{
				this.type="group";
				/*return ((!this.options.group.isArray && (this.options.group.isObject || (this.parent.browser.isIE && !this.options.group.isObject))) || this.options.group.isArray)?this.options.group:[this.options.group];*/
				return (this.options.group.isArray)?this.options.group:[this.options.group];
			}
			else if(this.options.link)
			{
				this.type="link";
				this.linkRef=((!this.options.link.ref.isArray && (this.options.link.ref.isObject || (this.parent.browser.isIE && !this.options.link.ref.isObject))) || this.options.link.ref.isArray)?this.options.link.ref:[this.options.link.ref];
				/*return ((!this.options.link.elements.isArray && (this.options.link.elements.isObject || (this.parent.browser.isIE && !this.options.link.elements.isObject))) || this.options.link.elements.isArray)?this.options.link.elements:[this.options.link.elements];*/
				return (this.options.link.elements.isArray)?this.options.link.elements:[this.options.link.elements];
			}
			else
			{
				return [];
			}
		};
		this.onInit=function(fEvent,elNum,elem)
		{
			//window.status="onInit:=> "+arguments.length+":::"+event+":"+elNum+":"+elem;
			//window.status="onInit:=> "+arguments.length+":"+arguments[0]+":"+arguments[1]+":"+arguments[2];
			if(arguments.length<3 && this.parent.browser.isIE)
			{
				elem=elNum;
				elNum=fEvent;
				fEvent=window.event;
			}
			window.status="onInit:=> "+fEvent+":"+elNum+":"+elem;
			
			var position,element	=elem;
			this.cursorStart	=this.parent.dom.mouse(fEvent);
		//	window.status=this.cursorStart.toStr()
			if(this.type=="simple")
			{
				this.probeAbsolute(element);
				this.elementStart	={
					x:parseInt(this.parent.dom.getStyle(element,"left"),10),
					y:parseInt(this.parent.dom.getStyle(element,"top"),10)
				};
				//alert(this.parent.dom.getStyle(element,"z-index"));
			}
			else if(this.type=="group")
			{
				//this.probeAbsoluteGroup();
				this.elementStart=[];
				for(var i=0;i<this.options.elements.length;i++)
				{
					position = this.parent.dom.position(this.options.elements[i]);
					this.elementStart[i]={
						x:position.x,
						y:position.y
					};
				}
				this.absolutizeGroup();
			}
			else if(this.type=="link")
			{
				//this.probeAbsoluteGroup();
				this.elementStart=[];
				for(i=0;i<this.linkRef.length;i++)
				{
					position = this.parent.dom.position(this.linkRef[i]);
					this.elementStart[i]={
						x:position.x,
						y:position.y
					};
				}
				this.absolutizeLink();
			}
			this.parent.event.add(document,"mousemove",this.parent.execHandler({
					method:this.onMove,
					instance:this,
					event:true,
					args:[elNum,element,this.parent.event.db.length]
			}),true);
			//window.status=this.parent.event.db.length;
			this.parent.event.add(document,"mouseup",this.parent.execHandler({
					method:this.onFinish,
					instance:this,
					event:true,
					args:[elNum,element,this.parent.event.db.length]
			}),true);
			if(window.event)
			{
				window.event.cancelBubble=true;
				window.event.returnValue=false;
			}
			else
			{
				fEvent.preventDefault();
			}
			this.launchEvents(this.events.init);
		};
		this.onMove=function(event,elNum,element)
		{
			//window.status="Mouse:"+this.parent.dom.mouse(event).toStr()+"__Element:"+this.parent.dom.position(element).toStr()+"__Range:"+this.parent.dom.positionRange(element).toStr();
			var cursor =this.parent.dom.mouse(event);
			if(this.type=="simple")
			{
				//window.status=this.parent.dom.mouse(event).toStr();//var element=this.parent.event.dom(event);
				//window.status=event+":"+element.style.left+":"+element.style.top+"::"+element;
				this.parent.dom.setStyle(element,{
					left:this.elementStart.x+(cursor.x-this.cursorStart.x),
					top:this.elementStart.y+(cursor.y-this.cursorStart.y)
				});
			}
			else if(this.type=="group")
			{
				for(var i=0;i<this.options.elements.length;i++)
				{
					this.parent.dom.setStyle(this.options.elements[i],{
						left:this.elementStart[i].x+(cursor.x-this.cursorStart.x),
						top:this.elementStart[i].y+(cursor.y-this.cursorStart.y)
					});
				}
			}
			else if(this.type=="link")
			{				
				for(i=0;i<this.linkRef.length;i++)
				{
					//window.status=this.elementStart[i].x+(cursor.x-this.cursorStart.x);
					this.parent.dom.setStyle(this.linkRef[i],{
						left:this.elementStart[i].x+(cursor.x-this.cursorStart.x),
						top:this.elementStart[i].y+(cursor.y-this.cursorStart.y)
					});
				}
			}
			if(window.event)
			{
				window.event.cancelBubble=true;
				window.event.returnValue=false;
			}
			else
			{
				event.preventDefault();
			}
			this.launchEvents(this.events.move);
			//alert(4);
			//alert(this.parent.dom.mouse(event).toStr());
		};
		this.onFinish=function(event,elNum,element,hand)
		{
			if(arguments.length<4 && this.parent.browser.isIE)
			{
				hand=element;
				element=elNum;
				elNum=event;
				event=window.event;
			}
			window.status="Finish=> "+event+":"+elNum+":"+element+":"+hand;
			//alert(this.parent.event.db[hand].toStr());
			//var handler = this.parent.event.db[hand]._function_;
			this.launchEvents(this.events.finish);
			this.parent.event.remove(document,"mouseup",this.parent.event.db[hand]._function_,true,hand);
			this.parent.event.remove(document,"mousemove",this.parent.event.db[hand-1]._function_,true,hand-1);
		};
		this.flush=function()
		{
			this.parent.event.flushCollection(this.flagEvents);
			this.flagEvents = [];
		};
		this.probeAbsolute=function(d0m)
		{
				if(this.parent.dom.getStyle(d0m,"position")!="absolute")
				{
					var position=this.parent.dom.position(d0m);
					this.parent.dom.setStyle(d0m,{
							position:'absolute',
							left	:position.x,
							top		:position.y,
							cursor	:this.cursor
						});
				}
		};
		this.absolutizeGroup=function()
		{
				for(var i=0;i<this.options.elements.length;i++)
				{
					if(this.parent.dom.getStyle(this.options.elements[i],"position")!="absolute")
					{
						this.parent.dom.setStyle(this.options.elements[i],{
							position:'absolute',
							left	:this.elementStart[i].x,
							top		:this.elementStart[i].y,
							cursor	:this.cursor
						});
					}
				}
		};
		this.absolutizeLink=function()
		{
			for(var i=0;i<this.options.elements.length;i++)
			{
				this.parent.dom.setStyle(this.options.elements[i],{cursor:this.cursor});
			}
			for(i=0;i<this.linkRef.length;i++)
			{
				if(this.parent.dom.getStyle(this.linkRef[i],"position")!="absolute")
				{
					this.parent.dom.setStyle(this.linkRef[i],{
						position:'absolute',
						left	:this.elementStart[i].x,
						top		:this.elementStart[i].y
					});
				}
			}
		};
		this.launchEvents=function(event)
		{
			if(event && event.isArray===true)
			{
				for(var i=0;i<event.length;i++)
				{
					if(typeof event[i]=="function")
					{
						event[i]();
					}
				}
			}
			else
			{
				return (event)?event():false;
			}
		};
	}
});

