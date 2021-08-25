function transfertoZbizlink() {
  
  window.parent.postMessage("close", "*");
  
  return false;
}
function transfertoZbizlinkData(data) {

  window.parent.postMessage(data, "*");

  return false;
}