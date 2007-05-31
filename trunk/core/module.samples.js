var t,j,l,k,g,dAd;
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
	dAd=new leimnud.module.dragAndDrop({
		//elements:leimnud.dom.capture("tag.div *")
		//group:leimnud.dom.capture("tag.div *"),
		/*link:{
				elements:leimnud.dom.capture("tag.div 1,2"),
				ref:leimnud.dom.capture("tag.div 0,3")
		}*/
		link:{
				elements:[leimnud.dom.capture("id.bb")],
				ref:[leimnud.dom.capture("id.aa")]
		}
	});
	dAd.events={
		init:function(){window.status="iniciando";},
		move:function(){window.status="moviendo";},
		finish:function(){window.status="terminado";}
	};
	dAd.make();
	var j=function(){alert(9)};
	//leimnud.event.add(leimnud.dom.capture("id.a"),"click",j,false);
	//leimnud.event.add(leimnud.dom.capture("id.b"),"click",function(){
		//var k=j;
		//leimnud.event.remove(leimnud.dom.capture("id.a"),"click",k);
		//leimnud.dom.capture("id.a").removeEventListener("click",function(){alert(9)},false);
	//});
	
	window.status = "Samples loaded";
};
leimnud.Package.Public({
	info	:{
		Class	:"leimnud",
		File	:"module.samples.js",
		Name	:"samples",
		Type	:"module",
		Version	:"0.1"
	},
	content	:samp
});
