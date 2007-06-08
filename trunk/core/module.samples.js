var t,j,l,k,g,dAd,drop,myPanel;
var u=function()
{
	alert(7);
}
var myFunction=function(ajax,param1)
{
	alert(ajax+":"+param1)
}
var samp = function()
{
	g=function()
	{
		this.j=function(i,a,b)
		{
			alert(i.xmlhttp);
		}
		this.e=function(event)
		{
			var dom = leimnud.event.dom(event);
			var l = leimnud.dom.position(dom);
	//		alert(l.toStr(true));
		}
	};
	g.prototype.info={
		name:"alguno"
	};
	j=new g();
	//leimnud.Package.Load("dom",{Class:g,Type:"module",Path:leimnud.info.base});
	//alert(leimnud.dom.capture("tag.body 0"))
/*	t = new leimnud.module.rpc.xmlhttp({
		url		:"g.xml",
		method		:"POST",
		args	:"u=iuiu"
		});
	t.header("algo","asdasdasd");
	//t.callback=leimnud.execHandler({method:j.j,instance:j,arguments:[t,99]});
	t.callback={Function:myFunction,args:[t,99]};
	t.make();*/
	drop = new leimnud.module.drop({
		elements:leimnud.dom.capture("tag.div *")
	});
	drop.make();
	
	dAd=new leimnud.module.drag({
		//elements:leimnud.dom.capture("tag.input *")
		/*group:[leimnud.dom.capture("tag.div 3"),leimnud.dom.capture("tag.input 1")]*/
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
	};
	myPanel=new leimnud.module.panel();
	myPanel.options={
		size:{w:300,h:300},
		position:{x:200,y:200},
		title:"Mi primer panel",		
		control:{
			//close	:true,
			//roll	:true,
			drag	:true,
			resize	:true
		},
		fx:{
			//shadow	:true,
			opacity	:true
		},
		theme:"simple"
	};
	myPanel.setStyle={
	};
	myPanel.make();
	
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
