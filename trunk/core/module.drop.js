leimnud.Package.Public({
	info	:{
		Class	:"leimnud",
		File	:"module.drop.js",
		Name	:"drop",
		Type	:"module",
		Version	:"0.1"
	},
	content	:function(options){
		this.options	= options || {};
		this.make=function()
		{
			this.options.elements=this.register();
			this.events =this.events || {};			
		};
		this.register=function()
		{
			if(this.options.elements)
			{
				return (this.options.elements.isArray)?this.options.elements:[this.options.elements];
			}
			else
			{
				return [];
			}
		};		
		this.launchEvents=function(event)
		{
			return (event)?event():false;
		};
		this.observer=function()
		{
			
		}
	}
;});
/*
gsdfsdf
*/

//989

/*gsdf*/
