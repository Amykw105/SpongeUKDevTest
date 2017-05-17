/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/

jQuery(
		function( $ ) {
			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new Content( 'app/data/content.json' );

			/**
			 * Populate the header
			 */
			var populateHeader = function() {
				var strHeaderSource = $( '#header-template' ).html(),
						resHeaderTemplate = Handlebars.compile( strHeaderSource ),
						strHeaderHTML = resHeaderTemplate( resContent.getItem( 'header' ) );

				$( '#header' ).html( strHeaderHTML );
			};

			/**
			 * Populate the tasks
			 */
			var populateTasks = function() {
				var strTaskSource = $( '#task-template' ).html(),
						resTasksTemplate = Handlebars.compile( strTaskSource ),
						strTasksHTML = resTasksTemplate( resContent.getItem( 'tasks' ) );

				$( '#tasks' ).append( strTasksHTML );
			};

			/**
			 * Populate the content
			 */
			var populateContent = function() {
				var strContentSource = $( '#content-template' ).html(),
						resContentTemplate = Handlebars.compile( strContentSource ),
						strContentHTML = resContentTemplate( resContent.getItem( 'content' ) );

				$( '#content' ).append( strContentHTML );
			};

			/**
			 * Populate the documentation links
			 */
			var populateDocumentation = function() {
				var strContentSource = $( '#documentation-template' ).html(),
						resContentTemplate = Handlebars.compile( strContentSource ),
						strContentHTML = resContentTemplate( resContent.getItem( 'docs' ) );

				$( '#documentation' ).append( strContentHTML );
			};

			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);
			
			/**
			 * Populate the tabs
			 */
			var populateTabs = function() {
				var strTabSource = $( '#tab-template' ).html(),
						resTabsTemplate = Handlebars.compile( strTabSource ),
						strTabsHTML = resTabsTemplate( resContent.getItem( 'tabs' ) );

				$( '#tabs' ).append( strTabsHTML );
			};
			
			/**
			 * jQuery tabs - add and remove class based on data-tab value
			 */
			var activeTabs = function(){
				$(".tab0").addClass('current'); 
				$("ul.tabs li").click(function() {
					var a = $(this).attr("data-tab");
					$("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + a).addClass("current")
				});
			}

			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {
						populateHeader();
						populateTasks();
						populateContent();
						populateDocumentation();
						populateTabs();
						activeTabs(); // Call the tab function above
					}
			);
			
			/**
			* Going to skip Task 7 - Simplify JavaScript
			* Not sure I'm confortable enough changing all the code, if I was to tackle it 
			* I think it would require a single function that takes the parameters
			* of the ID in the html and the array of code in the JSON.
			* You would then call the function with the relevant parameters. 
			* That's how I would attempt it.
			**/
			/** Went back and attempted this, can't quite get it there but this how I 
			* think it would work
			**/
			//    populate = function(id, json, html){
			// 	      var strTabSource = $(id).html(),
			//	      resTabsTemplate = Handlebars.compile(strTabSource),
			// 	      strTabsHTML = resTabsTemplate( resContent.getItem(json) );
			// 	      $(html).append( strTabsHTML );
			//    }
			//    populate('#tab-template', 'tabs', '#tabs');
		
		}
);