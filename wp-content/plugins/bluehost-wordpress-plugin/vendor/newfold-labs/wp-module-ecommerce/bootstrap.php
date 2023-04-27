<?php

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\ECommerce\ECommerce;

use function NewfoldLabs\WP\ModuleLoader\register;

if ( function_exists( 'add_action' ) ) {

	add_action(
		'plugins_loaded',
		function () {
			register(
				array(
					'name'     => 'ecommerce',
					'label'    => __( 'eCommerce', 'wp-module-ecommerce' ),
					'callback' => function ( Container $container ) {
						define( 'NFD_ECOMMERCE_BUILD_DIR', __DIR__ . '/build/' );
						define( 'NFD_ECOMMERCE_PLUGIN_URL', $container->plugin()->url );
						new ECommerce( $container );
					},
					'isActive' => true,
					'isHidden' => true,
				)
			);
		}
	);

}

if ( function_exists( 'add_filter' ) ) {

	add_filter(
		'http_request_args',
		function ( $parsed_args, $url ) {

			// Bail early if the request is not to PayPal's v2 checkout API
			if ( false === stripos( wp_parse_url( $url, PHP_URL_HOST ), 'paypal.com' ) ) {
				return $parsed_args;
			}

			// Check for an existing bn_code
			$bn_code = isset( $parsed_args['headers']['PayPal-Partner-Attribution-Id'] ) ? $parsed_args['headers']['PayPal-Partner-Attribution-Id'] : null;

			// Ensure we only set when blank, or when using one of our stale codes
			if ( is_null( $bn_code ) || false !== stripos( $bn_code, 'yith' ) || false !== stripos( $bn_code, 'newfold' ) ) {
				// The correct code is case-sensitive. YITH brand is uppercase, but the code is not.
				$parsed_args['headers']['PayPal-Partner-Attribution-Id'] = 'Yith_PCP';
			}

			return $parsed_args;
		},
		10,
		2
	);

}
