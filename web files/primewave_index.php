<?php
/**
 * The main template file
 * 
 * @package PrimeWave
 */

get_header(); ?>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1><?php echo get_theme_mod('hero_title', 'Music That Pays Artists Fairly'); ?></h1>
            <p><?php echo get_theme_mod('hero_subtitle', 'The premium platform where artists earn 67% per download and fans get high-quality music'); ?></p>
            <div style="margin: 40px 0;">
                <a href="<?php echo get_theme_mod('primary_cta_url', '#'); ?>" class="btn btn-primary" style="font-size: 18px; padding: 15px 30px; margin: 0 10px;">
                    <?php echo get_theme_mod('primary_cta_text', 'Start Earning Today'); ?>
                </a>
                <a href="<?php echo get_theme_mod('secondary_cta_url', '#'); ?>" class="btn btn-secondary" style="font-size: 18px; padding: 15px 30px; margin: 0 10px;">
                    <?php echo get_theme_mod('secondary_cta_text', 'Discover Music'); ?>
                </a>
            </div>
            
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-number"><?php echo get_theme_mod('stat_1_number', '67%'); ?></div>
                    <div class="stat-label"><?php echo get_theme_mod('stat_1_label', 'Artist Earnings'); ?></div>
                </div>
                <div class="stat">
                    <div class="stat-number"><?php echo get_theme_mod('stat_2_number', '100%'); ?></div>
                    <div class="stat-label"><?php echo get_theme_mod('stat_2_label', 'Original Content Only'); ?></div>
                </div>
                <div class="stat">
                    <div class="stat-number"><?php echo get_theme_mod('stat_3_number', 'M-Pesa'); ?></div>
                    <div class="stat-label"><?php echo get_theme_mod('stat_3_label', 'Instant Payments'); ?></div>
                </div>
            </div>
        </div>
    </section>