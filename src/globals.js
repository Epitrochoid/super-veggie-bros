/**
 * Register globals.
 *
 * This needs to be done to properly use Phaser
 */
window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

module.exports = { PIXI, p2, Phaser }
