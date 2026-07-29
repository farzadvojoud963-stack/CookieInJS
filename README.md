# 🍪 Cookie Class

A lightweight and dependency-free JavaScript utility class for managing
browser cookies.

## ✨ Features

-   Create cookies with expiration dates
-   Read cookie values
-   Delete cookies
-   Simple static API (no class instance required)
-   Works in all modern browsers

------------------------------------------------------------------------

## 📦 Installation

Copy `Cookie.js` into your project.

``` html
<script src="Cookie.js"></script>
```

Or import it:

``` javascript
import Cookie from "./Cookie.js";
```

------------------------------------------------------------------------

## 🚀 Usage

### Create a Cookie

``` javascript
Cookie.setCookie("username", "Farzad", 7);
```

Creates a cookie named `username` with the value `Farzad` that expires
in **7 days**.

### Read a Cookie

``` javascript
const username = Cookie.getCookie("username");
console.log(username);
```

Returns the cookie value. If it doesn't exist, an empty string (`""`) is
returned.

### Delete a Cookie

``` javascript
Cookie.deleteCookie("username");
```

Removes the cookie immediately.

------------------------------------------------------------------------

## 📚 API

### `Cookie.setCookie(name, value, days)`

  Parameter   Type     Description
  ----------- -------- -------------------------
  `name`      String   Cookie name
  `value`     String   Cookie value
  `days`      Number   Expiration time in days

### `Cookie.getCookie(name)`

Returns the value of the requested cookie.

### `Cookie.deleteCookie(name)`

Deletes the specified cookie.

------------------------------------------------------------------------

## 🌐 Browser Support

Compatible with Chrome, Edge, Firefox, Safari, and other modern
browsers.

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome. Feel free
to fork the repository and open a pull request.

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License**.
