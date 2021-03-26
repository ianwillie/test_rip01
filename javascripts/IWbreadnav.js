// JavaScript Document
/*****
Dynamic Javascript Breadcrumb Navigation by Adam DuVander
http://duvinci.com/projects/javascript/crumbs/ Released under Creative Commons License: http://creativecommons.org/licenses/by/2.5/
To use inset this code at top opage: "<script language="JavaScript" type="text/javascript" src="/IWbreadnav.js"></script>"   No quotes  & note / before filename
*****/
/* If any JavaScript code in your extension file contains the string "<./.SCRIPT>" [remove . added to fool DW8] , the JavaScript interpreter reads the string as an ending SCRIPT tag and reports an unterminated string literal error. To avoid this problem, break the string into pieces and concatenate them like this: "<' + '/SCRIPT>". */
var crumbsep = " > ";
var precrumb = "<span class=\"crumb\">";
var postcrumb = "</span>";
var precrumbAll = "<span class=\"crumbAll\">";
var postcrumbAll = "</span>";
var precrumbRootname = "<span class=\"crumbRootname\">";
var postcrumbRootname = "</span>";
var sectionsep = "/";
// var rootpath = "/RIP-ISPrivate"; // Use this before on local computer Use "/" for root of domain. U
var rootpath = "/";  // use for lgbthistoryscotland.org.uk
var rootname = precrumbRootname + "LGBTHistoryScotland.org.uk" + postcrumbRootname;

var ucfirst = 0; //1; // if set to 1, makes "directory" default to "Directory"

var objurl = new Object;
objurl['topics'] = 'All Topics';

// Grab the page's url and break it up into directory pieces
var pageurl = (new String(document.location));                                     console.log(" pageurl =",  pageurl );
var protocol = pageurl.substring(0, pageurl.indexOf("//") + 2);                   console.log("protocol =", protocol);
pageurl = pageurl.replace(protocol, "");                                                    console.log(" pageurl =",  pageurl );   // remove protocol from pageurl
var rooturl = pageurl.substring(0, pageurl.indexOf(rootpath) + rootpath.length);  console.log("rooturl =", rooturl );  // find rooturl
if (rooturl.charAt(rooturl.length - 1) == "/") //remove trailing slash
{
  rooturl = rooturl.substring(0, rooturl.length - 1);
}
pageurl = pageurl.replace(rooturl, "");                                                          console.log(" pageurl =",  pageurl ); // remove rooturl fro pageurl
if (pageurl.charAt(0) == '/') // remove beginning slash
{
  pageurl = pageurl.substring(1, pageurl.length);
}
                                                                                                               console.log(" pageurl =",  pageurl );
var page_ar = pageurl.split(sectionsep);                                                      console.log(" page_ar =",  page_ar );
var currenturl = protocol + rooturl;                                                             console.log(" pageurl =",  pageurl );
var allbread = precrumb + "<a href=\"" + currenturl + "/index.html" + "\">" + rootname + "</a>" + postcrumb;    console.log(" allbread =",  allbread ); // start with root 
/*var displayname = "";     moved from below but OK there */
// for (i=0; i < page_ar.length-1; i++)
for (i=0; i < page_ar.length; i++)   // change length to show last element of url
{
  var displayname = "";
  currenturl += "/" + page_ar[i];
  if (objurl[page_ar[i]])
  {
    displayname = objurl[page_ar[i]];
  }
  else
  {
    if (ucfirst == 1)
    {
      displayname = page_ar[i].charAt(0).toUpperCase() + page_ar[i].substring(1);
    }
    else
    {
      displayname = page_ar[i];
    }
  }
  /* IWS addition: adds /index.htm to end of url but not to displayed name. This makes the index.htm file display in DW8 */
  if (i==page_ar.length-1) { // do not add index.html cos there wirll be a filename already there
           allbread += crumbsep + precrumb + "<a href=\"" + currenturl  +                        "\">" + displayname + "</a>" + postcrumb;     console.log(" allbread =",  allbread ); }
  else { allbread += crumbsep + precrumb + "<a href=\"" + currenturl  + "/index.html" + "\">" + displayname + "</a>" + postcrumb;     console.log(" allbread =",  allbread );}
}  
/* document.write(allbread); */
document.write(precrumbAll, allbread, postcrumbAll);    console.log("precrumbAll, allbread, postcrumbAll=",precrumbAll, allbread, postcrumbAll);    
// document.write("<br>","[precrumbAll=",precrumbAll, "allbread=", allbread, "postcrumbAll=",postcrumbAll, "]");
/* document.write("<br>",  "crumbsep=", crumbsep,  "precrumb=" ,precrumb , "<a href=\"", "currenturl=",  currenturl,  "/index.htm", "\">",  "displayname=",displayname , "</a>" , "postcrumb=", postcrumb) */
//document.write("pageurl=",pageurl)
