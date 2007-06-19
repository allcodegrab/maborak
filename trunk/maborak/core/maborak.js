/***************************************************************************
*     				  maborak.js
*                        ---------------------------
*   Copyleft	: (c) 2007 maborak.com <maborak@maborak.com>
*   Version		: 1.2.1
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
var maborak = function(){
	this.tmp= {};
	this.charset="utf-8";
	/**
	* Make Core Functions
	* @extends String || Array || Object
	*/
	this.protoCore=function()
	{
		Array.prototype.isArray		= true;
		Array.prototype.isObject	= false;
		/**
		* Only Int values in Array
		* @return Array
		*/
		Array.prototype.onlyInt		= function()
		{
			var valid=[];
			for(var i=0;i<this.length;i++)
			{
				if(!isNaN(this[i]))
				{
					valid.push(parseInt(this[i],10));
				}
			}
			return valid;
		};
		/**
		* Check if a value exists in an Array
		* @return Boolean
		*/
		Array.prototype.inArray		= function(search)
		{
			var valid=[];
			for(var i=0;i<this.length;i++)
			{
				if(this[i]===search)
				{
					return true;
				}
			}
			return false;
		};
		/**
		* Fill an array with values
		* @return Array
		*/
		Array.prototype.fill		= function(startIndex,cant,value)
		{
			for(var i=0;i<cant;i++)
			{
				this.splice(startIndex+i,0,value);
			}
			return this;
		};
		/**
		* Convert (Array || Object) to String
		* @param {Boolean} strict Optional: Exclude prototype (Methods && Properties)
		* @return String
		*/
		Array.prototype.toStr = Object.prototype.toStr	= function(strict)
		{
			var val, output = "";
			output += "{";
			for (var i in this) {
				val = this[i];
				if((!strict && this.propertyIsEnumerable(i)) || strict===true)
				{
					switch (typeof val) {
						case ("object"):
							if(typeof val.childNodes!="undefined")
							{
								output += i + ":[DOM.Object],\n";
							}
							else if (val.isArray || val.isObject) {
								output += i + ":" + val.toStr(strict) + ",\n";
							} else {
								output += i + ": Element||Event,\n\n";
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
			}
			output = output.substring(0, output.length-1) + "}";
			return output;
		};
		Array.prototype.indexOf=function(val)
		{
			for (var i = 0; i < this.length; i++)
			{
      			if (this[i] == val){return i;}
	      	}
      		return -1;
		};
		/**
		* Remove duplicate values
		* @return Array 
		*/
		Array.prototype.unique = function()
		{
			if(this.length<2){return this;}
			var a = [], i, l = this.length;
			for( i=0; i<l; i++ ){
				if(a.indexOf(this[i])< 0 )
				{
					a.push( this[i]);
				}
			}
			return a;
		};
		/**
		* Fetch a key from an Array
		* @param {String|Boolean|Int|Object|Array} value Value to search
		* @return Int
		*/
		Array.prototype.key = function(value)
		{
			for(var i=0;i<this.length;i++) {
				if(this[i]===value){return i;}
			}
			return false;
		};
		/**
		* Return a random element
		* @param {Int} range Up to range 
		* @return Value random
		*/
		Array.prototype.random = function(range)
		{
			var i = 0, l = this.length;
			if(!range) { range = this.length; }
			else if( range > 0 ) { range = range % l; }
			else { i = range; range = l + range % l; }
			return this[ Math.floor( range * Math.random() - i ) ];
		};
		/**
		* Randomly interchange elements
		* @param {Boolean} recursive Shuffle recursive Array elements.
		* @return Array
		*/
		Array.prototype.shuffle = function(recursive)
		{
			var i = this.length, j, t;
			while( i ) {
				j = Math.floor( ( i-- ) * Math.random() );
				t = recursive && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
				this[i] = this[j];
				this[j] = t;
			}
			return this;
		};
		Object.prototype.isObject	= true;
		Object.prototype.isArray	= false;
		/**
		* Length of Object
		* @return Int
		*/
		Object.prototype.length	= function()
		{
			var j=0;
			for (var i in this) {
				if(this.propertyIsEnumerable(i))
				{
					j+=1;
				}
			}
			return j;
		};
		/**
		* Concat Object
		* @param {Object} obj Object
		* @return {Object} this
		*/
		Object.prototype.concat = function(obj)
		{
			for (var i in obj) {

				if(obj.propertyIsEnumerable(i))
				{
					this[i]=obj[i];
				}
			}
			return this;
		};
		/**
		* es| Obtener el valor de un Objeto a partir de su Key
		* @param {Int} id Key of object (1,2,3,4,5) 
		* @return Key value 
		*/
		Object.prototype.get	= function(id)
		{
			var j=0;
			for (var i in this) {
				if(this.propertyIsEnumerable(i))
				{
					if(id===j){return this[i];}
					j+=1;
				}
			}
			return false;
		};
		Function.prototype.isObject	= false;
		Function.prototype.isArray	= false;
		/**
		* Strip whitespaces from the beginning and end of String
		* @return String with whitespaces stripped 
		*/
		String.prototype.trim = function(){
			return( this.replace(new RegExp("^([\\s]+)|([\\s]+)$", "gm"), "") );
		};
		/**
		* Strip whitespaces from the beginning of String
		* @return String
		*/
		String.prototype.leftTrim = function(){
			return( this.replace(new RegExp("^[\\s]+", "gm"), "") );
		};
		/**
		* Strip whitespaces from the end of String
		* @return String 
		*/
		String.prototype.rightTrim = function(){
			return( this.replace(new RegExp("[\\s]+$", "gm"), "") );
		};
		/**
		* Strip HTML tags from a string
		* @return String 
		*/
		String.prototype.stripTags = function()
		{
			return this.replace(/<\/?[^>]+>/gi, '');
		};
		/**
		* Convert special characters to HTML entities
		* @return String
		*/
		String.prototype.escapeHTML = function()
		{
			var div = document.createElement('div');
			var text = document.createTextNode(this);
			div.appendChild(text);
			return div.innerHTML;
		};
		/**
		* Convert special HTML entities back to characters
		* @return String
		*/
		String.prototype.unescapeHTML = function()
		{
			var div = document.createElement('div');
			div.innerHTML = this.trim();
			return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
		};
		/**
		* Search and Replace
		* @return String
		*/
		String.prototype.sReplace = function(search,replace)
		{
			search = search || "";
			replace= replace || "";
			var re = new RegExp(search,"g");
			return this.replace(re,replace);
		};
		/**
		* Camelize String (text-align -> textAlign)
		* @return String
		*/
		String.prototype.camelize = function ()
		{
			var oStringList = this.split("-");
			if (oStringList.length == 1) {
				return oStringList[0];
			}
			var camelizedString = this.indexOf("-")===0 ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) : oStringList[0];
			for (var i = 1, len = oStringList.length; i < len; i++)
			{
				var s = oStringList[i];
				camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
		        }
			return camelizedString;
		};
		/**
		* Convert String to Array
		* @return Array
		*/
		String.prototype.toArray = function()
		{
			return this.split("");
		};
	};
	/**
	* Load methods
	* @param methods = Array[Method || Array[Method,[Argument1,Argument2,...],return]];
	* @param instance= Class;
	* @example:
	* 		this.loadMethods([
	* 				this.proto,
	*				[this.checkBrowser,['argument1',More...,12]]
	*		],this);
	* @access		 = Public;
	*/
	this.loadMethods = function(methods,instance)
	{
		var _return_ = [];
		var tmp;
		for(var i=0;i<methods.length;i++)
		{
			if(methods[i])
			{
				if(methods[i].isArray)
				{
					if(typeof methods[i][0]=="function")
					{
						var method = (methods[i][1])?((methods[i][1].isArray)?methods[i][1]:[methods[i][1]]):false;

						if(method===false)
						{
							tmp = methods[i][0].apply(instance);
						}
						else
						{
							tmp = methods[i][0].apply(instance,method);
						}
						if(methods[i][2]===true){_return_.push(tmp);}
					}
				}
				else if(typeof methods[i]=="function")
				{
					methods[i].apply(instance);
				}
			}
		}
		return (_return_.length==1)?_return_[0]:_return_;
	};
	/**
	* Identify User-Agent of Browser
	* @result
	* 	isIE	= "Microsoft Internet Explorer"
	* 	isNS	= "Netscape"
	* 	isFF	= "Mozilla Firefox"
	* 	isSF	= "Safari"
	* 	isGK	= "Browsers based on Gecko"
	* 	isOP	= "Opera"
	* @access	= Private;
	*/
	this.checkBrowser = function()
	{
		var userAgent=navigator.userAgent;
		var u;
		this.browser={
			isIE:((userAgent.indexOf('MSIE')>=0)?true:false),
			isNS:((userAgent.indexOf('Netscape6/')>=0)?true:false),
			isFF:((userAgent.indexOf('Firefox')>=0)?true:false),
			isSF:((userAgent.indexOf('Safari')>=0)?true:false),
			isGK:((userAgent.indexOf('Gecko')>=0)?true:false),
			isOP:((userAgent.indexOf('Opera')>=0)?true:false)
		};
		this.browser.isIE=(this.browser.isOP)?false:true;
		var checkFor=["MSIE","Netscape/6","Firefox","Safari","Gecko","Opera"];
		for(var i=0;i<checkFor.length;i++)
		{
			var j = userAgent.indexOf(checkFor[i]);
			this.browser.version = userAgent+"::::"+userAgent.substr(j + checkFor[i].length);
		}
	};
	/**
	* @class		 = Event manager
	*/
	this.mantis = function(parent)
	{
		this.parent=parent || false;
		this.db=[];
		this.flush=function()
		{
			var i=0;
			while (this.db.length > 0)
			{
				if(this.db[0] && this.db[0].isObject===true)
				{
					this.remove(this.db[0]._object_,this.db[0]._event_,this.db[0]._function_,this.db[0]._bumble_);
				}
				this.db.splice(0,1);
			}
		};
		/**
		* Add new Event;
		* @param _object_	= DOMelement;
		* @param _event_	= event [load,focus,etc];
		* @param _function_ = Function || Object{method,instance,[arguments[Array],event[Boolean],argument_is_array[Boolean]]} || Function[virtual];
		* @param _bumble_	= true || false;
		* @example:
		*
		*	1)	Callback simple:
		*		this.event.add(Input,"unload",FunctionX);
		*
		*	2)	Callback is Object
		*		this.event.add(Input,"click",{
		*			method	: this.other,
		*			instance: this
		*		});
		*	3)	Callback is Object & Advanced options
		*		this.event.add(Input,"click",{
		*			method	: this.other,
		*			instance: this
		*			arguments:[989898,767676], //Arguments to Function Callback
		*			event	:true // es| Expandir evento como argumento
		*		});
		*	4)	Callback to Virtual Instance
		*		this.event.add(Input,"click",leimnud.execHandler({
		*			method:this.changes,
		*			instance:this,
		*			arguments:98989898
		*		}));
		*	5)	Callback to Virtual Function
		*		this.event.add(Input,"click",leimnud.execHandler({
		*			Function:foo,
		*			arguments:[bla,99]
		*		}));
		*/
		this.add=function(_object_,_event_,_function_,_bumble_)
		{
			_function_=(_function_.isObject)?this.parent.execHandler(_function_):_function_;
			_object_ = this.parent.dom.element(_object_);
			if (_object_.addEventListener)
			{
				_object_.addEventListener(_event_,_function_,((_bumble_===true)?true:false));
			}
			else if(_object_.attachEvent)
			{
				_object_.attachEvent("on"+_event_,_function_);
			}
			else
			{
				this.report("Event registration not supported");
			}
			var event = {
				_object_	:_object_,
				_event_		:_event_,
				_function_	:_function_,
				_bumble_	:((_bumble_===true)?true:false)
			};
			this.db.push(event);
			return (this.db.length-1);
		};
		/**
		* Remove Event;
		* @param {DOM Object} _object_	= DOMelement;
		* @param {event} _event_	= event [load,focus,etc];
		* @param {Function} _function_ = Function || Object{method,instance,[arguments[Array],event[Boolean],argument_is_array[Boolean]]} || Function[virtual];
		* @param {Boolean} _bumble_	= true || false;
		* @example:
		*		Add new Event Examples.
		*/
		this.remove=function(_object_,_event_,_function_,_bumble_,uidInDB)
		{
			_function_=(_function_.isObject)?this.parent.execHandler(_function_):_function_;
			_object_ = this.parent.dom.element(_object_);
			if (_object_.removeEventListener)
			{
				_object_.removeEventListener(_event_,_function_,((_bumble_===true)?true:false));
			}
			else if(_object_.detachEvent)
			{
				_object_.detachEvent("on"+_event_,_function_);
			}
			if(uidInDB)
			{
				if(uidInDB==(this.db.length-1))
				{
					this.db.pop();
				}
				else
				{
					this.db[uidInDB]=null;
				}
			}			
		};
		/**
		* Flush Collection events from DB
		* @param	{Array} arrayEventsInDB Array of Events.
		*/
		this.flushCollection=function(arrayEventsInDB)
		{
			var l=arrayEventsInDB.length;
			for(i=0;i<l;i++)
			{
				this.remove(this.db[arrayEventsInDB[i]]._object_,this.db[arrayEventsInDB[i]]._event_,this.db[arrayEventsInDB[i]]._function_,this.db[arrayEventsInDB[i]]._bumble_,arrayEventsInDB[i]);
			}
		};
		/**
		* es| Reportar fallos en el registro de eventos
		* @param {String} text String;
		*/
		this.report=function(text)
		{
			if(this.parent && this.parent.report)
			{
				this.parent.report.add(text);
			}
		};
		/**
		* Captura DOM event
		* @param {Object} event
		* @return DOM
		*/
		this.dom=function(event)
		{
			return event.target || window.event.srcElement;
		};
		/**
		* es| Arreglar fallo IE (sobreposición de eventos)
		* @param {Object} event
		*/
		this.Null=function(event)
		{
			if(event.preventDefault)
			{
				event.preventDefault();
			}
			event.returnValue = false;
		};
	};
	/**
	* @class	= System report
	* @access	= Public;
	*/
	this.bitacora=function()
	{
		this.db=[];
		/**
		* @param	text = String;
		* @access 	Public;
		*/
		this.add=function(text)
		{
			this.db.push(text);
		};
	};
	/**
	* es| Objeto con bugs Crossbrowser.
	* @access	= Public;
	*/
	this.fix={
		memoryLeak:function()
		{
			this.event.add(window,"unload",{
				method	: this.event.flush,
				instance: this.event
			});
		}
	};
	/**
	* es |  Ejecuta un método de forma encapsulada
	*		especial para funciones en Objetos Literales
	* @param _function_ = method
	* @param _arguments_= arguments || false
	* @param _return_	= true || false
	* @param _instance_	= instance || this
	* @access	= Public;
	*/
	this.exec=function(_function_,_arguments_,_return_,_instance_)
	{
		/**return ((_instance_)?_instance_:this).loadMethods([[_function_,((_arguments_)?_arguments_:null),_return_ || false]],((_instance_)?_instance_:this));*/
		return this.loadMethods([[_function_,((_arguments_)?_arguments_:null),_return_ || false]],((_instance_)?_instance_:this));
	};
	/**
	* es|  Crear funciones virtuales
	* @param {Object} options = {
	*		method	:Method,
	*		instance:Instance,
	*		Function:Function,
	*		arguments:Array["sample",var,222]
	*		event	:true || false,   		#Expand event?
	*		argument_is_array:true || false		#Arguments is Array?
	*	} Options
	* @example:
	*	1)	Virtual Instance
	*		var virtualFunction = leimnud.execHandler({
	*			method:this.foo,
	*			instance:this,
	*			arguments:98989898
	*		});
	*	2)	Virtual Function
	*		var virtualFunction = leimnud.execHandler({
	*			Function:foo,
	*			arguments:[bla,99]
	*		});
	*/
	this.execHandler=function(options)
	{
		var method	=options.method;
		var instance=options.instance;		
		var args	=(options.args || (typeof options.args=="number" && options.args===0))?options.args:false;
		var _function=options.Function || false;
		var isArr	=options.args_is_array || false;
		var _event	=options.event || false;
		return function(hEvent)
		{
			//window.status="EEE=> "+(h || window.event);
			var argss=(args===false)?false:((args.isArray && isArr===false)?args:[args]);
			//window.status = typeof _event+":"+hEvent+":"+_event;
			//window.status = args;

			var param=(_event)?[(hEvent || window.event)].concat(argss):argss;
			if(_function===false)
			{
				//window.status="EventHandler:=> "+param;
				method.apply(instance,param || [null]);
			}
			else
			{
				_function.apply(_function,param || [null]);
			}
		};
	};
	/**
	* es| Clase para cargar archivos,módulos,objetos
	*
	* @class			= Package Manager;
	* @param	parent	= Leimnud Class || Leimnud Instance;
	* @param	db		= Class File Manager;
	* @access			= Public;
	*/
	this.PackageCore=function(parent,db)
	{
		this.parent	= parent || false;
		this.db		= db || false;
		/**
		* Load new Package
		*/
		this.Load	= function(file,options)
		{
			this.options	=	options || {};
			if(arguments.length<2 || !this.check()){return false;}
			this.toLoad = ((this.options.Absolute===true)?this.options.Path:file).split(",");
			for(var i=this.toLoad.length;i>0;i--)
			{
				this.name=this.toLoad[this.toLoad.length-i];
				if(!this.isset())
				{
					this.src	=	this.source();
					var script 	= 	document.createElement("script");
					this.parent.tools.head().appendChild(script);
					script.src	=	this.src+"?d="+Math.random();
					script.type	=	"text/javascript";
					script.charset	=	this.parent.charset;
					if(this.type=="module"){this.write(script);}
				}
			}
			delete this.Class;
			delete this.file;
			delete this.info;
			delete this.path;
			delete this.toLoad;
			delete this.type;
			delete this.src;
		};
		/**
		* es| Obtener la ruta del archivo,modulo a cargar
		*
		* @access	= Private;
		*/
		this.source=function()
		{
			if(this.type=="module")
			{
				return this.path+"module."+this.name+".js";
			}
			else if(this.type=="file")
			{
				var nroute= (this.options.Absolute===true)?this.path:this.path+this.name+"/core/"+this.name+".js";
				return nroute;
			}
		};
		/**
		* Probe conditions
		*
		* @access	= Private;
		*/
		this.check	= function()
		{
			if(!this.db || !this.options.Type){
				return false;
			}
			this.type	= this.options.Type.toLowerCase();
			if(this.type=="file")
			{
				this.path	= this.options.Path || this.parent.path_root;
				return true;
			}
			else if(this.type=="module")
			{
				this.Class=(this.options.Instance)?this.options.Instance:((this.options.Class)?this.options.Class.prototype:false);
				if(this.Class===false || !this.Class.info){return false;}
				if(!this.Class.module)
				{
					this.Class.module={};
				}
				this.path	= this.options.Path || this.Class.info.base || false;
				return (this.path===false)?false:true;
			}
			else
			{
				return false;
			}
		};
		/**
		* Prevent duplicate
		*
		* @access	= Private;
		*/
		this.isset	= function()
		{
			if(this.type=="module")
			{
				for(var i=this.db.length;i>0;i--)
				{
					if(this.db[this.db.length-i].name==this.Class.info.name)
					{
						this.file=this.db[this.db.length-i];
						break;
					}
				}
				if(!this.file)
				{
					this.db.push({
						name:this.Class.info.name,
						Class:this.Class,
						_Package_:[]
					});
					this.file=this.db[this.db.length-1];
				}
				for(i=this.file._Package_.length;i>0;i--)
				{
					var nm=this.file._Package_[this.file._Package_.length-i];
					if(nm.name==this.name && nm.type==this.type)
					{
						return true;
					}
				}
				this.Class.module[this.name]=true;
				return false;
			}
			else if(this.type=="file")
			{
				return false;
			}
		};
		this.write	= function(script,option)
		{
			this.file._Package_.push({
				type	:this.type,
				loaded	:false,
				name	:this.name,
				script	:script,
				onLoad	:this.options.onLoad || false
			});
		};
		this.Public	= function(Package)
		{
			if(!Package || !Package.info || !Package.info.Class || !Package.info.Name || !Package.info.Type || !Package.content){return false;}
			for(var i=this.db.length;i>0;i--)
			{
				if(this.db[this.db.length-i].name==Package.info.Class)
				{
					this._file_=this.db[this.db.length-i];
					break;
				}
			}
			if(!this._file_)
			{
				return false;
			}
			else
			{
				this.tmpPgk=this._file_.Class.module[Package.info.Name];
				if(this.tmpPgk===true)
				{
					if(typeof Package.content=="function")
					{
						Package.content.prototype.parent=this._file_.Class;
					}
					this._file_.Class.module[Package.info.Name]=Package.content;
					for(i=this._file_._Package_.length;i>0;i--)
					{
						var nm=this._file_._Package_[this._file_._Package_.length-i];
						if(nm.name==Package.info.Name && nm.type==Package.info.Type)
						{
							nm.loaded=true;
							if(!this.parent.browser.isIE)
							{
								this.parent.dom.remove(nm.script);
							}
							delete nm.script;
							if(nm.onLoad)
							{
								nm.onLoad();
							}
							break;
						}
					}
					delete this._file_;
				}
			}
		};
	};
	this.fileCore	=function(parent)
	{
		this.parent	= parent || false;
		this.db		= [];
	};
};
maborak.prototype={
	info:{
		version	:"0.6",
		name	:"maborak",
		file	:"maborak.js"
	},
	/**
	* Make this Class
	* @param options = Object{Options.for.class} || {};
	* @access		 = Public;
	*/
	make:function(options)
	{
		this.options=options || {};
		this.protoCore();
		this.report	= new this.bitacora();
		this.loadMethods([this.checkBrowser],this);
		this.event	= new this.mantis(this);
		this.tools	= new this.extend.tools(this);
		this.file	= new this.fileCore(this);
		this.dom	= new this.extend.D0M(this);
		this.Package= new this.PackageCore(this,this.file.db);

		this.report.add("Class loaded.");
		this.info.base=this.tools.baseJS(this.info.file);
		this.path_root=this.tools.path_root(this.info.base)+"/";
		if(this.options.modules){
			this.Package.Load(this.options.modules,{Class:this,Type:"module"});
		}
	},
	extend:{
		tools:function(parent)
		{
			this.parent	=parent || false;
			this.baseURL	=function()
			{
				return window.location;
			};
			this.path_root	=function(jsPath)
			{
				var a = jsPath.split("/");
				a.pop();
				a.pop();
				a.pop();
				return a.join("/");
			};
			this.baseJS	=function(js)
			{
				var script = document.getElementsByTagName('script');
				for (var i=script.length-1; i>=0; i--){
					if (script[i].src && (script[i].src.indexOf(js) != -1))
					{
						var Isrc = script[i].src;
						Isrc = Isrc.substring(0, Isrc.lastIndexOf('/'));
						return Isrc+"/";
					}
				}

			};
			this.head=function()
			{
				return document.getElementsByTagName("HTML")[0].getElementsByTagName("HEAD")[0];
			};			
			this.createUID=function()
			{
				return Math.random();
			};
		},
		/**
		* @class Manage DOM elements
		* @param {Object} parent Leimnud instance
		*/
		D0M:function(parent)
		{
			this.parent = parent || {};
			/**
			* Capture DOM object from (String || DOM element)
			* @param {string || object} element String.id || DOM object 
			* @return DOM object 
			*/
			this.element=function(element)
			{
				return (!element)?false:((typeof element=="object")?element:((document.getElementById(element))?document.getElementById(element):false));
			};
			/**
			* Remove Elements
			* @param {DOM || Array.DOM} DOM Elements
			*/
			this.remove=function(DOM){
				DOM = (DOM.isArray || (DOM.isObject && !DOM.appendChild))?DOM:[DOM];
				for(var i in DOM)
				{
					if(DOM.propertyIsEnumerable(i))
					{
						if(DOM[i].isObject && !DOM[i].appendChild)
						{
							this.remove(DOM[i]);
						}
						else
						{
							var element=this.element(DOM[i]);
							if(element && element.parentNode)
							{
								element.parentNode.removeChild(element);
							}
						}
					}
				}
			};
			/**
			* Automate DOM || HTMLCollection => ArrayDOMCollection
			* @param {string || DOM} DOM DOM || HTMLCollection
			* @param {Array} style ArrayDOMCollection
			*/
			this.automateDOMToCollection = function(DOM)
			{
				return ((!DOM.isArray && (DOM.isObject || (this.parent.browser.isIE && !DOM.isObject))) || DOM.isArray)?DOM:[DOM];
			};
			/**
			* Apply styles to DOM object
			* @param {string || DOM} DOM String.id || DOM object 
			* @param {object} style es| Objeto con valores de estilo 
			*/
			this.setStyle = function(DOM,styles)
			{
				DOM = (DOM.isArray)?DOM:[DOM];
				for(var j=0;j<DOM.length;j++)
				{
					var d0m=this.element(DOM[j]);
					if(d0m)
					{
						for (var value in styles)
						{

							if(styles.propertyIsEnumerable(value)){
								d0m.style[value.camelize()] = (typeof styles[value]=="function")?styles[value]():styles[value];
							}
						}
					}
				}
			};
			/**
			* Get styles from DOM object
			* @param {string || DOM} DOM String.id || DOM object 
			* @param {object} style Propertie to get 
			*/
			this.getStyle = function(DOM,style)
			{
				var d0m = this.element(DOM);
				var st	= style.split(",");
				var rs	= [];
				for(var i=0;i<st.length;i++)
				{
					var value = d0m.style[st[i].camelize()];
					if (!value)
					{
				        if(document.defaultView && document.defaultView.getComputedStyle)
						{
							var css = document.defaultView.getComputedStyle(d0m, null);
							value = css ? css.getPropertyValue(st[i]) : null;
						}
						else if(d0m.currentStyle)
						{
							value = d0m.currentStyle[st[i].camelize()];
						}
					}
					rs.push((value == 'auto')?null:value);
				}
				return (rs.length<2)?rs[0]:rs;
				/**if (window.opera && ['left', 'top', 'right', 'bottom'].include(style))
				{
					if (this.getStyle(element, 'position') == 'static')
					{
						value = 'auto';
					};
				}*/
			};
			/**
			* es| Capturar coordenadas X,Y de un elemento DOM
			* @param {String || DOM} DOM String.id || DOM object 
			* @param {Boolean} Final Return coordinates x2,y2
			* @return {Object} position Coordinates x,y 
			*/
			this.position=function(DOM,Final)
			{
				DOM = this.element(DOM);
				var position,initial = DOM;
				if(this.parent.dom.getStyle(DOM,"position")=="absolute")
				{
					position={
						x:parseInt(this.parent.dom.getStyle(DOM,"left"),10),
						y:parseInt(this.parent.dom.getStyle(DOM,"top"),10)
					};
				}
				else
				{					
					position={
						x:0,
						y:0
					};
					if(!DOM){return position;}
					position.x=parseInt(DOM.offsetLeft,10);
					position.y=parseInt(DOM.offsetTop,10);
					while (DOM.offsetParent) {
						DOM = DOM.offsetParent;
						position.x += parseInt(DOM.offsetLeft,10);
						position.y += parseInt(DOM.offsetTop,10);
					}
				}
				return (Final===true)?{x:(position.x+parseInt(initial.offsetWidth,10)),y:(position.y+parseInt(initial.offsetHeight,10))}:position;
			};
			/**
			* Transform HTMLCollection to ArrayCollection
			* @param {HTMLCOLLECTION} Collection Html Collection
			* @return {Array} Array Collection; 
			*/
			this.CollectionToArray = function(Collection)
			{
				var r=[];
				for(var i=0;i<Collection.length;i++)
				{
					r.push(Collection[i]);
				}
				return r;
			};
			/**
			* Coordinates x,y Mouse
			* @param {Event} event Event
			* @return {Object} position Coordinates x,y 
			*/
			this.mouse = function(event)
			{
				return {
						x:(this.parent.browser.isIE)?(window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft):(event.clientX + (window.scrollX || document.body.scrollLeft || 0)),
						y:(this.parent.browser.isIE)?(window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop):(event.clientY + (window.scrollY || document.body.scrollTop ||0))
					};
			};
			/**
			* DOM elements, range positions
			* @param {DOM || Array[DOM]} DOM Elements
			* @return {Object} position Coordinates x1:y1,x2:y2 
			*/
			this.positionRange = function(DOM)
			{
				DOM = (DOM.isArray)?DOM:[DOM];
				var r={};
				for(var i=0;i<DOM.length;i++)
				{
					var p1 = this.position(DOM[i]);
					r.x1=(!r.x1 || (p1.x<r.x1))?p1.x:r.x1;
					r.y1=(!r.y1 || (p1.y<r.y1))?p1.y:r.y1;
					var p2 = this.position(DOM[i],true);
					r.x2=(!r.x2 || (p2.x>r.x2))?p2.x:r.x2;
					r.y2=(!r.y2 || (p2.y>r.y2))?p2.y:r.y2;
				}
				return r;
			};
			/**
			* Capture DOM Element
			* @param {String} DOMstring Object to Search [(id|name|tag).(id|name|tag) (Index=0)]
			* @return Object HEAD
			* leimnud.dom.capture("id.html 0");
			*/
			this.capture=function(DOMstring)
			{
				var str = DOMstring.trim();
				var index = str.split(" ");
				var iDom  = index[0];
				iDom	  = iDom.split(".");
				if(iDom.length<2){return false;}
				index = (index.length<2)?"0":index[index.length-1];
				var all = (index==="*")?true:false;				
				var pindex =index.split(",").onlyInt();	
				index = pindex.unique();
				var by = iDom[0];
				iDom.splice(0,1);
				var el = iDom.join(".");
				var oDom;
				switch (by)
				{
					case "id":						
						return document.getElementById(el);
					case "name":
						oDom=document.getElementsByName(el);
						break;
					case "tag":
						oDom=document.getElementsByTagName(el);
						break;
					default:
						return false;
				}
				if(all)
				{
					return this.CollectionToArray(oDom);
				}
				else
				{
					if(index.length===0)
					{return false;}
					else if(index.length==1)
					{
						return oDom[0];
					}
					else
					{
						var nDom=[].fill(0,index.length,false);
						for(var i=0;i<oDom.length;i++)
						{
							if(index.inArray(i))
							{
								nDom[index.key(i)]=oDom[i];
							}
						}
						return nDom;
					}
				}
			};
		}
	}
};
