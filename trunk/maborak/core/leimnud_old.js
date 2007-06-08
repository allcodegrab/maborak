/***************************************************************************
*  							  leimnud.js
*                        -------------------
*   copyright			: (C) 2006 leimnud.info
*   email				: maborak@gmail.com
*   Version Actual		: 0.1
*   Ultima Modificacion	: 1164369447
*
***************************************************************************/

/***************************************************************************
*
*   This program is free software; you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation; either version 2 of the License, or
*   (at your option) any later version.
*
***************************************************************************/

var leimnud={
	info:{
		name		:"leimnud.js",
		version		:"0.1",
		autor		:"MaBoRaK",
		base		:false,
		debug		:false
	},
	panel:{
		styles:{
			container:
			{
				position	:"absolute",
				top		:"0px",
				backgroundColor:"#FFFFFF",
				left		:"0px"
			},
			panel_root:
			{
				position	:"absolute",
				textAlign	:"center",
				top			:"0px",
				//backgroundColor:"#006699",
				//border		:"1px solid red", //depurado
				left		:"0px"
				//padding		:"0px"
			},
			panel_menu_false:
			{
				//borderBottom:"1px solid #DBE0E5"
			},
			cms_panel:
			{
				color		:"000000",
				position	:"relative",
				top			:"0px",
				left		:"0px",
				backgroundColor:"#ffffff", //im
				border		:"1px solid #DBE0E5",
				//borderTop	:"0px",
				padding		:"0px",
				//paddingTop	:"10px",
				//paddingBottom:"10px",
				fontFamily	:"Tahoma",
				//height		:"100%",
				//width		:"100%",
				fontSize	:"8pt",
				textDecoration:"none",
				//line-height
				zIndex		:3
			},
			cms_panel_options:{
				cerrar:{
					stat:{
						width:"10px",
						height:"10px",
						position:"absolute",
						margin:"2px",
						//display:"block",
						//backgroundColor:"#006699",
						top:"0px",
						right:"0px",
						cursor:"pointer",
						zIndex:5
					},
					out:{
						background	:function(){return "url("+leimnud.tools.baseURL()+"imagenes/win_cerrar.jpg)";},
						//background	:"url(http://waska.maborak.org/jscripts/leimnud/core/imagenes/win_cerrar.jpg)",
						backgroundPosition:"1px 1px",
						backgroundRepeat:"no-repeat",
						border:"0px solid #cccccc"
					},
					over:{
						border:"1px solid #cccccc"
					},
					down:{
						border:"1px dashed #cccccc"
					}
				},
				contraer:{
					stat:{
						width:"10px",
						height:"10px",
						position:"absolute",
						margin:"2px",

						//display:"block",
						//backgroundColor:"#006699",
						top:"0px",
						right:"14px",
						cursor:"pointer",
						background	:function(){return "url("+leimnud.tools.baseURL()+"imagenes/win_contraer.gif)";},
						backgroundPosition:"1px 2px",
						backgroundRepeat:"no-repeat",
						zIndex:5
					},
					out:{
						backgroundPosition:"1px 2px",
						border:"0px solid #cccccc"
					},
					over:{
						backgroundPosition:"1px 2px",
						border:"1px solid #cccccc"
					},
					down:{
						border:"1px dashed #cccccc"
					},
					contraerd:{
						background	:function(){return "url("+leimnud.tools.baseURL()+"imagenes/win_contraerOpen.gif)";},
						backgroundPosition:"1px 2px",
						backgroundRepeat:"no-repeat"
					},
					title:{
						//width:"100px",
						//height:"10px",
						position:"absolute",
						zIndex:4,
						top:"0px",
						left:"2px",
						margin:"2px",
						marginTop:"1px",
						color:"#000000",
						fontWeight:"bold"
						//overflow:"hidden"
						//backgroundColor:"#006699"
					}
				}
			},
			cms_panel_drag:
			{
				/*Hack for IE begin*/
				backgroundColor:"transparent",
				//opacity:0,

				/*Hack for IE end*/
				color		:"000000",
				position	:"absolute",
				top			:"0px",
				left		:"0px",
				border		:"0px solid #DBE0E5",
				padding		:"0px",
				width		:"100%",
				height		:10,
				cursor		:"move",
				zIndex		:4
			},
			submenu:{
				backgroundColor	:"transparent",
				position		:"relative",
				zIndex			:3
			},
			html:{
				zIndex			:3,
				position		:"relative",
				//padding		:"5px",
				//margin			:"5px",
				padding			:"5px",
				paddingTop		:"10px",
				paddingBottom	:"10px",

				//backgroundColor:"yellow",
				//width			:"100%",
				height			:"100%",
				//border:"1px solid yellow", //depurado
				textAlign		:"center",
				fontFamily	:"Tahoma",
				fontSize	:"8pt",
				overflow:"hidden",
				textDecoration:"none"
			},
			tab:{
				el:{
					ul:
					{
						padding		:"3px 0",
						borderBottom:"1px solid #006699",
						margin		:"0px",
						marginTop	:"1px",
						//backgroundColor:"#006699",
						font		:"normal 8pt Tahoma"
					},
					li:
					{
						listStyle	:"none",
						margin		:"0px",
						display		:"inline"
					},
					a:
					{
						padding		:"3px 0.5em",
						paddingLeft	:"10px",
						paddingRight:"10px",
						marginLeft	:"3px",
						border		:"1px solid #006699",
						borderBottom:"0px",
						backgroundColor:"fafbfc",
						textDecoration:"none",
						font		:"normal 8pt Tahoma",
						cursor		:"pointer",
						color		:"000000"
					},
					a_current:
					{
						backgroundColor	:"#FFFFFF",
						borderBottom:"1px solid white",
						marginLeft	:"15px",
						marginRight	:"12px",
						fontWeight	:"bold",
						color		:"#000000",
						cursor		:"default"
					},
					a_nocurrent:
					{
						padding		:"3px 0.5em",
						paddingLeft	:"10px",
						paddingRight:"10px",
						marginLeft	:"3px",
						marginRight	:"0px",
						border		:"1px solid #DBE0E5",
						borderBottom:"0px",
						backgroundColor:"fafbfc",
						textDecoration:"none",
						font		:"normal 8pt Tahoma",
						cursor		:"pointer",
						color		:"#000000"
					},
					a_over:
					{
						color		:"orange"
					},
					a_out:
					{
						color		:"#000000"
					}
				},
				container:{
					font:"normal 8pt Tahoma"
				},
				submenu:{
					el:{
						ul:{
							padding		:"3px 0",
							borderBottom:"0px solid #666666",
							margin		:"0px",
							marginTop	:"0px",
							font		:"normal 8pt Tahoma"
						},
						li:
						{
							listStyle	:"none",
							margin		:"0px",
							display		:"inline"
						},
						a:
						{
							padding		:"3px 0.5em",
							paddingLeft	:"20px",
							paddingRight:"20px",
							marginLeft	:"3px",
							//border		:"1px solid #DBE0E5",
							backgroundColor:"fafbfc",
							textDecoration:"none",
							font		:"normal 8pt Tahoma",
							cursor		:"pointer",
							color		:"000000"
						},
						a_current:
						{
							backgroundColor	:"#eeeeee",
							background	:"none",
							border		:"1px dashed #DBE0E5",
							paddingLeft	:"20px",
							paddingRight:"20px",
							paddingTop	:"5px",
							paddingBottom:"6px",

							marginLeft	:"3px",
							marginRight	:"0px",
							//fontWeight	:"bold",
							color		:"red",
							cursor		:"default"
						},
						a_nocurrent:
						{
							//padding		:"3px 0.5em",
							background	:function(){return "url("+leimnud.tools.baseURL()+"imagenes/arrow2.jpg)";},
							backgroundRepeat:"repeat-x",
							border		:"1px solid #DBE0E5",
							borderTop	:"0px solid #FF8040",
							paddingLeft	:"20px",
							paddingRight:"20px",
							paddingTop	:"6px",
							paddingBottom:"5px",
							textDecoration:"none",
							font		:"normal 8pt Tahoma",
							cursor		:"pointer",
							color		:"#000000"
						},
						a_over:
						{
							color		:"orange"
						},
						a_out:
						{
							color		:"#000000"
						}
					}
				}
			},
			contextmenu:{
				menu:{
					border:"1px solid #DBE0E5",
					//borderTop	:"0px solid white",
					color:"#666666",
					display:"block",
					textDecoration:"none",
					//width:"100%",
					padding:"3px"
				},
				over:{
					background	:function(){return "url("+leimnud.tools.baseURL()+"imagenes/arrow2.jpg)";},
					backgroundRepeat:"repeat-x",
					border		:"1px solid #DBE0E5",
					borderTop	:"1px solid #ffffff",
					color:"red"
				},
				out:{
					background	:"none",
					borderTop	:"1px solid #DBE0E5",
					color:"#666666"
				}
			}
		},
		element	:false,
		history:[],
		instance:function(UID)
		{
			var inst=leimnud.panel.history[UID];
			return (!inst)?false:inst;
		},
		atributos:function(attr)
		{
			this.history[attr.nombre]=attr;
			this.history[attr.nombre].core=this;
			return ;
		},
		inContainer:function(objEl)
		{
			//alert(objEl);
			var newContainer;
			if(objEl && leimnud.panel.history[objEl].other && leimnud.panel.history[objEl].other.incontainer)
			{
				newContainer=leimnud.panel.history[objEl].other.incontainer;
			}
			else
			{
				if(!document.getElementById("setToContainer"))
				{
					newContainer = document.createElement("span");
					newContainer.id="setToContainer";
					document.body.appendChild(newContainer);
				}
				else
				{
					newContainer=document.getElementById("setToContainer");
				}
			}
			//alert(newContainer.id);
			return newContainer;
			//return document.getElementById("cm_a");
		},
		createContainer:function(ObjHistory,other)
		{
			if(leimnud.browser.isOPERA)
			{

			}
			else
			{
				var newItem = document.createElement("div");
				newItem.id=ObjHistory+"|container";
				//newItem.className		="administrator_loader";
				leimnud.style.set(newItem,leimnud.panel.styles.container);
				newItem.style.height	=(document.body.clientHeight+document.body.scrollTop);
				newItem.style.width		=(document.body.clientWidth+document.body.scrollLeft);
				newItem.style.zIndex	=(this.history[ObjHistory].zIndex-1);
				//alert(other.opacity);
				leimnud.fx.opacity.set(newItem,(other && other.opacity)?other.opacity:0);
				this.inContainer(ObjHistory).appendChild(newItem);
				if(other && other.style){leimnud.style.set(newItem,other.style);}
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{

				}
				else
				{
					leimnud.style.set(newItem,{
						position:"fixed"
					});
				}
				return newItem;
			}
			return;
		},
		create:function(size,position,nombre,zIndex,menu,other)
		{
			var sizeW,sizeH,elemTabPanel;
			var name=nombre;
			var nombre=nombre+"|panel"+Math.floor(Math.random()*99);
			var nnombre=nombre+"panel"+Math.floor(Math.random()*99);
			this.atributos({
				nombre	:nombre,
				zIndex	:zIndex || 3,
				menu	:menu || false,
				size	:size,
				position:position,
				other	:other || false,
				sombra	:false
			});

			this.history[nombre].elementos={};
			var _2=this.history[nombre];
			_2.nnombre=nnombre;
			_2.name=name;
			_2.effects={};
			var container=(!other)?true:((other.container===false)?false:true);
			var ieframe=(!other)?true:((other.ieframe===false)?false:true);
			if(container===true)
			{
				var lock=this.createContainer(nombre,(other && other.container)?other.container:false);
			}
			var contenedor = document.createElement("div"); //contenedor
			leimnud.style.set(contenedor,this.styles.panel_root); //contenedor
			contenedor.style.zIndex=zIndex;
			contenedor.id=nombre+"root";
			var blA = document.createElement("div"); //submenu
			leimnud.style.set(blA,leimnud.panel.styles.submenu);
			var blB 	= document.createElement("div"); //content html
			blB.id 	= name+"html";

			var blC 	= document.createElement("div"); //content html
			blC.id 	= name+"htmlcontainer";
			blC.appendChild(blB);

			leimnud.style.set(blB,leimnud.panel.styles.html);

			if(other && other.fixed)
			{
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{

				}
				else
				{
					leimnud.style.set(contenedor,{
						position:"fixed"
					});
				}
			}

			if(other && other.saveSize)
			{
				if(!leimnud.tools.cookie.isset(other.useCookie+".w")){leimnud.tools.cookie.set(other.useCookie+".w",size.w);sizeW=size.w;}else{sizeW=leimnud.tools.cookie.get(other.useCookie+".w");}
				if(!leimnud.tools.cookie.isset(other.useCookie+".h")){leimnud.tools.cookie.set(other.useCookie+".h",size.h);sizeH=size.h;}else{sizeH=leimnud.tools.cookie.get(other.useCookie+".h");}
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{
					contenedor.style.width=sizeW;
					contenedor.style.height=sizeH;
				}
				else
				{
					if(leimnud.browser.isOPERA)
					{
						contenedor.style.width=sizeW;
						contenedor.style.minHeight=sizeH;
					}
					else
					{
						contenedor.style.minWidth=sizeW;
						contenedor.style.minHeight=sizeH;
					}
					//blB.style.minHeight=size.h;
				}
			}
			else
			{
				sizeW=size.w;
				sizeH=size.h;
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{
					contenedor.style.width=sizeW;
					contenedor.style.height=sizeH;
				}
				else
				{
					contenedor.style.width=sizeW;
					contenedor.style.minHeight=sizeH;
					//contenedor.style.height=sizeH;
					//blB.style.minHeight=size.h;
				}
			}
			//alert(sizeW+":"+sizeH)
			if(!menu)
			{
				var fmenu=document.createElement("div");
				//fmenu.className="css_panel_menu_false";
				leimnud.style.set(fmenu,this.styles.panel_menu_false); //menu
				//contenedor.appendChild(fmenu);
				this.history[nombre].elementos.menu=false;
				if(other && other.style && other.style.menu)
				{leimnud.style.set(fmenu,other.style.menu);}
			}
			else
			{
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{
					//elIframe.style.top="0px";
					//elIframe.style.marginTop="-6px";
				}
				elemTabPanel=leimnud.tabPanel.crear(menu,nombre);
				contenedor.appendChild(elemTabPanel);
				this.history[nombre].elementos.menu=elemTabPanel;   //menu
				if(other && other.style && other.style.menu){leimnud.style.set(elemTabPanel,other.style.menu);}
			}
			var context = document.createElement("div"); //cmspanel
			leimnud.style.set(context,this.styles.cms_panel);
			//context.style.minHeight=sizeH;   //panel

			if(leimnud.browser.isIE && !leimnud.browser.isOPERA && ieframe)
			{
				var elIframe=document.createElement("iframe");
				elIframe.style.position="absolute";
				elIframe.style.left="0px";
				elIframe.style.top="0px";
				//elIframe.style.marginTop=(menu)?"-5px":"0px";
				elIframe.style.width="100%";
				elIframe.style.backgroundColor="transparent";
				elIframe.style.border="0px solid #ff4400";
				elIframe.style.height=sizeH;
				elIframe.frameBorder="no";
				elIframe.style.zIndex=1;
				elIframe.scrolling="no";
				elIframe.src="about:blank";
				contenedor.appendChild(elIframe);
				//leimnud.fx.opacity.set(elIframe,0);
			}


			//context.className="cms_panel";
			context.id=nombre;
			if(menu)
			{
				context.style.borderTop="0px";
			}
			else
			{
				context.style.borderTop="1px solid #DBE0E5";
			}

			contenedor.appendChild(context); //insertar cmspanel

			//context.appendChild(blA); //bloque submenu
			context.appendChild(blC); //bloque html
			/*resize Fix begin*/
			if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
			{
				context.style.height=sizeH;
			}
			else
			{
				context.style.minHeight=sizeH;
				//blB.style.minHeight=sizeH;
			}   //panel
			/*resize Fix end*/


			if(_2.other.botones)
			{
				if(_2.other.botones.cerrar)
				{
					var _2a=document.createElement("div");
					_2a.id=nombre+"|tocerrar";
					if(typeof _2.other.botones.cerrar!="object"){
						_2.other.botones.cerrar={};
					}
					leimnud.style.set(_2a,leimnud.panel.styles.cms_panel_options.cerrar.stat);
					leimnud.style.set(_2a,leimnud.panel.styles.cms_panel_options.cerrar.out);
					leimnud.event.add(_2a,"mouseover",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.cerrar.element,leimnud.panel.styles.cms_panel_options.cerrar.over);
					});
					leimnud.event.add(_2a,"mouseout",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.cerrar.element,leimnud.panel.styles.cms_panel_options.cerrar.out);
					}
					);
					leimnud.event.add(_2a,"mousedown",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.cerrar.element,leimnud.panel.styles.cms_panel_options.cerrar.down);
					}
					);
					if(_2.other.botones.cerrar._function)
					{

					}
					else
					{
						/*	leimnud.event.add(_2a,"mouseup",function(){
						leimnud.panel.remove();*/
						leimnud.event.add(_2a,"mouseup",leimnud.panel.remove);
					}
					_2.other.botones.cerrar.element=_2a;
					context.appendChild(_2a);
				}
				if(_2.other.botones.contraer)
				{
					_2.other.botones.contraer={};
					var _2b=document.createElement("div");
					_2b.title="Contraer contenido";
					_2b.id=nombre+"|tocontraer";
					var _4b=document.createElement("div");
					_4b.id=nombre+"|title";
					_4b.innerHTML=(_2.other.botones.titulo)?_2.other.botones.titulo:"";
					_4b.style.visibility="hidden";

					leimnud.style.set(_4b,leimnud.panel.styles.cms_panel_options.contraer.title);

					leimnud.style.set(_2b,leimnud.panel.styles.cms_panel_options.contraer.stat);
					leimnud.style.set(_2b,leimnud.panel.styles.cms_panel_options.contraer.out);
					if(!_2.other.botones.cerrar){_2b.style.right="0px";}
					leimnud.event.add(_2b,"mouseover",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						_2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.contraer.element,leimnud.panel.styles.cms_panel_options.contraer.over);
					});
					leimnud.event.add(_2b,"mouseout",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						_2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.contraer.element,leimnud.panel.styles.cms_panel_options.contraer.out);
					});
					leimnud.event.add(_2b,"mousedown",function(event){
						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						_2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						leimnud.style.set(_2c.other.botones.contraer.element,leimnud.panel.styles.cms_panel_options.contraer.down);
					});
					leimnud.event.add(_2b,"mouseup",function(event){

						var _2c=leimnud.panel.history[leimnud.panel.getidFromMorph(leimnud.event.get(event).id)];
						if(_2c.other.botones.contraerd)
						{
							if(_2c.elementos.resize)
							{
								_2c.elementos.resize.style.visibility="visible";
							}
							_2c.other.botones.contraerTitle.element.style.visibility="hidden";
							_2c.other.botones.contraer.element.title="Contraer contenido";
							_2c.other.botones.contraerd=false;
							leimnud.style.set(_2c.other.botones.contraer.element,leimnud.panel.styles.cms_panel_options.contraer.stat);
							if(!_2c.other.botones.cerrar){_2c.other.botones.contraer.element.style.right="0px";}

							_2c.elementos.html.style.display=""; //element visible
							_2c.elementos.html.style.visibility="visible"; //element visible


							if(leimnud.browser.isIE===true && leimnud.browser.isOPERA===false)
							{
								_2c.elementos.root.style.height=_2c.size.h;
								_2c.elementos.content.style.height=_2c.size.h;
							}
							else
							{
								_2c.elementos.root.style.minHeight=_2c.size.h;
								_2c.elementos.content.style.minHeight=_2c.size.h;
							}
							if(_2c.sombra)
							{
								_2c.elementos.sombra.style.height=_2c.elementos.content.offsetHeight+"px";
								_2c.elementos.sombra.style.width=_2c.elementos.content.offsetWidth+"px";
							}
						}
						else
						{
							if(_2c.elementos.resize){_2c.elementos.resize.style.visibility="hidden";}
							_2c.other.botones.contraerTitle.element.style.visibility="visible"; //mostrar titulo

							_2c.other.botones.contraer.element.title="Expandir contenido";
							_2c.other.botones.contraerd=true;
							leimnud.style.set(_2c.other.botones.contraer.element,leimnud.panel.styles.cms_panel_options.contraer.contraerd);
							_2c.elementos.html.style.display="none"; //content hidden
							_2c.elementos.html.style.visibility="hidden"; //content hidden
							if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
							{
								_2c.elementos.content.style.height="20px";
								_2c.elementos.root.style.height="20px";
							}
							else
							{
								_2c.elementos.content.style.minHeight="15px";
								_2c.elementos.root.style.minHeight="15px";
							}
							if(_2c.sombra)
							{
								_2c.elementos.sombra.style.height=_2c.elementos.content.offsetHeight+"px";
								_2c.elementos.sombra.style.width=_2c.elementos.content.offsetWidth+"px";
							}
						}
					});
					context.appendChild(_2b);
					context.appendChild(_4b);
					_2.other.botones.contraer.element=_2b;
					_2.other.botones.contraerTitle={element:_4b};
				}
			}


			this.inContainer(nombre).appendChild(contenedor);

			if(other && other.savePosition)
			{

				if(!leimnud.tools.cookie.isset(other.useCookie+".x"))
				{
					contenedor.style.left=(((position.x)?position.x:0)-((position.center)?contenedor.clientWidth/2:0))+"px";
					leimnud.tools.cookie.set(other.useCookie+".x",parseInt(contenedor.style.left,10));
				}
				else
				{
					contenedor.style.left=leimnud.tools.cookie.get(other.useCookie+".x");
				}
				if(!leimnud.tools.cookie.isset(other.useCookie+".y"))
				{
					contenedor.style.top=(((position.y)?position.y:0)-((position.center)?contenedor.clientHeight/2:0))+"px";
					leimnud.tools.cookie.set(other.useCookie+".y",parseInt(contenedor.style.top,10));
				}
				else
				{
					contenedor.style.top=leimnud.tools.cookie.get(other.useCookie+".y");
				}

			}
			else
			{
				contenedor.style.left=(((position.x)?position.x:0)-((position.center)?contenedor.clientWidth/2:0))+"px";
				contenedor.style.top=(((position.y)?position.y:0)-((position.center)?contenedor.clientHeight/2:0))+"px";
			}


			if(other && other.style && other.style.panel) //html
			{leimnud.style.set(context,other.style.panel);}
			if(other && other.style && other.style.html) //html
			{leimnud.style.set(blB,other.style.html);}
			if(menu && leimnud.browser.isIE && !leimnud.browser.isOPERA && ieframe)
			{
				//elIframe.style.top=(elemTabPanel.offsetHeight-0)+"px"; //bug to fix
				elIframe.style.top=(elemTabPanel.offsetHeight-6)+"px"; //bug to fix
				elIframe.style.width="100%";
				elIframe.style.height=sizeH;
			}

			if(other && other.style && other.style.panel_root)
			{leimnud.style.set(contenedor,other.style.panel_root);}

			this.history[nombre].size={w:sizeW,h:sizeH};
			this.history[nombre].elementos.root		=contenedor;
			this.history[nombre].elementos.content	=context;
			this.history[nombre].elementos.submenu	=blA;
			this.history[nombre].elementos.htmlcontainer	=blC;
			this.history[nombre].elementos.html		=blB;
			this.history[nombre].elementos.lock		=(container)?lock:false;
			if(menu)
			{
				leimnud.tabPanel.open(false,menu.name+"|"+leimnud.tabPanel.tab[menu.name].current,false);
			}
			return nombre;
		},
		DOM:function(ObjHistory,element)
		{
			var DOMobj,inst=this.history[ObjHistory];
			if(element=="root")
			{
				DOMobj=inst.elementos.root;
			}
			else if(element=="lock")
			{
				DOMobj=inst.elementos.lock;
			}
			else if(element=="content")
			{
				DOMobj=inst.elementos.content;
			}
			else if(element=="htmlcontainer")
			{
				DOMobj=inst.elementos.htmlcontainer;
			}
			else if(element=="submenu")
			{
				DOMobj=inst.elementos.submenu;
			}
			else if(element=="html")
			{
				DOMobj=inst.elementos.html;
			}
			else if(element=="shadow")
			{
				DOMobj=inst.elementos.sombra || false;
			}
			return DOMobj;
		},
		scroll:{
			add:function(ObjHistory)
			{
				var inst=leimnud.panel.history[ObjHistory];
				//inst.elementos.html.style.border="3px solid black";
				leimnud.style.set(inst.elementos.htmlcontainer,{
					margin:5,
					border:"1px solid red",
					//marginRight:5,
					position:"relative",
					height:inst.size.h-10,
					width:"100%",
					overflow:"hidden"
				});
				//alert(inst.size.h);
				leimnud.style.set(inst.elementos.html,{
					//position:"absolute",
					//border:"3px solid yellow",
					marginRight:20,
					padding:0,
					paddingRight:15,
					overflow:""
					//width:inst.size.w-150
					//height:800,
					//top:0,
					//left:0
				});
				//inst.elementos.htmlcontainer.id="wn200";
				//inst.elementos.html.id="lyr200";

				var nmScroll=inst.name,nmScrolltainer=inst.name+"html";
				var dvScroll=document.createElement("div");
				leimnud.style.set(dvScroll,{
					position:"absolute",
					overflow:"hidden",
					border:"1px solid red",
					right:0,
					top:10,
					height:inst.size.h-90,
					width:13,
					zIndex:44
				});
				dvScroll.id=nmScroll;
				edr=	"<div id='scrollbar200' style='position:relative;left:0;top:0;height:100%;width:100%'>"+
				"			<div style='position:absolute;top:0;left:0;z-index:3;'>"+
				"				<a href='#' onmouseover=\"dw_scrollObj.initScroll('"+nmScroll+"','up')\" onmouseout=\"dw_scrollObj.stopScroll('"+nmScroll+"')\" onmousedown=\"dw_scrollObj.doubleSpeed('"+nmScroll+"')\" onmouseup=\"dw_scrollObj.resetSpeed('"+nmScroll+"')\">"+
				"					<img src='/images/btn-up.gif' width='11' height='11' border=0 />"+
				"				</a>"+
				"			</div>"+
				"			<div id='track200' style='z-index:2;width:9px;position:absolute;height:100%;left:0;top:0;'>"+
				"				<div id='dragBar200' style='top:0;left:0;position:absolute;width:9px;background-color:black;'></div>"+
				"			</div>"+
				"			<div style='position:absolute;bottom:-3;left:0;z-index:3;'>"+
				"				<a href='#' onclick='return false' onmouseover=\"dw_scrollObj.initScroll('"+nmScroll+"','down')\" onmouseout=\"dw_scrollObj.stopScroll('"+nmScroll+"')\" onmousedown=\"dw_scrollObj.doubleSpeed('"+nmScroll+"')\" onmouseup=\"dw_scrollObj.resetSpeed('"+nmScroll+"')\">"+
				"					<img src='/images/btn-dn.gif' width=11 height=11 border=0 />"+
				"				</a>"+
				"			</div>"+
				"</div>";
				dvScroll.innerHTML=edr;
				inst.elementos.htmlcontainer.appendChild(dvScroll);

				var wndo = new dw_scrollObj(nmScroll,nmScrolltainer);
				wndo.setUpScrollbar("dragBar200", "track200", "v", 1, 1);
				dw_scrollObj.GeckoTableBugFix(nmScroll);
			},
			remove:function(ObjHistory)
			{
			}
		},
		element:function(ObjHistory)
		{
			return this.history[ObjHistory].elementos.html;
		},
		html:function(ObjHistory,html)
		{
			//alert(html)
			if(typeof html=="string")
			{
				var kj=document.createElement("span");
				kj.innerHTML=html;
				this.history[ObjHistory].elementos.html.appendChild(kj);
			}
			else if(typeof html=="object")
			{
				this.history[ObjHistory].elementos.html.appendChild(html);
			}
		},
		sombra:function(ObjHistory,opciones)
		{
			var rh,opacity,color,contenedor,w,h;
			var issetMenu=this.history[ObjHistory].menu;
			rh=(!issetMenu)?0:this.history[ObjHistory].elementos.menu.offsetHeight;
			if(document.getElementById(ObjHistory+"root|sombra"))
			{
				contenedor = document.getElementById(ObjHistory+"root|sombra");
				w=this.history[ObjHistory].elementos.content.offsetWidth;
				h=this.history[ObjHistory].elementos.root.offsetHeight;
				//restMHeight=(!this.history[ObjHistory].menu)?0:this.history[ObjHistory].elementos.menu.offsetHeight;
				//contenedor.style.width=this.history[ObjHistory].elementos.root.clientWidth+"px";
				contenedor.style.width=w;
				contenedor.style.height=(h-rh)+((issetMenu)?7:0);
			}
			else
			{
				w=this.history[ObjHistory].elementos.content.offsetWidth;
				h=this.history[ObjHistory].elementos.root.offsetHeight;

				//h=(leimnud.browser.isNS)?h+1:h;

				color=(opciones.sombra.color)?opciones.sombra.color:"#000000";
				opacity=(opciones.sombra.opacity)?opciones.sombra.opacity:100;
				contenedor = document.createElement("div");
				contenedor.style.width=w;

				//restMHeight=(!this.history[ObjHistory].menu)?0:this.history[ObjHistory].elementos.menu.offsetHeight-((leimnud.browser.isIE && !leimnud.browser.isOPERA)?6:0); //antes
				//restMHeight=(!this.history[ObjHistory].menu)?0:this.history[ObjHistory].elementos.menu.offsetHeight;
				//restMHeight=restMHeight;
				contenedor.style.height=(h-rh)+((issetMenu)?7:0);


				//window.status=(this.history[ObjHistory].elementos.root.style.height)+":"+(this.history[ObjHistory].elementos.root.clientHeight-restMHeight);
				//alert(this.history[ObjHistory].size.h+"px");
				/*contenedor.style.height=this.history[ObjHistory].elementos.htmlcontainer.offsetHeight+"px";*/
				//contenedor.style.height=this.history[ObjHistory].size.h+"px";
				//contenedor.style.height=this.history[ObjHistory].elementos.content.offsetHeight;
				contenedor.style.position="absolute";
				contenedor.style.backgroundColor=color;
				this.inContainer(ObjHistory).appendChild(contenedor);
				this.history[ObjHistory].sombra=true;
				this.history[ObjHistory].elementos.sombra=contenedor;
				contenedor.style.left=(parseInt(this.history[ObjHistory].elementos.root.style.left)+2)+"px";
				contenedor.style.top=(parseInt(this.history[ObjHistory].elementos.root.style.top)+((issetMenu)?-5:2))+rh+"px";
				contenedor.style.zIndex=(parseInt(this.history[ObjHistory].elementos.root.style.zIndex)-1);
				contenedor.id=ObjHistory+"root|sombra";
				leimnud.fx.opacity.set(contenedor,opacity);
				this.history[ObjHistory].sombra=true;
				this.history[ObjHistory].elementos.sombra=contenedor;
				if(this.history[ObjHistory].other && this.history[ObjHistory].other.fixed)
				{
					if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
					{

					}
					else
					{
						leimnud.style.set(contenedor,{
							position:"fixed"
						});
					}
				}
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{
					var elIframe=document.createElement("iframe");
					elIframe.style.position="absolute";
					elIframe.style.left="0px";
					elIframe.style.top="0px";
					//elIframe.style.marginTop=(menu)?"-5px":"0px";
					elIframe.style.width="100%";
					elIframe.style.backgroundColor="transparent";
					elIframe.style.border="0px solid #ff4400";
					elIframe.style.height="100%";
					elIframe.frameBorder="no";
					elIframe.style.zIndex=1;
					elIframe.scrolling="no";
					elIframe.src="about:blank";
					contenedor.appendChild(elIframe);
					leimnud.fx.opacity.set(elIframe,0);
				}
			}
			return;
		},
		remove:function(event)
		{
			if(typeof event=="object")
			{
				objeto=leimnud.event.get(event);
				id=leimnud.panel.getidFromMorph(objeto.id);
			}
			else if(typeof event=="string")
			{
				id=event;
			}
			document.getElementById(id+"root").style.visibility="hidden";
			//leimnud.getEvent(event).id=id+"|remove";

			if(document.getElementById(id+"root|sombra"))
			{
				document.getElementById(id+"root|sombra").style.visibility="hidden";
				leimnud.tools.element.remove(id+"root|sombra");
			}
			if(document.getElementById(id+"|container"))
			{
				document.getElementById(id+"|container").style.visibility="hidden";
				leimnud.tools.element.remove(id+"|container")
			}
			leimnud.tools.element.remove(id+"root");
		},
		exist:function(objeto)
		{
			return (document.getElementById(objeto+"root"))?true:false;
		},
		removeFromId:function(objeto)
		{
			id=objeto;
			document.getElementById(id+"root").style.visibility="hidden";

			if(document.getElementById(id+"root|sombra"))
			{
				document.getElementById(id+"root|sombra").style.visibility="hidden";
				leimnud.tools.element.remove(id+"root|sombra");
			}
			if(document.getElementById(id+"|container"))
			{
				document.getElementById(id+"|container").style.visibility="hidden";
				leimnud.tools.element.remove(id+"|container")
			}
			leimnud.tools.element.remove(id+"root");
		},
		createDrag:function(ObjHistory,styleObj,fullScreen,addEvent,onState)
		{
			dragd=document.createElement("div")
			//dragd.className="cms_panelDrag";
			leimnud.style.set(dragd,this.styles.cms_panel_drag);
			leimnud.panel.history[ObjHistory].drag={
				fullScreen	:fullScreen || false,
				addEvent	:addEvent || false,
				onState		:onState || false
			};
			dragd.id=ObjHistory+"|drag";
			if(addEvent){
				if(addEvent[0])
				{
					for(h=0;h<addEvent.length;h++)
					{
						leimnud.event.add(dragd,addEvent[h].on,addEvent[h].go);
					}
				}
				else
				{
					leimnud.event.add(dragd,addEvent.on,addEvent.go);
				}
			}
			leimnud.event.add(dragd,"mousedown",leimnud.panel.dragStart);
			this.history[ObjHistory].elementos.content.appendChild(dragd);
			if(styleObj){leimnud.style.set(dragd,styleObj);}

			if(fullScreen)
			{
				if(leimnud.browser.isOPERA)
				{
					dragd.style.height=this.history[ObjHistory].elementos.content.offsetHeight;
				}
				else
				{
					dragd.style.height="100%";
				}
			}

			/*resize begin*/
			if(this.history[ObjHistory].other.resize)
			{
				res=document.createElement("div");
				res.id=ObjHistory+"|resize";
				leimnud.style.set(res,{
					width:"15px",
					height:"15px",
					position:"absolute",
					//backgroundColor:"#006699",
					zIndex:4,
					right:"1px",
					//top:"100%",
					bottom:(leimnud.browser.isIE && !leimnud.browser.isOPERA)?"1px":"1px",
					cursor:"nw-resize",
					background	:"url("+leimnud.tools.baseURL()+"imagenes/resize.gif)",
					backgroundRepeat:"no-repeat",
					backgroundPosition:"100% 100%"
				}
				)
				this.history[ObjHistory].elementos.resize=res;
				this.history[ObjHistory].elementos.content.appendChild(res);
				leimnud.event.add(res,"mousedown",leimnud.panel.resize.start);
			}
			/*resize end*/
		},
		loader:{
			begin:function(ObjHistory)
			{
				if(document.getElementById(ObjHistory+"|loader"))
				{
					return
				}
				else
				{
					/*loader begin*/
					res=document.createElement("div");
					res.id=ObjHistory+"|loader";
					leimnud.style.set(res,{
						left:"0px",
						top:"0px",
						width:"100%",
						//height:((leimnud.browser.isOPERA)?leimnud.panel.history[ObjHistory].elementos.content.offsetHeight:"100%"),
						height:leimnud.panel.history[ObjHistory].elementos.content.offsetHeight,
						position:"absolute",
						background	:"url("+leimnud.tools.baseURL()+"imagenes/loading_basic.gif)",
						backgroundRepeat:"no-repeat",
						backgroundPosition:"50% 50%",
						//backgroundColor:"#006699",
						zIndex:4});
						/*//res.innerHTML="Loading...";
						listS=document.createElement("table");
						leimnud.style.set(listS,{
						width:"100%",
						height:"100%"
						});
						listTitles=listS.insertRow(-1);
						newCell=listTitles.insertCell(0);
						leimnud.style.set(newCell,{
						verticalAlign:"middle",
						padding:"5px",
						backgroundColor:"#006699"
						textAlign:"center"
						});
						ldr = new Image(32,32);
						ldr.src="http://waska.maborak.org/imagenes/loading_basic.gif";
						newCell.appendChild(ldr);
						newCell.innerHTML+="<br>Cargando Sistema: espere un momento...";
						res.appendChild(listS);
						*/
						leimnud.panel.history[ObjHistory].elementos.content.appendChild(res);

						/*loader end*/
				}
			},
			end:function(ObjHistory)
			{
				if(document.getElementById(ObjHistory+"|loader"))
				{
					leimnud.tools.element.remove(document.getElementById(ObjHistory+"|loader"));
				}
			}
		},
		getidFromMorph:function(id)
		{
			valores=id.split("|");
			newval=[];
			for(i=0;i<(valores.length-1);i++)
			{
				newval[i]=valores[i];
			}
			return newval.join("|");
		},
		clean:function(Obj)
		{
			//alert(Obj);
			leimnud.panel.history[Obj].elementos.html.innerHTML="";

			if(document.getElementById(Obj+"root|sombra"))
			{
				delete(leimnud.panel.history[Obj].elementos.sombra);
				delete(leimnud.panel.history[Obj].sombra);
				document.getElementById(Obj+"root|sombra").style.visibility="hidden";
				leimnud.tools.element.remove(Obj+"root|sombra");
			}
		},
		clearAll:function(ObjHistory)
		{
			//leimnud.panel.inContainer((ObjHistory && typeof objRef == "string")?ObjHistory:false).style.visibility="hidden";
			//leimnud.panel.inContainer((ObjHistory && typeof objRef == "string")?ObjHistory:false).style.display="none";
			leimnud.panel.inContainer((ObjHistory && typeof objRef == "string")?ObjHistory:false).innerHTML="";
			//leimnud.panel.inContainer((ObjHistory && typeof objRef == "string")?ObjHistory:false).style.visibility="hidden";
			//leimnud.panel.inContainer((ObjHistory && typeof objRef == "string")?ObjHistory:false).style.visibility="visible";
		},
		dragStart:function(event)
		{
			tid=leimnud.panel.getidFromMorph(leimnud.event.get(event).id);
			arrEls=[];
			arrEls[0]={
				onFinish:false,
				el		:leimnud.panel.history[tid].elementos.root
			};
			if(leimnud.panel.history[tid].sombra)
			{
				arrEls[1]={
					onFinish:false,
					el		:leimnud.panel.history[tid].elementos.sombra
				};
			}
			var cbP=false;
			if(leimnud.panel.history[tid].drag.onState)
			{
				var cb=leimnud.panel.history[tid].drag.onState;
				if(leimnud.panel.history[tid].other.savePosition){cb[cb.length]={_on:"finish",_in:"end",_function:leimnud.panel.savePosition,param:false};}
				cbP=cb;
			}
			leimnud.drag.ini(
			{
				objetos	:arrEls,
				event	:event,
				other	:{
					callback:cbP
				}
			});
		},
		resize:{
			start:function(event)
			{
				//alert(leimnud.panel.getidFromMorph(leimnud.event.get(event).id))
				Obj=leimnud.panel.getidFromMorph(leimnud.event.get(event).id);
				leimnud.panel.resize.tmp={
					cursorStartX	:leimnud.tools.position.cursor(event,"x"),
					cursorStartY	:leimnud.tools.position.cursor(event,"y"),
					Obj				:Obj,
					startWidth		:leimnud.panel.history[Obj].elementos.root.offsetWidth,
					startHeight		:((leimnud.browser.isIE && !leimnud.browser.isOPERA)?parseInt(leimnud.panel.history[Obj].elementos.root.style.height):leimnud.panel.history[Obj].elementos.root.offsetHeight),
					htmlstartHeight	:leimnud.panel.history[Obj].elementos.html.offsetHeight
				};

				if(leimnud.panel.history[Obj].other.resize && leimnud.panel.history[Obj].other.resize.elements2resize)
				{
					e2r=leimnud.panel.history[Obj].other.resize.elements2resize
					leimnud.panel.resize.tmp.a2rEl=[];
					for(v=0;v<e2r.length;v++)
					{
						if(leimnud.panel.history[Obj].other.resize.updateCookies)
						{
							__name=leimnud.panel.history[Obj].other.useCookie;
							ukh=leimnud.panel.cookie[__name];
							__subname=ukh.e2resize[v].name;
							__finalName=__name+"."+__subname+".";
						}
						leimnud.panel.resize.tmp.a2rEl[v]={
							h:((leimnud.panel.history[Obj].other.resize.updateCookies)?parseInt(leimnud.tools.cookie.get(__finalName+"height")):e2r[v].offsetHeight),
							//h:e2r[v].offsetHeight,
							w:((leimnud.panel.history[Obj].other.resize.updateCookies)?parseInt(leimnud.tools.cookie.get(__finalName+"width")):e2r[v].offsetWidth)
							//w:e2r[v].offsetWidth
						}
						//					window.status=((leimnud.panel.history[Obj].other.resize.updateCookies)?leimnud.tools.cookie.get(__finalName+"height"):e2r[v].offsetHeight)
					}
				}
				window.status=leimnud.panel.history[Obj].elementos.root.style.height+":root height "+leimnud.panel.resize.tmp.startHeight+": html height "+leimnud.panel.resize.tmp.htmlstartHeight;
				if (leimnud.browser.isIE) {
					document.attachEvent("onmousemove", leimnud.panel.resize.on);
					document.attachEvent("onmouseup",	leimnud.panel.resize.off);
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}
				else
				{
					document.addEventListener("mousemove", leimnud.panel.resize.on,   true);
					document.addEventListener("mouseup",   leimnud.panel.resize.off, true);
					event.preventDefault();
				}
			},
			on:function(event)
			{
				leimnud.panel.resize.tmp.cursorPageX=leimnud.tools.position.cursor(event,"x");
				leimnud.panel.resize.tmp.cursorPageY=leimnud.tools.position.cursor(event,"y");

				tid=leimnud.panel.resize.tmp.Obj;
				ob=leimnud.panel.history[tid].elementos.root;
				ob2=leimnud.panel.history[tid].elementos.content;
				diffX=leimnud.panel.resize.tmp.cursorPageX - leimnud.panel.resize.tmp.cursorStartX;
				diffY=leimnud.panel.resize.tmp.cursorPageY - leimnud.panel.resize.tmp.cursorStartY;
				newWidth=(leimnud.panel.resize.tmp.startWidth + diffX);
				newHeight=(leimnud.panel.resize.tmp.startHeight + diffY);
				window.status=newWidth+":"+ob.offsetWidth;
				if(newWidth>5)
				{
					if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
					{
						ob.style.width = newWidth + "px";
						//ob.style.height= newHeight + "px";
						ob.style.height= ((newHeight<0)?0:newHeight)+ "px";
						//ob2.style.offsetHeight= newHeight;
					}
					else
					{
						ob.style.minWidth = newWidth + "px";
						//ob.style.height= newHeight + "px";
						ob.style.minHeight= newHeight + "px";
						ob2.style.minHeight= newHeight + "px";
					}

					/*resize Begin*/
					if(leimnud.panel.history[tid].other.resize && leimnud.panel.history[Obj].other.resize.elements2resize)
					{
						e2r=leimnud.panel.history[tid].other.resize.elements2resize
						for(v=0;v<e2r.length;v++)
						{
							//window.status=leimnud.panel.resize.tmp.a2rEl[v].h+diffY;
							minWidth=parseInt((leimnud.panel.cookie[__name].e2resize[v].min && leimnud.panel.cookie[__name].e2resize[v].min.w)?leimnud.panel.cookie[__name].e2resize[v].min.w:0);
							maxWidth=parseInt((leimnud.panel.cookie[__name].e2resize[v].max && leimnud.panel.cookie[__name].e2resize[v].max.w)?leimnud.panel.cookie[__name].e2resize[v].max.w:0);

							minHeight=parseInt((leimnud.panel.cookie[__name].e2resize[v].min && leimnud.panel.cookie[__name].e2resize[v].min.h)?leimnud.panel.cookie[__name].e2resize[v].min.h:0);
							maxHeight=parseInt((leimnud.panel.cookie[__name].e2resize[v].max && leimnud.panel.cookie[__name].e2resize[v].max.h)?leimnud.panel.cookie[__name].e2resize[v].max.h:0);
							//minHeight=(leimnud.panel.cookie[__name].e2resize[v].min && leimnud.panel.cookie[__name].e2resize[v].min.h)?leimnud.panel.cookie[__name].e2resize[v].min.h:10;
							//e2r[v].style.height=leimnud.panel.resize.tmp.a2rEl[v].h+diffY;
							if(parseInt(leimnud.panel.resize.tmp.a2rEl[v].w+diffX) < minWidth )
							{
								e2r[v].style.width=minWidth;
							}
							else if(parseInt(leimnud.panel.resize.tmp.a2rEl[v].w+diffX) > maxWidth && maxWidth!=0)
							{
								e2r[v].style.width=maxWidth;
							}
							else
							{
								if(leimnud.panel.resize.tmp.a2rEl[v].w < minHeight && leimnud.panel.resize.tmp.a2rEl[v].w<=0)
								{
									nWidth=0;
								}
								else
								{
									nWidth=leimnud.panel.resize.tmp.a2rEl[v].w;
								}
								e2r[v].style.width=parseInt(nWidth+diffX);
							}

							if(parseInt(leimnud.panel.resize.tmp.a2rEl[v].h+diffY) < minHeight )
							{
								//window.status="5:"+parseInt(leimnud.panel.resize.tmp.a2rEl[v].h+diffY)+":"+minHeight
								e2r[v].style.height=minHeight;
							}
							else if(parseInt(leimnud.panel.resize.tmp.a2rEl[v].h+diffY) > maxHeight && maxHeight!=0)
							{
								//window.status="6"
								e2r[v].style.height=maxHeight;
							}
							else
							{
								//window.status="7"
								if(leimnud.panel.resize.tmp.a2rEl[v].h < minHeight && leimnud.panel.resize.tmp.a2rEl[v].h<=0)
								{
									nHeight=0;
								}
								else
								{
									nHeight=leimnud.panel.resize.tmp.a2rEl[v].h;
								}
								//window.status+=":"+parseInt(nHeight+diffY);
								e2r[v].style.height=parseInt(nHeight+diffY);
							}

							if(leimnud.panel.history[tid].other.resize.updateCookies)
							{
								__name=leimnud.panel.history[tid].other.useCookie;
								ukh=leimnud.panel.cookie[__name];
								__subname=ukh.e2resize[v].name;
								__finalName=__name+"."+__subname+".";
								leimnud.tools.cookie.set(__finalName+"height",e2r[v].offsetHeight);
								leimnud.tools.cookie.set(__finalName+"width",e2r[v].offsetWidth);
							}
						}
					}
					/*resize End*/
					/*if(leimnud.panel.history[tid].other.saveSize)
					{
					njm=leimnud.panel.history[tid].other.useCookie;
					leimnud.tools.cookie.set(njm+".w",newWidth);
					leimnud.tools.cookie.set(njm+".h",newHeight);
					}*/
					leimnud.panel.history[tid].size.h=newHeight;
					leimnud.panel.history[tid].size.w=newWidth;
					if(leimnud.panel.history[tid].sombra)
					{
						leimnud.panel.history[tid].elementos.sombra.style.height=ob2.offsetHeight+"px";
						leimnud.panel.history[tid].elementos.sombra.style.width=ob2.offsetWidth+"px";
					}
				}

				//window.status="root Beg.height "+leimnud.panel.resize.tmp.startHeight+": html Beg.height "+leimnud.panel.resize.tmp.htmlstartHeight;
				//window.status+=" | root height "+newHeight+": root height "+ob.offsetHeight+":"+ob.style.height;
				if (leimnud.browser.isIE) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}
				else
				{
					event.preventDefault();
				}
			},
			off:function(event)
			{
				elOb=leimnud.panel.history[leimnud.panel.resize.tmp.Obj];
				elOb.startWidth=elOb.elementos.root.offsetWidth;
				nHg=parseInt(elOb.elementos.root.style.height);
				elOb.startHeight=((leimnud.browser.isIE && !leimnud.browser.isOPERA && nHg>0)?nHg:elOb.elementos.root.offsetHeight);
				elOb.htmlstartHeight=elOb.elementos.html.offsetHeight;

				//window.status+=elOb.startHeight+":"+elOb.htmlstartHeight;
				if(leimnud.browser.isIE && !leimnud.browser.isOPERA)
				{
					elOb.elementos.root.style.width = elOb.startWidth + "px";
					elOb.elementos.root.style.height = elOb.startHeight + "px";
				}
				else
				{
					elOb.elementos.root.style.minWidth = elOb.startWidth + "px";
					elOb.elementos.root.style.minHeight= elOb.startHeight + "px";
				}
				if(leimnud.panel.history[leimnud.panel.resize.tmp.Obj].other.saveSize)
				{
					njm=leimnud.panel.history[leimnud.panel.resize.tmp.Obj].other.useCookie;
					leimnud.tools.cookie.set(njm+".w",elOb.startWidth);
					leimnud.tools.cookie.set(njm+".h",elOb.startHeight);
				}

				if (leimnud.browser.isIE) {
					document.detachEvent("onmousemove", leimnud.panel.resize.on);
					document.detachEvent("onmouseup",	leimnud.panel.resize.off);
				}
				if (leimnud.browser.isNS) {
					document.removeEventListener("mousemove", leimnud.panel.resize.on,	true);
					document.removeEventListener("mouseup",   leimnud.panel.resize.off, true);
				}
			}
		},
		cookie:{
			database:[],
			set:function(param)
			{
				leimnud.panel.cookie[param.name]=param;
				for(o in param.vars)
				{
					nm=param.name+"."+o;
					if(leimnud.tools.cookie.isset(nm))
					{
						if(param.replace)
						{
							leimnud.tools.cookie.set(nm,param.vars[o]);
						}
					}
					else
					{
						leimnud.tools.cookie.set(nm,param.vars[o]);
					}
				}
				if(param.e2resize)
				{
					for(p=0;p<param.e2resize.length;p++)
					{
						mm=param.e2resize[p];
						for(k in mm.vars)
						{
							nm=param.name+"."+mm.name+"."+k;
							//alert(nm)
							if(leimnud.tools.cookie.isset(nm))
							{
								if(param.replace)
								{
									leimnud.tools.cookie.set(nm,mm.vars[k]);
								}
							}
							else
							{
								leimnud.tools.cookie.set(nm,mm.vars[k]);
							}
						}
						//bug begin
						mm.el.style.width=leimnud.tools.cookie.get(param.name+"."+mm.name+".width");
						mm.el.style.height=leimnud.tools.cookie.get(param.name+"."+mm.name+".height");
						//bug end
					}
				}
			},
			read:function(param)
			{
				return leimnud.tools.cookie.get(param.from+"."+param.param);
				//alert(leimnud.tools.cookie.get(param.from+"."+param.param))
			}
		},
		savePosition:function(param)
		{
			Obj=leimnud.panel.getidFromMorph(leimnud.event.get(param.paramDrag.event).id);
			tid=leimnud.panel.history[Obj];
			leimnud.tools.cookie.set(tid.other.useCookie+".x",parseInt(tid.elementos.root.style.left));
			leimnud.tools.cookie.set(tid.other.useCookie+".y",parseInt(tid.elementos.root.style.top));
			//		alert(parseInt(tid.elementos.root.style.left)+":"+tid.other.useCookie);
		},
		alert:function(texto,redir)
		{
			lleft=((document.body.clientWidth/2)+document.body.scrollLeft);
			ltop=((document.body.clientHeight/2)+document.body.scrollTop);
			$=leimnud.panel.create({w:300,h:50},{x:lleft,y:ltop-10,center:true},"alert",80,false,{
				botones:{
					cerrar:true
				}
			});
			leimnud.panel.element($).appendChild(document.createElement("br"));
			leimnud.panel.html($,texto);
			leimnud.panel.element($).appendChild(document.createElement("br"))
			leimnud.panel.element($).appendChild(document.createElement("br"))
			leimnud.panel.sombra($,{sombra:{color:"#000000",opacity:30}});
			leimnud.panel.createDrag($);
		}
	},
	browser:new function(){
		var ua, s, i;
		ua = navigator.userAgent;
		this.isIE    = false;
		this.isNS    = false;
		this.isOPERA = false;
		this.version = null;

		s = "MSIE";
		if ((i = ua.indexOf(s)) >= 0) {
			this.isIE = true;
			this.version = parseFloat(ua.substr(i + s.length));
		}

		s = "Netscape6/";
		if ((i = ua.indexOf(s)) >= 0) {
			this.isNS = true;
			this.version = parseFloat(ua.substr(i + s.length));
		}

		s = "Safari";
		if ((i = ua.indexOf(s)) >= 0) {
			this.isSAFARI = true;
			this.version = parseFloat(ua.substr(i + s.length));
		}

		// Treat any other "Gecko" browser as NS 6.1.

		s = "Gecko";
		if ((i = ua.indexOf(s)) >= 0) {
			this.isNS = true;
			this.version = 6.1;
		}

		s = "Opera";
		i=ua.indexOf(s);
		if (i>=0)
		{
			this.isOPERA=true;
			this.version = parseFloat(ua.substr(i + s.length));
		}
		return;
	},
	fx:{
		opacity:{
			set:function(obj,opacity)
			{
				if(leimnud.browser.isIE){
					obj.style.filter="alpha(opacity="+opacity+")";
					obj.style.opacity=(opacity/100);
				}else{
					if(leimnud.browser.isNS){
						obj.style.opacity=(opacity/100);
					}else{
						if(leimnud.browser.isSAFARI){
							obj.style.opacity=(opacity/100);
							obj.style.KhtmlOpacity=(opacity/100);
						}else
						{
							obj.style.opacity=(opacity/100);
						}
					}
				}
				return;
			},
			get:function(obj)
			{
				if(leimnud.browser.isIE){
					aalp=obj.style.filter.split("=");
					aalq=aalp[1].split(")");
					alpha= parseInt(aalq[0]);
				}else{
					if(leimnud.browser.isNS){
						alpha=(obj.style.opacity*100);
						//alert(alpha)
					}else{
						alpha=(obj.style.opacity*100);
					}
				}
				return (isNaN(alpha) || alpha<=0)?100:alpha;
			}
		}
	},
	event:{
		expand:[],
		add:function(objeto,evento,funcion,recursivo,expand){
			expand=expand || false;
			if(expand){this.expand[expand.name]=expand.Obj;}
			if (leimnud.browser.isIE && !leimnud.browser.isOPERA){
				objeto.attachEvent("on"+evento,funcion);
			}
			else
			{
				objeto.addEventListener(evento, funcion,(!recursivo)?false:true);
			}
			return;
		},
		remove:function(obj, evType, fn, recursivo){
			if (obj.removeEventListener){
				obj.removeEventListener(evType, fn,(!recursivo)?false:recursivo);
				return true;
			} else if (obj.detachEvent){
				var r = obj.detachEvent("on"+evType, fn);
				return r;
			} else {
				alert("Handler could not be removed");
			}
		},
		get:function(event)
		{
			if (leimnud.browser.isIE)
			{
				evid = window.event.srcElement;
			}
			else if (leimnud.browser.isNS)
			{
				evid = event.target;
			}
			else
			{
				evid = event.target;
			}
			return evid;
		},
		_null:function(event)
		{
			if (event.preventDefault) {
				event.preventDefault( );
			}
			event.returnValue = false;
		}
	},
	style:{
		set:function(elemento,values)
		{
			for (var i in values) {
				//if(document.getElementById("debug").innerHTML==""){document.getElementById("debug").innerHTML=":"}
				//document.body.innerHTML+=typeof values[iiiiii]+" : "+values[iiiiii]+"<br><br>";
				if(typeof values[i]=="string")
				{
					eval("elemento.style."+i+"=\""+values[i]+"\";");
				}
				if(typeof values[i]=="function")
				{
					eval("elemento.style."+i+"=\""+values[i]()+"\";");
				}
				else if(typeof values[i]=="number")
				{
					eval("elemento.style."+i+"="+values[i]+";");
				}
			}
		}
	},
	xml:{
		nodeValue:function(nodeObj)
		{
			return (!nodeObj.firstChild)?"":nodeObj.firstChild.nodeValue;
		}
	},
	Math:{
		deg2rad:function(num)
		{
			return num * (Math.PI / 180.0);
		},
		rad2deg:function(num)
		{
			return num * (180.0 / Math.PI);
		}
	},
	hacks:{
		elem:
		{
			option:{
				text:function(optObj)
				{
					text=optObj.options[optObj.selectedIndex].text;
					return text;
				}
			}
		}
	},
	tools:{
		loadScript:function(param)
		{

		},
		ejectFunction:function(operation,addArg)
		{
			if(operation._function && typeof operation._function=="function")
			{
				if(addArg)
				{
					if(operation.arguments)
					{
						operation._function(operation.arguments,addArg);
					}
					else
					{
						operation._function(addArg);
					}
				}
				else
				{
					if(operation.arguments)
					{
						operation._function(operation.arguments);
					}
					else
					{
						operation._function();
					}
				}
			}
		},
		loader:function(){
			this.element=false;
			this.top="50%";
			this.left="50%";
			this.text="Loading...";
			this.textPosition

			this.engine=function()
			{
				/*loader begin*/
				res=document.createElement("div");
				res.id=ObjHistory+"|loader";
				leimnud.style.set(res,{
					left:"0px",
					top:"0px",
					width:"100%",
					height:((leimnud.browser.isOPERA)?leimnud.panel.history[ObjHistory].elementos.content.offsetHeight:"100%"),
					position:"absolute",
					background	:"url("+leimnud.tools.baseURL()+"imagenes/loading.gif)",
					backgroundRepeat:"no-repeat",
					backgroundPosition:"50% 50%",
					//backgroundColor:"#006699",
					zIndex:4});
					//res.innerHTML="Loading...";
					leimnud.panel.history[ObjHistory].elementos.content.appendChild(res);
					/*loader end*/
			}
		},
		baseURL:function()
		{
			//window.status="123123"
			return (!leimnud.info.base)?leimnud.tools.getbaseURL("leimnud.js"):leimnud.info.base;
		},
		getbaseURL:function(fileJs)
		{
			var baseURL,elements = document.getElementsByTagName('script');
			var nmFind = fileJs || "leimnud.js";
			for (var i=0; i<elements.length; i++) {
				if (elements[i].src && (elements[i].src.indexOf(nmFind) != -1))
				{
					var Isrc = elements[i].src;
					Isrc = Isrc.substring(0, Isrc.lastIndexOf('/'));
					baseURL = Isrc+"/";
					break;
				}
			}
			//alert(baseURL);
			/*a=document.location.href;
			if (a.indexOf('?') != -1)
			a = a.substring(0, a.indexOf('?'));
			b = a;
			a = a.substring(0, a.lastIndexOf('/'));*/
			return baseURL;
			//alert(a)
		},
		position:{
			absolute:function(elemObj,position)
			{
				offset=0;
				if(position=="x")
				{
					offset=elemObj.offsetLeft;
					while (elemObj.offsetParent) {
						elemObj = elemObj.offsetParent;
						offset += elemObj.offsetLeft;
					}
				}
				else
				{
					offset=elemObj.offsetTop;
					while (elemObj.offsetParent) {
						elemObj = elemObj.offsetParent;
						offset += elemObj.offsetTop;
					}
				}
				return offset;
			},
			cursor:function(event,pos)
			{
				if (leimnud.browser.isIE) {
					x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
					y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
				}
				if (leimnud.browser.isNS) {
					x = event.clientX + window.scrollX;
					y = event.clientY + window.scrollY;
				}
				if(pos=="x")
				{
					out=x;
				}
				else
				{
					out=y;
				}
				return out;
			}
		},
		object:{
			length:function(obj)
			{
				ii=1;
				for (var i in obj) {
					ii+=1;
				}
				return ii;
			},
			getById:function()
			{
				ii=0;
				dev=false
				for (var i in obj) {
					if(ii==id)
					{
						dev=obj[i];
					}
					ii+=1;
				}
				return dev;
			},
			toString:function(obj)
			{
				var val, output = "";
				if (obj)
				{
					output += "{";
					for (var i in obj) {
						val = obj[i];
						//alert(typeof val)
						switch (typeof val) {
							case ("object"):
							if(typeof val.childNodes!="undefined")
							{
								output += i + ":[DOM.Object],\n";
							}
							else if (val[0]) {
								output += i + ":" + leimnud.tools.array.toString(val) + ",\n";
							} else {
								output += i + ": " + leimnud.tools.object.toString(val) + ",\n\n";
							}
							break;
							case ("string"):
							output += i + ":'" + val + "',\n";
							break;
							case ("function"):
							output += i + ":FUNCTION,\n";
							break;
							default:
							output += i + ":" + val + ",\n";
						}
					}
					output = output.substring(0, output.length-1) + "}";
				}
				return output;
			}
		},
		array:{
			toString:function(array)
			{
				var output = "";
				if (array) {
					output += "[\n";
					for (var i in array) {
						val = array[i];
						//alert(typeof val)
						switch (typeof val) {
							case ("object"):
							if(val.childNodes)
							{
								output += i + ":[DOM.Object],\n";
							}
							else if (val[0])
							{
								output += leimnud.tools.array.toString(val) + ",\n";
							}
							else
							{
								output += leimnud.tools.object.toString(val) + ",\n";
							}
							break;
							case ("string"):
							output += "'" + escape(val) + "',\n";
							break;
							default:
							output += val + ",\n";
						}
					}
					output = output.substring(0, output.length-1) + "]\n";
				}
				return output;
			},
			isArray:function(array)
			{
				return (typeof array=="object" && array[0])?true:false;
			}
		},
		string:{
			toObject:function(string)
			{
				eval("var result = " + string);
				return result;
			},
			toArray:function(string)
			{
				eval("var result = " + string);
				return result;
			},
			toBin:function() {
				function binario(x, posi)
				{
					if (posi > 0) return binario(parseInt(x / 2), posi - 1) + (x % 2).toString();
					else return (x % 2);
				}
				cadena = "";
				for (i = 0, total = this.length; i < total; i ++)
				{
					cadena += binario(this.charCodeAt(i), 7);
				}
				return cadena;
			},
			htmlspecialchars:function(text)
			{
				find=["&","<",">",'"']
				replace=["&amp;","&lt;","&gt;","&quot;"]
				result=text;
				for(i=0;i<find.length;i++)
				{
					re = new RegExp(find[i],"g");
					result = result.replace(re,replace[i]);
				}
				return result;
			}
		},
		element:{
			radio:function(name)
			{
				return (document.getElementsByName(name))?document.getElementsByName(name):false;
			},
			radioByValue:function(param)
			{
				var radio_name=leimnud.tools.element.radio(param.name) || false;
				var radio_value=param.value || false;
				for(var i=0;i<radio_name.length;i++)
				{
					if(radio_name[i].value==radio_value)
					{
						return radio_name[i];
					}
				}
				return false;
			},
			head:function()
			{
				a=document.getElementsByTagName("HTML");
				b=a[0].getElementsByTagName("HEAD");
				return b[0];
			},
			remove:function(elemID) {
				var elem = (typeof elemID == "string")?document.getElementById(elemID):elemID;
				if(elem.parentNode)
				{
					elem.parentNode.removeChild(elem);
				}
				else if(elem.parentElement)
				{
				//document.getElementById("debugwil").innerHTML+=elem+"<br>";
					elem.parentElement.removeChild(elem);
				}
			},
			option:{
				loader:{
					begin:function(target,mensaje,disabled)
					{
						leimnud.tools.element.option.loader.end(target);
						option=document.createElement("option")
						option.text=mensaje;
						option.value=0;
						target.appendChild(option);
						target.disabled=(disabled==true)?true:false;
					},
					end:function (target)
					{
						leimnud.tools.element.option.remove(target);
						target.disabled=false;
					}
				},
				remove:function(target)
				{
					elemento=target;	//hack
					optgrp=elemento.getElementsByTagName("optgroup");
					tr=option.length
					//alert("into remove: "+optgrp.length);
					for(k=0;k<optgrp.length;k++)
					{
						elemento.removeChild(optgrp[k]);
					}
					option=elemento.getElementsByTagName("option");
					//alert("into remove: "+option.length);
					for(ij=0;ij < option.length;ij++)
					{
						//alert("elimino: "+ij)
						//alert(option.parentElement)
						elemento.removeChild(option[ij]);
					}
				}
			}
		},
		lock:function(options)
		{
			fdrag=(options.drag==false)?false:true;
			fsombra=(!options.sombra)?true:((options.sombra==false)?false:true);
			lleft=((document.body.clientWidth/2)+document.body.scrollLeft);
			ltop=((document.body.clientHeight/2)+document.body.scrollTop);
			tmpgc=leimnud.panel.create({w:300,h:40},{x:lleft,y:ltop,center:true},"tmploadsites",4,false,
			{
				style:{
					panel:{padding:"5px"}
				}//,
				//ieframe:false
			});
			if(options.operations)
			{

				//leimnud.tools.ejectFunction({funcion:options.operations,arguments:tmpgc})
			}
			leimnud.panel.html(tmpgc,options.text || "Loading...");
			leimnud.panel.element(tmpgc).id=tmpgc;
			if(fdrag==true)
			{
				leimnud.panel.createDrag(tmpgc);
			}
			if(fsombra==true)
			{
				leimnud.panel.sombra(tmpgc,{sombra:{color:"#000000",opacity:30}});
			}
			return tmpgc;
		},
		cookie:{

			getExpDate:function(days, hours, minutes) {
				var expDate = new Date( );
				if (typeof days == "number" && typeof hours == "number" &&
				typeof hours == "number") {
					expDate.setDate(expDate.getDate( ) + parseInt(days));
					expDate.setHours(expDate.getHours( ) + parseInt(hours));
					expDate.setMinutes(expDate.getMinutes( ) + parseInt(minutes));
					return expDate.toGMTString( );
				}
			},
			getCookieVal:function(offset) {
				var endstr = document.cookie.indexOf (";", offset);
				if (endstr == -1) {
					endstr = document.cookie.length;
				}
				return unescape(document.cookie.substring(offset, endstr));
			},
			get:function(name) {
				var arg = name + "=";
				var alen = arg.length;
				var clen = document.cookie.length;
				var i = 0;
				while (i < clen) {
					var j = i + alen;
					if (document.cookie.substring(i, j) == arg) {
						return leimnud.tools.cookie.getCookieVal(j);
					}
					i = document.cookie.indexOf(" ", i) + 1;
					if (i == 0) break;
				}
				return "";
			},
			isset:function(name)
			{
				return (leimnud.tools.cookie.get(name)=="")?false:true;
			},
			set:function(name, value, expires, path, domain, secure) {
				document.cookie = name + "=" + escape (value) +
				((expires) ? "; expires=" + expires : "") +
				((path) ? "; path=" + path : "") +
				((domain) ? "; domain=" + domain : "") +
				((secure) ? "; secure" : "");
			},
			deleteCookie:function(name,path,domain) {
				if (leimnud.tools.cookie.getCookie(name)) {
					document.cookie = name + "=" +
					((path) ? "; path=" + path : "") +
					((domain) ? "; domain=" + domain : "") +
					"; expires=Thu, 01-Jan-70 00:00:01 GMT";
				}
			}
		}
	},
	drag:{
		callback:function(param)
		{
			//alert(typeof param)
			if(leimnud.tools.array.isArray(param.fn)){
				for(i=0;i<param.fn.length;i++)
				{
					_2=param.fn[i].param;
					if(!_2){_2={};_2.paramDrag=leimnud.drag.tmp;}else{_2.paramDrag=leimnud.drag.tmp;}
					if(param.fn[i]._on==param._on && param.fn[i]._in==param._in)
					{
						param.fn[i]._function(_2);
					}
				}
			}
			else
			{
				_2=param.fn.param;
				if(!_2){_2={};_2.paramDrag=leimnud.drag.tmp;}else{_2.paramDrag=leimnud.drag.tmp;}
				if(param.fn._on==param._on && param.fn._in==param._in)
				{
					param.fn._function(_2);
				}
			}
		},
		ini:function(Obj)
		{
			leimnud.drag.tmp={
				objetos			:Obj.objetos,
				event			:Obj.event,
				cursorStartX	:leimnud.tools.position.cursor(Obj.event,"x"),
				cursorStartY	:leimnud.tools.position.cursor(Obj.event,"y"),
				other			:Obj.other
			};
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"ini",_in:"begin"});}

			for(i=0;i<leimnud.drag.tmp.objetos.length;i++)
			{
				ssleft	=parseInt(leimnud.drag.tmp.objetos[i].el.style.left, 10);
				sstop	=parseInt(leimnud.drag.tmp.objetos[i].el.style.top, 10);
				leimnud.drag.tmp.objetos[i].startLeft	=isNaN(ssleft)?0:ssleft;
				leimnud.drag.tmp.objetos[i].startTop	=isNaN(sstop)?0:sstop;
			}
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"ini",_in:"end"});}
			if (leimnud.browser.isIE) {
				document.attachEvent("onmousemove", leimnud.drag.go);
				document.attachEvent("onmouseup",	leimnud.drag.stop);
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			}
			else{
				document.addEventListener("mousemove", leimnud.drag.go,   true);
				document.addEventListener("mouseup",   leimnud.drag.stop, true);
				Obj.event.preventDefault();
			}
		},
		go:function(event)
		{
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"go",_in:"begin"});}
			leimnud.drag.tmp.cursorPageX=leimnud.tools.position.cursor(event,"x");
			leimnud.drag.tmp.cursorPageY=leimnud.tools.position.cursor(event,"y");
			for(ii=0;ii<leimnud.drag.tmp.objetos.length;ii++)
			{
				leimnud.drag.tmp.objetos[ii].el.style.left = (leimnud.drag.tmp.objetos[ii].startLeft + leimnud.drag.tmp.cursorPageX - leimnud.drag.tmp.cursorStartX) + "px"; //sombra
				leimnud.drag.tmp.objetos[ii].el.style.top  = (leimnud.drag.tmp.objetos[ii].startTop  + leimnud.drag.tmp.cursorPageY - leimnud.drag.tmp.cursorStartY) + "px"; //sombra
			}
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"go",_in:"end"});}
			if (leimnud.browser.isIE) {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			}
			if (leimnud.browser.isNS)
			{
				event.preventDefault();
			}
			//		window.status="jh";
		},
		stop:function(event)
		{
			if (leimnud.browser.isIE) {
				document.detachEvent("onmousemove", leimnud.drag.go);
				document.detachEvent("onmouseup",	leimnud.drag.stop);
			}
			if (leimnud.browser.isNS) {
				document.removeEventListener("mousemove", leimnud.drag.go,	true);
				document.removeEventListener("mouseup",   leimnud.drag.stop, true);
			}
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"finish",_in:"begin"});}
			//more functions
			if(leimnud.drag.tmp.other && leimnud.drag.tmp.other.callback)
			{leimnud.drag.callback({fn:leimnud.drag.tmp.other.callback,_on:"finish",_in:"end"});}
			//	window.status="stop";
		}
	},
	tabPanel:{
		css:
		{
			over:function(event)
			{
				fIdent	=leimnud.event.get(event).name.split("|");
				fName	=fIdent[0];
				fTab	=fIdent[1];
				leimnud.style.set(leimnud.tabPanel.tab[fName].list[fTab].element,leimnud.panel.styles.tab.el.a_over);
			},
			out:function(event)
			{
				fIdent	=leimnud.event.get(event).name.split("|");
				fName	=fIdent[0];
				fTab	=fIdent[1];
				leimnud.style.set(leimnud.tabPanel.tab[fName].list[fTab].element,leimnud.panel.styles.tab.el.a_out);
			}
		},
		tab:[],
		crear:function(menu,Obj)
		{
			leimnud.tabPanel.tab[menu.name]=menu;
			leimnud.tabPanel.tab[menu.name].Obj=Obj;
			tpDiv=document.createElement("div");
			leimnud.style.set(tpDiv,leimnud.panel.styles.tab.container);
			tpDiv.id="css_panel_menu";
			align=menu.align || "left";
			tpDiv.style.textAlign=align;
			tpUl=document.createElement("ul");
			leimnud.style.set(tpUl,leimnud.panel.styles.tab.el.ul);
			for(i=0;i<menu.list.length;i++)
			{
				tpLi=document.createElement("li");
				leimnud.style.set(tpLi,leimnud.panel.styles.tab.el.li);
				tpHref=document.createElement("a");
				leimnud.style.set(tpHref,leimnud.panel.styles.tab.el.a);
				tpHref.innerHTML=menu.list[i].value;
				if(menu.list[i].selected && menu.list[i].selected==true)
				{
					//leimnud.style.set(tpHref,leimnud.panel.styles.tab.el.a_current);
					this.tab[menu.name].current=i;
				}
				else
				{
					//tpHref.href	="#";
					tpHref.id	=menu.name+"|"+i;
					tpHref.name	=menu.name+"|"+i;
					leimnud.event.add(tpHref,"mouseover",leimnud.tabPanel.css.over);
					leimnud.event.add(tpHref,"mouseout",leimnud.tabPanel.css.out);
					leimnud.event.add(tpHref,"mousedown",leimnud.tabPanel.open);
				}
				tpLi.appendChild(tpHref);
				this.tab[menu.name].list[i].element=tpHref;
				tpUl.appendChild(tpLi);
			}
			tpDiv.appendChild(tpUl);
			leimnud.tabPanel.tab[menu.name].elemento=tpDiv;
			return tpDiv;
		},
		open:function(event,manual,issetCurrent)
		{
			frName	=(event)?leimnud.event.get(event).name:manual;
			issetCur=issetCurrent || false;
			//alert(frName);
			fIdent	=frName.split("|");
			//if(issetCur){alert(23);}
			//alert(leimnud.event.get(event).name);
			fName	=fIdent[0];
			fTab	=fIdent[1];
			//alert(fName+":"+fTab)
			funcion=leimnud.tabPanel.tab[fName].list[fTab].funcion;
			funciBe=funcion.before || false;
			if(funciBe)
			{
				if(!funcion.to({tabPanel:leimnud.tabPanel.tab[fName].Obj,param:funcion.param || false,tab:{fName:fName,fTab:fTab}}))
				{
					return;
				}
			}
			if(leimnud.tabPanel.tab[fName].list[fTab].submenu)
			{
				//alert(leimnud.panel.history[leimnud.tabPanel.tab[fName].Obj].elementos);
				leimnud.panel.history[leimnud.tabPanel.tab[fName].Obj].elementos.submenu.innerHTML="";
				leimnud.panel.clean(leimnud.tabPanel.tab[fName].Obj);
				$a=leimnud.panel.element(leimnud.tabPanel.tab[fName].Obj);
				leimnud.tabPanel.setActive({fName:fName,fTab:fTab,onLoad:((event)?false:true),issetCurrent:issetCur});
				leimnud.tabPanel.submenu.engine({fName:fName,fTab:fTab});
				return;
			}
			else
			{
				leimnud.panel.history[leimnud.tabPanel.tab[fName].Obj].elementos.submenu.innerHTML="";
				leimnud.panel.clean(leimnud.tabPanel.tab[fName].Obj);
			}
			funcion.to({tabPanel:leimnud.tabPanel.tab[fName].Obj,param:funcion.param || false,tab:{fName:fName,fTab:fTab}});
			leimnud.tabPanel.setActive({fName:fName,fTab:fTab});
		},
		setActive:function($)
		{
			fName	=$.fName;
			fTab	=$.fTab;
			onLoad	=$.onLoad || false;
			issetCurrent=$.issetCurrent || false;
			leimnud.style.set(leimnud.tabPanel.tab[fName].list[fTab].element,leimnud.panel.styles.tab.el.a_current);
			leimnud.event.remove(leimnud.tabPanel.tab[fName].list[fTab].element,"mousedown",leimnud.tabPanel.open);
			leimnud.event.remove(leimnud.tabPanel.tab[fName].list[fTab].element,"mouseout",leimnud.tabPanel.css.out);
			leimnud.event.remove(leimnud.tabPanel.tab[fName].list[fTab].element,"mouseover",leimnud.tabPanel.css.over);
			tabCurrent=leimnud.tabPanel.tab[fName].current;
			if(leimnud.tabPanel.tab[fName].list[tabCurrent].submenu && leimnud.tabPanel.tab[fName].list[tabCurrent].submenu.elemento)
			{
				delete(leimnud.tabPanel.tab[fName].list[tabCurrent].submenu.elemento);
			}
			leimnud.tabPanel.tab[fName].list[tabCurrent].element.name=fName+"|"+tabCurrent;
			if((!onLoad || issetCurrent) && fTab!=tabCurrent)
			{
				leimnud.style.set(leimnud.tabPanel.tab[fName].list[leimnud.tabPanel.tab[fName].current].element,leimnud.panel.styles.tab.el.a_nocurrent);
				leimnud.event.add(leimnud.tabPanel.tab[fName].list[leimnud.tabPanel.tab[fName].current].element,"mouseover",leimnud.tabPanel.css.over);
				leimnud.event.add(leimnud.tabPanel.tab[fName].list[leimnud.tabPanel.tab[fName].current].element,"mouseout",leimnud.tabPanel.css.out);
				leimnud.event.add(leimnud.tabPanel.tab[fName].list[leimnud.tabPanel.tab[fName].current].element,"mousedown",leimnud.tabPanel.open);
			}
			leimnud.tabPanel.tab[fName].current=fTab;
		},
		engine:function(Obj)
		{
			//			alert(Obj);
			name=Obj.split("|")[0];
			funcion=leimnud.tabPanel.tab[name].list[this.tab[name].current].funcion;
			funcion.to({tabPanel:Obj,param:funcion.param || false});
		},
		submenu:{
			css:{
				out:function(event)
				{
					ab=leimnud.event.get(event);
					leimnud.style.set(ab,leimnud.panel.styles.tab.submenu.el.a_nocurrent);
				},
				over:function(event)
				{
					ab=leimnud.event.get(event);
					leimnud.style.set(ab,leimnud.panel.styles.tab.submenu.el.a_current);
					leimnud.style.set(ab,{
						cursor:"pointer"
					}
					);

				}
			},
			engine:function($)
			{
				Obj		=leimnud.tabPanel.tab[$.fName].Obj;
				menuroot=leimnud.tabPanel.tab[$.fName].list[$.fTab].submenu;
				menu	=menuroot.menu;
				fName	=$.fName;
				fTab	=$.fTab;
				//alert(Obj)
				$a=leimnud.panel.history[Obj].elementos.submenu;
				//$a.innerHTML=menu.length;
				tpDiv=document.createElement("div");
				leimnud.style.set(tpDiv,{
					paddingTop	:"10px",
					marginBottom:"5px"
				});
				tpUl=document.createElement("ul");
				leimnud.style.set(tpUl,leimnud.panel.styles.tab.submenu.el.ul);
				for(i=0;i<menu.length;i++)
				{
					tpLi=document.createElement("li");
					leimnud.style.set(tpLi,leimnud.panel.styles.tab.submenu.el.li);
					tpHrefsm=document.createElement("a");
					//alert(document.createElement("a"));
					//leimnud.tabPanel.tab[fName].list[fTab].submenu.menu[i].elemento=tpHrefsm;
					leimnud.style.set(tpHrefsm,leimnud.panel.styles.tab.submenu.el.a);
					tpHrefsm.innerHTML=menu[i].nombre;
					if(menu[i].selected && menu[i].selected==true)
					{
						tpHrefsm.id		=fName+"|"+fTab+"|"+i;
						tpHrefsm.name	=fName+"|"+fTab+"|"+i;
						leimnud.style.set(tpHrefsm,leimnud.panel.styles.tab.submenu.el.a_current);
						leimnud.tabPanel.tab[fName].list[fTab].submenu.current=i;
					}
					else
					{
						//tpHref.href	="#";
						//tpHref.id	=menu.name+"|"+i;
						tpHrefsm.id		=fName+"|"+fTab+"|"+i;
						tpHrefsm.name	=fName+"|"+fTab+"|"+i;
						leimnud.style.set(tpHrefsm,leimnud.panel.styles.tab.submenu.el.a_nocurrent);
						leimnud.event.add(tpHrefsm,"mouseover",leimnud.tabPanel.submenu.css.over);
						leimnud.event.add(tpHrefsm,"mouseout",leimnud.tabPanel.submenu.css.out);
						leimnud.event.add(tpHrefsm,"mousedown",leimnud.tabPanel.submenu.go);
						//leimnud.event.add(tpHrefsm,"mouseout",leimnud.tabPanel.css.out);
					}
					tpLi.appendChild(tpHrefsm);
					leimnud.tabPanel.tab[fName].list[fTab].submenu.menu[i].elemento=tpHrefsm;
					tpUl.appendChild(tpLi);
				}
				tpDiv.appendChild(tpUl);
				menuroot.elemento=tpDiv;
				$a.appendChild(tpDiv);
				//$a.appendChild(document.createElement("br"));
				//$a.appendChild(document.createElement("br"));

				/*autoload*/

				guncion=leimnud.tabPanel.tab[fName].list[fTab].submenu;
				funcion=guncion.menu[guncion.current].funcion;
				funcion.to({tabPanel:Obj,param:funcion.param || false, tab:{fName:fName,fTab:fTab,fOpt:guncion.current}});
				//$a.appendChild(document.createElement("BR"));
			},
			go:function($)
			{
				$a=leimnud.event.get($);
				fName	=$a.name.split("|")[0];
				fTab	=$a.name.split("|")[1];
				fOpt	=$a.name.split("|")[2];
				//alert(leimnud.tabPanel.tab[fName].list[fTab].submenu.menu[fOpt].elemento.innerHTML);
				//return;
				submenn=leimnud.tabPanel.tab[fName].list[fTab].submenu;
				//alert(submenn.menu[fOpt].elemento.innerHTML);
				//return;
				funcion=submenn.menu[fOpt].funcion;
				funciBe=funcion.before || false;
				if(funciBe)
				{
					//if(!funcion.to({tabPanel:leimnud.tabPanel.tab[fName].Obj,param:funcion.param || false,tab:{fOpt:fOpt,fName:fName,fTab:fTab}}))
					//{
					//alert("aaa");
					//return;
					//}
				}
				else
				{
					//lmn=ik;
					//ik=lmn;
					//alert("esqueleto inner: "+cms.esqueleto.innerHTML+" ++ jj value: "+cms.jj+" ++ div inner:"+cms.jk.innerHTML);
					leimnud.panel.clean(leimnud.tabPanel.tab[fName].Obj);
					leimnud.tabPanel.submenu.setActive({fName:fName,fTab:fTab,fOpt:fOpt});
					funcion.to({tabPanel:leimnud.tabPanel.tab[fName].Obj,param:funcion.param || false,tab:{fOpt:fOpt,fName:fName,fTab:fTab}});
					return;
				}
				//alert(cms.esqueleto.innerHTML+"::end");
			},
			setActive:function($)
			{
				fName	=$.fName;
				fTab	=$.fTab;
				fOpt	=$.fOpt;
				submenn=leimnud.tabPanel.tab[fName].list[fTab].submenu;
				//alert(fName+":"+fTab+":"+fOpt+":"+submenn.menu[fOpt].elemento.innerHTML);
				//alert(submenn.menu[fOpt].elemento.innerHTML);

				//return;
				leimnud.style.set(submenn.menu[fOpt].elemento,leimnud.panel.styles.tab.submenu.el.a_current);
				leimnud.event.remove(submenn.menu[fOpt].elemento,"mouseover",leimnud.tabPanel.submenu.css.over);
				leimnud.event.remove(submenn.menu[fOpt].elemento,"mouseout",leimnud.tabPanel.submenu.css.out);
				leimnud.event.remove(submenn.menu[fOpt].elemento,"mousedown",leimnud.tabPanel.submenu.go);
				tabCurrent=submenn.current;

				//leimnud.tabPanel.tab[fName].list[tabCurrent].element.name=fName+"|"+tabCurrent;
				leimnud.style.set(submenn.menu[tabCurrent].elemento,leimnud.panel.styles.tab.submenu.el.a_nocurrent);
				leimnud.event.add(submenn.menu[tabCurrent].elemento,"mouseover",leimnud.tabPanel.submenu.css.over);
				leimnud.event.add(submenn.menu[tabCurrent].elemento,"mouseout",leimnud.tabPanel.submenu.css.out);
				leimnud.event.add(submenn.menu[tabCurrent].elemento,"mousedown",leimnud.tabPanel.submenu.go);
				submenn.current=fOpt;
			}
		}
	},
	rpc:{
		xmlhttp:function(param)
		{
			this.error="";
			this.param=param;
			this.getURL=function()
			{
				if(!this.param.url && typeof http_processor!='undefined'){	return http_processor;}else{if(this.param.url){return this.param.url;}else{this.error="blank URL";return false;}}
			}
			this.getXMLHTTPREQUEST=function()
			{
				try {xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");} catch (E) {xmlhttp = false;}}if (!xmlhttp && typeof XMLHttpRequest!='undefined') {xmlhttp = new XMLHttpRequest();}if(!xmlhttp){this.error="Su navegador no soporta AJAX";}
				return xmlhttp;
			}
			this.url=this.getURL();
			this.xmlhttp=this.getXMLHTTPREQUEST();
			if(!this.url){return false;}
			if(!this.xmlhttp){return false;}
			this.open=function()
			{
				this.xmlhttp.open(this.param.method,this.url/*+((this.param.variables)?'&'+this.param.variables:'')*/,(!this.param.async)?true:this.param.async);
				if(this.param.method=="POST")
				{
					this.xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					this.xmlhttp.send((this.param.variables)?'&'+this.param.variables:'');
				}
				else if(this.param.method=="GET"){this.xmlhttp.send(null);}
			}
			this.open();
			var _this=this;
			this.xmlhttp.onreadystatechange=function()
			{
				if (_this.xmlhttp.readyState==4)
				{
					if(_this.xmlhttp.status==200 && _this.param.callback)
					{
						var arguments		=false;
						if(_this.param.callback.arguments){arguments=(_this.param.callback.arguments)?_this.param.callback.arguments:false;}
						_this.param.callback._function(
						{
							request		:{
								responseText	:_this.xmlhttp.responseText,
								responseXML		:_this.xmlhttp.responseXML
							},
							state		:_this.xmlhttp.readyState,
							arguments	:arguments
						});
					}
					else
					{

					}
				}
			}
		},
		aji:{
			database:[],
			nuevo:function(param)
			{
				_1="ajaxN"+Math.floor(Math.random()*2199);
				_2=leimnud.rpc.aji.database[_1]=param;
				_2.name=_1;
				_2.completed=false;
				uri=_2.url+"?ajiId="+_2.name+((_2.param)?"&"+_2.param:"");
				_n = document.createElement('script');
				_n.src = uri;
				_n.type = "text/javascript";
				document.getElementsByTagName("HTML")[0].getElementsByTagName("HEAD")[0].appendChild(_n);
				_2.script=_n;
				_2.interval = setInterval("leimnud.rpc.aji.verificar('"+_2.name+"')", 500);
			},
			verificar:function(param)
			{
				_1=leimnud.rpc.aji.database[param];
				if(!_1.aji)
				{
					_1.g+=1;
					return;
				}
				else
				{
					clearInterval(_1.interval);
					leimnud.tools.element.remove(_1.script);
					leimnud.rpc.aji.finish(param);
				}
			},
			finish:function(param)
			{
				_1=leimnud.rpc.aji.database[param];
				_2=_1.callback.funcion.param;
				if(!_2)
				{
					_2={};
					_2.aji=_1.aji;
				}
				else
				{
					_2.aji=_1.aji;
				}
				delete leimnud.rpc.aji.database[param];
				_1.callback.funcion.exec(_2);
			}
		},
		dom:{
			database:[],
			nuevo:function(param)
			{
				_1="ajaxDOM"+Math.floor(Math.random()*2199);
				_2=leimnud.rpc.dom.database[_1]=param;
				uri=_2.url+"?dom="+_1+((_2.param)?"&"+_2.param:"");
				if (window.ActiveXObject)
				{
					//xmldoc=new ActiveXObject("Microsoft.XMLDOM");
					window.status="for activex"
					xmldoc=new ActiveXObject("MSXML2.DOMDocument");
					xmldoc.async = false;
					xmldoc.load(uri);
				}
				//apartir de Opera 8, y alguna de las ultimas versiones de Opera 7
				else if(document.implementation.createLSParser) {
					var ls = document.implementation.createLSParser(1, null);
					xmldoc=ls.parseURI(uri);
				}
				else if (document.implementation && document.implementation.createDocument)
				{
					window.status="for native code"
					xmldoc=document.implementation.createDocument("","doc",null);
					xmldoc.async = false;
					xmldoc.load(uri);
				}
				//netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
				doc=xmldoc.documentElement;
				_3=_2.callback.funcion.param;
				if(!_3)
				{
					_3={};
					_3.xml=doc;
				}
				else
				{
					_3.xml=doc;
				}
				//delete leimnud.rpc.aji.database[param];
				_2.callback.funcion.exec(_3);
			}
		}
	}
}
leimnud.graf={
	database:{linea:[],circulo:[],punto:[],codo:[]},
	linea:function(object)
	{
		if(!object || !object.name){return false;}
		var name=(object.nameNoGenerate)?object.name:object.name+Math.random();
		var id=object.name.split("|")[0]+Math.random();
		inst=this.database.linea[id]=object;
		inst.width		= (inst.position.x1 < inst.position.x2) ? (inst.position.x2 - inst.position.x1) : (inst.position.x1 - inst.position.x2);
		inst.height		= (inst.position.y1 < inst.position.y2) ? (inst.position.y2 - inst.position.y1) : (inst.position.y1 - inst.position.y2);
		inst.eslargo	= inst.width > inst.height;
		inst.pendiente	= (inst.largo) ? parseInt(inst.width/inst.height) : parseInt(inst.height/inst.width);
		inst.pendiente	= isNaN(inst.pendiente)?0:inst.pendiente;
		inst.largo 		= (inst.eslargo) ? inst.width : inst.height ;
		inst.guides		= object.guides || false;

		inst.iniX		= (inst.position.x1 < inst.position.x2) ? inst.position.x1 : inst.position.x2;
		inst.iniY		= (inst.position.y1 < inst.position.y2) ? inst.position.y1 : inst.position.y2;

		inst.reversa	= (inst.position.x1 < inst.position.x2 || inst.position.y1 < inst.position.y2)?false:true;
		//inst.iniX		= inst.position.x1;
		//inst.iniY		= inst.position.y1;
		inst.inUp		= (inst.position.y1 >= inst.position.y2);
		inst.inLeft		= (inst.position.x1 >= inst.position.x2);

		inst.inversa	= (inst.position.x1 < inst.position.x2) && (inst.position.y2 < inst.position.y1) || (inst.position.x2 < inst.position.x1) && (inst.position.y1 < inst.position.y2);

		inst.puntos=[];
		//x ++
		//y div++
		//document.getElementById("debug").innerHTML+="<br><br>PUNTOS A GENERAR: "+inst.largo+"<br><pre>"+leimnud.tools.object.toString(inst)+"</pre><br><br>";
		for(i=0;i<=inst.largo;i++)
		{
			/**
			*  inst.eslargo, if(true)  linea x++ else linea y++
			**/
			if(inst.eslargo)
			{
				x=i+inst.iniX;
			}else
			{
				if(inst.inversa)
				{
					x=(inst.width - parseInt(i * inst.width / inst.height))+inst.iniX;
				}
				else
				{
					x=parseInt(((i * inst.width) / inst.height)+inst.iniX);
				}
			}
			if(inst.eslargo)
			{
				if(inst.inversa)
				{
					y=(inst.height- parseInt(i * inst.height/ inst.width))+inst.iniY;
				}else
				{
					y=parseInt(((i * inst.height)/ inst.width)+inst.iniY);
				}
			}else
			{//alert(768)
				y=i+inst.iniY;
			}
			//document.getElementById("debugwil").innerHTML+="Punto: x="+x+" ("+inst.width+" - [("+i+" * "+inst.width+" / "+inst.height+")=<b>"+((i*inst.width)/inst.height)+"</b>])+"+inst.position.x1+" , y:"+y+"<br>";
			//if(x >= inst.iniX && y >= inst.iniY)
			//{
			/*if(inst.guides)
			{
				if(inst.guides._in=="begin")
				{
					cc="red"
				}
				else if(inst.guides._in=="dual")
				{
					cc="blue"
				}
				else if(inst.guides._in=="end")
				{
					cc="orange"
				}
			}*/

			ln=leimnud.graf.punto({
				name:name+"|"+i,
				noRand:true,
				w:inst.size,
				h:inst.size,
				x:x,
				y:y,
				color:inst.color,
				style:((inst.style)?inst.style:false),
				zIndex:inst.zIndex || false,
				event:(inst.event)?inst.event:false,
				target:inst.target
			});
			inst.puntos[i]=ln.objeto;
			if(inst.showPosition){ln.objeto.title="x: "+x+" ,y: "+y;}
			//}
		}
		//alert(name)
		//		document.getElementById("debug").innerHTML+="<hr><pre style='min-height:300px;'>"+leimnud.tools.object.toString(inst)+":"+inst.largo+"</pre>";
		//alert(leimnud.tools.object.toString(inst));
		return id;
	},
	_delete:{
		linea:function(uid,event)
		{
			var linea=leimnud.graf.database.linea[uid];
			
			//alert(uid)
			//alert(uid+":"+linea+":"+leimnud.tools.object.toString(linea.event))
			for(var g=0;g<linea.puntos.length;g++)
			{
				if(linea.event){
					if(linea.event[0])
					{
						for(h=0;h<linea.event.length;h++)
						{
							leimnud.event.add(linea.puntos[g],linea.event[h].on,linea.event[h].go);
						}
					}
					else
					{
						leimnud.event.remove(linea.puntos[g],linea.event.on,linea.event.go);
					}
				}
				leimnud.tools.element.remove(linea.puntos[g]);
				//linea.puntos[g].style.backgroundColor="red";
			}
			delete(leimnud.graf.database.linea[uid]);
		}
	},
	punto:function(object)
	{
		if(!object && !object.name){return false;}
		var name,punto;
		name=object.name+((object.noRand)?"":Math.random());
		punto=document.createElement("span");
		punto.id=name;
		punto.name="punto";
		leimnud.style.set(punto,{
			textDecoration:"none",
			fontSize:"0px",
			position:"absolute",
			width	:(object.w)?object.w:"1px",
			height	:(object.h)?object.h:"1px",
			top		:object.y,
			left	:object.x,
			overflow:"hidden",
			zIndex	:object.zIndex || 2,
			border	:"0px solid #000000",
			padding	:0,
			margin	:0,
			//cursor	:"pointer",
			backgroundColor:object.color});
			if(object.style){leimnud.style.set(punto,object.style);}
			object.target.appendChild(punto);
			if(object.event){
				if(object.event[0])
				{
					for(h=0;h<object.event.length;h++)
					{
						leimnud.event.add(punto,object.event[h].on,object.event[h].go);
					}
				}
				else
				{
					leimnud.event.add(punto,object.event.on,object.event.go);
				}
			}

			if(object.database){leimnud.graf.database.punto[name]=punto;}
			return {name:name,objeto:punto};
	}
};

