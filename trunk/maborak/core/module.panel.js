/**
* @author MaBoRaK
* @extends Class leimnud Módulo panel
* @param options Panel options
*/
leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.panel.js",
		Name	:"panel",
		Type	:"module",
		Version	:"1.0.5"
	},
	content	:function(options)
	{
		this.uid	= this.parent.tools.createUID();
		this.zIndex	= 0;
		this.stepZindex	= 5;
		this.controlSize= {w:13,h:13};
		this.elements	= {};
		this.setStyle	= {};
		this.events	= {};
		this.tab	= {};
		this.make=function()
		{
			this.makeTmpDB();
			this.options 		= this.options || {};
			this.options.fx		= {
				blinkToFront:true,
				shadow	:true,
				opacity	:true,
				modal	:false,
				drag	:true
			}.concat(this.options.fx || {});
			//this.options.fx		= this.options.fx || {};
			this.options.control= {
				drag:true
			}.concat(this.options.control || {});
			/***
			*
			* containerWindow Begin
			*
			*/
			this.elements.containerWindow = document.createElement("div");
			this.elements.containerWindow.className="panel_containerWindow";
			this.parent.exec(this.styles.containerWindow,false,false,this);
			this.target().appendChild(this.elements.containerWindow);
			/**
			*
			* containerWindow End
			*
			*/

			/**
			*
			* mfrontend Begin
			*
			*/
			this.elements.frontend = document.createElement("div");
			this.elements.frontend.className="panel_frontend";
			this.parent.exec(this.styles.frontend,false,false,this);
			this.elements.containerWindow.appendChild(this.elements.frontend);

			/**
			*
			* titlebar Begin
			*
			*/
			this.elements.titleBar = document.createElement("div");
			this.elements.titleBar.className="panel_titleBar";
			this.parent.exec(this.styles.titleBar,false,false,this);
			this.elements.frontend.appendChild(this.elements.titleBar);

			/** Title */

			this.elements.title = document.createElement("div");
			this.elements.title.className="panel_title";
			this.parent.exec(this.styles.title,false,false,this);
			this.elements.title.innerHTML=this.options.title ||"";
			this.elements.titleBar.appendChild(this.elements.title);

			/**
			*
			* titlebar End
			*
			*/

			/**
			*
			* tab Begin
			*
			*/
			this.elements.tab = document.createElement("div");
			this.elements.tab.className="panel_tab";

			/**
			*
			* tab End
			*
			*/
			/**
			*
			* content Begin
			*
			*/
			this.elements.content = document.createElement("div");
			this.elements.content.className="panel_content";
			this.elements.content.innerHTML="";


			this.elements.frontend.appendChild(this.elements.content);
			this.elements.frontend.appendChild(this.elements.tab);
			/**
			*
			* content End
			*
			*/

			/**
			*
			* statusBar Begin
			*
			*/
			this.elements.statusBar = document.createElement("div");
			this.elements.statusBar.className="panel_statusBar";
			this.parent.exec(this.styles.statusBar,false,false,this);
			if(this.options.statusBar)
			{
				this.elements.frontend.appendChild(this.elements.statusBar);
			}
			/**
			*
			* statusBar End
			*
			*/
			/* Height Content Fix*/
			this.parent.exec(this.styles.tab,false,false,this);
			this.parent.exec(this.styles.content,false,false,this);

			/**
			*
			* frontend End
			*
			*/


			/**
			*
			* backend Begin
			*
			*/
			this.elements.backend = document.createElement("div");
			this.elements.backend.className="panel_backend";
			this.parent.exec(this.styles.backend,false,false,this);
			this.elements.containerWindow.appendChild(this.elements.backend);
			/* Iframe for IE */
			if(this.parent.browser.isIE)
			{
				this.elements.iframe=document.createElement("iframe");
				this.elements.iframe.className="panel_iframe";
				this.elements.iframe.frameBorder="no";
				this.elements.iframe.scrolling="no";
				this.elements.iframe.src="about:blank";
				this.parent.exec(this.styles.iframe,false,false,this);
				this.elements.backend.appendChild(this.elements.iframe);
			}
			/**
			*
			* backend End
			*
			*/
			/**
			*
			* Events manager Begin
			*
			*/
			this.makeEvents();
			/**
			*
			* Events manager End
			*
			*/

			/**
			*
			* fx Begin
			*
			*/
			this.makeFx();
			/**
			*
			* fx End
			*
			*/


			/**
			*
			* controls Begin
			*
			*/
			this.makeControls();
			/**
			*
			* controls End
			*
			*/
			/**
			*
			* theme Begin
			*
			*/
			this.makeTheme();
			/**
			*
			* theme End
			*
			*/
		};
		/**
		* Make Fx
		*/
		this.makeFx=function()
		{
			if(this.options.fx.shadow)
			{
				this.elements.shadow = document.createElement("div");
				this.elements.shadow.className="panel_shadow";
				this.parent.exec(this.styles.shadow,false,false,this);
				this.target().appendChild(this.elements.shadow);
			}
			if(this.options.fx.modal)
			{
				this.elements.modal = document.createElement("div");
				this.elements.modal.className="panel_modal";
				this.parent.exec(this.styles.modal,false,false,this);
				this.target().appendChild(this.elements.modal);
			}
			if(this.options.fx.blinkToFront===true)
			{
				this.events.init.push(this.parent.execHandler({
					method:function(){
						if(this.zIndex<this.parent.tmp.panel.zIndex)
						{
							this.zIndex=this.makezIndex();
							this.parent.dom.setStyle(this.elements.containerWindow,{
								zIndex:this.zIndex
							});
							if(this.options.fx.shadow)
							{
								this.shadowReIndex();
							}
						}
					},
					instance:this
				}));
			}
			if(this.options.fx.opacity)
			{
				this.events.init.push(this.parent.execHandler({
					method:this.fx.setOpacity,
					instance:this
				}));
				this.events.finish.push(this.parent.execHandler({
					method:this.fx.unsetOpacity,
					instance:this
				}));
			}
		};
		/**
		* Make Events
		*/
		this.makeEvents=function()
		{
			this.events.init	=(this.events.init)?((this.events.init.isArray)?this.events.init:[this.events.init]):[];
			this.events.move	=(this.events.move)?((this.events.move.isArray)?this.events.move:[this.events.move]):[];
			this.events.finish	=(this.events.finish)?((this.events.finish.isArray)?this.events.finish:[this.events.finish]):[];
		};
		this.makeControls=function()
		{
			this.controls=[];
			/** Close */
			if(this.options.control.close)
			{
				this.elements.close = document.createElement("div");
				this.elements.close.className="panel_close";
				this.parent.exec(this.styles.close,false,false,this);
				this.controls.push(this.elements.close);
				this.elements.titleBar.appendChild(this.elements.close);
			}
			/** Rollup/Rolldown */
			if(this.options.control.roll)
			{
				this.elements.roll = document.createElement("div");
				this.elements.roll.className="panel_roll";
				this.parent.exec(this.styles.roll,false,false,this);
				this.controls.push(this.elements.roll);
				this.elements.titleBar.appendChild(this.elements.roll);
			}
			/**
			* Drag window
			*/
			if(this.options.control.drag)
			{
				this.parent.dom.setStyle(this.elements.title,{cursor:"move"});
				this.drag=new this.parent.module.drag({
					link:{
						elements:[this.elements.title],
						ref:((this.options.fx.shadow===true)?[this.elements.containerWindow,this.elements.shadow]:[this.elements.containerWindow])
					}
				});
				this.drag.events={
					init	:this.events.init,
					move	:this.events.move,
					finish	:this.events.finish
				}
				this.drag.make();
			}
		};
		this.makeTab=function()
		{
			var tb =this.elements.tabOptions[this.tabSelected];
			tb.className="panel_tabOptionSelected";
			this.parent.dom.setStyle(tb,this.setStyle.tabOptionSelected || {});
			tb.onmouseover=function(){this.className="panel_tabOptionSelectedOver";};
			tb.onmouseout=function(){this.className="panel_tabOptionSelected";};
			var tc = (typeof this.tab.options[this.tabSelected].content);
			this.clearContent();
			//alert(parseInt(this.parent.dom.getStyle(tb,"width")));
			this.parent.dom.setStyle(tb,{
				width:parseInt(this.parent.dom.getStyle(tb,"width"))-((!this.parent.browser.isIE)?3:0),
				borderLeftWidth:4
			});
			tb.onmouseup=function(){return false;};
			if(tc=="string")
			{
				this.addContent(this.tab.options[this.tabSelected].content);
			}
			else if(tc==="function")
			{
				this.addContent(this.tab.options[this.tabSelected].content());
			}
			if(this.tabLastSelected!==false)
			{
				var tls =this.elements.tabOptions[this.tabLastSelected];
				tls.className="panel_tabOption";
				tls.onmouseover=function(){this.className="panel_tabOptionOver";};
				tls.onmouseout=function(){this.className="panel_tabOption";};
				this.parent.dom.setStyle(tls,this.setStyle.tabOption || {});
				tls.onmouseup=this.parent.execHandler({
					instance:this,
					method:function(tabID){this.tabSelected=tabID;this.makeTab();return false;},
					args:this.tabLastSelected
				});
				this.parent.dom.setStyle(tls,{
					width:parseInt(this.parent.dom.getStyle(tb,"width"))+((!this.parent.browser.isIE)?3:0),
					borderLeftWidth:1
				});
				//this.tabSelected
			}
			this.tabLastSelected=this.tabSelected;
		};
		this.shadowReIndex=function()
		{
			this.parent.dom.setStyle(this.elements.shadow,{
				zIndex	:this.zIndex-2
			});
		};
		this.reIndexElements=function()
		{

		};
		this.controlPosition=function()
		{
			var cl=this.controls.length+1;
			return ((3*cl)+(this.controlSize.w*this.controls.length));
		};
		this.makeTmpDB=function()
		{
			if(!this.parent.tmp.panel)
			{
				this.parent.tmp.panel={};
				this.parent.tmp.panel.zIndex=100;
			}
		};
		this.makezIndex=function()
		{
			this.parent.tmp.panel.zIndex+=this.stepZindex;
			return this.parent.tmp.panel.zIndex;
		};
		this.target=function()
		{
			return (this.options.target)?this.oprions.target:this.parent.dom.capture("tag.body 0");
		};
		/**
		*
		* @return {Int} h Height border,padding of Top/Bottom Panel
		*
		*/
		this.spaceOutPanel=function()
		{
			var brdr={
				x:(parseInt(this.parent.dom.getStyle(this.elements.content,"marginLeft") || 0,10)+parseInt(this.parent.dom.getStyle(this.elements.content,"marginRight") || 0,10)),
				y:(parseInt(this.parent.dom.getStyle(this.elements.content,"marginTop") || 0,10)+parseInt(this.parent.dom.getStyle(this.elements.content,"marginBottom") || 0,10))
			};
			var pddn={
				x:(parseInt(this.parent.dom.getStyle(this.elements.content,"paddingLeft") || 0,10)+parseInt(this.parent.dom.getStyle(this.elements.content,"paddingRight") || 0,10)),
				y:(parseInt(this.parent.dom.getStyle(this.elements.content,"paddingTop") || 0,10)+parseInt(this.parent.dom.getStyle(this.elements.content,"paddingBottom") || 0,10))
			};
			return {
				x:brdr.x+((this.parent.browser.isIE)?0:pddn.x)+2,
				y:brdr.y+((this.parent.browser.isIE)?-1:pddn.y+1)+2
			};
		};
		this.remove=function()
		{
			//this.drag.flush();
			for(var i in this.elements)
			{
				if(this.elements.propertyIsEnumerable(i))
				{
					this.parent.dom.remove(this.elements[i]);
					delete this.elements[i];
				}
			}
			//this.parent.dom.remove(this.elements.containerWindow);
			if(this.events.remove && typeof this.events.remove=="function")
			{
				return this.events.remove();
			}
		};
		this.addContent=function(content)
		{
			if(typeof content=="string")
			{
				this.elements.content.innerHTML+=content;
				//alert(this.elements.content.clientHeight)
				return true;
			}
			else if(typeof content=="object")
			{
				this.elements.appendChild(content);
				//alert(this.elements.content.clientHeight)
				return true;
			}
			return false;
		};
		this.clearContent=function()
		{
			this.elements.content.innerHTML="";
		};
		this.fx={
			setOpacity:function()
			{
				//alert(this.styles.fx.opacityPanel.Static/100)
				this.parent.dom.setStyle(this.elements.containerWindow,{
					opacity:this.styles.fx.opacityPanel.Move/100,
					filter:"alpha(opacity="+this.styles.fx.opacityPanel.Move+")"
				});
				if(this.options.fx.shadow===true){
					this.parent.dom.setStyle(this.elements.shadow,{
						opacity:this.styles.fx.opacityShadow.Move/100,
						filter:"alpha(opacity="+this.styles.fx.opacityShadow.Move+")"
					});
				}
			},
			unsetOpacity:function()
			{
				this.parent.dom.setStyle(this.elements.containerWindow,{
					opacity:this.styles.fx.opacityPanel.Static/100,
					filter:"alpha(opacity="+this.styles.fx.opacityPanel.Static+")"
				});
				if(this.options.fx.shadow===true){
					this.parent.dom.setStyle(this.elements.shadow,{
						opacity:this.styles.fx.opacityShadow.Static/100,
						filter:"alpha(opacity="+this.styles.fx.opacityShadow.Static+")"
					});
				}
			}
		};
		this.styles={
			containerWindow:function()
			{
				this.options.size.w 	= this.options.size.w || 200;
				this.options.size.h 	= this.options.size.h || 200;
				this.options.position.x = ((this.options.position.center===true)?(((document.body.clientWidth/2)+document.body.scrollLeft)-(this.options.size.w/2)):(this.options.position.x || 0));
				this.options.position.y = ((this.options.position.center===true)?(((document.body.clientHeight/2)+document.body.scrollTop)-(this.options.size.h/2)):(this.options.position.y || 0));
				this.zIndex		= this.options.zIndex || this.makezIndex();
				this.parent.dom.setStyle(this.elements.containerWindow,{
					width:this.options.size.w,
					height:this.options.size.h,
					//border:"1px solid #A3A2BC",
					position:"absolute",
					left:this.options.position.x,
					top:this.options.position.y,
					opacity:this.styles.fx.opacityPanel.Static/100,
					filter:"alpha(opacity="+this.styles.fx.opacityPanel.Static+")",
					zIndex:this.zIndex
				});
				this.parent.dom.setStyle(this.elements.containerWindow,this.setStyle.containerWindow || {});
			},
			frontend:function()
			{
				this.parent.dom.setStyle(this.elements.frontend,{
					//width:"100%",
					//height:"100%",
					//position:"absolute",
					//backgroundColor:"#FFFFFF",
					//zIndex:2,
					//overflow:"hidden",
					//top:0,
					//left:0
				});
				this.parent.dom.setStyle(this.elements.frontend,this.setStyle.frontend || {});

			},
			backend:function()
			{
				this.parent.dom.setStyle(this.elements.backend,{
					//width:"100%",
					//height:"100%",
					//position:"absolute",
					//overflow:"hidden",
					//zIndex:1,
					//top:0,
					//left:0
				});
				this.parent.dom.setStyle(this.elements.backend,this.setStyle.backend || {});

			},
			iframe:function()
			{
				this.parent.dom.setStyle(this.elements.iframe,{
					//width:"100%",
					//height:"100%",
					//position:"absolute",
					//overflow:"hidden",
					//zIndex:1,
					//top:0,
					//left:0
				});
				this.parent.dom.setStyle(this.elements.iframe,this.setStyle.iframe || {});

			},
			titleBar:function()
			{
				this.parent.dom.setStyle(this.elements.titleBar,{
					//position:"relative",
					//height:20,
					//overflow:"hidden"
				});
				this.parent.dom.setStyle(this.elements.titleBar,this.setStyle.titleBar || {});
			},
			title:function()
			{
				this.parent.dom.setStyle(this.elements.title,{
					//textAlign:"center",
					//width:"100%",
					//height:"100%",
					//color:"black",
					//font:"normal 8pt Tahoma,MiscFixed",
					//fontWeight:"bold",
					//paddingLeft:5,
					//paddingTop:3,
					//zIndex:1
				});
				this.parent.dom.setStyle(this.elements.title,this.setStyle.title || {});
			},
			roll:function()
			{
				this.parent.dom.setStyle(this.elements.roll,{
					//position:"absolute",
					//top:3,
					//font:"normal 0pt tahoma",
					//padding:0,
					right:this.controlPosition(),
					height:this.controlSize.h,
					width:this.controlSize.w
					//border:"1px solid #006699",
					//zIndex:2
				});
				this.parent.dom.setStyle(this.elements.roll,this.setStyle.roll || {});
			},
			close:function()
			{
				this.parent.dom.setStyle(this.elements.close,{
					//font	:"normal 0pt tahoma",
					//padding	:0,
					//position:"absolute",
					height	:this.controlSize.h,
					//top		:3,
					right	:this.controlPosition(),
					width	:this.controlSize.w,
					background:"url("+this.parent.info.base+"images/panel.close.static.gif)"
					//cursor	:"hand",
					//zIndex	:2
				});
				this.parent.dom.setStyle(this.elements.close,this.setStyle.close || {});
				/*this.elements.close.onmouseover=this.parent.execHandler({
					method:function(){
						this.parent.dom.setStyle(this.elements.close,{
							background:"url("+this.parent.info.base+"images/panel.close.over.gif)",
							cursor:"pointer"
						});
					},
					instance:this
				});
				this.elements.close.onmouseout=this.parent.execHandler({
					method:function(){
						this.parent.dom.setStyle(this.elements.close,{
							background:"url("+this.parent.info.base+"images/panel.close.static.gif)",
							cursor	:"pointer"
						});
					},
					instance:this
				});*/
				/*this.elements.close.onmouseup=this.parent.execHandler({
					method:this.remove,
					instance:this
				});*/
				this.parent.event.add(this.elements.close,"mouseup",this.parent.execHandler({
					method:this.remove,
					instance:this
				}),false);
			},
			shadow:function()
			{
				this.parent.dom.setStyle(this.elements.shadow,{
					width	:this.elements.containerWindow.offsetWidth,
					height	:this.elements.containerWindow.offsetHeight,
					//position:"absolute",
					top	:(parseInt(this.parent.dom.getStyle(this.elements.containerWindow,"top"),10)+2),
					left	:(parseInt(this.parent.dom.getStyle(this.elements.containerWindow,"left"),10)+2),
					//backgroundColor:"#CCCCCC",
					opacity	:this.styles.fx.opacityShadow.Static/100,
					filter	:"alpha(opacity="+this.styles.fx.opacityShadow.Static+")",
					zIndex	:this.zIndex-2
				});
				this.parent.dom.setStyle(this.elements.shadow,this.setStyle.shadow || {});
			},
			modal:function()
			{
				this.parent.dom.setStyle(this.elements.modal,{
					width	:"100%",
					height	:"100%",
					position:"absolute",
					top		:0,
					left	:0,
					backgroundColor:"#ffffff",
					opacity	:this.styles.fx.opacityModal.Static/100,
					filter	:"alpha(opacity="+this.styles.fx.opacityModal.Static+")",
					zIndex	:this.zIndex-3
				});
				this.parent.dom.setStyle(this.elements.modal,this.setStyle.modal || {});
			},
			tab:function()
			{
				var heightContent = this.options.size.h-(this.elements.titleBar.offsetHeight+this.elements.statusBar.offsetHeight);
				var beginTop = this.elements.titleBar.offsetHeight;
				var space = this.spaceOutPanel();
				this.tab.width = ((this.tab.options)?((this.tab.width)?this.tab.width:80):0);
				this.parent.dom.setStyle(this.elements.tab,{
					height	:heightContent,
					width	:this.tab.width,
					top		:beginTop,
					left	:0
				});
				this.parent.dom.setStyle(this.elements.tab,this.setStyle.tab || {});
				if(this.tab.options)
				{
					this.tabSelected = false;
					this.tabLastSelected = false;
					this.tab.initIn = this.tab.initIn || 20;
					this.tab.step	= this.tab.step || 5;
					this.tab.optHeight	= this.tab.optHeight || 25;
					this.tab.optWidth	= (this.tab.optWidth || (this.tab.width -4));
					this.tab.diffWidthBugPadding = ((this.parent.browser.isIE)?0:20);
					this.elements.tabOptions=[];
					for(var	i=0;i<this.tab.options.length;i++)
					{
						var opH = beginTop+this.tab.initIn+(this.tab.step*i)+(this.tab.optHeight*i);
						var tb = document.createElement("div");
						this.parent.dom.setStyle(tb,{
							padding:5,
							paddingLeft:15,
							width:this.tab.optWidth-this.tab.diffWidthBugPadding,
							height:this.tab.optHeight-((this.parent.browser.isIE)?0:10),
							position:"absolute",
							left:(this.tab.width-this.tab.optWidth)-((this.parent.browser.isIE)?-1:1),
							top:opH
						});
						tb.innerHTML=this.tab.options[i].title || "";
						if(this.tab.options[i].selected===true)
						{
							this.tabSelected = i;
						}
						else
						{
							tb.className="panel_tabOption";
							tb.onmouseover=function(){this.className="panel_tabOptionOver";};
							tb.onmouseout=function(){this.className="panel_tabOption";};
							this.parent.dom.setStyle(tb,this.setStyle.tabOption || {});
							tb.onmouseup=this.parent.execHandler({
								instance:this,
								method:function(tabID){this.tabSelected=tabID;this.makeTab();return false;},
								args:i
							});
						}
						this.elements.frontend.appendChild(tb);
						this.elements.tabOptions.push(tb);
					}
					this.tabSelected=(this.tabSelected===false)?0:this.tabSelected;
					this.makeTab();
				}
			},
			content:function()
			{
				var heightContent = this.options.size.h-(this.elements.titleBar.offsetHeight+this.elements.statusBar.offsetHeight);
				//alert(heightContent);
				var mgLeft = ((this.tab.options)?parseInt(this.parent.dom.getStyle(this.elements.tab,"width"),10):4);
				this.parent.dom.setStyle(this.elements.content,{
					//position:"relative",
					//color:"black",
					//font:"normal 8pt Tahoma,MiscFixed",
					//textAlign:"justify",
					padding:5,
					//border:"1px solid #A3A2BC",
					//overflow:"auto",
					margin:4,
					marginLeft:mgLeft
					//marginLeft:4
				});
				this.parent.dom.setStyle(this.elements.content,this.setStyle.content || {});
				//var spaceH_tb=(parseInt(this.parent.dom.getStyle(this.elements.content,"marginTop") || 0)+parseInt(this.parent.dom.getStyle(this.elements.content,"marginBottom") || 0));
				//alert(this.options.size.h+"::"+this.elements.titleBar.offsetHeight+"::"+this.elements.statusBar.clientHeight+"::"+(heightContent+"-"+this.spaceH_tb())+"+"+40)
				//this.spaceH_tb();
				var space = this.spaceOutPanel();
				this.parent.dom.setStyle(this.elements.content,{
					height	:(heightContent-space.y),
					width	:(this.options.size.w-space.x)
					//width	:50
				});
			},
			statusBar:function()
			{
				this.parent.dom.setStyle(this.elements.statusBar,{
					//position:"relative",
					//width	:"100%",
					//font	:"normal 0pt tahoma",
					//padding	:0,
					//margin	:0,
					//borderTop:"1px solid #A3A2BC",
					//height	:20
				});
				this.parent.dom.setStyle(this.elements.statusBar,this.setStyle.statusBar || {});
			},
			fx:{
				opacityShadow:{
					Static	:50,
					Move	:10
				},
				opacityModal:{
					Static	:0,
					Move	:10
				},
				opacityPanel:{
					Static	:100,
					Move	:50
				}
			}
		};
		this.makeTheme=function()
		{
			this.options.theme = this.options.theme || "simple";
			switch (this.options.theme){
				case "simple":
				this.parent.dom.setStyle(this.elements.containerWindow,{
					//border:"1px solid red"
				});

				break;
				case "panel":
				this.parent.dom.setStyle(this.elements.titleBar,{
					background:"url("+this.parent.info.base+"images/panel.bg.title.gif)",
					backgroundColor:"white",
					backgroundRepeat:"repeat-x",
					borderBottom:"1px solid #DBE0E5"
				});
				break;
			}
		};
	}
});
