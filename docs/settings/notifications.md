---
title: "Email Reports Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 7
---

# Email Reports Settings

Configure automated email report delivery including frequency, content customization, and recipient settings.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 7

## Email Configuration

### Recipient Email Addresses

**Display Label**: Recipient Email Addresses

**Setting Key**: `wps_email_list`

**Type**: Text Input

**Default Value**: WordPress admin email (from General Settings)

**Description**: Enter email addresses to receive reports. Use a comma to separate multiple addresses. If this field is left empty, the "Administration Email Address" from the "General Settings" of WordPress will be used.

---

## Automated Report Delivery

### Report Frequency

**Display Label**: Report Frequency

**Setting Key**: `wps_time_report`

**Type**: Dropdown

**Default Value**: `0` (Disabled)

**Options**:
- 0: Disable
- daily: Send report every day
- weekly: Send report every week
- biweekly: Send report every two weeks
- monthly: Send report every month

**Description**: Select the frequency of report deliveries.

---

### Delivery Method

**Display Label**: Delivery Method

**Setting Key**: `wps_send_report`

**Type**: Dropdown

**Default Value**: `mail`

**Options**:
- 0: Please select
- mail: Email
- sms: SMS (requires WP SMS plugin)

**Description**: Select your preferred method for receiving reports: via email or SMS. Note: SMS notifications only include the Custom Report. For full reports, please choose email. SMS notifications are sent using the WP SMS Plugin to the Admin Mobile Number.

**Dependencies**: SMS option only visible when WP SMS plugin is active

---

### Custom Report

**Display Label**: Custom Report

**Setting Key**: `wps_content_report`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Using WP Statistics shortcodes to display specific statistics. You can insert shortcodes like `[wpstatistics stat=visitors time=today]` to show corresponding data in the email report.

---

### Email Header Customization

**Display Label**: Email Header Customization

**Setting Key**: `wps_email_free_content_header`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Add a custom header to your email reports to introduce your brand or report summary.

---

### Email Footer Customization

**Display Label**: Email Footer Customization

**Setting Key**: `wps_email_free_content_footer`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Insert a custom footer in your email reports for additional notes, disclaimers, or contact information.

---

### Privacy Audit Issues

**Display Label**: Privacy Audit issues

**Setting Key**: `wps_show_privacy_issues_in_report`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Include open audit issues in each report email.

**Dependencies**: Only visible when Privacy Audit is enabled

---

*Last Updated: 2025-11-16*
