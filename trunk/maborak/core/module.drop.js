/***************************************************************************
*     				  		  module.drop.js
*                        ------------------------
*   Copyleft	: (c) 2007 maborak.com <maborak@maborak.com>
*   Version		: 0.2
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
/**
* @class drop
*/
leimnud.Package.Public({
	info	:{
		Class	:"maborak",
		File	:"module.drop.js",
		Name	:"drop",
		Type	:"module",
		Version	:"0.1"
	},
	content	:function(options){
		this.options	= options || {};
		this.elements	= [];
		this.selected 	= false;
		this.selID		= false;
		this.make=function(options)
		{

		};
		this.add = function(data)
		{
			var ev = data.events || {};
			data.events = ev;
			this.elements.push(data);
		};
		this.capture = function(drag)
		{
			this.drag = drag.currentElementDrag;
			var position = this.parent.dom.position(this.drag);
			position={
				x:position.x+(this.drag.clientWidth/2),
				y:position.y+(this.drag.clientHeight/2)
			};
			this.selected = false;
			for(var i=0;i<this.elements.length;i++)
			{
				var pt = this.parent.dom.positionRange(this.elements[i].element);

				if(position.x > pt.x1 && position.x < pt.x2 && position.y > pt.y1 && position.y < pt.y2)
				{
					this.selected = i;
					break;
				}
			}
			if(this.selected===false)
			{
				if(this.selID!==false)
				{
					this.out(this.selID);
				}
			}
			else
			{
				if(this.selID!==false && this.selID!==this.selected)
				{
					this.out(this.selID);
				}
				this.over(this.selected);				
			}
			//window.status=this.selected;
			//return (inTarget===false)?false:this.elements[inTarget].value;*/
		};
		this.over=function(uid)
		{			
			this.selID	= uid;
			return this.launchEvents(this.elements[uid].events.over);
		};
		this.out=function(uid)
		{
			this.selID=false;
			return this.launchEvents(this.elements[uid].events.out);
		};
		this.launchEvents=function(event)
		{
			if(event && event.isArray===true)
			{
				for(var i=0;i<event.length;i++)
				{
					if(typeof event[i]=="function")
					{
						event[i]();
					}
				}
			}
			else
			{
				return (event)?event():false;
			}
		};
	}
});