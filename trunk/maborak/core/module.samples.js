var t,j,l,k,g,dAd,drop,myPanel,myPanel2;
var u=function()
{
	alert(7);
};
var myFunction=function(ajax,param1)
{
	alert(ajax+":"+param1);
};
var samp = function()
{
	g=function()
	{
		this.j=function(i,a,b)
		{
			alert(i.xmlhttp);
		};
		this.e=function(event)
		{
			var dom = leimnud.event.dom(event);
			var l = leimnud.dom.position(dom);
	//		alert(l.toStr(true));
		};
	};
	g.prototype.info={
		name:"alguno"
	};
	j=new g();
	/*	t = new leimnud.module.rpc.xmlhttp({
		url		:"g.xml",
		method		:"POST",
		args	:"u=iuiu"
		});
	t.header("algo","asdasdasd");
	//t.callback=leimnud.execHandler({method:j.j,instance:j,arguments:[t,99]});
	t.callback={Function:myFunction,args:[t,99]};
	t.make();*/
	/*
	drop = new leimnud.module.drop({
		elements:leimnud.dom.capture("tag.div *")
	});
	drop.make();
	
	dAd=new leimnud.module.drag({
		//elements:leimnud.dom.capture("tag.input *")
		//group:[leimnud.dom.capture("tag.div 3"),leimnud.dom.capture("tag.input 1")]
		link:{
				elements:leimnud.dom.capture("tag.div 1,2"),
				ref:leimnud.dom.capture("tag.input 0,3")
		}
	});
	dAd.make();
	dAd.events={
		init:function(){window.status="iniciando";},
		//move:function(){window.status="moviendo";},
		finish:function(){window.status="terminado";}
	};*/
	myPanel=new leimnud.module.panel();
	myPanel.options={
		size:{w:300,h:200},
		position:{x:50,y:50},
		title:"Mi primer panel",		
		control:{
			close	:true,
			//roll	:true,
			drag	:true,
			resize	:true
		},
		fx:{
			//shadow	:true,
			//blinkToFront:true,
			//opacity	:true
		},
		statusBar:true,
		theme:"panel"
	};
	myPanel.setStyle={
		//title:{color:"white",backgroundColor:"orange"}
	};
	myPanel.events={
		//init:function(){},
		//move:function(){window.status="aaaa";},
		//finish:function(){   }
		remove:function(){alert("panel cerrado");}
	};
	//myPanel.styles.fx.opacityPanel.Static=60;
	//myPanel.styles.fx.opacityShadow.Static=60;
	
	myPanel.make();
	
	myPanel2=new leimnud.module.panel();
	myPanel2.options={
		size:{w:600,h:450},
		position:{x:270,y:50,center:true},
		title:"Mi segundo panel",
		theme:"panel",
		control:{
			close:true
		},
		fx:{modal:true}
	};
	myPanel2.setStyle={
		modal:{backgroundColor:"black"},
		shadow:{backgroundColor:"black"},
		containerWindow:{border:"1px solid #666"}
	};
	myPanel2.styles.fx.opacityModal.Static=80
	myPanel2.tab={
		width	:110,
		optWidth:100,
		step	:7,
		options:[{
			title	:"<u>A</u>rchivo",
			content	:"sdasdasd1",
			selected:true
		},{
			title	:"<u>E</u>ditar",
			content	:"sdasdasd1"
		},{
			title	:"<u>B</u>uscar",
			content	:"sdasdasd1"
		},{
			title	:"<u>I</u>r a",
			content	:"sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>sdasdasd2<br>"
		},{
			title	:"<u>P</u>royecto",
			content	:"sdasdasd3"
		},{
			title	:"<u>V</u>er",
			content	:"sdasdasd3"
		},{
			title	:"<u>D</u>ebug",
			content	:"sdasdasd3"
		},{
			title	:"<u>H</u>erramientas",
			content	:"sdasdasd3"
		},{
			title	:"<u>A</u>yuda",
			content	:"sdasdasd3"
		}]
	};
	myPanel2.make();
	window.status = "Samples loaded";
};
leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.samples.js",
		Name	:"samples",
		Type	:"module",
		Version	:"0.1"
	},
	content	:samp
});
