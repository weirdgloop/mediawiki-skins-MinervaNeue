'use strict';

const Page = require( 'wdio-mediawiki/Page' );

class EditPage extends Page {
	get content() { return $( '#wikitext-editor' ); }
	get displayedContent() { return $( '#mw-content-text .mw-parser-output' ); }
	get editWithoutLoggingIn() { return $( '.anonymous' ); }
	get heading() { return $( '#section_0' ); }
	get next() { return $( '.mw-ui-icon-mf-next-invert' ); }
	get save() { return $( 'button.mw-ui-button' ); }

	openForEditing( title ) {
		super.openTitle( title, { action: 'edit' } );
	}

	edit( name, content ) {
		this.openForEditing( name );
		this.editWithoutLoggingIn.click();
		this.content.setValue( content );
		this.next.click();
		this.save.click();
		browser.acceptAlert();
	}
}

module.exports = new EditPage();
