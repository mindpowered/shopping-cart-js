/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const shoppingcart = require('../lib/shoppingcart.js');

/**
 * An Shopping Cart Library
 * Add items and show a summary at checkout
 */
class ShoppingCart {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new shoppingcart.shoppingcart.ShoppingCart(bus);
	}

	/**
	 * Create a new shopping cart
	 * @param {string} storeId 
	 * @return {Promise} cartId Promise will resolve to type string.
	*/
	Create(storeId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [storeId];
		let ret = jsbus.call('ShoppingCart.Create', args);
		return ret;
	}

	/**
	 * Add an item to a cart
	 * @param {string} cartId 
	 * @param {string} itemId 
	 * @param {number} qty quantity
	 * @param {number} price price
	 * @return {Promise} cart item index Promise will resolve to type number.
	*/
	AddItem(cartId, itemId, qty, price) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId, itemId, qty, price];
		let ret = jsbus.call('ShoppingCart.AddItem', args);
		return ret;
	}

	/**
	 * Get a list of items in a cart
	 * @param {string} cartId 
	 * @return {Promise} array of item objects Promise will resolve to type array.
	*/
	ListItems(cartId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId];
		let ret = jsbus.call('ShoppingCart.ListItems', args);
		return ret;
	}

	/**
	 * Remove an item from a cart
	 * @param {string} cartId 
	 * @param {number} idx item index
	*/
	RemoveItem(cartId, idx) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId, idx];
		jsbus.call('ShoppingCart.RemoveItem', args);
	}

	/**
	 * Update cart item quantity
	 * @param {string} cartId 
	 * @param {number} idx item index
	 * @param {number} qty quantity
	*/
	UpdateQty(cartId, idx, qty) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId, idx, qty];
		jsbus.call('ShoppingCart.UpdateQty', args);
	}

	/**
	 * Count the items in a cart
	 * @param {string} cartId 
	 * @return {Promise} number of items Promise will resolve to type number.
	*/
	CountItems(cartId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId];
		let ret = jsbus.call('ShoppingCart.CountItems', args);
		return ret;
	}

	/**
	 * Get a summary for a shopping cart
	 * @param {string} cartId 
	 * @return {Promise} summary Promise will resolve to type object.
	*/
	GetCartSummary(cartId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId];
		let ret = jsbus.call('ShoppingCart.GetCartSummary', args);
		return ret;
	}

	/**
	 * Clear all items from a shopping cart
	 * @param {string} cartId 
	*/
	Clear(cartId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [cartId];
		jsbus.call('ShoppingCart.Clear', args);
	}

}
module.exports = ShoppingCart;

