/*
Puppeteer has following classes
. Puppeteer -> launch function use to  -> Browser open and make a object called browser context
. Browser Fetcher -> Use to control different browser eg Firefox
. Browser Context -> This object represent the whole Browser
. Page -> It's represent the tab
. Keyboard -> it's use to give the feature of keyword
. Mouse -> use of keyword
. Touchscreen -> use for touch devices
. File Chooser -> upload/download
. Frame -> Represent a frame of the page still confused?
. Worker-> As we know javascript did one task at once but by using this class we can do more than one task simultaneously
*/

// puppeteer ki khas baat ye hai  ki haar function promise return krega
const { type } = require("os");
const puppeteer = require("puppeteer");
let page;

// launch the browser
const browserlaunch = puppeteer.launch({
  headless: false,
});
// now using browser_contect object open the tab which is in array from
browserlaunch.then((browser_context) => {
  pagesArrayOpen =  browser_context.pages();
  return pagesArrayOpen;
  
}).then( (browserpage)=> {
  page=browserpage[0]; //pick the 1st page
  const reached=page.goto("https://google.com"); //go on specfic url
  return reached;
}).then(()=>
{
  //waiting for the elements to appear on the page
 const whenPageVisible=page.waitForSelector("input[type='text']",{visible:true});
 return whenPageVisible;
}).then(()=>
{
  // select the identification using selector and write there.
 const typeOnInputBox= page.type("input[type='text']","pepcoding");
 return typeOnInputBox;
}).then(()=>
{
  // page.keyboard use to type special character
  const enterPress=page.keyboard.press("Enter");
  return enterPress;
}).then(()=>{
  const whenPageVisible=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
  return whenPageVisible;
}).then(()=>
{
  const open_link=page.click("h3.LC20lb.MBeuO.DKV0Md");
  return open_link;
}).catch((err)=>
{
  console.log(err);
})


