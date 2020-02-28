( function( wp ) {
	if ( ! wp ) {<script data-ad-client="ca-pub-3688817819864336" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		return;
	}

	wp.plugins.registerPlugin( 'classic-editor-plugin', {
		render: function() {
			var createElement = wp.element.createElement;
			var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
			var url = wp.url.addQueryArgs( document.location.href, { 'classic-editor': '', 'classic-editor__forget': '' } );
			var linkText = lodash.get( window, [ 'classicEditorPluginL10n', 'linkText' ] ) || 'Switch to classic editor';

			return createElement(
				PluginMoreMenuItem,
				{
					icon: 'editor-kitchensink',
					href: url,
				},
				linkText
			);
		},
	} );
} )( window.wp );
