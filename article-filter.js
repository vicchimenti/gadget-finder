<script type="text/javascript">
/***
*   @author Victor Chimenti, MSCS-SE '20
*   @file article-filter.js
*
*   jQuery
*   This script searches the Gadget Finder Article content items for matches to the
*   user selected search parameters in the filter field dropdown menu
*
*   @version 3.0
*/






$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {




            //** global array holds list of content items that will render after filter selection **//
            var visibleItems = [];
            var parseItems = {};



            
            //   ***   Process and Parse Visible Items   ***   //
            $(function () {
                let parseItemsToDisplay = function() {
                    // assign array of currently visible content items
                    visibleItems = $('.knowledgeBaseItemWrapper').not('.hideByDropdownCategories');
                    // check to see if array is empty
                    if (visibleItems.length == 0) {
                        // when array is empty show the results message
                        $('.noResultsToShow').removeClass('hideResultsMessage');
                    } else {
                        // when array has content items suppress the results message
                        $('.noResultsToShow').addClass('hideResultsMessage');
                    }
                };
                parseItems.process = parseItemsToDisplay;
            });
            
            
            
            
            //   ***   Keyword Search   ***   //
            $(function () {
                // scan the keyword each character the user inputs
                $('#id_search').on('keyup', function () {
                    // Assign Search Key
                    let keyword = $(this).val().toLowerCase();
                    // filter the items for the input key
                    $(function () {
                        $('.newsItem').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByDropdownCategories', !($(this).text().toLowerCase().indexOf(keyword) > -1));
                        });
                    });
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });



						

            //   ***   Topic Filter   ***   //
            // $(function () {
            //     // Execute When the Multi-Select Checkbox Selector for Article Topics Changes
            //     $('#SelectBox-ByType').change(function () {
            //         let typeKeys = [];
            //         typeKeys[0] = -1;
            //         // assign an array of keys to hold the value from each check box selected
            //         $('input[name=SelectBox-ByType]:checked').each(function (item) {
            //             typeKeys[item] = $(this).val();
            //         });
            //         // If Key array has at least one valid value then Compare to Each Content Item
            //         if (typeKeys[0] != -1) {
            //             $('.topics').filter(function (i, e) {
            //                 let typeValue = $(this).text();
            //                 // set state to hidden for all items
            //                 $(this).parents('.newsItemWrapper').addClass('hideByType');
            //                 // Check to see if any Key is included in the current Value
            //                 for (let index = 0; index < typeKeys.length; index++) {
            //                     if (typeValue.includes(typeKeys[index])) {
            //                         // make current item visible when any key is present in the value string
            //                         $(this).parents('.newsItemWrapper').removeClass('hideByType');
            //                     }
            //                 }
            //             });
            //             // Or Else the Key array is Null so Reset all Content Items to Visible
            //         } else {
            //             $('.newsItemWrapper').removeClass('hideByType');
            //         }
            //         // parse out unselected content items and limit display to user selected items
            //         parseItems.process();
            //     });
            // });



            //   ***   Category Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Course Types Change - Execute change function
                $('#selectboxCategories').change(function () {
                    // Assign Search Key
                    let typeKey = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (typeKey) {
                        // default to display all items
                        $('.knowledgeBaseItemWrapper').removeClass('hideByDropdownCategories');
                        // search tags in each item
                        $('li.tag').filter(function (i, e) {
                            var typeValue = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (typeValue.match(typeKey)) {
                                $(this).parents('.knowledgeBaseItemWrapper').removeClass('hideByDropdownCategories');
                            } else {
                                $(this).parents('.knowledgeBaseItemWrapper').addClass('hideByDropdownCategories');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.knowledgeBaseItemWrapper').removeClass('hideByDropdownCategories');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });





        }, 10);
    });
});
</script>
