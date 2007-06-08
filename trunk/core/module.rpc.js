/*
* @class RPC
* @autor MaBoRaK
*/
leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.rpc.js",
		Name	:"rpc",
		Type	:"module",
		Version	:"0.1"
	},
	content	:{
		/*
		* @class xmlhttp
		* @param {Object} options Options
		* 	 @param {String} options.url Url to Open
		* 	 @param {String} options.method Method
		* 	 @param {String} options.arguments Arguments [Optional,Default=""]
		* 	 @param {String} options.async Asynchronous? [Optional,Default=true]
		*
		* @param {Function | Object | Virtual function} Instance.callback Callback for this process
		* @example:
		*	var process = new leimnud.module.rpc.xmlhttp({
		*				url		:"g.xml",
		*				method		:"POST",
		*				arguments	:"u=iuiu"
		*			});
		*	process.callback=functionCallback;
		*
		*		||
		*
		*	process.callback=leimnud.execHandler({method:Myinstance.callback,instance:MyInstance,arguments:[process,"demo",99]});
		*
		*		||
		*
		*	process.callback={Function:myFunction,arguments:[process,"demo"]};
		*	process.make();
		*
		*/
		xmlhttp:function(options)
		{
			this.parent	=leimnud;
			this.options=options || {};
			this.headers=[];
			this.core=function()
			{
				try {var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {try {var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");} catch (E) {var xmlhttp = false;}}if (!xmlhttp && typeof XMLHttpRequest!='undefined') {var xmlhttp = new XMLHttpRequest();}if(!xmlhttp){this.error="Su navegador no soporta AJAX";}
				return xmlhttp;
			};
			/*
			* Make this process
			*/
			this.make=function()
			{
				this.xmlhttp=this.core();
				this.url		=this.options.url || false;
				if(!this.options.url || !this.xmlhttp){return false;}
				this.method		=this.options.method.toUpperCase() || "POST";
				this.args	=this.options.args || "";
				this.async		=(this.options.async===false)?false:true;
				(this.method=="POST")?this.header("Content-Type","application/x-www-form-urlencoded"):null;
				this.open();
			};
			/*
			*
			* Open this.options.url request
			*
			*/
			this.open=function()
			{
				this.xmlhttp.open(this.method,((this.method=="GET")?this.url+this.args:this.url),this.async);
				this.applyHeaders();
				this.xmlhttp.send((this.method=="GET")?null:this.args);
				this.xmlhttp.onreadystatechange=this.parent.execHandler({method:this.changes,instance:this,args:98989898});
			};			
			/*
			*
			* Method for this.xmlhttp.onreadystatechange
			*
			*/
			this.changes=function(g)
			{
				if (this.xmlhttp.readyState==4)
				{
					if(this.callback)
					{
						this.callback=(this.callback.isObject)?this.parent.execHandler(this.callback):this.callback;
						this.callback();
					}
				}
			};
			/*
			*
			* Apply headers
			*
			*/
			this.applyHeaders=function()
			{
				for(var i=0;i<this.headers.length;i++)
				{
					this.xmlhttp.setRequestHeader(this.headers[i].param,this.headers[i].value);
				}
			};
			/*
			*
			* Set Request Headers
			* @param {String} param Variable header 
			* @param {String} value Value header
			*
			*/
			this.header=function(param,value)
			{
				this.headers.push({
					param:param,
					value:value
				});
			};		
		}
	}
});
