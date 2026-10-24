// cookie = a small text file stored on your computer
// used to remember information about the user
// saved in name=value pairs

// SET COOKIES

setCookie("firstName", "Vansh", 365);
setCookie("lastName", "Garg", 365);
setCookie("friend1", "Mayank", 365);
setCookie("friend2", "Varun", 365);
setCookie("friend3", "Manu", 365);

// DISPLAY ALL COOKIES

console.log("All Cookies:", document.cookie);

// GET COOKIE

console.log("First Name:", getCookie("firstName"));
console.log("Friend 1:", getCookie("friend1"));

// DELETE COOKIE

deleteCookie("friend2");

console.log("After Deleting Varun:", document.cookie);

// FUNCTION TO SET COOKIE

function setCookie(name, value, daysToLive) {
  const date = new Date();

  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);

  let expires = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// FUNCTION TO GET COOKIE

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

// FUNCTION TO DELETE COOKIE

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
