leimnud.Package.Public({
	info	:{
		Class	:"leimnud",
		File	:"module.panel.js",
		Name	:"panel",
		Type	:"module",
		Version	:"5.6.6.7"
	},
	content	:function(options)
	{
		this.uid	= this.parent.tools.createUID();
		this.stepZindex	= 5;
		this.controlSize= {w:13,h:13};
		this.elements	= {};
		this.setStyle	= {};
		this.make=function()
		{
			this.prepareTmpDB();
			this.options 		= this.options || {};
			this.options.fx		= this.options.fx || {};
			this.options.control= this.options.control || {};
			/*
			*
			* containerWindow Begin
			*
			*/
			this.elements.containerWindow = document.createElement("div");
			this.parent.exec(this.styles.containerWindow,false,false,this);
			this.target().appendChild(this.elements.containerWindow);
			/*
			*
			* containerWindow End
			*
			*/

			/*
			*
			* mfrontend Begin
			*
			*/
			this.elements.frontend = document.createElement("div");
			this.parent.exec(this.styles.frontend,false,false,this);
			this.elements.containerWindow.appendChild(this.elements.frontend);

			/*
			*
			* titlebar Begin
			*
			*/
			this.elements.titlebar = document.createElement("div");			
			this.parent.exec(this.styles.titlebar,false,false,this);
			this.elements.frontend.appendChild(this.elements.titlebar);

			/* Title */
			
			this.elements.title = document.createElement("div");
			this.parent.exec(this.styles.title,false,false,this);
			this.elements.title.innerHTML=this.options.title ||"";
			this.elements.titlebar.appendChild(this.elements.title);

			/*
			*
			* titlebar End
			*
			*/




			/*
			*
			* frontend End
			*
			*/
		
			/*
			*
			* shadow Begin
			*
			*/
			if(this.options.fx.shadow===true)
			{
				this.createShadow();
			}
			/*
			*
			* shadow End
			*
			*/


			
			/*
			*
			* backend Begin
			*
			*/
			this.elements.backend = document.createElement("div");
			this.parent.exec(this.styles.backend,false,false,this);
			this.elements.containerWindow.appendChild(this.elements.backend);
			/*
			*
			* backend End
			*
			*/
			
			/*
			*
			* controls Begin
			*
			*/
			if(this.options.control)
			{
				if(this.options.control.drag){this.dragElements();}
				this.createControls();
			}
			/*
			*
			* controls End
			*
			*/

		};
		this.dragElements=function()		
		{
			this.parent.dom.setStyle(this.elements.title,{cursor:"move"});
			this.drag=new this.parent.module.drag({
					link:{
						elements:[this.elements.title],
						ref:((this.options.fx.shadow===true)?[this.elements.containerWindow,this.elements.shadow]:[this.elements.containerWindow])
					}
			});
			this.drag.events={
				init:this.parent.execHandler({
					method:this.fx.setOpacity,
					instance:this
				}),
				finish:this.parent.execHandler({
					method:this.fx.unsetOpacity,
					instance:this
				})
			};
			this.drag.make();
		}
		this.createControls=function()
		{
			this.controls=[];

			/* Close */
			if(this.options.control.close)
			{
				this.elements.close = document.createElement("div");
				this.parent.exec(this.styles.close,false,false,this);
				this.controls.push(this.elements.close);
				this.elements.titlebar.appendChild(this.elements.close);
			}

			/* Rollup/Rolldown */			
			if(this.options.control.roll)
			{
				this.elements.roll = document.createElement("div");
				this.parent.exec(this.styles.roll,false,false,this);
				this.controls.push(this.elements.roll);
				this.elements.titlebar.appendChild(this.elements.roll);
			}

		};
		this.controlPosition=function()
		{
			var cl=this.controls.length+1;
			return ((3*cl)+(this.controlSize.w*this.controls.length));
		};
		this.createShadow=function()
		{
			this.elements.shadow = document.createElement("div");
			this.parent.exec(this.styles.shadow,false,false,this);
			this.target().appendChild(this.elements.shadow);
		};
		this.prepareTmpDB=function()
		{
			if(!this.parent.tmp.panel)
			{
				this.parent.tmp.panel={}
				this.parent.tmp.panel.zIndex=100;
			}
		};
		this.zIndex=function()
		{
			this.parent.tmp.panel.zIndex+=this.stepZindex;
			return this.parent.tmp.panel.zIndex;
		};
		this.target=function()
		{
			return (this.options.target)?this.oprions.target:this.parent.dom.capture("tag.body 0");
		};
		this.fx={
			setOpacity:function()
			{
				//alert(0.5*100)
				this.parent.dom.setStyle(this.elements.containerWindow,{
					opacity:0.8
				});
				if(this.options.shadow===true){
					this.parent.dom.setStyle(this.elements.shadow,{
						opacity:0.02
					});
				}
			},
			unsetOpacity:function()
			{
				this.parent.dom.setStyle(this.elements.containerWindow,{
					opacity:1
				});
				if(this.options.shadow===true){
					this.parent.dom.setStyle(this.elements.shadow,{
						opacity:0.4
					});
				}

			}
		};
		this.styles={
			containerWindow:function()
			{
				this.parent.dom.setStyle(this.elements.containerWindow,{
					width:this.options.size.w || 200,
					height:this.options.size.h || 200,
					border:"1px solid #A3A2BC",
					position:"absolute",
					top:100,
					zIndex:this.options.zIndex || this.zIndex(),
					left:100
				});
				this.parent.dom.setStyle(this.elements.containerWindow,this.setStyle.containerWindow || {});
			},
			frontend:function()
			{
				this.parent.dom.setStyle(this.elements.frontend,{
					width:"100%",
					height:"100%",
					//border:"1px solid blue",
					position:"absolute",
					backgroundColor:"#FFFFFF",
					zIndex:2,
					top:0,
					left:0
				});
				this.parent.dom.setStyle(this.elements.frontend,this.setStyle.frontend || {});

			},
			backend:function()
			{
				this.parent.dom.setStyle(this.elements.backend,{
					width:"100%",
					height:"100%",
					//border:"1px solid green",
					position:"absolute",
					backgroundColor:"red",
					zIndex:1,
					top:0,
					left:0
				});
				this.parent.dom.setStyle(this.elements.backend,this.setStyle.backend || {});

			},
			titlebar:function()
			{
				this.parent.dom.setStyle(this.elements.titlebar,{
					position:"relative",
					height:20,
					overflow:"hidden",
					background:"url("+this.parent.info.base+"images/panel.bg.title.gif)",
					backgroundRepeat:"repeat-x",
					borderBottom:"1px solid #DBE0E5"
					//backgroundColor:"#DBE0E5"
				});
				//alert(this.parent.info.base)
				
				this.parent.dom.setStyle(this.elements.titlebar,this.setStyle.titlebar || {});
			},
			title:function()
			{
				this.parent.dom.setStyle(this.elements.title,{					
					//position:"relative",
					width:"100%",
					height:"100%",
					color:"black",
					font:"normal 8pt Tahoma,MiscFixed",
					fontWeight:"bold",
					paddingLeft:5,
					paddingTop:3,
					zIndex:1
				});
				this.parent.dom.setStyle(this.elements.title,this.setStyle.title || {});
			},
			roll:function()
			{
				this.parent.dom.setStyle(this.elements.roll,{
					position:"absolute",
					top:3,
					font:"normal 0pt tahoma",
					padding:0,
					right:this.controlPosition(),
					height:this.controlSize.h,
					width:this.controlSize.w,
					border:"1px solid #006699",
					zIndex:2
				});
				this.parent.dom.setStyle(this.elements.roll,this.setStyle.roll || {});
			},
			close:function()
			{
				this.parent.dom.setStyle(this.elements.close,{
					font:"normal 0pt tahoma",
					padding:0,
					position:"absolute",
					height:this.controlSize.h,
					top:3,
					right:this.controlPosition(),
					width:this.controlSize.w,
					border:"1px solid red",
					zIndex:2
				});
				this.parent.dom.setStyle(this.elements.close,this.setStyle.close || {});
			},
			shadow:function()
			{
				this.parent.dom.setStyle(this.elements.shadow,{
					width	:this.elements.containerWindow.offsetWidth,
					height	:this.elements.containerWindow.offsetHeight,
					position:"absolute",
					top	:(parseInt(this.parent.dom.getStyle(this.elements.containerWindow,"top"),10)+2),
					left	:(parseInt(this.parent.dom.getStyle(this.elements.containerWindow,"left"),10)+2),
					backgroundColor:"#CCCCCC",
					opacity	:0.4,
					zIndex	:(this.parent.dom.getStyle(this.elements.containerWindow,"zIndex")-2)
				});
				this.parent.dom.setStyle(this.elements.shadow,this.setStyle.shadow || {});
			}

		};
	}
});
