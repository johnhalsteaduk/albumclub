<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'johnhal6_WPPED');

/** MySQL database username */
define('DB_USER', 'johnhal6_WPPED');

/** MySQL database password */
define('DB_PASSWORD', 'UL.y2XE{Z(6-k(I&z');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'b438485ed5248dd36e6fe1cee9213a7c214c39c57e2ebeb59f2ee6f9f1230412');
define('SECURE_AUTH_KEY', '75b86dcbfad8937086b331c3833020f8e8ce6fb5c34567a25b06b5dad3d54a63');
define('LOGGED_IN_KEY', '99f0f7fef5be020728c57044334d5beac78b779c36d27b49b24ed301eb445600');
define('NONCE_KEY', '50d98c4183430fb226b57a8a440909042a95fc76acdf91f86b5b586ba4df63ec');
define('AUTH_SALT', 'ed5c7b25620348ad4e800a8dfe0aebc8a5c5232c81a3034f32fc67cc4f89b2dd');
define('SECURE_AUTH_SALT', 'cc8cb27987a9795c2587f3049eaa563db074ff795dc2d37729463ff553cd65e5');
define('LOGGED_IN_SALT', 'b8a250269cf1828239e4576b652ded05303d1faea3e16d8554090fd31289fa1f');
define('NONCE_SALT', 'f98b3fa0103ed525b46073a98d71f17e4d62d371db88e6c2de0e6be5ee9928f3');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ObF_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
