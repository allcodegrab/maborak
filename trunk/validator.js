var validator={
	keys:{
		digit	:[[48,57]],
		alfa	:["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","·ÈÌÛ˙Ò¡…Õ”⁄—","po"],
		any		:["!#$%&/()=???+*{}[]-_.:,;'|\"\\@"]
	},
	init:function(param)
	{
		this.valid=param.valid || false;
		this.invalid=param.invalid || false;
		this.validArray=(rodeh.tools.array.isArray(this.valid))?this.valid:[];
		this.invalidArray=(rodeh.tools.array.isArray(this.invalid))?this.invalid:[];
		this.add=param.add || false;
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
		//alert(this.key+":"+String.fromCharCode(this.key));
		this.lang= param.lang || "en";
	}
}

validator.init.prototype.generateKeys=function()
{
	this.keys=[];
	this.keys["es"]=[];
	this.keys["es"]["Alfa"]=["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","·ÈÌÛ˙Ò¡…Õ”⁄—"," "];
	this.keys["es"]["Int"]=[[48,57]];
	this.keys["es"]["Any"]=this.keys["es"]["Alfa"].concat("!#$%&/()=???+*{}[]-_.:,;'|\"\\@",[[48,57]]);
	this.keys["es"]["Field"]=this.keys["es"]["Any"];

	this.keys["en"]=[];
	this.keys["en"]["Alfa"]=[this.keys["es"]["Alfa"][0]].concat([" "]);
	this.keys["en"]["Int"]=[[48,57]];
	this.keys["en"]["Any"]=this.keys["en"]["Alfa"].concat("!#$%&/()=???+*{}[]-_.:,;'|\"\\@",[[48,57]]);
	this.keys["en"]["Alfa10"]=[this.keys["es"]["Alfa"][0],this.keys["en"]["Int"]];
	this.keys["en"]["Field"]=this.keys["en"]["Any"];

	return (this.keys[this.lang][this.type])?this.keys[this.lang][this.type]:this.keys[this.lang]["Alfa"];
}
validator.init.prototype.result=function()
{
		var valid=true;
		this.keyAlfaUS=[validator.keys.alfa[0],validator.keys.alfa[2]];
		this.keyAlfaUS2=[validator.keys.alfa[0]];
		this.keyReal=[validator.keys.digit[0],"-."];
		this.keyAlfa9=this.isAlfa().concat(validator.keys.digit,[".,"]);
		this.keyAlfa8=this.keyAlfaUS2.concat(validator.keys.digit,[".,"]);
		this.keyAlfa10 =this.keyAlfaUS.concat(validator.keys.digit,this.keyReal,["@"]);
		this.keyAny = this.keyAlfa9.concat(["!#$%&/()=???+*{}[]-_.:,;'|\"\\@"]);
		this.keyField = this.keyAlfaUS.concat(validator.keys.digit);

		for(var i=0;i<this.validArray.length;i++)
		{
			this.type=this.validArray[i];
			valid=this.engine(this.generateKeys());
			if(valid===true){return true;}
		}
		if(this.validArray.length==0)
		{
			valid=this.engine([])
		}
		return valid;
}
validator.init.prototype.isNumber=function(a)
{
	return (a>=0)?true:false;
}
validator.init.prototype.compareChar=function(_string,car) {
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
validator.init.prototype.isAlfaUS=function()
{
	patron=[];
	patron[0]=validator.keys.alfa[0];
	patron[1]=validator.keys.alfa[2];
	return patron;
}
validator.init.prototype.isAlfa=function()
{
	patron=validator.keys.alfa;
	return patron;
}
validator.init.prototype.checkAdd=function(p)
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
validator.init.prototype.engine=function(p)
{
//alert(this.lang+":"+rodeh.tools.object.toString(p))
this.patron=this.checkAdd(p);
//alert(rodeh.tools.object.toString(this.patron))
var valid=false;
//document.getElementById("d").innerHTML=" ";
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