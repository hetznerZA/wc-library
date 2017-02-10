(function() {
  'use strict';

  /**
   * Executes a provided function once per array element
   * @function forEach
   * @param {function} callback - The function to call on each iteration
   */
  if (typeof Array.prototype.forEach === 'undefined') {
    Array.prototype.forEach = function(callback, thisArg) {
      if(typeof callback !== "function") {
        throw new TypeError(callback + " is not a function!");
      }
      var i, l = this.length, a = Object(this);
      for(i = 0; i < l; i++) {
        callback.call(thisArg, this[i], i, a);
      }
    }
  }

  /**
   * Does an array contain a needle?
   * @function contains
   * @param {var} needle - The needle to search for
   */
  if (typeof Array.prototype.contains === 'undefined') {
    Array.prototype.contains = function(needle) {
      var i = this.length;
      while(i--) {
        if (this[i] === needle) {
          return true;
        }
      }
      return false;
    }
  }

  /**
   * Returns a value in the array that matches the provided test function
   * @function find
   * @param {function} callback - The test function
   */
  if (typeof Array.prototype.find === 'undefined') {
    Array.prototype.find = function(callback, thisArg) {
      this.forEach(function(v, i, a) {
        if (callback.call(this, v, i, a)) {
          return v;
        }
      }, thisArg);
      return undefined;
    }
  }

  /**
   * Returns an index in the array that matches the provided test function
   * @function findIndex
   * @param {function} callback - The test function
   */
  if (typeof Array.prototype.findIndex === 'undefined') {
    Array.prototype.findIndex = function(callback, thisArg) {
      this.forEach(function(v, i, a) {
        if (callback.call(this, v, i, a)) {
          return i;
        }
      }, thisArg);
      return -1;
    }
  }

  /**
   * Tests if all elements in the array pass the test function
   * @function every
   * @param {function} callback - The test function
   */
  if (typeof Array.prototype.every === 'undefined') {
    Array.prototype.every = function(callback, thisArg) {
      this.forEach(function(v, i, a) {
        if (!callback.call(this, v, i, a)) {
          return false;
        }
      }, thisArg);
      return true;
    }
  }

  /**
   * Push a element only if it is unique in the array
   * @function pushUnique
   * @param {var} element - The element to push
   */
  if (typeof Array.prototype.pushUnique === 'undefined') {
    Array.prototype.pushUnique = function(element) {
      if (!this.contains(element)) {
        return this.push(element);
      }
      return -1;
    }
  }

  /**
   * Does the string start with the neelde?
   * @function string.startsWith
   * @param {string} needle -The needle to search
   */
  if (typeof String.prototype.startsWith === 'undefined') {
    String.prototype.startsWith = function(needle) {
      return(this.indexOf(needle) === 0);
    };
  }

  /**
   * Does the string end with the neelde?
   * @function string.endsWith
   * @param {string} needle -The needle to search
   */
  if (typeof String.prototype.endsWith === 'undefined') {
    String.prototype.endsWith = function(needle) {
      return(this.indexOf(needle) === (this.length-1));
    };
  }

  /**
   * Determine is the stirng includes the needle
   * @function string.includes
   * @param {string} needle - The needle to search
   */
  if (typeof String.prototype.includes === 'undefined') {
    String.prototype.includes = function(needle, position) { 
      position = position || 0;
      if (position + needle.length > this.length) {
        return false;
      } else {
        return this.indexOf(needle, position) !== -1;
      }
    };
  }

  /**
   * Convert the string to camel case
   * @function string.toCamelCase
   */
  if (typeof String.prototype.toCamelCase === 'undefined') {
    String.prototype.toCamelCase = function() {
      return this.toLowerCase().replace(/-(.)/g, function(match, group) {
        return group.toUpperCase();
      });
    };
  }

  /**
   * Hide a DOM element
   * @function element.hide
   */
  if (typeof Element.prototype.hide === 'undefined') {
    Element.prototype.hide = function() {
      this.style.visibility = 'hidden';
    }
  }

  /**
   * Show a DOM element
   * @function element.hide
   */
  if (typeof Element.prototype.show === 'undefined') {
    Element.prototype.show = function() {
      this.style.visibility = 'visible';
    }
  }

  /**
   * Does a DOM element have the CSS class
   * @function element.hasClass
   * @param {string} className - The class name to search
   */
  if (typeof Element.prototype.hasClass === 'undefined') {
    Element.prototype.hasClass = function(className) {
      return this.classList.contains(className);
    }
  }

  /**
   * Add a CSS class to the DOM element 
   * @function element.addClass
   * @param {string} className - The class name to add
   */
  if (typeof Element.prototype.addClass === 'undefined') {
    Element.prototype.addClass = function(className) {
      if (!this.hasClass(className)) {
        this.classList.add(className);
      }
    }
  }

  /**
   * Remove a CSS class from the DOM element 
   * @function element.removeClass
   * @param {string} className - The class name to remove
   */
  if (typeof Element.prototype.removeClass === 'undefined') {
    Element.prototype.removeClass = function(className) {
      if (this.hasClass(className)) {
        this.classList.remove(className);
      }
    }
  }

  /**
   * Toggle the class on the DOM element 
   * @function element.toggleClass
   * @param {string} className - The class name to toggle
   */
  if (typeof Element.prototype.toggleClass === 'undefined') {
    Element.prototype.toggleClass = function(className) {
      if (this.hasClass(className)) {
        this.classList.remove(className);
      } else {
        this.classList.add(className);
      }
    }
  }

  /**
   * Clears the DOM element of nodes
   * @function element.clear
   */
  if (typeof Element.prototype.clear === 'undefined') {
    Element.prototype.clear = function() {
      var nodes = this.childNodes();
      var i = nodes.length;
      while(i--) {
        this.removeChild(nodes[i]);
      }
    }
  }

  /**
   * Gets the attribute value of the DOM element
   * @function element.attr
   * @param {string} arg - The attribute name
   */
  /**
   * Sets the attribute value of the DOM element
   * @function element.attr
   * @param {string} arg - The attribute name
   * @param {var} val - The attribute value
   */
  /**
   * Sets the attributes of the DOM element
   * @function element.attr
   * @param {object} arg - The attribute key:value object to set
   */
  if (typeof Element.prototype.attr === 'undefined') {
    Element.prototype.attr = function(arg, val) {
      if (typeof arg === 'string') {
        if (typeof val === 'undefined') {
          return this.getAttribute(arg);
        } else {
          return this.setAttribute(arg, val);
        }
      } else if (typeof arg === 'object') {
        for (var key in arg) {
          this.setAttribute(key, arg[key]);
        }
      }
    }
  }

  /**
   * Gets the CSS style value of the DOM element
   * @function element.css
   * @param {string} arg - The CSS style name
   */
  /**
   * Sets the CSS style value of the DOM element
   * @function element.css
   * @param {string} arg - The CSS style name
   * @param {var} val - The CSS style value
   */
  /**
   * Sets the CSS style value(s) of the DOM element
   * @function element.css
   * @param {object} arg - The CSS style key:value object to set
   */
  if (typeof Element.prototype.css === 'undefined') {
    Element.prototype.css = function(arg, val) {
        if (typeof arg === 'object') {
          for (var key in arg) {
            this.style[key.toCamelCase()] = arg[key];
          }
        } else if (typeof arg === 'string') {
          if (typeof val === 'undefined') {
            return this.style[arg.toCamelCase()];
          } else {
            this.style[arg.toCamelCase()] = val;
          }
        }
    }
  }

  /**
   * Gets the value of DOM element
   * @function element.val
   */
  /**
   * Sets the value of a DOM element
   * @function element.val
   * @param {string} value - The CSS style name
   */
  if (typeof Element.prototype.val === 'undefined') {
    Element.prototype.val = function(value) {
      if (typeof value === 'undefined') {
        return this.value;
      } else {
        this.value = value;
      }
    };
  }

  /**
   * querySelector shorthand
   * @function $
   * @param {string} selector - The query selector
   * @param {element} element - The element to query
   */
  if (typeof $ === 'undefined') {
    window.$ = function(selector, element) {
      if (!element) {element = document}
      return element.querySelector(selector);
    }
  }

  /**
   * querySelectorAll shorthand
   * @function $$
   * @param {string} selector - The query selector
   * @param {element} element - The element to query
   */
  if (typeof $$ === 'undefined') {
    window.$$ = function(selector, element) {
      if (!element) {element = document}
      return element.querySelectorAll(selector);
    }
  }

}());