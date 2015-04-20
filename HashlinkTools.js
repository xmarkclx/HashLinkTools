/**
 * HashlinkTools v1.0.1
 * @fileOverview Javascript that makes managing hashlinks easier
 * @author Mark Christian D. Lopez
 */

HashlinkTools = {
    /**
     * Copies url's hashlinks from src to dest
     * @author Mark Christian D. Lopez <mark@ypdigital.com.au>  <xmarkclx@gmail.com>
     * @param src
     * @param dest
     *
     * Ex. src= http://a.com/#hello
     *     dest= http://b.com/
     *
     *     dest now becomes http://b.com/#hello
     */
    copyHashlink: function(src, dest){
        // If no hashlink, then don't copy anything
        if(src.lastIndexOf('#') == -1)
            return dest;

        // Find the last '/' character from dest
        // Splice the string to the last '/' or '#' character of dest
        resultWithHash = dest.substring(0, dest.lastIndexOf("#"));

        if(resultWithHash.length)
            result = resultWithHash;
        else
            result = dest.substring(0,dest.length);

        // The first part of the splice will have '/' + the hashlink from the src
        srcHashlink = src.substring(src.lastIndexOf('#'));
        if(result.substr(result.length - 1) != '/')
            result += '/';
        result += srcHashlink;
        return result;
    },

    /**
     * hashlinkify
     * @author Mark Christian D. Lopez
     * mark@ypdigital.com.au / xmarkclx@gmail.com
     * Make a hashlink of JSON object.
     *
     * Ex.
     *  newHashlink = {'a':'b', 'c':'d'};
     *  output = HashlinkTools.hashlinkify('newHashlink);
     *
     * Result: http://www.sample.com/#a=b&c=d
     *
     *  TODO: Autogenerate hashlinks from a json object
     */
    hashlinkify: function(objects){
        var hashlink = '';
        $.each(objects,
            function(k,v){
                //hashlink += k + '=' + encodeURIComponent(v).replace('%2C', ',') + '&';
                hashlink += k + '=' + encodeURIComponent(v) + '&';
            });
        hashlink = hashlink.substring(0, hashlink.length - 1);
        window.location.hash = hashlink;
    },

    /**
     * Reverse Hashlinkify
     * @author Mark Christian D. Lopez
     * mark@ypdigital.com.au / xmarkclx@gmail.com
     * Calls functions when a hash has changed
     * Objects are of the JSON format
     * i.e.
     *  json = { set_q: function(){} }
     */
    reverse_hashlinkify: function(object){
        var hashlinks = window.location.hash;
        hashlinks = hashlinks.replace('#','').split('&'); console.log('HASH: ' + hashlinks);

        $.each(hashlinks,
            function(k,v){
                k = v.split('=');
                v = k[1];
                k = k[0];
                
                console.log(k + ' - ' + v);

                if(k=="")
                    return;

                eval('object.set_'+k+'("'+v+'")');
            });
    },

    ReverseHashlink: {
        /**
         * Convert array to checkbox values
         * @author Mark Christian D. Lopez
         * mark@ypdigital.com.au / xmarkclx@gmail.com
         * @param arr
         * @param prefix
         *
         * Ex. HashlinkTools.ReverseHashlink.convert_array_to_checkbox_values(['a','b'], 'mecha-')
         *  Effect: Unchecks all .mecha-* checkboxes, then checks #mecha-a and #mecha-b checkboxes.
         *
         * Notes:
         *  Aware of 'plus' and empty values
         */
        convert_array_to_checkbox_values: function(values, prefix){
            $('[id^='+prefix+']').prop('checked',false);

            if(values=='')
                return;

            $.each(values, function(k,v){
                if(v.indexOf('plus')>-1)
                    return false;

                obj = prefix + v;
                $('[id^='+obj+']').prop('checked',true);
            });
        }
    }
}