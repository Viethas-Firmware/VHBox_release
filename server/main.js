   /* Utility Functions */

   const queryAllLinks = function () {
    var allSidenavLinks = document.querySelectorAll('.sidenav-link');
    var sidenavLinkArray = Array.from(allSidenavLinks);
    return sidenavLinkArray;
 };
 
 const checkIfLinkMatchesKeyword = function (
    theLink = new Element(),
    keywords = ''
 ) {
    keywords = keywords.toLowerCase();
    // --- Get Link's Info
    var title = theLink.textContent.toLowerCase();
    var tagList = theLink.dataset.tag.toLowerCase();
    // --- Check If Matches
    var titleIncluded = title.includes(keywords);
    var tagListIncluded = tagList.includes(keywords);
    // --- Final Result
    return titleIncluded || tagListIncluded
 };
 
 const elementAddClass = function(
    element = new Element(),
    theClass = ''
 ) {
    var classArray = element.className.split(' ');
    var newClassArray = classArray.concat(theClass);
    element.className = newClassArray.join(' ');
 };
 
 const elementRemoveClass = function(
    element = new Element(),
    theClass = ''
 ) {
    var classArray = element.className.split(' ');
    var newClassArray = classArray.filter((oneClass) => (oneClass != theClass));
    element.className = newClassArray.join(' ');
 };
 
    /* Subsequent Tasks */
 
 const showLink = function(
    link = new Element()
 ) {
    var linkIsHidden = link.className.includes('hidden');
    if (linkIsHidden)
       elementRemoveClass(link, 'hidden');
    else
       {  /* do nothing */  }
 };
 
 const hideLink = function(
    link = new Element()
 ) {
    var linkIsHidden = link.className.includes('hidden');
    if (linkIsHidden)
       {  /* do nothing */  }
    else
       elementAddClass(link, 'hidden');
 };
 
    /* Event Listeners */
 
 const updateVisibility = function (
    event = new Event()
 ) {
    // --- Check Keyword
    var theLink = event.target;
    var keywords = document.querySelector('#sidenav-input').value;
    var linkMatchesKeyword = checkIfLinkMatchesKeyword(theLink, keywords);
    // -- Update Visibility
    if (linkMatchesKeyword)
       showLink(theLink);
    else
       hideLink(theLink);
 };
 
 const notifyAllLinks = function(
    event = new Event()
 ) {
    // --- Translate Event
    var inputEvent = new Event('input:change');
    // --- Notify All Links
    var sidenavLinkArray = queryAllLinks();
    sidenavLinkArray.forEach((link) => link.dispatchEvent(inputEvent));
 };
 
 const clearInput = function (
    event = new Event()
 ) {
    var sidenavInput = document.querySelector('#sidenav-input');
    sidenavInput.value = '';
 };
 
    /* Start Program */
 
 void function() {
    // --- Links Binding
    var sidenavLinkArray = queryAllLinks();
    var bindListener = (link) => link.addEventListener('input:change', updateVisibility);
    sidenavLinkArray.forEach(bindListener);
    // --- Input Binding
    var sidenavInput = document.querySelector('#sidenav-input');
    sidenavInput.addEventListener('keyup', notifyAllLinks);
    // --- Button Binding
    var sidenavButton = document.querySelector('#sidenav-button');
    sidenavButton.addEventListener('click', clearInput);
    sidenavButton.addEventListener('click', notifyAllLinks);
 } ();