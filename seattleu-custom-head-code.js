/***
*     @author Victor Chimenti, MSCS-SE '20
*     @file custom-head-code.js
*
*     This document will format the tags necessary to pull metadata from the
*     content item fields and insert it into the head of a page layout.
*
*     Document will write once when the page loads
*
*     @version 1.1
*/




try {

    var featureImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Thumbnail image' output='normal' formatter='path/*' />");
    var altFeatureImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Alt Feature Image' output='normal' modifiers='striptags,htmlentities' />");
    var metaType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:type' property='article' />");
    var metaTitleOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:title' content='<t4 type=\'content\' name=\'Article Title\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaDescriptionOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:description' content='<t4 type=\'content\' name=\'Summary\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaImageOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:image' content='<t4 type=\'content\' name=\'Thumbnail image\' output=\'normal\' formatter=\'path/*\' />' />");
    var metaImageAltOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:image:alt' content='<t4 type=\'content\' name=\'Alt Image\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");



    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaType));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaTitleOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaDescriptionOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageAltOG));



} catch (err) {
    document.write(err.message);
}