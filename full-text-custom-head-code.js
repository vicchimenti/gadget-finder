/***
*     @author Victor Chimenti, MSCS-SE '20
*     @file full-text-custom-head-code.js
*
*     This document will format the tags necessary to pull metadata from the
*     content item fields and insert it into the head of a page layout.
*
*     Document will write once when the page loads
*
*     @version 1.6
*/




try {

    
    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var metaType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:type' property='article' />");
    var metaTitleOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:title' content='<t4 type=\'content\' name=\'Article Title\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaDescriptionOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:description' content='<t4 type=\'content\' name=\'Summary\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaImageOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:image' content='<t4 type=\'content\' name=\'Thumbnail image\' output=\'normal\' formatter=\'path/*\' />' />");
    var metaImageAltOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='og:image:alt' content='<t4 type=\'content\' name=\'Alt Image\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaArticleTagsOG = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='article:tag' content='<t4 type=\'content\' name=\'Categories\' output=\'normal\' display_field=\'value\' />' />");
    var metaCard = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='twitter:card' property='summary_large_image' />");
    var metaTitleTwitter = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='twitter:title' content='<t4 type=\'content\' name=\'Article Title\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaDescriptionTwitter = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='twitter:description' content='<t4 type=\'content\' name=\'Summary\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");
    var metaImageTwitter = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='twitter:image' content='<t4 type=\'content\' name=\'Thumbnail image\' output=\'normal\' formatter=\'path/*\' />' />");
    var metaImageAltTwitter = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<meta name='twitter:image:alt' content='<t4 type=\'content\' name=\'Alt Image\' output=\'normal\' modifiers=\'striptags,htmlentities\' />' />");




    /***
     *  Write the document once
     * 
     * */
    document.write("<!-- Open Graph Meta -->");
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaType));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaTitleOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaDescriptionOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageAltOG));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaArticleTagsOG));
    document.write("<!-- Twitter Meta -->");
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaCard));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaTitleTwitter));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaDescriptionTwitter));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageTwitter));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, metaImageAltTwitter));


} catch (err) {
    document.write(err.message);
}