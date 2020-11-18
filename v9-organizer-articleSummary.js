  /***
*     @author Victor Chimenti, MSCS-SE '20
*     @file v9-organizer-articleSummary.js
*
*     This new content type is being adapted from the knowledge base
*     content type used by IT Services and is intended to provide a
*     searchable, sortable group of articles that can be exported to and used
*     by any department.
*
*     This specific project is intended for the CDLI Gadget Finder,
*     although this content type should easily be exportable to other teams.
*
*     This content type will work in conjunction with the Organizer and each item
*     will contain one searchable, article.
*
*     Document will write once when the page loads
*
*     @version 3.7
*/

try {
  /* -- Store all the things -- */
  var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
  // var articleTypes = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Categories' output='normal' display_field='value' />");
  // var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' display_field='value' />");
  // var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' display_field='value' />");
  var thumbnailImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Thumbnail image' output='normal' formatter='path/*' />");
  var altThumbnailImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Alt Image' output='normal' modifiers='striptags,htmlentities' />");
  var featureImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Thumbnail image' output='normal' formatter='path/*' />");
  var altFeatureImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Alt Feature Image' output='normal' modifiers='striptags,htmlentities' />");
  var articleSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary' output='normal' display_field='value' />");
  var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Full Article' output='normal' display_field='value' />");
  var fieldLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='linkurl' />");
  var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Name' modifiers='striptags,htmlentities' />");
  var titleLink = "";
  var lastModified = '<div class="lastModified" style="display:inline-block">Last modified: <t4 type="meta" meta="last_modified" format="MMMM d, yyyy" /></div>';
  // var fieldKeywords = content.get("Searchable Keyword");
  var fieldTags = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Categories' output='normal' display_field='value' />");
  var listOfTags = "";
  // var listOfTypes = "";


  /* -- Prepare all the things -- */
  var beginningHTML = '<div class="newsItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="newsItem standardContent">';
  var endingHTML = '</div></div>';


  /* parse the list of tags, add <li> tags*/
  if (fieldTags != "") {
    var arrayOfTags = fieldTags.split(',');
    for (let i = 0; i < arrayOfTags.length; i++) {
      listOfTags += '<li class="tag">' + arrayOfTags[i] + '</li>';
    }
    listOfTags = '<div class="knowledgeBaseItem"><ul>' + listOfTags + '</ul></div>';
  }

    /* parse the list of categories, add <li> tags*/
  // if (articleTypes != "") {
  //   var arrayOfTypes = articleTypes.split(',');
  //   for (let i = 0; i < arrayOfTypes.length; i++) {
  //     listOfTypes += '<li class="articleType">' + arrayOfTypes[i] + '</li>';
  //   }
  //   listOfTypes = '<ul>' + listOfTypes + '</ul>';
  // }

  /* determine which link, if any, goes in the title */
  if (articleFullBody == "") {
    titleLink = "<h3>" + articleTitle + "</h3>";
  } else {
    titleLink = '<h3><a href="' + fullTextLink + '">' + articleTitle + '</a></h3>';
  }

  // else if (fieldSectionLink == "") {
  //   titleLink = '<h4><a href="' + fullTextLink + '">' + articleTitle + '</a></h4>';
  //      titleLink = '<h4><a href="' + fieldSectionLink + '">' + articleTitle + '</a></h4>';

  


  /* -- Write all the things -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleLink));

  document.write('<div class="newsImage"><img src="' + thumbnailImage + '" class="articleImage" alt="' + altThumbnailImage + '" /></div>');
  document.write('<div class="articleSummary">');
  document.write('<div class="summary"><p>' + articleSummary + '</p></div>')

  // if (author != "") {
  //   document.write('<div class="author">');
  //   document.write('<div class="articleDetails articleAuthor"><h5>By: </h5><div class="articleAuthor"><h5>' + author + '</h5></div></div>');
  //   document.write('</div>');
  // } else {
  //   document.write('<div class="author articleDetails articleAuthor" style="display: none";><h5>No Author Provided</h5></div>');
  // }
  
  // if (publishDate != "") {
  //   document.write('<div class="publishDate">');
  //   document.write('<div class="articleDetails articleDate"><h5>Published: </h5><div class="articleDate"><h5>' + publishDate + '</h5></div></div>');
  //   document.write('</div>');
  // } else {
  //   document.write('<div class="publishDate articleDetails articleDate" style="display: none";><h5>No Date Provided</h5></div>');
  // }

  document.write(listOfTags);


  // document.write(listOfTypes);

  /* -- Write Program Level 1 Details --*/
  // if (listOfTypes != "") {
  //   document.write('<div class="levelOne">');
  //   document.write('<div class="articleDetails articleTypes"><h5>Categories: </h5><div class="articleTypes"><span>' + listOfTypes + '</span></div></div>');
  //   document.write('</div>');
  // } else {
  //   document.write('<div class="levelOne articleDetails articleType" style="display: none";><h5>No Category Provided</h5></div>');
  // }



  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, lastModified));
  // document.write('<div class="keywords" style="display:none;" aria-hidden="true">' + fieldKeywords + '</div>');
  document.write('</div>'); // close articleSummary

  document.write(endingHTML);

} catch (err) {
  document.write(err.message);
}
