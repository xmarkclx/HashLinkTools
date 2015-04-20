HashlinkTools v0.1
=============
HashlinkTools are tools that make managing Hash links easier.

**Example of a hashlink**

    http://www.example.com#hashlink=hashlink

Sample Setup
============
You can use this library however you want. Below is an example setup for a Filters page.

The sample assumes the following setup:

1. User clicks on a Filter control
2. Click calls filter() function


Updating hashlinks (hashlinking)
----------------------------------
After adding the library to your page, set your filters to call hashlinkify.

	function filter(){
		...				
		///////////////////////////////
	    // HASHLINKING SUPPORT
		/////////////////////////////// 
		newHashlink = {
    	    'regions': $('.regions-filter .text').html(),
        	'subRegions': $('.subregions-filter .text').html()
	        }

    	output = HashlinkTools.hashlinkify(newHashlink);
		/////////////////////////////// 
    	...    	
    }
    
Updating your site based on hashlinks (reverse-hashlinking)
--------------------------------------------------------------
### Step 1: Update the filter function
The filter function should have an identifier that says it is filtering to avoid an infinite loop.

	var filtering = false;

	function filter(){
    	filtering = true;
    	...				
		///////////////////////////////
	    // HASHLINKING SUPPORT
		/////////////////////////////// 
		newHashlink = {
    	    'regions': $('.regions-filter .text').html(),
        	'subRegions': $('.subregions-filter .text').html()
	        }

    	output = HashlinkTools.hashlinkify(newHashlink);
		///////////////////////////////
    	...
    	filtering = false;
}

### Step 2: Create the hashChange function
Create a function that is called that will update your page whenever the hashlinks changes
    
A hashChange function should have the following:

* A if statement to know if the filter is currently filtering (to avoid infinite loop)
	
	        if(!filtering) {
	        
* The code to update the filter forms from hashlinks. Refer to using reverse_hashlinkify below on the Toolbox section to know how it works.

	            HashlinkTools.reverse_hashlinkify(HomeDesignsFilterPage.filters_form);

* Set that if hash is not empty, filter.

       	     if (window.location.hash != "")
                filter();
                
**Complete function**

	function hashChange(){
		if(!filtering) {
			HashlinkTools.reverse_hashlinkify(HomeDesignsFilterPage.filters_form);
       	    if (window.location.hash != "")
				filter();
		}
	}

### Step 3: Activate the hashChange function
On your document ready or window onLoad function, set it so that the window calls your function whenever hashlinks get updated.
	
If you want to automatically process the hashlinks when the page gets loaded, on your document ready or window onLoad function, call the hashchange function.

	function onDocumentReady(){
		...
		hashChange();
		window.addEventListener('hashchange', hashChange, false)
		...		
	}
	
### Step 4(optional): Edit the Filters Form

Given we have a url like:

	http://www.example.com/#q=123&block_width_min=abcd
	
And we have:

	var filters_form = {
    	    set_q: function(v){
	        },
	        
	        set_block_width_min: function(v){
	        },
	}
	
When we call:
	
	HashlinkTools.reverse_hashlinkify(filters_form);
	
Then reverse_hashlinkify will call 
	
- set_q('123');
- set_block_width_min('abcd');
	
Toolbox
-------
###copyHashlink(src,dest)
Copies hash link from src to dest.

**Example**

    src = 'http://www.example.com#hashlink=hashlink&other=other';
    dest = 'http://www.sample.com';
    output = HashlinkTools.copyHashlink(src,dest);
   
**Output**

	http://www.sample.com#hashlink=hashlink&other=other
	
***

###hashlinkify(objects)
Make a hashlink of JSON object.

**Example**

    newHashlink = {'a':'b', 'c':'d'};
    output = HashlinkTools.hashlinkify('newHashlink);

**Output**

	http://www.sample.com/#a=b&c=d

***

###reverse_hashlinkify
Call functions with the hashlink as the source.

**Example**

Given we have a url like:

	http://www.example.com/#q=123&block_width_min=abcd
	
And we have:

	var filters_form = {
    	    set_q: function(v){
            	HashlinkTools.ReverseHashlink.convert_array_to_checkbox_values(v.split(','),'filter-series-');
	        },
	        
	        set_block_width_min: function(v){
				var max = $('.nstSlider-homedesignsFilterBlockWidth').nstSlider('get_current_max_value');
            	$('.nstSlider-homedesignsFilterBlockWidth').nstSlider('set_position', v, max);
	        },
	}
	
When we call:
	
	HashlinkTools.reverse_hashlinkify(filters_form);
	
Then reverse_hashlinkify will call 
	
- set_q('123');
- set_block_width_min('abcd');

***


###ReverseHashlink
Tools that make reverse hashlinking easier.

####convert_array_to_checkbox_values


Maintainers
===========
##Mark Christian D. Lopez 
Original author, maintainer.

<http://www.markcl.net>

<xmarkclx@gmail.com> 

<mark@ypdigital.com.au>