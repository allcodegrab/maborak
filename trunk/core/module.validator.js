leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.validator.js",
		Name	:"validator",
		Type	:"module",
		Version	:"1.4"
	},
	content	:function(param)
	{
		this.valid=param.valid || false;
		this.invalid=param.invalid || false;
		this.validArray=(this.valid.isArray)?this.valid:[];
		this.invalidArray=(this.invalid.isArray)?this.invalid:[];
		this.add=param.add || false;
		this.generateKeys=function()
		{
			this.keys=[];
			this.keys["es"]=[];
			this.keys["es"]["Alfa"]=["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","áéíóúñÁÉÍÓÚÑ"," "];
			this.keys["es"]["Int"]=[[48,57]];
			this.keys["es"]["Any"]=this.keys["es"]["Alfa"].concat("!#$%&/()=???+*{}[]-_.:,;'|\"\\@",[[48,57]]);
			this.keys["es"]["Alfa10"]=this.keys["es"]["Alfa"][0].concat(this.keys["es"]["Int"]);
			this.keys["es"]["Field"]=this.keys["es"]["Any"];

			this.keys["en"]=[];
			this.keys["en"]["Alfa"]=[this.keys["es"]["Alfa"][0]];
			this.keys["en"]["Int"]=[[48,57]];
			this.keys["en"]["Any"]=this.keys["en"]["Alfa"].concat("!#$%&/()=???+*{}[]-_.:,;'|\"\\@",[[48,57]]);
			this.keys["en"]["Alfa10"]=this.keys["es"]["Alfa"][0].concat(this.keys["en"]["Int"]);
			this.keys["en"]["Field"]=this.keys["en"]["Any"];

			this.keys["fa"]=[];
			this.keys["fa"]['validatorByLetter']=true;
			//this.keys["fa"]["Alfa"]=[1570,1575,64343,64344,64345,64379,64380,64381,64394,64395,64399,64400,64401,64403,64404,64405,64509,64510,64511,65154,65155,65156,65157,65158,65159,65160,65162,65163,65164,65166,65168,65169,65170,65172,65174,65175,65176,65178,65179,65180,65182,65183,65184,65186,65187,65188,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65202,65203,65204,65206,65207,65208,65210,65211,65212,65214,65215,65216,65218,65219,65220,65222,65223,65224,65226,65227,65228,65230,65231,65232,65234,65235,65236,65238,65239,65240,65242,65243,65244,65246,65247,65248,65250,65251,65252,65254,65255,65256,65258,65259,65260,65261,65262,65266,65267,65268], //alfabeto persa
			this.keys["fa"]["Alfa"]=[
			0x0020, 0x0021, 0x061B, 0x066B, 0xFDFC, 0x066A, 0x060C, 0x06AF,
			0x0029, 0x0028, 0x002A, 0x002B, 0x0648, 0x002D, 0x002E, 0x002F,
			0x06F0, 0x06F1, 0x06F2, 0x06F3, 0x06F4, 0x06F5, 0x06F6, 0x06F7,
			0x06F8, 0x06F9, 0x003A, 0x06A9, 0x003E, 0x003D, 0x003C, 0x061F,
			0x066C, 0x0624, 0x200C, 0x0698, 0x064A, 0x064D, 0x0625, 0x0623,
			0x0622, 0x0651, 0x0629, 0x00BB, 0x00AB, 0x0621, 0x0654, 0x005D,
			0x005B, 0x0652, 0x064B, 0x0626, 0x064F, 0x064E, 0x0670, 0x064C,
			0x0653, 0x0650, 0x0643, 0x062C, 0x005C, 0x0686, 0x00D7, 0x0640,
			0x200D, 0x0634, 0x0630, 0x0632, 0x06CC, 0x062B, 0x0628, 0x0644,
			0x0627, 0x0647, 0x062A, 0x0646, 0x0645, 0x067E, 0x062F, 0x062E,
			0x062D, 0x0636, 0x0642, 0x0633, 0x0641, 0x0639, 0x0631, 0x0635,
			0x0637, 0x063A, 0x0638, 0x007D, 0x007C, 0x007B, 0x007E ];
			this.keys["fa"]["Int"]=[[48,57]];
			this.keys["fa"]["Any"]=this.keys["fa"]["Alfa"].concat("!#$%&/()=???+*{}[]-_.:,;'|\"\\@",[[48,57]]).concat(this.keys['es']['Any']);
			this.keys["fa"]["Alfa10"]=this.keys["fa"]["Alfa"].concat(this.keys["en"]["Alfa10"]);
			this.keys["fa"]["Field"]=this.keys["fa"]["Any"];

			//alert(this.keys[this.lang][this.type]);
			return (this.keys[this.lang][this.type])?this.keys[this.lang][this.type]:this.keys[this.lang]["Alfa"];
		}
		this.result=function()
		{
			if(this.isNumber(param.key))
			{
				this.key=param.key;
			}
			else if(typeof param.key=="object")
			{
				this.key=(param.key.which) ?param.key.which : param.key.keyCode;
			}
			else
			{
				this.key=false
			}
			this.lang= param.lang || "en";

			var valid=true;
			for(var i=0;i<this.validArray.length;i++)
			{
				this.type=this.validArray[i];
				//alert(this.generateKeys().toStr(true))
				valid=this.engine(this.generateKeys());
				if(valid===true){return true;}
			}
			if(this.validArray.length==0)
			{
				valid=this.engine([])
			}
			return valid;
		}
		this.isNumber=function(a)
		{
			return (a>=0)?true:false;
		}
		this.compareChar=function(_string,car) {
			var i = 0,a=false;
			//alert(_string+":"+car)
			while ( i <_string.length && !a ) {
				//alert(_string[i]+":"+(_string.charCodeAt(i))+":"+car);
				a= (_string.charCodeAt(i) == car);
				i ++;
			}
			//alert(a)
			return a;
		}
		this.isAlfaUS=function()
		{
			patron=[];
			patron[0]=validator.keys.alfa[0];
			patron[1]=validator.keys.alfa[2];
			return patron;
		}
		this.isAlfa=function()
		{
			patron=validator.keys.alfa;
			return patron;
		}
		this.checkAdd=function(p)
		{
			if(this.add)
			{
				return p.concat(this.add)
			}
			else
			{
				return p;
			}
		}
		this.engine=function(p)
		{
			//alert(this.lang+":"+leimnud.tools.object.toString(p))
			this.patron=this.checkAdd(p);
			//alert(leimnud.tools.object.toString(this.patron))
			var valid=false;
			//document.getElementById("d").innerHTML=" ";
			//alert(this.patron.toStr(true))
			for(var i=0;i<this.patron.length;i++)
			{
				var b=this.patron[i];
				//alert(this.patron[i])
				var type= typeof this.patron[i];
				//alert(type)
				if(type=="string")
				{
					//	alert(556)
					valid=this.compareChar(this.patron[i],this.key);
				}
				else if (type=="object")
				{
				  //alert(this.key+":"+this.patron[i][0]+":"+this.patron[i][1])
					valid=(this.key>=this.patron[i][0] && this.key<=this.patron[i][1])?true:false;
				}
				else if(type=="number")
				{
					if(this.keys[this.lang]['validatorByLetter'])
					{
						//valid=(String.fromCharCode(this.key)==String.fromCharCode(this.patron[i]))?true:false;
						valid=(this.key==this.patron[i])?true:false;
						//document.getElementById("d").innerHTML+="[ "+String.fromCharCode(this.key)+" : "+String.fromCharCode(this.patron[i])+" [mykey:"+String.fromCharCode(this.patron[i]).charCodeAt(0)+"] ] [2007]["+this.key+"]["+this.patron[i]+"]<br> ";
					}
					else
					{
						valid=(this.key==this.patron[i])?true:false;
					}
				}
				if(valid===true){return true;}
			}
			//alert(valid)
			return valid;
		}

	}
});
