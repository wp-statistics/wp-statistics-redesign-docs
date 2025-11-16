---
title: "Advanced Reporting Settings"
type: "settings"
add_on: "Advanced Reporting"
status: "Not Started"
settings_count: 19
---

# Advanced Reporting Settings

Email report scheduling, components, branding, and distribution configuration.

## Page Configuration

- **Add-on**: Advanced Reporting
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 19

## Report Scheduling

### Choose Your Report Timing

**Display Label**: Choose Your Report Timing

**Setting Key**: `wps_addon_settings[advanced_reporting][report_time_frame_type]`

**Type**: Dropdown

**Default Value**: Empty

**Options**:
- specific_time: From a specific time
- time_range: Time-range

**Description**: Select how often you'd like to receive updates. Opt for a specific date or a recurring schedule to keep your reports timely and relevant.

---

### Specify Starting Date

**Display Label**: Specify Starting Date

**Setting Key**: `wps_addon_settings[advanced_reporting][email_start_date]`

**Type**: Date Input

**Default Value**: Empty

**Description**: Enter a date to begin the data collection for your reports. This helps in focusing on a specific timeframe or event.

**Dependencies**: Only visible when Report Timing is set to "specific_time"

---

### Select Reporting Period

**Display Label**: Select Reporting Period

**Setting Key**: `wps_addon_settings[advanced_reporting][email_stats_time_range]`

**Type**: Dropdown

**Default Value**: `0` (Disabled)

**Options**: Dynamically generated from report schedules (daily, weekly, biweekly, monthly, etc.)

**Description**: Select the frequency of report deliveries.

**Dependencies**: Only visible when Report Timing is set to "time_range"

---

## Report Components

### Top Metrics

**Display Label**: Top Metrics

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_metrics]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Receive a detailed breakdown of your website's top metrics, including views, visitors, and more.

---

### Visitors Summary

**Display Label**: Visitors Summary

**Setting Key**: `wps_addon_settings[advanced_reporting][email_summary_stats]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Activate to receive a neatly summarized report of your website's key performance indicators.

---

### Views Chart

**Display Label**: Views Chart

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_hits_visits]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Choose to receive detailed charts on views counts and behavior patterns.

---

### Search Engine Referrals

**Display Label**: Search Engine Referrals

**Setting Key**: `wps_addon_settings[advanced_reporting][email_search_engine]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Toggle on to get insights on which search engines are driving traffic to your site.

---

### Search Engine Chart

**Display Label**: Search Engine Chart

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_search_engines]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Get visual analytics on search engine referrals for a comprehensive view of traffic sources.

---

### Top Referring Domains

**Display Label**: Top Referring Domains

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_referring]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Stay informed on which external sites are most frequently linking to your content.

---

### Top Pages

**Display Label**: Top Pages

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_ten_pages]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Find out which pages on your website are attracting the most attention.

---

### Top Countries

**Display Label**: Top Countries

**Setting Key**: `wps_addon_settings[advanced_reporting][email_top_ten_countries]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Discover the geographical distribution of your audience.

---

### Top Browsers

**Display Label**: Top Browsers

**Setting Key**: `wps_addon_settings[advanced_reporting][email_chart_top_browsers]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Get a visual representation of the most popular browsers used by your visitors.

---

## Branding Your Reports

### Report Logo Upload

**Display Label**: Report Logo Upload

**Setting Key**: `wps_addon_settings[advanced_reporting][custom_header_logo]`

**Type**: File Upload / Text Input

**Default Value**: Default WP Statistics logo URL

**Description**: Upload your own logo to replace the default in report headers, establishing your brand's presence in all reports.

---

### Logo Link URL

**Display Label**: Logo Link URL

**Setting Key**: `wps_addon_settings[advanced_reporting][custom_header_logo_url]`

**Type**: Text Input

**Default Value**: Empty

**Description**: Provide the URL that the header logo should link to, such as your company homepage or a custom landing page.

---

### Email Header Customization

**Display Label**: Email Header Customization

**Setting Key**: `wps_addon_settings[advanced_reporting][email_content_header]`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Personalize the header of your email reports with custom text, images, or HTML.

---

### Email Footer Customization

**Display Label**: Email Footer Customization

**Setting Key**: `wps_addon_settings[advanced_reporting][email_content_footer]`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Add custom content to the footer of your email reports, such as contact information or disclaimers.

---

### More Information Button

**Display Label**: More Information Button

**Setting Key**: `wps_addon_settings[advanced_reporting][email_more_info_button]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Add a convenient button to your report that links back to your full statistics dashboard.

---

### Custom URL

**Display Label**: Custom URL

**Setting Key**: `wps_addon_settings[advanced_reporting][email_more_info_button_href]`

**Type**: Text Input

**Default Value**: Empty

**Description**: Personalize the destination of the 'More Information' button to direct recipients to a specific page on your website.

**Dependencies**: Only visible when "More Information Button" is enabled

---

### Disable Copyright Notice

**Display Label**: Disable Copyright Notice

**Setting Key**: `wps_addon_settings[advanced_reporting][email_disable_copyright]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Remove the WP Statistics branding and copyright notice from the email footer for a fully white-labeled report.

---

## Additional Features

### Email PDF Report Attachments

**Display Label**: Email PDF Report Attachments

**Setting Key**: `wps_addon_settings[advanced_reporting][pdf_report_status]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Select this option to automatically attach a PDF version of your report to your email updates.

---

### Record Email Logs

**Display Label**: Record Email logs

**Setting Key**: `wps_addon_settings[advanced_reporting][record_email_logs]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Keep a record of all reports sent via email for future reference.

---

## Preview and Send

### Test Your Report

**Display Label**: Test Your Report

**Setting Key**: N/A (UI action button)

**Type**: Button

**Description**: Send a test email report to verify settings and preview how the report will appear to recipients.

---

*Last Updated: 2025-11-16*
