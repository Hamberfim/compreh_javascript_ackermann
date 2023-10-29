/** The DOM API provides properties and methods relative to the type of node 
 *  Four Main Node Types (12 in total): Document, Element, Attributes, Text.
 *  The document nod eis the entry point for the Document Object Model (DOM) of 
 *  browser-based runtime environments and is represented by the 'document' global object.
 */

// Example of the document node methods using 'color.co' website
document.title  // current document title
'Create a Palette - Coolors'
document.lastModified  // date last modified
'10/29/2023 09:47:26'
document.URL  // current document's url
'https://coolors.co/114b5f-028090-e4fde1-456990-f45b69'
document.domain  // host domain
'coolors.co'
document.cookie  // all cookies for the document
'generator_settings={%22color_info%22:%22NAME%22%2C%22isolation_mode%22:false%2C%22zen_mode%22:false}; G_ENABLED_IDPS=google; _iub_cs-32878568=%7B%22timestamp%22%3A%222023-10-29T14%3A45%3A59.422Z%22%2C%22version%22%3A%221.51.1%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%223%22%3Afalse%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A32878568%2C%22cons%22%3A%7B%22rand%22%3A%22daf936%22%7D%7D'
document.forms  // list of the document forms
HTMLCollection(24) [form#modal-signin_form, form#modal-signup_form, form#modal-reset-password_form, form#passcode_form, form#palette-pdf-exporter_form, form#palettes-pdf-exporter_form, form#palette-image-exporter_form, form#palette-saver_form, form#project-saver_form, form#collection-saver_form, form#color-saver_form, form#gradient-saver_form, form#image-browser_url_form, form#modal-terms_form, form#color-image-exporter_form, form#project-selector_form, form#collection-selector_form, form#coupon_form, form#credit-card_form, form#palette-quicklink_form, form#work-saver_form, form#font-saver_form, form#palette-parser_form, form#image-saver_form, modal-signin_form: form#modal-signin_form, modal-signup_form: form#modal-signup_form, modal-reset-password_form: form#modal-reset-password_form, passcode_form: form#passcode_form, palette-pdf-exporter_form: form#palette-pdf-exporter_form, …]
document.images  // list of the document images
HTMLCollection(86) [img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img]
document.links  // list of the document links
HTMLCollection(194) [a#header_logo, a, a, a, a, a, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black.adobe-download-btn, a.link.link--black, a.link.link--black, a#mobile-header_logo, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.link.link--black, a.link.link--black, a, a, a.header_go-pro-btn, a, a.header_profile-btn, a, a.header_go-pro-btn, a#generator_more-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_image-picker-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_undo-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_redo-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_visualizer-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_variations-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_contrast-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_blindness-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_adjust-btn.btn.btn--s.btn--icon.btn--transparent, a#generator_view-btn.btn.btn--s.btn--.btn--transparent.btn--with-icon, a#generator_export-btn.btn.btn--s.btn--.btn--transparent.btn--with-icon, a#generator_save-btn.btn.btn--s.btn--.btn--transparent.btn--with-icon, a#generator_mobile-view-btn.link.link--black, a#generator_mobile-export-btn.link.link--black, a#generator_mobile-save-btn.link.link--black, a.is-active, a#palettes-sidebar_explore-link, a#generator_color-blindness_cancel-btn.btn.btn--secondary.btn--s, a#generator_color-blindness_apply-btn.btn.btn--primary.btn--s, a#generator_palette-adjust_cancel-btn.btn.btn--secondary.btn--s, a#generator_palette-adjust_apply-btn.btn.btn--primary.btn--s, a#generator-tutorial-intro_begin-btn.btn.btn--m.btn--primary, a#generator-tutorial-end_close-btn.btn.btn--m.btn--primary, a.link.link--black, a.link.link--black, a#modal-signin_reset-password-btn.link.link--primary.link--hover-underlined, a#modal-signin_signup-btn.link.link--primary.link--hover-underlined, a.link.link--black, a.link.link--black, a#modal-signup_signin-btn.link.link--primary.link--hover-underlined, a#modal-reset-password_signin-btn.link.link--primary.link--hover-underlined, a#passcode_resend-link.link.link--primary.link--hover-underlined, a#passcode_help-link.link.link--primary.link--hover-underlined, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--black, a.link.link--secondary, a.link.link--secondary, a.link.link--secondary, a.link.link--secondary, a.link.link--secondary, a.link.link--primary.link--hover-underlined, a.link.link--primary.link--hover-underlined, a.link.link--secondary, a.link.link--secondary, a.link.link--secondary, …]