leimnud.graf.fx={
	linea:
	{
		guides:function(name)
		{
			this.name=name;
			this.length=10;
			this.inst=leimnud.graf.database.codo[this.name];
			this.lineas=this.inst.lineas;
			//alert(this.inst.lineas.length)
			this.guideIn=function()
			{
				if(this.lineas.length==1)
				{
					return "dual";
				}
				else
				{
					return "normal";
				}
			}
			this.engine=function()
			{
				this.mode=this.guideIn();
				if(this.mode=="dual")
				{
					//this.create({_in:this.lineas[0],_on:"begin"});
					this.create({_in:this.lineas[0],_on:"end"});
				}
				else
				{
					//this.create({_in:this.lineas[0],_on:"begin"});
					this.create({_in:this.lineas[this.lineas.length-1],_on:"end"});
				}
			}
			this.create=function(options)
			{
				this.line=leimnud.graf.database.linea[options._in];
				
				_beg=(options._on=="begin");
				
				var puntoA=(_beg)?this.line.puntos[this.line.puntos.length-1]:this.line.puntos[0];
				var puntoB=(_beg)?this.line.puntos[0]:this.line.puntos[this.line.puntos.length-1];
//				document.getElementById("debugwil").innerHTML+="==============================================<br>";
//				document.getElementById("debugwil").innerHTML+=leimnud.tools.object.toString(this.line);
				if(this.line.inUp)
				{
					if(this.line.eslargo===false || (this.line.eslargo===true && parseInt(this.line.pendiente)==0 && this.line.inversa===false))
					{
						var t=puntoA;
						var g=puntoB;
						puntoB=t;
						puntoA=g;
//						document.getElementById("debugwil").innerHTML+="<br>VOLTEADO<br>-------------------------";
					}
				}
				else
				{
					if(this.line.eslargo===true && (parseInt(this.line.pendiente)>0 || (this.line.inversa===true && this.line.reversa===false)))
					{
						var t=puntoA;
						var g=puntoB;
						puntoB=t;
						puntoA=g;
//						document.getElementById("debugwil").innerHTML+="<br>VOLTEADO<br>-------------------------";
					}
					
				}
				var $X1=parseInt(puntoA.style.left);
				var $Y1=parseInt(puntoA.style.top);
				
				var $X2=parseInt(puntoB.style.left);
				var $Y2=parseInt(puntoB.style.top);

				var ang1=(($X2-$X1)!=0)?Math.atan(($Y2-$Y1)/($X2-$X1)):Math.atan($Y2-$Y1);
				var ang2=leimnud.Math.deg2rad(($X1<=$X2)?135:45)				
				var $X3 = parseInt($X2 + (7 * Math.cos(ang1 + ang2)));
				var $Y3 = parseInt($Y2 + (7 * Math.sin(ang1 + ang2)));
				
					//document.getElementById("debugwil").innerHTML+="$X1 = "+$X1+" $Y1 ="+$Y1+" $X2="+$X2+" $Y2="+$Y2+"<br>";
					//document.getElementById("debugwil").innerHTML+="$X3 = "+$X3+" $Y3 ="+$Y3+" ang1="+ang1+" ang2="+ang2+"<br>";
	
				
				var ang1=(($X2-$X1)!=0)?Math.atan(($Y2-$Y1)/($X2-$X1)):Math.atan($Y2-$Y1);
				var ang2=leimnud.Math.deg2rad(($X1<=$X2)?225:315)				
				var $X4 = parseInt($X2 + (7 * Math.cos(ang1 + ang2)));
				var $Y4 = parseInt($Y2 + (7 * Math.sin(ang1 + ang2)));
				
				//document.getElementById("debugwil").innerHTML+="-----------------------------------<br>";
				//document.getElementById("debugwil").innerHTML+="$X4="+$X4+" $Y4="+$Y4+" ang1="+ang1+" ang2="+ang2+"<br>";
				//document.getElementById("debugwil").innerHTML+="$X2="+$X2+" $Y2="+$Y2+"<br><br>";
				
				this.guides={};
				this.guides.A=leimnud.graf.linea(
				{
					name:"guide",
					position:{
						x1:$X2,
						y1:$Y2,
						x2:$X3,
						y2:$Y3
						},
					size:1,
					color:this.inst.object.color,
					zIndex:this.inst.object.zIndex,
					target:this.inst.object.target
				});
				this.guides.B=leimnud.graf.linea(
				{
					name:"guide",
					position:{
						x1:$X2,
						y1:$Y2,
						x2:$X4,
						y2:$Y4
						},
					size:1,
					//color:((this.line.reversa)?"blue":"red"),
					eolor:this.inst.object.color,
					color:this.inst.object.color,
					zIndex:this.inst.object.zIndex,
					target:this.inst.object.target
				});
				//his->Graph->img->Line($X2, $Y2, $X3, $Y3);
				//his->Graph->img->Line($X2, $Y2, $X4, $Y4);

			}
			this.deleteGuides=function()
			{
				leimnud.graf._delete.linea(this.guides.A);
				leimnud.graf._delete.linea(this.guides.B);
			}
		},
		moveTo:function(options)
		{
//			alert(leimnud.tools.object.toString(options))
			var line=leimnud.graf.database.codo[options.line];
//			alert(leimnud.tools.object.toString(line.codos))
			if(line)
			{
				var length=line.lineas.length
				if(length>1)
				{
					if(options._in=="begin")
					{
						var posGet=line.codos[0];
						var inLine=0;
						line.puntas.x1=options.position.x;
						line.puntas.y1=options.position.y;
						var position={
							x1:options.position.x,
							y1:options.position.y,
							x2:posGet.position.x,
							y2:posGet.position.y
						}
					}
					else
					{
						var posGet=line.codos[line.codos.length-1];
						var inLine=line.lineas.length-1;
						line.puntas.x2=options.position.x;
						line.puntas.y2=options.position.y;
						var position={
							x1:posGet.position.x,
							y1:posGet.position.y,
							x2:options.position.x,
							y2:options.position.y
						}
					}
					var new_x=posGet.position.x;
					var new_y=posGet.position.y;
				}
				else
				{
					var inLine=0;
					//alert(leimnud.tools.object.toString(line.puntas))
					if(options._in=="begin")
					{
						var position={
							x1:options.position.x,
							y1:options.position.y,
							x2:line.puntas.x2,
							y2:line.puntas.y2
						}
						line.puntas.x1=options.position.x;
						line.puntas.y1=options.position.y;
					}
					else
					{
						line.puntas.x2=options.position.x;
						line.puntas.y2=options.position.y;						
						var position={
							x1:line.puntas.x1,
							y1:line.puntas.y1,
							x2:options.position.x,
							y2:options.position.y
						}
					}
				}
				leimnud.graf._delete.linea(line.lineas[inLine]);
				//alert(leimnud.tools.object.toString(line.puntas))
				var nline=leimnud.graf.linea({
					name:options.line+"|"+inLine,
					nameNoGenerate:true,
					position:position,
					event:[
					{on:"mouseover"	,go:leimnud.graf.fx.linea.over},
					{on:"mousedown"	,go:leimnud.graf.fx.linea.click},
					{on:"mouseout"	,go:leimnud.graf.fx.linea.out}],
					style:((line.object.style)?line.object.style:false),
					size:1,zIndex:line.object.zIndex,
					color:line.object.color,
					target:line.object.target
				});
				line.lineas[inLine]=nline;
				leimnud.graf.fx.linea.conditionalGuides(options.line);
			}
		},
		conditionalGuides:function(name)
		{
			var codoUID=leimnud.graf.database.codo[name];			
			if(codoUID && codoUID.guides)
			{
				if(codoUID.Objectguides)
				{
					codoUID.Objectguides.deleteGuides();
					codoUID.Objectguides.engine();
				}
				else
				{
					codoUID.Objectguides=new leimnud.graf.fx.linea.guides(name);
					codoUID.Objectguides.engine();
				}
			}
			
		},
		_delete:function(param)
		{
			var line=leimnud.graf.database.codo[param];
			//alert(param)
			if(line)
			{
			//alert(line.lineas.length)
				for(var i=0;i<line.lineas.length;i++)
				{
					leimnud.graf._delete.linea(line.lineas[i]);					
				}
				//alert(leimnud.tools.object.toString(line.codos))
				if(line.codos.length>0)
				{
					for(var i=0;i<line.codos.length;i++)
					{
						leimnud.tools.element.remove(line.codos[i].punto.objeto);
					}
				}
				if(line.Objectguides)
				{
					line.Objectguides.deleteGuides();
				}
				delete(leimnud.graf.database.codo[param]);
			}
		},
		create:function(param)
		{
			var line,lineas,x1,x2,y1,y2,ln={},name;
			name=param.name+Math.random();
			lineas=param.position.length;
			ln={
				object	:param,
				name	:name,
				lineas	:[],
				puntas	:{},
				codos	:[],
				tmp		:{menucodo:{step1:false,step2:false}}
			};
			ln.object.focus={size:7,move:3};
			ln.object.style={cursor:"move"};
			var inst=leimnud.graf.database.codo[name]=ln;
			inst.guides=true;
			for(var i=0;i<lineas;i++)
			{
				if(i<(lineas-1))
				{
					/* crear codo */
					leimnud.graf.fx.linea.createCodo({
						id:name+"|"+i,
						x:param.position[i].x2,
						y:param.position[i].y2,
						color:param.color,
						zIndex:param.zIndex+1,
						target:param.target
					});
				}
				if(i===0)
				{
					//window.status+="punto"
					ln.puntas.x1=param.position[i].x1;
					ln.puntas.y1=param.position[i].y1;
				}
				if(i===(lineas-1))
				{
					ln.puntas.x2=param.position[i].x2;
					ln.puntas.y2=param.position[i].y2;
				}
				var line=leimnud.graf.linea({
					name:name+"|"+i,
					nameNoGenerate:true,
					position:{
						x1:param.position[i].x1,
						y1:param.position[i].y1,
						x2:param.position[i].x2,
						y2:param.position[i].y2
					},
					size:param.size,
					//showPosition:true,
					color:param.color,
					style:ln.object.style,
					zIndex:param.zIndex,
					target:param.target,
					event:[
					{
						on:"mouseover",
						go:leimnud.graf.fx.linea.over
					},
					{
						on:"mousedown",
						go:leimnud.graf.fx.linea.click
					},
					{
						on:"mouseout",
						go:leimnud.graf.fx.linea.out
					}
					]
				});
				ln.lineas[i]=line;
			}
			/* crear conectores BEGIN */
			if(inst.object.conectores)
			{
				var conector=inst.object.conectores,guide;
				if(conector.begin)
				{

					leimnud.graf.fx.linea.conectores.create({
						inst:name,
						position:"begin",
						type:conector.begin
					});
				}
				if(conector.end)
				{
					leimnud.graf.fx.linea.conectores.create({
						inst:name,
						position:"end",
						type:conector.end
					});
					//alert(conector.begin+":"+inst.lineas[inst.lineas.length-1]);
					//guide=leimnud.graf.database.linea[inst.lineas[inst.lineas.length-1]];
					//alert(leimnud.tools.object.toString(guide))
				}
			}
			if(inst.guides)
			{
				if(inst.Objectguides)
				{
				///alert(234)
				//	inst.Objectguides.deleteGuides();
				}
				else
				{
				//alert(inst.Objectguides)
					inst.Objectguides=new leimnud.graf.fx.linea.guides(name);
					inst.Objectguides.engine();
				}
			}
			/* crear conectores END */
			return name;
		},
		over:function(event)
		{

			var el,x,y;
			el=leimnud.event.get(event);
			if(el.name=="punto")
			{
				var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
				x=parseInt(el.style.left);
				y=parseInt(el.style.top);
				leimnud.style.set(el,{
					width:inst.object.focus.size,
					height:inst.object.focus.size,
					zIndex:inst.object.zIndex+1,
					backgroundColor:inst.object.color,
					left:x-inst.object.focus.move,
					top:y-inst.object.focus.move
				});
			}
		},
		out:function(event)
		{
			var el,x,y,linea,punto;
			el=(!event)?elem:leimnud.event.get(event);
			if(el.name=="punto")
			{
				var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
				x=parseInt(el.style.left);
				y=parseInt(el.style.top);
				leimnud.style.set(el,{
					width:inst.object.size,
					height:inst.object.size,
					zIndex:inst.object.zIndex-1,
					left:x+((el.offsetWidth==inst.object.size && el.offsetHeight==inst.object.size)?0:inst.object.focus.move),
					top:y+((el.offsetWidth==inst.object.size && el.offsetHeight==inst.object.size)?0:inst.object.focus.move)
				});
			}
		},
		click:function(event)
		{
			var arrEls;
			el=leimnud.event.get(event);
			//alert(parseInt(el.style.left)+":"+parseInt(el.style.top));
			var tpos={x:parseInt(el.style.left),y:parseInt(el.style.top)};
			leimnud.event.remove(el,"mouseout",leimnud.graf.fx.linea.out);
			leimnud.event.remove(el,"mouseover",leimnud.graf.fx.linea.over);
			/* guideline tmp */
			var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
			var guideVertical	=document.createElement("div");
			//leimnud.style.set(guideVertical,inst.styleGuideX);
			leimnud.style.set(guideVertical,{
				width:2,
				height:"100%",
				position:"absolute",
				border:"0px solid red",
				borderLeft:"1px dashed #006699",
				top:0,
				left:parseInt(el.style.left)+2
			});
			var guideHorizontal	=document.createElement("div");
			leimnud.style.set(guideHorizontal,{
				height:2,
				width:"100%",
				position:"absolute",
				border:"0px solid red",
				borderTop:"1px dashed #006699",
				left:0,
				top:parseInt(el.style.top)+2
			});
			var info	=document.createElement("div");
			leimnud.style.set(info,{
				height		:30,
				width		:40,
				position	:"absolute",
				paddingLeft	:5,
				border		:"1px solid #006699",
				backgroundColor	:"#fafbfc",
				font		:"normal 8pt Tahoma",
				left		:(parseInt(el.style.left)+2)+10,
				top		:(parseInt(el.style.top)+2)-40
			});
			info.innerHTML="<b>x</b>: "+(parseInt(el.style.left)+2)+"<br><b>y</b>: "+(parseInt(el.style.top)+2);
			inst.object.target.appendChild(guideHorizontal);
			inst.object.target.appendChild(guideVertical);
			inst.object.target.appendChild(info);
			tmpguide={horizontal:guideHorizontal,vertical:guideVertical,info:info};

			leimnud.drag.ini(
			{
				objetos	:[{el:el},{el:guideHorizontal},{el:guideVertical},{el:info}],
				event	:event,
				other	:{
					callback:[{
						_on:"go",
						_in:"begin",
						_function:function(object)
						{
							var el=leimnud.event.get(object.paramDrag.event);
							if(el.name=="casicodo")
							{
								el.name="casicodo";
							}
							else if(el.name=="codo")
							{
								el.name="codo";
							}
							else
							{
								el.name="casicodo"
							}
							//leimnud.event.remove(el,"mouseout",leimnud.graf.fx.linea.out);
						},
						param:tmpguide
					},
					{
						_on:"go",
						_in:"end",
						_function:function(object)
						{
							var el=leimnud.event.get(object.paramDrag.event);
							var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
							if(inst && inst.codos)
							{
								leimnud.style.set(object.vertical,{top:0});
								leimnud.style.set(object.horizontal,{left:0});
								object.info.innerHTML="<b>x</b>: "+(parseInt(el.style.left)+2)+"<br><b>y</b>: "+(parseInt(el.style.top)+2);
							}
						},param:tmpguide
					},
					{
						_on:"finish",
						_in:"begin",
						_function:function(object)
						{
							var el,x,y,zz;
							el=leimnud.event.get(object.paramDrag.event);
							//window.status=object.tpos.x+":"+object.tpos.y+"|"+parseInt(el.style.left)+":"+parseInt(el.style.top);

							//alert(leimnud.tools.object.toString(object.horizontal))
							/* eliminar guideline tmp begin */
							leimnud.tools.element.remove(object.tmpguide.horizontal);
							leimnud.tools.element.remove(object.tmpguide.vertical);
							leimnud.tools.element.remove(object.tmpguide.info);

							/* eliminar guideline tmp end */
							var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
							if(inst && inst.codos)
							{
								//document.getElementById("debug").innerHTML+="+name:"+el.name+" id="+el.id+"<br><br><pre>"+el+"</pre><br><br>";
								if(el.name=="casicodo")
								{
									leimnud.event.remove(el,"mouseover",leimnud.graf.fx.linea.over);
									el.style.visibility="hidden";
									x=parseInt(el.style.left);
									y=parseInt(el.style.top);
									zz=2;
									leimnud.graf.fx.linea.createCodo({
										action:"update",
										x:x,
										y:y,
										color:inst.object.color,
										zIndex:inst.object.zIndex+1,
										target:inst.object.target,
										id:el.id,
										noFix:true
									});
									//leimnud.graf.fx.linea.codo.set(object.paramDrag.event);
									//leimnud.event.add(el,"mouseout",leimnud.graf.fx.linea.codo.set);
									//leimnud.event.add(el,"mouseover",leimnud.graf.fx.linea.codo.over);
									el.name="codo";
									//leimnud.graf.fx.linea.resize(el.id);
									//(tam/cantidad)
								}
								else if(el.name=="codo")
								{
									//x=parseInt(el.style.left);
									//y=parseInt(el.style.top);
									//zz=2;
									//document.getElementById("debug").innerHTML+="CODO: +id="+el.id+" name="+el.name+" x="+x+" y="+y+" size:("+el.style.width+"x"+el.style.height+")  inst.size="+inst.size+"<br>";
								}
								else if(el.name=="punto")
								{
									//if(object.tpos.x==parseInt(el.style.left) && object.tpos.y==parseInt(el.style.top))
									//{

									//	}else{

									//}
									leimnud.graf.fx.linea.out(object.paramDrag.event);
									leimnud.event.add(el,"mouseover",leimnud.graf.fx.linea.over);
									//window.status="kkk|"+el.id
								}
								//document.getElementById("debug").innerHTML="<hr><pre style='min-height:300px;'>"+leimnud.tools.object.toString(leimnud.graf.database.codo[leimnud.graf.fx.tools.getCodo(el.id).codo])+"</pre>";
							}
						},
						param:{tmpguide:tmpguide,tpos:tpos}
					}
					]
				}
			});
		},
		codo:{
			over:function(event){
				var el	=leimnud.event.get(event);
				var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
				leimnud.style.set(el,{backgroundColor:inst.object.colorCodoOver||"red"});
				//window.status=el.style.left+":"+el.style.top
			},
			out:function(event)	{
				var el	=leimnud.event.get(event);
				var inst=leimnud.graf.fx.tools.getCodoInstOfCodo(el.id);
				leimnud.style.set(el,{backgroundColor:inst.object.color});
			},
			contextmenu:function(event,manual)
			{
				var codo,inst,el=leimnud.event.get(event);
				if(manual){codo=manual.codo;inst=manual.inst;}else{codo=leimnud.graf.fx.tools.getCodo(el.id);inst=leimnud.graf.database.codo[codo.codo];}
				zzi=inst.object.zIndex+3;
				//window.status=zzi
				var b=leimnud.panel.create({w:85,h:10},{x:inst.codos[codo.num].position.x,y:inst.codos[codo.num].position.y},"contextmenu",zzi,false,{
					botones:{cerrar:((leimnud.browser.isOPERA)?true:false)},
					incontainer:inst.object.target,
					style:{
						panel:{border:"1px dashed "+inst.object.color},
						html:{padding:2}
					}
				});
				var href=document.createElement("a");
				href.innerHTML="Delete";
				href.href="#";
				href.id=codo.codo;
				if(!leimnud.browser.isOPERA)
				{
					var unlock=leimnud.panel.history[b].elementos.lock;
					leimnud.event.add(unlock,"mouseup",leimnud.panel.remove);
				}
				leimnud.panel.html(b,href);
				leimnud.style.set(href,leimnud.panel.styles.contextmenu.menu);
				leimnud.event.add(href,"mouseover",function(event){leimnud.style.set(leimnud.event.get(event),leimnud.panel.styles.contextmenu.over);});
				leimnud.event.add(href,"mouseout",function(event){leimnud.style.set(leimnud.event.get(event),leimnud.panel.styles.contextmenu.out);});
				leimnud.event.add(href,"mouseup",leimnud.graf.fx.linea.deleteCodo,false,{
					name:codo.codo,
					Obj:{codoId:el.id,panelId:b}
				});
				//leimnud.fx.opacity.set(leimnud.panel.history[b].elementos.root,70);
				leimnud.event._null(event);
			},
			click:function(event)
			{
				var el=leimnud.event.get(event);
				var codo=leimnud.graf.fx.tools.getCodo(el.id);
				var inst=leimnud.graf.database.codo[codo.codo];
				if (typeof event.button != "undefined"){if (event.button == 2) {return false;}}
				/* click menu for OPERA begin */
				if(leimnud.browser.isOPERA)
				{
					var s=inst.tmp.menucodo;
					if(s.step1===codo.num && s.step2===codo.num)
					{
						leimnud.graf.fx.linea.codo.contextmenu(event,{codo:codo,inst:inst});
					}else if(s.step1===codo.num){
						s.step2=codo.num;
						//window.status=2
					}else{
						s.step1=codo.num;
						s.step2=false;
						//window.status=3
					}
				}
				/* click menu for OPERA end */

				/* codo guideline begin */
				var guideVertical	=document.createElement("div");
				leimnud.style.set(guideVertical,{
					width:2,
					height:"100%",
					position:"absolute",
					border:"0px solid red",
					borderLeft:"1px dashed #006699",
					top:0,
					left:inst.codos[codo.num].position.x
				});
				var guideHorizontal	=document.createElement("div");
				leimnud.style.set(guideHorizontal,{
					height:2,
					width:"100%",
					position:"absolute",
					border:"0px solid red",
					borderTop:"1px dashed #006699",
					left:0,
					top:inst.codos[codo.num].position.y
				});
				var info	=document.createElement("div");
				leimnud.style.set(info,{
					height:30,
					width:40,
					position:"absolute",
					paddingLeft:5,
					border:"1px solid #006699",
					backgroundColor:"#fafbfc",
					font		:"normal 8pt Tahoma",
					left:inst.codos[codo.num].position.x+10,
					top:inst.codos[codo.num].position.y-40
				});
				leimnud.fx.opacity.set(info,30);
				inst.object.target.appendChild(guideHorizontal);
				inst.object.target.appendChild(guideVertical);
				inst.object.target.appendChild(info);
				info.innerHTML="<b>x</b>: "+inst.codos[codo.num].position.x+"<br><b>y</b>: "+inst.codos[codo.num].position.y;
				/* codo guideline end */
				inst.codos[codo.num].guideline={
					horizontal:guideHorizontal,
					vertical:guideVertical
				}
				inst.codos[codo.num].infobox=info;
				//alert(el.id)
				leimnud.drag.ini(
				{
					objetos	:[{el:el},{el:guideVertical},{el:guideHorizontal},{el:info}],
					event	:event,
					other	:{
						callback:[
						{
							_on:"go",
							_in:"end",
							_function:function(object)
							{
								var el,x,y,zz;
								el=leimnud.event.get(object.paramDrag.event);
								var codo=leimnud.graf.fx.tools.getCodo(el.id);
								var inst=leimnud.graf.database.codo[codo.codo];
								//window.status=inst.codos;
								if(inst && inst.codos && inst.codos[codo.num])
								{
									leimnud.style.set(inst.codos[codo.num].guideline.vertical,{top:0});
									leimnud.style.set(inst.codos[codo.num].guideline.horizontal,{left:0});
									inst.codos[codo.num].infobox.innerHTML="<b>x</b>: "+(parseInt(el.style.left)+2)+"<br><b>y</b>: "+(parseInt(el.style.top)+2);
								}
							}
						},
						{
							_on:"finish",
							_in:"begin",
							_function:function(object)
							{
								var el,x,y,zz;
								el=leimnud.event.get(object.paramDrag.event);
								var codo=object.codo;
								var inst=leimnud.graf.database.codo[codo.codo];
								if(inst && inst.codos)
								{
									//alert(codo.num+":"+leimnud.tools.object.toString(inst.codos[codo.num]))
									leimnud.tools.element.remove(inst.codos[codo.num].guideline.vertical);
									leimnud.tools.element.remove(inst.codos[codo.num].guideline.horizontal);
									leimnud.tools.element.remove(inst.codos[codo.num].infobox);

									var x=parseInt(inst.codos[codo.num].punto.objeto.style.left);
									var y=parseInt(inst.codos[codo.num].punto.objeto.style.top);
									//window.status=inst.codos[codo.num].position.x+":"+x+"|"+inst.codos[codo.num].position.y+":"+y;
									if(inst.codos[codo.num].position.x!=x+2 || inst.codos[codo.num].position.y!=y+2)
									{
										leimnud.graf._delete.linea(inst.lineas[codo.num]);
										leimnud.graf._delete.linea(inst.lineas[codo.num+1]);
										inst.codos[codo.num].position.x=x+2;
										inst.codos[codo.num].position.y=y+2;
										//leimnud.graf.fx.linea.newCodoLines({inst:inst,codo:codo});
										el.title="x: "+(x+2)+" ,y: "+(y+2);

										leimnud.graf.fx.linea.newDoubleLines({inst:inst,codo:codo});
									}
									//alert(leimnud.tools.object.toString(codo))
								}
							},
							param:{codo:codo}
						}
						]
					}
				});
			}
		},
		createCodo:function(param)
		{
			var size=(leimnud.browserISIE)?5:5;
			var diff=(!param.noFix)?2:0;
			var codo=leimnud.graf.fx.tools.getCodo(param.id)
			var action=param.action || "create";
			var inst=leimnud.graf.database.codo[codo.codo];
			codo.num=parseInt(codo.num);
			//alert(action)
			//alert(leimnud.tools.object.toString(codo))
			//nnm=codo.codo+"|"+((action=="update")?parseInt(parseInt(codo.num)+1):codo.num);
			var ln=leimnud.graf.punto({
				name:codo.codo+"|"+codo.num,
				noRand:true,
				w:size,
				h:size,
				x:param.x-diff,
				y:param.y-diff,
				color:param.color,
				style:{cursor:"move"},
				zIndex:param.zIndex,
				event:[{on:"mouseover",go:leimnud.graf.fx.linea.codo.over},
				{on:"mousedown",go:leimnud.graf.fx.linea.codo.click},
				{on:"contextmenu",go:leimnud.graf.fx.linea.codo.contextmenu},
				{on:"mouseout",go:leimnud.graf.fx.linea.codo.out}
				],
				target:param.target
			});
			ln.objeto.title="x: "+(param.x+((action=="create")?0:2))+" ,y: "+(param.y+((action=="create")?0:2));
			if(action=="create")
			{
				//alert(codo.codo)
				inst.codos[inst.codos.length]={
					punto:ln,
					position:{x:param.x,y:param.y}
				};
			}
			else if(action=="update")
			{
				var tmp=inst.codos.slice(codo.num,inst.codos.length);
				inst.codos[codo.num]={
					punto:ln,
					position:{x:param.x+2,y:param.y+2}
				};
				for(var i=0;i<tmp.length;i++)
				{
					var nj=(parseInt(codo.num)+i)+1;
					var nm=codo.codo+"|"+nj;
					inst.codos[nj]={
						punto:{name:nm,objeto:tmp[i].punto.objeto},
						position:tmp[i].position
					};
					inst.codos[nj].punto.objeto.id=nm;
				}
				/* resize */
				leimnud.graf.fx.linea.newCodoLines({inst:inst,codo:codo});
			}
		},
		deleteCodo:function(event)
		{
			var el=leimnud.event.get(event);
			var obj=leimnud.event.expand[el.id];
			var codo=leimnud.graf.fx.tools.getCodo(obj.codoId);
			var inst=leimnud.graf.database.codo[codo.codo];
			var line1=inst.lineas[codo.num],line2=(inst.lineas[codo.num+1]);
			leimnud.panel.remove(obj.panelId);
			leimnud.tools.element.remove(inst.codos[codo.num].punto.objeto);
			inst.codos.splice(codo.num,1);
			inst.lineas.splice(codo.num+1,1);
			for(var i=codo.num;i<inst.codos.length;i++)
			{
				var nm=codo.codo+"|"+i;
				inst.codos[i].punto.name=nm;
				inst.codos[i].punto.objeto.id=nm;
			}
			for(var i=(codo.num+1);i<inst.lineas.length;i++)
			{
				leimnud.graf.fx.linea.reloadInternalLineDB(inst.lineas[i],codo.codo+"|"+i);
			}
			leimnud.graf._delete.linea(line1);
			leimnud.graf._delete.linea(line2);
			/* crear linea begin */
			x1=(codo.num==0)?inst.puntas.x1:inst.codos[codo.num-1].position.x;
			y1=(codo.num==0)?inst.puntas.y1:inst.codos[codo.num-1].position.y;
			x2=(codo.num==inst.codos.length)?inst.puntas.x2:inst.codos[codo.num].position.x;
			y2=(codo.num==inst.codos.length)?inst.puntas.y2:inst.codos[codo.num].position.y;
			var line=leimnud.graf.linea({
				name:codo.codo+"|"+codo.num,
				nameNoGenerate:true,
				position:{x1:x1,y1:y1,x2:x2,y2:y2},
				event:[
				{on:"mouseover"	,go:leimnud.graf.fx.linea.over},
				{on:"mousedown"	,go:leimnud.graf.fx.linea.click},
				{on:"mouseout"	,go:leimnud.graf.fx.linea.out}],
				style:((inst.object.style)?inst.object.style:false),
				size:1,zIndex:inst.object.zIndex,color:inst.object.color,target:inst.object.target
			});
			inst.lineas[codo.num]=line;
			/* crear linea end */
			if(inst.object.onChange){leimnud.tools.ejectFunction(inst.object.onChange,codo.codo);}
			//document.getElementById("debug").innerHTML+="===================================";
			//document.getElementById("debug").innerHTML+="<pre>"+leimnud.tools.object.toString(inst)+"</pre>";
			//document.getElementById("debug").innerHTML+="-----------------------------------";
			//document.getElementById("debug").innerHTML+="<pre>"+leimnud.tools.object.toString(inst.codos)+"</pre>";
		},
		newCodoLines:function(param)
		{
			var inst=param.inst,codo=param.codo;
			leimnud.graf._delete.linea(inst.lineas[codo.num]);
			var tmp=inst.lineas.slice(codo.num,inst.lineas.length);
			leimnud.graf.fx.linea.newDoubleLines(param);
			for(var i=1;i<tmp.length;i++)
			{
				var nj=parseInt(parseInt(codo.num)+i)+1;
				var nm=codo.codo+"|"+nj;
				inst.lineas[nj]=tmp[i];
				leimnud.graf.fx.linea.reloadInternalLineDB(tmp[i],nm);
			}
		},
		newDoubleLines:function(param)
		{
			var inst=param.inst,codo=param.codo;
			codo.num=parseInt(codo.num);
			var newlines=[[],[]];
			newlines[0]['x1']=(codo.num==0)?inst.puntas.x1:inst.codos[codo.num-1].position.x;
			newlines[0]['y1']=(codo.num==0)?inst.puntas.y1:inst.codos[codo.num-1].position.y;
			newlines[0]['x2']=inst.codos[codo.num].position.x;
			newlines[0]['y2']=inst.codos[codo.num].position.y;

			newlines[1]['x1']=inst.codos[codo.num].position.x;
			newlines[1]['y1']=inst.codos[codo.num].position.y;
			newlines[1]['x2']=(codo.num==inst.codos.length-1)?inst.puntas.x2:inst.codos[codo.num+1].position.x;
			newlines[1]['y2']=(codo.num==inst.codos.length-1)?inst.puntas.y2:inst.codos[codo.num+1].position.y;

			//var tmp=inst.lineas.slice(codo.num,inst.lineas.length);
			for(var i=0;i<2;i++)
			{
				var codonum=parseInt(parseInt(codo.num)+i);
				//alert(codo.codo+"|"+codonum)
				//window.status+=codonum+"|";
				var line=leimnud.graf.linea({
					name:codo.codo+"|"+codonum,
					nameNoGenerate:true,
					position:{x1:newlines[i]['x1'],y1:newlines[i]['y1'],x2:newlines[i]['x2'],y2:newlines[i]['y2']},
					event:[
					{on:"mouseover"	,go:leimnud.graf.fx.linea.over},
					{on:"mousedown"	,go:leimnud.graf.fx.linea.click},
					{on:"mouseout"	,go:leimnud.graf.fx.linea.out}],
					style:((inst.object.style)?inst.object.style:false),
					size:1,zIndex:inst.object.zIndex,color:inst.object.color,target:inst.object.target
				});
				inst.lineas[codonum]=line;
				//window.status+="||||"+inst.codos[codonum].punto.objeto.style.left+":"+inst.codos[codonum].punto.objeto.style.top+":"+newlines[i]['x1']+":"+newlines[i]['y1']+"::"+newlines[i]['x2']+":"+newlines[i]['y2'];
			}
			if(inst.object.onChange){leimnud.tools.ejectFunction(inst.object.onChange,codo.codo);}
		},
		reloadInternalLineDB:function(uid,id)
		{
			var linea=leimnud.graf.database.linea[uid];
			//alert(uid+":"+id)
			for(var g=0;g<linea.puntos.length;g++)
			{
				linea.puntos[g].id=id+"|"+g;
			}
		},
		conectores:{
			set:function(param)
			{

			},
			create:function(param)
			{
				var inst=leimnud.graf.database.codo[param.inst],position=param.position,type=param.type,guide,puntos;
				if(position=="begin")
				{guide=leimnud.graf.database.linea[inst.lineas[0]];}
				else if(position=="end")
				{guide=leimnud.graf.database.linea[inst.lineas[inst.lineas.length-1]];}
				else{return false;}
				puntos=guide.puntos.length;
				if(puntos<5){return false;}
				//alert(leimnud.tools.object.toString(inst))
				var a=[];
				for(var i=0;i<5;i++)
				{
					var c=((guide.reversa && position=="begin") || (!guide.reversa && position=="end"))?guide.puntos.length-(i+1):i;
					var b=guide.puntos[c];
					a[i]={
						x:parseInt(b.style.left),
						y:parseInt(b.style.top)
					};
					//alert(c+"::"+b)
				}
				if(type=="arrow")
				{
					for(var i=0;i<a.length;i++)
					{
						//for(var k=0;k<(i+1);k++)
						//{
						if(i>0)
						{
							var x=a[i].x+i;
							var y=a[i].y;
							var ln=leimnud.graf.punto({
								name:inst+"|arrow",
								noRand:true,
								w:1,
								h:1,
								x:a[i].x-i,
								y:y,
								color:"red",
								zIndex:inst.object.zIndex+1,
								target:inst.object.target
							});

							var ln=leimnud.graf.punto({
								name:inst+"|arrow",
								noRand:true,
								w:1,
								h:1,
								x:x,
								y:y,
								color:"red",
								zIndex:inst.object.zIndex+1,
								target:inst.object.target
							});
						}
						else
						{
							var x=a[i].x+i;
							var y=a[i].y;
							var ln=leimnud.graf.punto({
								name:inst+"|arrow",
								noRand:true,
								w:1,
								h:1,
								x:x,
								y:y,
								color:"red",
								zIndex:inst.object.zIndex+1,
								target:inst.object.target
							});
						}
						//}
					}
				}
				//alert(a.length+":"+leimnud.tools.object.toString(guide));
				//alert(puntos)
			}
		}
	},
	tools:{
		reloadBF:function(param)
		{
			//			alert(leimnud.tools.object.toString(param));
			var prop=leimnud.graf.fx.tools.object.properties(leimnud.panel.history[param.task.panel].elementos.root);
			var inst=leimnud.graf.database.codo[param.line];
			var codo={codo:param.line};
			//alert(leimnud.tools.object.toString(inst))
			//return;

			codo.num=0;
			leimnud.graf._delete.linea(inst.lineas[codo.num]);
			eval("x1=prop."+param.pos+".x");
			eval("y1=prop."+param.pos+".y");
			inst.puntas.x1=x1;
			inst.puntas.y1=y1;
			//window.status=inst.codos.length
			x2=(codo.num==inst.codos.length)?inst.puntas.x2:inst.codos[codo.num].position.x;
			y2=(codo.num==inst.codos.length)?inst.puntas.y2:inst.codos[codo.num].position.y;
			//alert(x1+":"+y1+":"+x2+":"+y2)
			//var tmp=inst.lineas.slice(codo.num,inst.lineas.length);
			var codonum=parseInt(parseInt(codo.num)+i);
			//window.status+=codonum+"|";
			var line=leimnud.graf.linea({
				name:param.line+"|"+codo.num,
				nameNoGenerate:true,
				position:{x1:x1,y1:y1,x2:x2,y2:y2},
				event:[
				{on:"mouseover"	,go:leimnud.graf.fx.linea.over},
				{on:"mousedown"	,go:leimnud.graf.fx.linea.click},
				{on:"mouseout"	,go:leimnud.graf.fx.linea.out}],
				style:((inst.object.style)?inst.object.style:false),
				size:1,zIndex:inst.object.zIndex,color:inst.object.color,target:inst.object.target
			});
			inst.lineas[codo.num]=line;
		},
		reloadBF2:function(param)
		{
			alert(leimnud.tools.object.toString(param));
			var inst=leimnud.graf.database.codo[param.line];
			var codo={codo:param.line};
			if(param.punta=="begin")
			{
				codo.num=0;
				x1=param.position.x;
				y1=param.position.y;
				inst.puntas.x1=x1;
				inst.puntas.y1=y1;
				x2=(codo.num==inst.codos.length)?inst.puntas.x2:inst.codos[codo.num].position.x;
				y2=(codo.num==inst.codos.length)?inst.puntas.y2:inst.codos[codo.num].position.y;
			}
			else
			{
				codo.num=inst.codos.length;
				x1=(codo.num==0)?inst.puntas.x1:inst.codos[codo.num-1].position.x;
				y1=(codo.num==0)?inst.puntas.y1:inst.codos[codo.num-1].position.y;
				x2=param.position.x;
				y2=param.position.y;
				inst.puntas.x2=x2;
				inst.puntas.y2=y2;
			}

			leimnud.graf._delete.linea(inst.lineas[codo.num]);
			alert(x1+":"+y1+":"+x2+":"+y2)
			var codonum=parseInt(parseInt(codo.num)+i);
			var line=leimnud.graf.linea({
				name:param.line+"|"+codo.num,
				nameNoGenerate:true,
				position:{x1:x1,y1:y1,x2:x2,y2:y2},
				event:[
				{on:"mouseover"	,go:leimnud.graf.fx.linea.over},
				{on:"mousedown"	,go:leimnud.graf.fx.linea.click},
				{on:"mouseout"	,go:leimnud.graf.fx.linea.out}],
				style:((inst.object.style)?inst.object.style:false),
				size:1,zIndex:inst.object.zIndex,color:inst.object.color,target:inst.object.target
			});
			inst.lineas[codo.num]=line;
		},
		positionsToObject:function(string)
		{
			var pos=string.split(",");
			var p=[];
			for(var k=0;k<pos.length;k+=4)
			{
				p[p.length]={
					x1:parseInt(pos[k]),
					y1:parseInt(pos[k+1]),
					x2:parseInt(pos[k+2]),
					y2:parseInt(pos[k+3])
				}
			}
			return p;
		},
		positionsToString:function(id)
		{
			var inst=leimnud.graf.database.codo[id];
			var rt="";
			rt+=inst.puntas.x1+","+inst.puntas.y1+",";
			for(var i=0;i<inst.codos.length;i++)
			{
				rt+=inst.codos[i].position.x+","+inst.codos[i].position.y+","+inst.codos[i].position.x+","+inst.codos[i].position.y+",";
			}
			rt+=inst.puntas.x2+","+inst.puntas.y2;
			return rt;
		},
		positionsPMFormat:function(string)
		{
			var cadena=string.split(",");
			if(cadena.length<=4)
			{
				return false;
			}
			else
			{
				var afor=[];
				var cd;
				for(var i=0;i<cadena.length;i++)
				{
					if(i%4==0)
					{
						afor[afor.length]=[];
						//alert(afor.length);
						cd=afor[afor.length-1];
					}
					cd[cd.length]=cadena[i];
				}
				//alert(leimnud.tools.object.toString(afor));
				var cor="";
				for(var j=0;j<afor.length;j++)
				{
					if(j==0)
					{
						cor+="X"+parseInt(afor[j][0]*14);
						cor+="Y"+parseInt(afor[j][1]*18);
						cor+=" ";
						cor+="X"+parseInt(afor[j][2]*14);
						cor+="Y"+parseInt(afor[j][3]*18);
						cor+=" ";
					}
					else
					{
						cor+="X"+parseInt(afor[j][2]*14);
						cor+="Y"+parseInt(afor[j][3]*18);
						cor+=((j==afor.length-1)?"":" ");
					}
				}
				//alert(cor)
				/*var points = (cadena.length - 4) / 4;
				var co = 'X' + (cadena[0] * 14) + 'Y' + (cadena[1] * 18) + ' ';
				//alert(co)
				var j = 2;
				for (var i = 0; i < points; i++)
				{
					j = (i * 2) + j;
				//	alert(co);
					co+= 'X' + (cadena[j] * 14) + 'Y' + (cadena[j + 1] * 18) + ' ';
					j += 2;
				}
				//alert(co)
				co+= 'X' + (cadena[cadena.length - 2] * 14) + 'Y' + (cadena[cadena.length - 1] * 18);*/
				return cor;
			}
		},
		getInst:function(id)
		{
			var ard=id.split("|");
			return {linea:ard[0],punto:ard[1]}
		},
		getInstCodo:function(id)
		{
			//window.status=id;
			var ard=id.split("|");
			return {codo:ard[0],linea:parseInt(ard[1]),punto:parseInt(ard[2])}
		},
		getCodo:function(id)
		{
			//window.status=id;
			var ard=id.split("|");
			return {codo:ard[0],num:parseInt(ard[1])}
		},
		getLineNameOfCodo:function(codoid)
		{
			var dataInst=leimnud.graf.fx.tools.getInstCodo(codoid);
			var linea=leimnud.graf.database.codo[dataInst.codo].lineas[dataInst.linea];
			return linea;
		},
		getCodoInstOfCodo:function(codoid)
		{
			var dataInst=leimnud.graf.fx.tools.getInstCodo(codoid);
			var linea=leimnud.graf.database.codo[dataInst.codo];
			return linea;
		},
		getLineInstOfCodo:function(codoid)
		{
			return leimnud.graf.database.linea[leimnud.graf.fx.tools.getLineNameOfCodo(codoid)];
		},
		getPuntoInstOfCodo:function(codoid)
		{
			var punto=leimnud.graf.fx.tools.getInstCodo(codoid).punto;
			var line=leimnud.graf.database.linea[leimnud.graf.fx.tools.getLineNameOfCodo(codoid)];
			return punto;
		},
		object:{
			properties:function(obj)
			{
				var w,h,x1,x2,y1,y2,center,ct,cl,cr,cd;
				w=obj.offsetWidth;
				h=obj.offsetHeight;
				x1=parseInt(obj.style.left);
				x2=x1+w;
				y1=parseInt(obj.style.top);
				y2=y1+h;
				center={
					x:parseInt(x1+(w/2)),
					y:parseInt(y1+(h/2))
				};
				ct={
					x:parseInt(x1+(w/2)),
					y:y1
				};
				cb={
					x:parseInt(x1+(w/2)),
					y:y2
				};
				cl={
					x:x1,
					y:parseInt(y1+(h/2))
				};
				cr={
					x:x2,
					y:parseInt(y1+(h/2))
				};
				return {
					w:w,
					h:h,
					x1:x1,
					x2:x2,
					y1:y1,
					y2:y2,
					center:center,
					ct:ct,
					cb:cb,
					cl:cl,
					cr:cr
				}
			}
		}
	}
};
leimnud.aplication={
	ajax:{
		database:[],
		loadHtml:function(param)
		{
			this.vars=param.vars || false;
			this.target=leimnud.aplication.tools.getTarget(param.target || false);
			this.url=param.url || false;
			this.process=param.process || Math.random();
			this.method=param.method || "GET";
			this.advanced=param.advanced || {};
			this.error="No errors";
			this.launchs=1;
			this.history=[];
			this.inhistory=0;
			this.render=function()
			{
				if(!this.probeError()){return false;}
				if(this.advanced.history && typeof this.history[0]=="undefined"){
					var a=new Date();
					var tm=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
					this.history[0]={
						time:tm,
						content:this.target.innerHTML
					};}
					if(this.advanced.panel)
					{
						this.panelFunctions("begin");
//						leimnud.panel.loader.begin(this.advanced.panel.loader);
					}
					uyh=new leimnud.rpc.xmlhttp({
						variables	:this.vars,
						method		:this.method,
						url		:this.url,
						callback    :{
							_function	:function($){$.arguments.inst.engine($);},
							arguments	:{inst:this}
						}});
			}
			this.engine=function($)
			{
				var target=this.target;
				this.innerHTML($.request.responseText);
				if(this.advanced.history){
					this.inhistory+=1;
					var a=new Date();
					var tm=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
					this.history[this.inhistory]={time:tm,content:$.request.responseText+a.getTime()};
				}
				if(this.advanced.update)
				{
					this.advanced.update.interval = this.advanced.update.interval || 10000;
					leimnud.aplication.ajax.database[this.process]=this;
					if(this.advanced.update.limit)
					{
						if(this.advanced.update.limit>=this.launchs)
						{
							this.launchs+=1;
							this.interval = setTimeout("leimnud.aplication.ajax.reLaunch('"+this.process+"');",this.advanced.update.interval);
						}
					}
					else
					{
						this.interval = setTimeout("leimnud.aplication.ajax.reLaunch('"+this.process+"');",this.advanced.update.interval);
					}
				}
				if(this.advanced.panel)
				{
					this.panelFunctions("finish");
				}
			}
			this.panelFunctions=function(_in)
			{
				var uid=this.advanced.panel.uid || false;
				if(this.advanced.panel.sombra)
				{
				//alert(leimnud.tools.object.toString(this.advanced.panel.sombra));
					leimnud.panel.sombra(uid,this.advanced.panel.sombra);
				}
				if(_in=="begin")
				{
					if(this.advanced.panel.loader){leimnud.panel.loader.begin(uid || this.advanced.panel.loader);}
				}
				else
				{
					if(this.advanced.panel.loader){leimnud.panel.loader.end(uid || this.advanced.panel.loader);}
				}
			}
			this.probeError=function()
			{
				this.isOk=true;
				if(!this.target)
				{
					this.isOk=false;
					this.error="Target container not Found!";
					leimnud.panel.alert(this.error);
				}
				else if(!this.url)
				{
					this.isOk=false;
					this.error="URL not Found";
					this.target.innerHTML=this.error;
				}
				return this.isOk;
			}
			this.innerHTML=function(html)
			{
				if(this.advanced && this.advanced.html)
				{
					if(this.advanced.html=="new")
					{
						this.target.innerHTML=html;
					}
					else if(this.advanced.html=="begin")
					{
						this.target.innerHTML=html+this.target.innerHTML;
					}
					else if(this.advanced.html=="end")
					{
						this.target.innerHTML+=html;
					}
					else
					{
						this.target.innerHTML=html;
					}

				}
				else
				{
					this.target.innerHTML=html;
				}
			}
			this.showHistory=function()
			{
				lleft=((document.body.clientWidth/2)+document.body.scrollLeft);
				ltop=((document.body.clientHeight/2)+document.body.scrollTop);
				var a=leimnud.panel.create({w:500,h:300},{x:lleft,y:ltop,center:true},"showhistory",10,false,{
					botones:{cerrar:true}
				});
				leimnud.panel.html(a,"<b>Historial de cambios</b><br><br>");
				var bi=document.createElement("div");
				leimnud.style.set(bi,{
					width:480,
					heigth:250,
					minHeight:250,
					maxHeight:250,
					border:"1px solid #EEEEEE",
					textAlign:"justify",
					overflow:"auto"
				});
				for(var i=0;i<this.history.length;i++)
				{
					var c=document.createElement("div");
					leimnud.style.set(c,{
						border:"1px dashed orange",
						margin:5,
						padding:3,
						minHeight:10});
						c.innerHTML="<b>"+i+":</b>   "+this.history[i].time+"<br /><br />";
						c.innerHTML+=this.history[i].content;
						bi.appendChild(c);
				}
				leimnud.panel.html(a,bi);
				leimnud.panel.sombra(a,{sombra:{color:"#000000",opacity:30}});
				leimnud.panel.createDrag(a);

			}
		},
		reLaunch:function(process)
		{
			var inst=leimnud.aplication.ajax.database[process]
			inst.render();
		}
	},
	tools:{
		getTarget:function(id)
		{
			return (!id)?false:((typeof id=="object")?id:((document.getElementById(id))?document.getElementById(id):false));
		}
	},
	event:{
		instance:{
			add:function(inst)
			{
				leimnud.event.expand[inst.name]=inst.inst;
			},
			get:function(inst)
			{
				return (!leimnud.event.expand[inst])?false:leimnud.event.expand[inst];
			}
		},
		dispatcher:function(param)
		{
			//alert(456);
			var name		=param.name || false;
			var _goto		=param._function || false;
			var arguments	=param.arguments || {};
			if(!name){return false;}
			leimnud.event.expand[name]={
				_function	:_goto,
				name	:name,
				arguments:arguments
			};
			//leimnud.event.expand[name]=_goto;
			return true;
		},
		launch:function(event,name,arguments)
		{
			var nameProcess=(!name)?leimnud.event.get(event).id:name;
			//alert(nameProcess)
			if(!leimnud.event.expand[nameProcess])
			{
				return false;
			}
			else
			{
				var process =leimnud.event.expand[nameProcess];
				if(!process._function){return false;}
				if(typeof process._function=='function')
				{
					return process._function({event:event,arguments:process.arguments,param:arguments || false});
				}
				else
				{
					return process._function;
				}
			}
		},
		isset:function(name)
		{
			return (leimnud.event.expand[name])?true:false;
		},
		query:function(name)
		{
			return (leimnud.event.expand[name])?leimnud.event.expand[name]:false;
		}
	},
	panel:{
		effect:{
			sizeHidden:function(panelUID,options)
			{
				var UIDpanel=leimnud.panel.history[panelUID];
				this.panelUID=panelUID;
				this.options = options || false;
				this.error=false;
				this.counter=1;
				this.rHeight=40;
				this.rWidth=40;
				this.minH=15;
				this.minW=15;
				if(!UIDpanel)
				{
					this.error=true;
				}
				else
				{
					leimnud.style.set(leimnud.panel.DOM(this.panelUID,"content"),{
						overflow:"hidden"
						//minHeight:0,
						//backgroundColor:"#006699"
						//minWidth:0
					});
					leimnud.style.set(leimnud.panel.DOM(this.panelUID,"root"),{
						overflow:"hidden"
					});
				}
				//alert(panelUID)
				this.go=function()
				{
					if(!this.error)
					{
						this._window=leimnud.panel.DOM(this.panelUID,"content");
						this._shadow=leimnud.panel.DOM(this.panelUID,"shadow");
						this._root=leimnud.panel.DOM(this.panelUID,"root");
						if(leimnud.panel.DOM(this.panelUID,"lock"))
						{
							leimnud.panel.DOM(this.panelUID,"lock").style.visibility="hidden";
						}
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.resizeHeight();",30);
					}
				}
				this.resizeHeight=function()
				{
					this.h=this._window.offsetHeight;
					//alert(this.h)
					if((this.h-this.rHeight)<=this.minH)
					{
						this._window.style.minHeight=this.minH;
						this._window.style.height=this.minH;
						if(this._shadow){
							this._shadow.style.height=this.minH;
						}
						leimnud.panel.DOM(this.panelUID,"root").style.height=this.minH;
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.resizeWidth();",30);
					}
					else
					{
						this._window.style.minHeight=this.h-this.rHeight;
						this._window.style.height=this.h-this.rHeight;
						leimnud.panel.DOM(this.panelUID,"root").style.height=this.h-this.rHeight;
						if(this._shadow){
							this._shadow.style.height=this.h-this.rHeight;
						}
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.resizeHeight();",30);
					}
				}
				this.resizeWidth=function()
				{
					this.w=this._window.offsetWidth;
					if((this.w-this.rWidth)<=this.minW)
					{
						this._window.style.width=this.minW;
						if(this._shadow){
							this._shadow.style.width=this.minW;
						}
						leimnud.panel.DOM(this.panelUID,"root").style.width=this.minW+1;
						this.cLeft=parseInt(this._root.style.left);
						this.cTop=parseInt(this._root.style.top);
						this.conditions={
							left:(this.cLeft<=this.options.final.x)?this.cLeft>this.options.final.x:this.cLeft<this.options.final.x,
							top:(this.cTop<=this.options.final.y)?this.cTop>this.options.final.y:this.cTop<this.options.final.y
						}
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.toFinal();",30);
					}
					else
					{
						this._window.style.width=this.w-this.rWidth;
						this._window.style.minWidth=0;
						leimnud.panel.DOM(this.panelUID,"root").style.width=(this.w-this.rWidth)+2;
						if(this._shadow){
							this._shadow.style.width=(this.w-this.rWidth)+1;
						}
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.resizeWidth();",30);
					}
				}
				this.toFinal=function()
				{
					//alert(this.options.final.x+":"+this.options.final.y)
					this.cLeft=parseInt(this._root.style.left);
					this.cTop=parseInt(this._root.style.top);
					if(this._shadow){
						this.sLeft=parseInt(this._shadow.style.left);
						this.sTop=parseInt(this._shadow.style.top);
					}
					if(this.cLeft>=this.options.final.x && this.cTop<=this.options.final.y)
					{
						if(this.options.onFinish)
						{
							this.options.onFinish._function({arguments:this.options.onFinish || false});
						}
					}
					else
					{
						if(this.cLeft<this.options.final.x)
						{
							this._root.style.left=this.cLeft+this.options.interval;
							this._shadow.style.left=this.sLeft+this.options.interval;
						}
						if(this.cTop>this.options.final.y)
						{
							this._root.style.top=this.cTop-this.options.interval;
							this._shadow.style.top=this.sTop-this.options.interval;
						}
						setTimeout("leimnud.panel.instance('"+this.panelUID+"').effects.toFinal();",30);
					}
				}
				UIDpanel.effects=this;
			}
		}
	},
	dhtml:{
		radioEvents:function()
		{
			this.makes=[];
			this.add=function(param)
			{
				var radio=leimnud.tools.element.radioByValue({name:param.name,value:param.value});
				var idName=param.name+param.value;
				param.activated=false;
				radio.id=idName;
				leimnud.event.add(radio,"click",leimnud.aplication.event.launch);
				leimnud.aplication.event.dispatcher(
				{
					name:idName,
					_function:this.engine,
					arguments:{inst:this,options:param,radio:radio}
				});
				if(param.make){this.makes[this.makes.length]=idName;}
			}
			this.engine=function(param)
			{
				var inst=param.arguments.inst;
				inst.conditions(param.arguments.radio,param.arguments.options.event,true,false);
				if(param.arguments.options.revert)
				{
					var rv=param.arguments.options.revert.split(",");
					for(var i=0;i<rv.length;i++)
					{
						inst.revert(rv[i],param.arguments);
					}
				}
				else
				{
					param.arguments.options.activated=true;
				}
				inst.engineChilds(param.arguments.options.childs,false);
			}
			this.engineChilds=function(childs,reverse)
			{
				if(childs)
				{
					var childs=childs.split(",");
					for(var i=0;i<childs.length;i++)
					{
						var state=childs[i].split("|");
						var r_name=state[0],r_value=state[1],r_action=state[2];
						r_value=r_value.split("-");
						for(var j=0;j<r_value.length;j++)
						{
							var r_adio=leimnud.tools.element.radioByValue({name:r_name,value:r_value[j]});
							this.conditions(r_adio,r_action,false,reverse);
						}
					}
				}
			}
			this.conditions=function(radio,action,probe,revert)
			{
				var revert = revert || false;
				//alert(action)
				if(action=="c")
				{
					if(revert)
					{
						radio.checked=false;
					}else
					{
						radio.checked=true;
					}
					this.recursive(radio.id,action,probe);
				}
				else if(action=="d")
				{
					if(revert)
					{
						radio.disabled=false;
					}else
					{
						radio.disabled=true;
					}
					this.recursive(radio.id,action,probe);
				}
				else if(action=="cd")
				{
					if(revert)
					{
						radio.disabled=false;
					//	radio.checked=true;
					}else
					{
						radio.disabled=true;
						radio.checked=false;
					}
					this.recursive(radio.id,(revert)?"ce":"cd",probe);
				}
				else if(action=="ce")
				{
					if(revert)
					{
						radio.disabled=true;
						//radio.checked=true;
					}else
					{
						radio.disabled=false;
						radio.checked=true;
					}
					this.recursive(radio.id,action,probe);
				}
				else if(action=="u")
				{
					if(revert)
					{
						radio.checked=true;
					}else
					{
						radio.checked=false;
					}
					this.recursive(radio.id,(revert)?"c":"u",probe);
				}
				else if(action=="e")
				{
					if(revert)
					{
						radio.disabled=true;
						radio.checked=false;
					}else
					{
						radio.disabled=false;
					}
					this.recursive(radio.id,action,probe);
				}
			}
			this.recursive=function(r_id,action,probe)
			{
				if(!probe)
				{
					if(r_id && leimnud.aplication.event.isset(r_id) && leimnud.aplication.event.query(r_id).arguments.options.event==action)
					{
						leimnud.aplication.event.launch(false,r_id);
					}
				}
			}
			this.revert=function(r_id,ref)
			{
				var idName=r_id.split("|");
				if(idName.length==2)
				{
					idName=idName[0]+idName[1];
					if(leimnud.aplication.event.isset(idName) && leimnud.aplication.event.query(idName).arguments.options.activated)
					{
						var id=leimnud.aplication.event.query(idName).arguments;
						var child=id.options.childs;
						id.options.activated=false;
						ref.options.activated=true;
						this.conditions(id.radio,id.options.event,true,true);
						this.engineChilds(child,true);
					}
					else
					{
						ref.options.activated=true;
					}
				}
			}
			this.make=function()
			{
				for(var i=0;i<this.makes.length;i++)
				{
					leimnud.aplication.event.launch(false,this.makes[i]);
				}
			}
		}
	}
};
leimnud.aplication.dhtml.mask=function(input,mode,event,options)
{
	this.options	=options || {};
	this.element	=input;
	this.mode	=mode;
	this.event	=event;
	this.symbol	="";
	this.decimal	=this.options.decimal || 2;
	this.milSep	=this.options.milSep || ",";
	this.decSep	=this.options.decSep || ".";
	this.maxDigit	=0;
	this.string	=this.element.value;
	this.maxlength=(this.element.maxLength && parseInt(this.element.maxLength)>0)?this.element.maxLength: 15;
	//alert(this.maxlength)
	this.validateEntry=function()
	{
	//alert(this.key);
		var valid=new validator.init({
			//valid	:["Int"],
			add	:[35,36,8,9,46,[37,40]],
			key	:this.keyCode,
			lang	:"en"
		});
		return valid.result();
	}
	this.validateKey=function()
	{
		var valid=new validator.init({
			valid	:["Int"],
			add	:["-"],
			key	:this.keyCode,
			lang	:"en"
		});
		return valid.result();
	}
	this.engine=function()
	{
		this.position=parseInt(this.getPosition());
		this.captureKey();
		if(this.validateEntry()){
			return true;
		}
		return this.mask();
	}
	this.mask=function()
	{
		if(!this.validateKey()){return false;}
		if( (this.string==this.getSelection()))
		{
			this.string="";
		}
		this.inSymbol=false;
		if(this.mode==1)
		{
			this.spBeg=3;
		}
		else if(this.mode==2)
		{
			this.spBeg=0;
		}
		if(this.key=="-")
		{
			var exs=this.expandSymbol();
			this.symbol=(this.key=="-" && exs!="-")?"-":"";
		//	this.inSymbol=true;
		}
		else
		{
			this.symbol=this.expandSymbol();
		}
		this.final=this.parseMode();
		this.element.value=this.final;
		if(this.inRange())
		{
			this.setPosition(this.fixPosition());
		}
		return false;
	}
	this.parseMode=function()
	{
		var result="";
		if(this.mode==1)
		{
			this.spBeg=3;
			result="$ "+this.symbol+this.cutNumber();
		}
		else if(this.mode==2)
		{
			this.spBeg=0;
			this.maxDigit=3;
			result=this.symbol+this.cutNumber()+" %";
		}
		return result;
	}
	this.fixPosition=function()
	{
		var position=0;
		var diff=this.msBefore<this.getMs(this.final.substr(0,this.position+1));
		if(this.position==0)
		{
			position=this.spBeg+((this.inSymbol)?0:1);
		}
		else
		{
			position=this.position;
		}
		var ff=(diff || this.inzeroComplete)?2:1;
		return position+ff;
	}
	this.cutNumber=function()
	{
		var nvalu="";
		var str=this.string.split("");
		//if()
		if(this.string.length>0 && this.inRange())
		{
			this.stBegin=this.string.substr(0,this.position);
			this.msBefore=this.getMs(this.stBegin);
			for(var i=0;i<str.length;i++)
			{
				if(i==0 && this.position==0)
				{
					nvalu+=this.key+str[i];
				}
				else if((i+1)==this.position)
				{
					this.position=i+1;
					nvalu+=str[i]+this.key;
				}
				else
				{
					nvalu+=str[i];
				}
			}
		}
		else {
			nvalu=this.string || this.key;
		}
		this.result = nvalu.replace(/\D/g,'').replace(/^0*/,'');
		if(this.result.length>this.decimal)
		{
			return this.format();
		}
		else
		{
			return this.zeroComplete();
		}
	}
	this.inRange=function()
	{
		return this.string.length<this.maxlength;
	}
	this.zeroComplete=function()
	{
		var diff=parseInt(this.decimal-this.result.length);
		this.inzeroComplete=true;
		if(diff>0)
		{
			var res= "0"+this.decSep+this.zeroDigit(diff)+this.result;
			this.position=res.length;
			return res;
		}
		else if(diff==0)
		{
			var res= "0"+this.decSep+this.result;
			this.position=res.length;
			return res;
		}
		else
		{
			return (this.decimal>0)?"0"+this.decSep+this.zeroDigit(this.decimal):"0";
		}
	}
	this.getMs=function(str)
	{
		var stri=str.split(this.milSep);
		return stri.length-1;
	}
	this.zeroDigit=function(cant)
	{

		var result="";
		for(var i=0;i<cant;i++)
		{
			result+="0";
		}
		return result;
	}
	this.format=function()
	{
		this.resultLength=this.result.length;
		this.tmp={
			decimal	:this.result.substr((this.resultLength-this.decimal),this.decimal),
			int	:this.result.substr(0,(this.resultLength-this.decimal))
		};
		if(this.tmp.int.length>=this.maxDigit && this.maxDigit!=0)
		{
			this.tmp.int=this.tmp.int.substr(0,this.maxDigit);
		}
		this.int=this.tmp.int.split("").reverse();
		this.comas=0;
		var final="";
		for(var i=0;i<this.int.length;i++)
		{
			if((((i+1)%3)==0 && (i+1)<this.int.length))
			{
//				alert(final)
				final=this.milSep+this.int[i]+final;
				this.comas+=1;
			}
			else
			{
				final=this.int[i]+final;
			}
		}
		return final+((this.tmp.decimal.length>1)?this.decSep+this.tmp.decimal:"");
	}
	this.expandSymbol=function()
	{
		//alert(this.element.value.split("")[(((this.spBeg-1)<0)?0:this.spBeg-1)]+":"+(((this.spBeg-1)<0)?0:this.spBeg));
		if(this.element.value.split("")[(((this.spBeg-1)<0)?0:this.spBeg-1)]=="-")
		{
			this.inSymbol=false;
			return "-";
		}
		else
		{
			this.inSymbol=true;
			return "";
		}
	}
	this.captureKey=function()
	{
		this.keyCode=(this.event.which) ?this.event.which:this.event.keyCode;
		this.key = String.fromCharCode(this.keyCode);
	}
	this.getPosition=function()
	{
		var pos = 0;
		if (document.selection)
		{
			this.element.focus ();
		        var Sel = document.selection.createRange ();
		        Sel.moveStart ('character', -this.element.value.length);
		        pos = Sel.text.length;
		}
		else if (this.element.selectionStart || this.element.selectionStart == '0')
		{
			pos = this.element.selectionStart;
		}
		return pos;
	}
	this.getSelection=function()
	{
		var selection="";
		if (document.selection)
		{
			this.element.focus ();
		        var Sel = document.selection.createRange ();
		        //Sel.moveStart ('character', -this.element.value.length);
		        selection = Sel.text;
		}
		else if (this.element.selectionStart || this.element.selectionStart == '0')
		{
			selection = this.element.value.substr(this.element.selectionStart,this.element.selectionEnd);
		}
		 return selection;

	}
	this.setPosition=function(position)
	{
		if(this.element.setSelectionRange)
		{
			this.element.focus();
			this.element.setSelectionRange(position,position);
		}
		else if (this.element.createTextRange)
		{
			var range = this.element.createTextRange();
			range.collapse(true);
			range.moveEnd('character', position);
			range.moveStart('character', position);
			range.select();
		}
	}
}
leimnud.aplication.slide=function(options)
{
	this.options=options || {};
	this.className={
		normal:"",
		selected:"seleccionado"
	};
	this.inHistory=false;
	//this.loader="loaderimage.gif";
	this.options.loaderImage=leimnud.tools.baseURL()+"imagenes/loading_basic.gif";
	this.options.prevImage="waskas/prev.gif";
	this.options.nextImage="waskas/next.gif";

	this.engine=function()
	{
		this.target=this.prepareTarget();
		if(!this.target){return false;}

		var img=document.getElementsByTagName("a");
		this.images=[];
		var oThis=this;
		var t=0;
		for(var i=0;i<img.length;i++)
		{
			if(img[i].rel==this.options._for && img[i].href!="")
			{
				this.images[this.images.length]={
					element:img[i],
					url:img[i].href,
					title:img[i].title || false
				}
				//img[i].href="#";

				//img[i].setAttribute('rel','1212');
				img[i].rel=img[i].rel+"|"+t;
				img[i].onclick=function(event){
					//alert(leimnud.event.get(event).title+":"+this.rel)
					if(leimnud.browser.isIE)
					{
						var image=leimnud.event.get(event);
						oThis.show(leimnud.tools.element.parent(image),image);
					}
					else
					{
						oThis.show(this,leimnud.event.get(event));
					}
					return false;
				};
				t+=1;
			}
		}
		this.id=this.options._for+"|"+this.options._in;
		this.image=document.createElement("img");
		this.image.style.display="none";
		this.image.id=this.id;
		this.target.appendChild(this.image);

		this.loaderImage = document.createElement("img");
		this.loaderImage.style.display="none";
		this.loaderImage.src = this.options.loaderImage;
		this.target.appendChild(this.loaderImage);

		/*navigation*/
		if(this.options.navigation)
		{
			this.prev=document.createElement("img");
			this.prev.style.display="none";
			this.prev.style.position="absolute";
			this.prev.style.cursor="pointer";
			this.prev.id=this.id+"|prev";
			this.prev.src=this.options.prevImage;
			this.target.appendChild(this.prev);

			this.next=document.createElement("img");
			this.next.style.display="none";
			this.next.style.position="absolute";
			this.next.style.cursor="pointer";
			this.next.id=this.id+"|next";
			this.next.src=this.options.nextImage;
			this.target.appendChild(this.next);
			var oThis=this;
			leimnud.event.add(this.prev,"click",function(){oThis.nav("prev");return false;});
			leimnud.event.add(this.next,"click",function(){oThis.nav("next");return false;});
		}

		this.show(this.images[0].element)
		//alert(this.images.length)
	}
	this.show=function(href,image)
	{
		this.currentLink=href;
		this.prev.style.display="none";
		this.next.style.display="none";
		//alert(this.currentLink.childNodes[0])

		//this.currentLink.style.border="2px solid red";

		//alert(href.rel+":"+image)
		//var a=(image)?leimnud.event.get(image):false;
		this.currentImage=image || false;


		this.current=parseInt(this.currentLink.rel.split("|")[1]);
		this.mark();

		this.loading("on");

		this.theImage=new Image();
		var oThis=this;
		leimnud.event.add(this.theImage,"load",function(event){oThis.onload(event);})
		this.theImage.src=this.images[this.current].url;

		//alert(this.images[this.current].url+":"+this.current);
		//this.current=leimnud.event.get(event).rel.split("|")[1];
		//alert(this.image.width);
	}
	this.onload=function(event)
	{
		this.image.src=this.images[this.current].url;
		if(this.images[this.current].title){this.image.title=this.images[this.current].title;}
		this.showDescriptionPrepare();
		//window.status=event;
		//leimnud.hacks.pause(2000);
		this.loading("off");
		//this.image.style.display="";
		var oThis=this;
		new Effect.Appear(this.id, { duration: 2, queue: 'end', afterFinish: function(){
			oThis.afterLoad();
		}});

		//alert(this.theImage.clientWidth+":"+this.theImage.clientHeight)
	}
	this.afterLoad=function()
	{
		this.newImageWidth=this.image.offsetWidth;
		this.newImageHeight=this.image.offsetHeight;
		this.Image_x=leimnud.tools.position.absolute(this.image,"x");
		this.Image_y=leimnud.tools.position.absolute(this.image,"y");
		if(this.options.description)
		{this.showDescription();}
		if(this.options.navigation)
		{this.showNavigation();}
	}
	this.showDescriptionPrepare=function()
	{
		if(this.descriptionContainers){this.deleteElementsIn(this.descriptionContainers);}
		this.descriptionContainers=[];
		if(this.options.descriptionAbsolute)
		{
			this.descriptionContainers[0]=document.createElement("div");
			this.descriptionContainers[0].id=this.options._for+"|"+this.options._in+"|descriptionabsolute";
			leimnud.style.set(this.descriptionContainers[0],{
				position		:"absolute",
				visibility		:"hidden",
				margin			:5,
				height			:50,
				backgroundColor	:"white"
			});
			leimnud.fx.opacity.set(this.descriptionContainers[0],80);

			this.descriptionContainers[0].className="Slide_description_absolute";
			this.target.appendChild(this.descriptionContainers[0]);

			this.descriptionContainers[1]=document.createElement("div");
			this.descriptionContainers[1].id=this.options._for+"|"+this.options._in+"|descriptionabsolutext";
			leimnud.style.set(this.descriptionContainers[1],{
				position		:"absolute",
				visibility		:"hidden",
				font			:"normal 8pt Tahoma",
				border			:"1px solid orange",
				margin			:5,
				padding			:5
			});
			this.descriptionContainers[1].className="Slide_description_absolutext";

			this.target.appendChild(this.descriptionContainers[1]);
		}
		else
		{
			this.descriptionContainers[0]=document.createElement("div");
			this.descriptionContainers[0].id=this.options._for+"|"+this.options._in+"|description";
			this.descriptionContainers[0].className="Slide_description";
			this.descriptionContainers[0].style.visibility="hidden";
			this.target.appendChild(this.descriptionContainers[0]);
			//new Effect.Appear(this.descriptionContainers[0].id, { duration: 5, queue: 'end', afterFinish: function(){}});
		}
	}
	this.showDescription=function()
	{
		if(this.options.descriptionAbsolute)
		{
			leimnud.style.set(this.descriptionContainers[0],{
				width	:this.image.width-10,
				top		:(this.Image_y+(this.image.height-this.descriptionContainers[0].offsetHeight)-10),
				visibility:"visible",
				left	:(this.Image_x)
			});
			leimnud.style.set(this.descriptionContainers[1],{
				width	:this.image.width-((leimnud.browser.isIE)?8:21),
				top		:(this.Image_y+(this.image.height-this.descriptionContainers[0].offsetHeight)-10),
				visibility:"visible",
				left	:(this.Image_x)-1
			});
			this.descriptionContainers[1].innerHTML=(this.images[this.current].title)?"<div style='align:center;font-weight:bold;'>"+this.images[this.current].title+"</div>":"<br>";
			this.descriptionContainers[1].innerHTML+="<div style='text-align:right;'>Image: <b>"+(parseInt(this.current)+1)+"</b> / <b>"+this.images.length+"</b></div>";
		}
		else
		{
			this.descriptionContainers[0].innerHTML="Image: <b>"+(parseInt(this.current)+1)+"</b> / <b>"+this.images.length+"</b><br><br>";
			if(this.images[this.current].title){this.descriptionContainers[0].innerHTML+=this.images[this.current].title;}
			this.descriptionContainers[0].style.visibility="visible";
		}
	}
	this.deleteElementsIn=function(_in)
	{
		for(var i=0;i<_in.length;i++)
		{
			leimnud.tools.element.remove(_in[i]);
		}
		delete(_in);
	}
	this.showNavigation=function()
	{		
		this.prev.style.visibility="hidden";
		this.next.style.visibility="hidden";

		this.prev.style.display=(this.current>0)?"":"none";
		this.next.style.display=(this.current==this.images.length-1)?"none":"";

		var prevposX=this.Image_x;
		var prevposY=this.Image_y+((this.newImageHeight/2)-(this.prev.height/2));

		//alert(_x+":"+this.newImageWidth+":"+(_x+this.newImageWidth))

		var nextposX=(this.Image_x+this.newImageWidth)-this.prev.width;
		var nextposY=prevposY;

		//alert(leimnud.tools.position.absolute(this.image,"x")+":"+leimnud.tools.position.absolute(this.image,"y"))
		this.prev.style.left=prevposX;
		this.prev.style.top=prevposY;

		//alert(this.next.width)

		this.next.style.left=(this.Image_x+this.newImageWidth)-this.next.width;
		this.next.style.top=nextposY;
		this.prev.style.visibility="visible";
		this.next.style.visibility="visible";
		//if(this.current)
	}
	this.nav=function(_to)
	{
		if(_to=="next")
		{
			var _n = this.current+1;
			this.show(this.images[_n].element)
		}
		else
		{
			var _n = this.current-1;
			this.show(this.images[_n].element)
		}
	}
	this.loading=function(_on)
	{
		if(_on=="on")
		{
			this.image.style.display="none";
			this.loaderImage.style.display="";
		}
		else if(_on=="off")
		{
			this.loaderImage.style.display="none";
		}
	}
	this.prepareTarget=function()
	{
		var el=document.getElementById(this.options._in);
		if(!el){return false;}
		leimnud.style.set(el,{
			//position:"relative",
			textAlign:"center",
			verticalAlign:"middle"
		});
		this.width=el.offsetWidth;
		this.height=el.offsetHeight;
		return el;
	}
	this.mark=function()
	{
		if(this.inHistory!==false)
		{
			//alert(this.images[this.inHistory].element)
			this.images[this.inHistory].element.className=this.className.normal;
		}
		this.inHistory=this.current;
		//alert(this.inHistory)
		this.images[this.current].element.className=this.className.selected;
	}
}
