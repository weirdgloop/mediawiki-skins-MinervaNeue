'use strict';

const assert = require( 'assert' );
const BlankPage = require( '../pageobjects/blank.page' );
const EditPage = require( '../pageobjects/edit.page' );
const Util = require( 'wdio-mediawiki/Util' );

describe( 'Page', function () {
	let content, name;

	beforeEach( function () {
		content = Util.getTestString( 'beforeEach-content-' );
		name = Util.getTestString( 'BeforeEach-name-' );
	} );

	it( 'should be creatable', function () {
		BlankPage.open();
		BlankPage.mobileView.click();

		EditPage.edit( name, content );

		browser.waitUntil(
			() => EditPage.heading.getText() === name
		);
		assert.strictEqual( EditPage.heading.getText(), name );
		assert.strictEqual( EditPage.displayedContent.getText(), content );
	} );
} );
