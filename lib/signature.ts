/**
 * Plays the signature fade once per tab session.
 * The asset is a filled trace, so this is an opacity fade, not a new stroke.
 */
export const signatureInitScript = `(function(){try{var k="signature-seen";if(sessionStorage.getItem(k)){document.documentElement.classList.add("signature-seen");}else{sessionStorage.setItem(k,"1");}}catch(e){}})();`;
