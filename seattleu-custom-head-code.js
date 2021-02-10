/***
*     @author Victor Chimenti, MSCS-SE '20
*     @file custom-head-code.js
*
*     This document will format the tags necessary to pull metadata from the
*     content item fields and insert it into the head of a page layout.
*
*     Document will write once when the page loads
*
*     @version 1.0
*/




try {
    
    var metaType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:type' property='article' />");
    var metaTitleOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:title' content='<t4 type=\'content\' name=\'Article Title\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaDescriptionOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:description' content='<t4 type=\'content\' name=\'Summary\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");



    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaType));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaTitleOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaDescriptionOG));


} catch (err) {
    document.write(err.message);
}