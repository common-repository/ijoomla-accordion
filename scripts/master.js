/**
 * iJoomla! Accordion
 * Responsive accordion widget for WordPress
 * Plugin URL       https://ijoomla.org/wordpress-plugins/introductions/ijoomla-accordion/
 * Version          1.0
 * Author			Amin Shahrokhi
 * Author URI		https://ijoomla.org/
 * Author Email		support@ijoomla.org
 * Creation Date	January 9, 2016
 * @copyright		Copyright (c) 2015 YutabStudio.com. All rights reserved.
 * @license			GNU General Public License version 3 or later; see LICENSE.txt
**/

jQuery.noConflict();

jQuery(document).ready(function(){

	jQuery('.iccordion').each(function(){
		var moduleID = jQuery(this).attr('id');
		jQuery(this).find('section:first-child').addClass('iccordion_active');
		jQuery(this).find('section').click(function(){
			if(jQuery(this).hasClass('iccordion_active'))
			{
				return;
			}
			else
			{
				jQuery('section').removeClass('iccordion_active');
				jQuery(this).addClass('iccordion_active');
				jQuery('#'+moduleID+' .iccordion_content').slideUp('fast');
				jQuery('#'+moduleID+' .iccordion_active .iccordion_content').slideDown('fast');
			}
		});
	});

});
