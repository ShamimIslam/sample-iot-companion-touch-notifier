(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        $(document).on("click", "#Topfeatured_btn", function(evt)
        {
            fetchHighlights('featured');
        });
        $(document).on("click", "#Topeditor_picks_btn", function(evt)
        {
            fetchHighlights('editor_picks');
        });

        $(document).on("click", ".uib_w_6", function(evt)
        {
         activate_subpage("#mainsub"); 
        });
}
 $(document).ready(register_event_handlers);
})();
