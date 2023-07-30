const countries = [
    { name: 'Afghanistan', abbr: 'AF', icon: '🇦🇫' },
    { name: 'Aland Islands', abbr: 'AX', icon: '🇦🇽' },
    { name: 'Albania', abbr: 'AL', icon: '🇦🇱' },
    { name: 'Algeria', abbr: 'DZ', icon: '🇩🇿' },
    { name: 'American Samoa', abbr: 'AS', icon: '🇦🇸' },
    { name: 'Andorra', abbr: 'AD', icon: '🇦🇩' },
    { name: 'Angola', abbr: 'AO', icon: '🇦🇴' },
    { name: 'Anguilla', abbr: 'AI', icon: '🇦🇮' },
    { name: 'Antarctica', abbr: 'AQ', icon: '🇦🇶' },
    { name: 'Antigua and Barbuda', abbr: 'AG', icon: '🇦🇬' },
    { name: 'Argentina', abbr: 'AR', icon: '🇦🇷' },
    { name: 'Armenia', abbr: 'AM', icon: '🇦🇲' },
    { name: 'Aruba', abbr: 'AW', icon: '🇦🇼' },
    { name: 'Australia', abbr: 'AU', icon: '🇦🇺' },
    { name: 'Austria', abbr: 'AT', icon: '🇦🇹' },
    { name: 'Azerbaijan', abbr: 'AZ', icon: '🇦🇿' },
    { name: 'Bahamas', abbr: 'BS', icon: '🇧🇸' },
    { name: 'Bahrain', abbr: 'BH', icon: '🇧🇭' },
    { name: 'Bangladesh', abbr: 'BD', icon: '🇧🇩' },
    { name: 'Barbados', abbr: 'BB', icon: '🇧🇧' },
    { name: 'Belarus', abbr: 'BY', icon: '🇧🇾' },
    { name: 'Belgium', abbr: 'BE', icon: '🇧🇪' },
    { name: 'Belize', abbr: 'BZ', icon: '🇧🇿' },
    { name: 'Benin', abbr: 'BJ', icon: '🇧🇯' },
    { name: 'Bermuda', abbr: 'BM', icon: '🇧🇲' },
    { name: 'Bhutan', abbr: 'BT', icon: '🇧🇹' },
    { name: 'Bolivia', abbr: 'BO', icon: '🇧🇴' },
    { name: 'Bonaire, Sint Eustatius and Saba', abbr: 'BQ', icon: '🇧🇶' },
    { name: 'Bosnia and Herzegovina', abbr: 'BA', icon: '🇧🇦' },
    { name: 'Botswana', abbr: 'BW', icon: '🇧🇼' },
    { name: 'Bouvet Island', abbr: 'BV', icon: '🇧🇻' },
    { name: 'Brazil', abbr: 'BR', icon: '🇧🇷' },
    { name: 'British Indian Ocean Territory', abbr: 'IO', icon: '🇮🇴' },
    { name: 'Brunei Darussalam', abbr: 'BN', icon: '🇧🇳' },
    { name: 'Bulgaria', abbr: 'BG', icon: '🇧🇬' },
    { name: 'Burkina Faso', abbr: 'BF', icon: '🇧🇫' },
    { name: 'Burundi', abbr: 'BI', icon: '🇧🇮' },
    { name: 'Cabo Verde', abbr: 'CV', icon: '🇨🇻' },
    { name: 'Cambodia', abbr: 'KH', icon: '🇰🇭' },
    { name: 'Cameroon', abbr: 'CM', icon: '🇨🇲' },
    { name: 'Canada', abbr: 'CA', icon: '🇨🇦' },
    { name: 'Cayman Islands', abbr: 'KY', icon: '🇰🇾' },
    { name: 'Central African Republic', abbr: 'CF', icon: '🇨🇫' },
    { name: 'Chad', abbr: 'TD', icon: '🇹🇩' },
    { name: 'Chile', abbr: 'CL', icon: '🇨🇱' },
    { name: 'China', abbr: 'CN', icon: '🇨🇳' },
    { name: 'Christmas Island', abbr: 'CX', icon: '🇨🇽' },
    { name: 'Cocos Islands', abbr: 'CC', icon: '🇨🇨' },
    { name: 'Colombia', abbr: 'CO', icon: '🇨🇴' },
    { name: 'Comoros', abbr: 'KM', icon: '🇰🇲' },
    { name: 'Congo', abbr: 'CG', icon: '🇨🇬' },
    { name: 'Congo, Democratic Republic of the', abbr: 'CD', icon: '🇨🇩' },
    { name: 'Cook Islands', abbr: 'CK', icon: '🇨🇰' },
    { name: 'Costa Rica', abbr: 'CR', icon: '🇨🇷' },
    { name: 'Cote d\'Ivoire', abbr: 'CI', icon: '🇨🇮' },
    { name: 'Croatia', abbr: 'HR', icon: '🇭🇷' },
    { name: 'Cuba', abbr: 'CU', icon: '🇨🇺' },
    { name: 'Curacao', abbr: 'CW', icon: '🇨🇼' },
    { name: 'Cyprus', abbr: 'CY', icon: '🇨🇾' },
    { name: 'Czech Republic', abbr: 'CZ', icon: '🇨🇿' },
    { name: 'Denmark', abbr: 'DK', icon: '🇩🇰' },
    { name: 'Djibouti', abbr: 'DJ', icon: '🇩🇯' },
    { name: 'Dominica', abbr: 'DM', icon: '🇩🇲' },
    { name: 'Dominican Republic', abbr: 'DO', icon: '🇩🇴' },
    { name: 'Ecuador', abbr: 'EC', icon: '🇪🇨' },
    { name: 'Egypt', abbr: 'EG', icon: '🇪🇬' },
    { name: 'El Salvador', abbr: 'SV', icon: '🇸🇻' },
    { name: 'Equatorial Guinea', abbr: 'GQ', icon: '🇬🇶' },
    { name: 'Eritrea', abbr: 'ER', icon: '🇪🇷' },
    { name: 'Estonia', abbr: 'EE', icon: '🇪🇪' },
    { name: 'Eswatini', abbr: 'SZ', icon: '🇸🇿' },
    { name: 'Ethiopia', abbr: 'ET', icon: '🇪🇹' },
    { name: 'Falkland Islands', abbr: 'FK', icon: '🇫🇰' },
    { name: 'Faroe Islands', abbr: 'FO', icon: '🇫🇴' },
    { name: 'Fiji', abbr: 'FJ', icon: '🇫🇯' },
    { name: 'Finland', abbr: 'FI', icon: '🇫🇮' },
    { name: 'France', abbr: 'FR', icon: '🇫🇷' },
    { name: 'French Guiana', abbr: 'GF', icon: '🇬🇫' },
    { name: 'French Polynesia', abbr: 'PF', icon: '🇵🇫' },
    { name: 'French Southern Territories', abbr: 'TF', icon: '🇹🇫' },
    { name: 'Gabon', abbr: 'GA', icon: '🇬🇦' },
    { name: 'Gambia', abbr: 'GM', icon: '🇬🇲' },
    { name: 'Georgia', abbr: 'GE', icon: '🇬🇪' },
    { name: 'Germany', abbr: 'DE', icon: '🇩🇪' },
    { name: 'Ghana', abbr: 'GH', icon: '🇬🇭' },
    { name: 'Gibraltar', abbr: 'GI', icon: '🇬🇮' },
    { name: 'Greece', abbr: 'GR', icon: '🇬🇷' },
    { name: 'Greenland', abbr: 'GL', icon: '🇬🇱' },
    { name: 'Grenada', abbr: 'GD', icon: '🇬🇩' },
    { name: 'Guadeloupe', abbr: 'GP', icon: '🇬🇵' },
    { name: 'Guam', abbr: 'GU', icon: '🇬🇺' },
    { name: 'Guatemala', abbr: 'GT', icon: '🇬🇹' },
    { name: 'Guernsey', abbr: 'GG', icon: '🇬🇬' },
    { name: 'Guinea', abbr: 'GN', icon: '🇬🇳' },
    { name: 'Guinea-Bissau', abbr: 'GW', icon: '🇬🇼' },
    { name: 'Guyana', abbr: 'GY', icon: '🇬🇾' },
    { name: 'Haiti', abbr: 'HT', icon: '🇭🇹' },
    { name: 'Heard Island and McDonald Islands', abbr: 'HM', icon: '🇭🇲' },
    { name: 'Holy See', abbr: 'VA', icon: '🇻🇦' },
    { name: 'Honduras', abbr: 'HN', icon: '🇭🇳' },
    { name: 'Hong Kong', abbr: 'HK', icon: '🇭🇰' },
    { name: 'Hungary', abbr: 'HU', icon: '🇭🇺' },
    { name: 'Iceland', abbr: 'IS', icon: '🇮🇸' },
    { name: 'India', abbr: 'IN', icon: '🇮🇳' },
    { name: 'Indonesia', abbr: 'ID', icon: '🇮🇩' },
    { name: 'Iran', abbr: 'IR', icon: '🇮🇷' },
    { name: 'Iraq', abbr: 'IQ', icon: '🇮🇶' },
    { name: 'Ireland', abbr: 'IE', icon: '🇮🇪' },
    { name: 'Isle of Man', abbr: 'IM', icon: '🇮🇲' },
    { name: 'Israel', abbr: 'IL', icon: '🇮🇱' },
    { name: 'Italy', abbr: 'IT', icon: '🇮🇹' },
    { name: 'Jamaica', abbr: 'JM', icon: '🇯🇲' },
    { name: 'Japan', abbr: 'JP', icon: '🇯🇵' },
    { name: 'Jersey', abbr: 'JE', icon: '🇯🇪' },
    { name: 'Jordan', abbr: 'JO', icon: '🇯🇴' },
    { name: 'Kazakhstan', abbr: 'KZ', icon: '🇰🇿' },
    { name: 'Kenya', abbr: 'KE', icon: '🇰🇪' },
    { name: 'Kiribati', abbr: 'KI', icon: '🇰🇮' },
    { name: 'Korea', abbr: 'KR', icon: '🇰🇷' },
    { name: 'Korea, Democratic People\'s Republic of', abbr: 'KP', icon: '🇰🇵' },
    { name: 'Kosovo', abbr: 'XK', icon: '🇽🇰' },
    { name: 'Kuwait', abbr: 'KW', icon: '🇰🇼' },
    { name: 'Kyrgyzstan', abbr: 'KG', icon: '🇰🇬' },
    { name: 'Lao People\'s Democratic Republic', abbr: 'LA', icon: '🇱🇦' },
    { name: 'Latvia', abbr: 'LV', icon: '🇱🇻' },
    { name: 'Lebanon', abbr: 'LB', icon: '🇱🇧' },
    { name: 'Lesotho', abbr: 'LS', icon: '🇱🇸' },
    { name: 'Liberia', abbr: 'LR', icon: '🇱🇷' },
    { name: 'Libya', abbr: 'LY', icon: '🇱🇾' },
    { name: 'Liechtenstein', abbr: 'LI', icon: '🇱🇮' },
    { name: 'Lithuania', abbr: 'LT', icon: '🇱🇹' },
    { name: 'Luxembourg', abbr: 'LU', icon: '🇱🇺' },
    { name: 'Macao', abbr: 'MO', icon: '🇲🇴' },
    { name: 'Madagascar', abbr: 'MG', icon: '🇲🇬' },
    { name: 'Malawi', abbr: 'MW', icon: '🇲🇼' },
    { name: 'Malaysia', abbr: 'MY', icon: '🇲🇾' },
    { name: 'Maldives', abbr: 'MV', icon: '🇲🇻' },
    { name: 'Mali', abbr: 'ML', icon: '🇲🇱' },
    { name: 'Malta', abbr: 'MT', icon: '🇲🇹' },
    { name: 'Marshall Islands', abbr: 'MH', icon: '🇲🇭' },
    { name: 'Martinique', abbr: 'MQ', icon: '🇲🇶' },
    { name: 'Mauritania', abbr: 'MR', icon: '🇲🇷' },
    { name: 'Mauritius', abbr: 'MU', icon: '🇲🇺' },
    { name: 'Mayotte', abbr: 'YT', icon: '🇾🇹' },
    { name: 'Mexico', abbr: 'MX', icon: '🇲🇽' },
    { name: 'Micronesia', abbr: 'FM', icon: '🇫🇲' },
    { name: 'Moldova', abbr: 'MD', icon: '🇲🇩' },
    { name: 'Monaco', abbr: 'MC', icon: '🇲🇨' },
    { name: 'Mongolia', abbr: 'MN', icon: '🇲🇳' },
    { name: 'Montenegro', abbr: 'ME', icon: '🇲🇪' },
    { name: 'Montserrat', abbr: 'MS', icon: '🇲🇸' },
    { name: 'Morocco', abbr: 'MA', icon: '🇲🇦' },
    { name: 'Mozambique', abbr: 'MZ', icon: '🇲🇿' },
    { name: 'Myanmar', abbr: 'MM', icon: '🇲🇲' },
    { name: 'Namibia', abbr: 'NA', icon: '🇳🇦' },
    { name: 'Nauru', abbr: 'NR', icon: '🇳🇷' },
    { name: 'Nepal', abbr: 'NP', icon: '🇳🇵' },
    { name: 'Netherlands', abbr: 'NL', icon: '🇳🇱' },
    { name: 'New Caledonia', abbr: 'NC', icon: '🇳🇨' },
    { name: 'New Zealand', abbr: 'NZ', icon: '🇳🇿' },
    { name: 'Nicaragua', abbr: 'NI', icon: '🇳🇮' },
    { name: 'Niger', abbr: 'NE', icon: '🇳🇪' },
    { name: 'Nigeria', abbr: 'NG', icon: '🇳🇬' },
    { name: 'Niue', abbr: 'NU', icon: '🇳🇺' },
    { name: 'Norfolk Island', abbr: 'NF', icon: '🇳🇫' },
    { name: 'North Macedonia', abbr: 'MK', icon: '🇲🇰' },
    { name: 'Northern Mariana Islands', abbr: 'MP', icon: '🇲🇵' },
    { name: 'Norway', abbr: 'NO', icon: '🇳🇴' },
    { name: 'Oman', abbr: 'OM', icon: '🇴🇲' },
    { name: 'Pakistan', abbr: 'PK', icon: '🇵🇰' },
    { name: 'Palau', abbr: 'PW', icon: '🇵🇼' },
    { name: 'Palestine', abbr: 'PS', icon: '🇵🇸' },
    { name: 'Panama', abbr: 'PA', icon: '🇵🇦' },
    { name: 'Papua New Guinea', abbr: 'PG', icon: '🇵🇬' },
    { name: 'Paraguay', abbr: 'PY', icon: '🇵🇾' },
    { name: 'Peru', abbr: 'PE', icon: '🇵🇪' },
    { name: 'Philippines', abbr: 'PH', icon: '🇵🇭' },
    { name: 'Pitcairn', abbr: 'PN', icon: '🇵🇳' },
    { name: 'Poland', abbr: 'PL', icon: '🇵🇱' },
    { name: 'Portugal', abbr: 'PT', icon: '🇵🇹' },
    { name: 'Puerto Rico', abbr: 'PR', icon: '🇵🇷' },
    { name: 'Qatar', abbr: 'QA', icon: '🇶🇦' },
    { name: 'Reunion', abbr: 'RE', icon: '🇷🇪' },
    { name: 'Romania', abbr: 'RO', icon: '🇷🇴' },
    { name: 'Russian Federation', abbr: 'RU', icon: '🇷🇺' },
    { name: 'Rwanda', abbr: 'RW', icon: '🇷🇼' },
    { name: 'Saint Barthelemy', abbr: 'BL', icon: '🇧🇱' },
    { name: 'Saint Helena', abbr: 'SH', icon: '🇸🇭' },
    { name: 'Saint Kitts and Nevis', abbr: 'KN', icon: '🇰🇳' },
    { name: 'Saint Lucia', abbr: 'LC', icon: '🇱🇨' },
    { name: 'Saint Martin', abbr: 'MF', icon: '🇲🇫' },
    { name: 'Saint Pierre and Miquelon', abbr: 'PM', icon: '🇵🇲' },
    { name: 'Saint Vincent and the Grenadines', abbr: 'VC', icon: '🇻🇨' },
    { name: 'Samoa', abbr: 'WS', icon: '🇼🇸' },
    { name: 'San Marino', abbr: 'SM', icon: '🇸🇲' },
    { name: 'Sao Tome and Principe', abbr: 'ST', icon: '🇸🇹' },
    { name: 'Saudi Arabia', abbr: 'SA', icon: '🇸🇦' },
    { name: 'Senegal', abbr: 'SN', icon: '🇸🇳' },
    { name: 'Serbia', abbr: 'RS', icon: '🇷🇸' },
    { name: 'Seychelles', abbr: 'SC', icon: '🇸🇨' },
    { name: 'Sierra Leone', abbr: 'SL', icon: '🇸🇱' },
    { name: 'Singapore', abbr: 'SG', icon: '🇸🇬' },
    { name: 'Sint Maarten', abbr: 'SX', icon: '🇸🇽' },
    { name: 'Slovakia', abbr: 'SK', icon: '🇸🇰' },
    { name: 'Slovenia', abbr: 'SI', icon: '🇸🇮' },
    { name: 'Solomon Islands', abbr: 'SB', icon: '🇸🇧' },
    { name: 'Somalia', abbr: 'SO', icon: '🇸🇴' },
    { name: 'South Africa', abbr: 'ZA', icon: '🇿🇦' },
    { name: 'South Georgia and the South Sandwich Islands', abbr: 'GS', icon: '🇬🇸' },
    { name: 'South Sudan', abbr: 'SS', icon: '🇸🇸' },
    { name: 'Spain', abbr: 'ES', icon: '🇪🇸' },
    { name: 'Sri Lanka', abbr: 'LK', icon: '🇱🇰' },
    { name: 'Sudan', abbr: 'SD', icon: '🇸🇩' },
    { name: 'Suriname', abbr: 'SR', icon: '🇸🇷' },
    { name: 'Svalbard and Jan Mayen', abbr: 'SJ', icon: '🇸🇯' },
    { name: 'Sweden', abbr: 'SE', icon: '🇸🇪' },
    { name: 'Switzerland', abbr: 'CH', icon: '🇨🇭' },
    { name: 'Syrian Arab Republic', abbr: 'SY', icon: '🇸🇾' },
    { name: 'Taiwan', abbr: 'TW', icon: '🇹🇼' },
    { name: 'Tajikistan', abbr: 'TJ', icon: '🇹🇯' },
    { name: 'Tanzania', abbr: 'TZ', icon: '🇹🇿' },
    { name: 'Thailand', abbr: 'TH', icon: '🇹🇭' },
    { name: 'Timor-Leste', abbr: 'TL', icon: '🇹🇱' },
    { name: 'Togo', abbr: 'TG', icon: '🇹🇬' },
    { name: 'Tokelau', abbr: 'TK', icon: '🇹🇰' },
    { name: 'Tonga', abbr: 'TO', icon: '🇹🇴' },
    { name: 'Trinidad and Tobago', abbr: 'TT', icon: '🇹🇹' },
    { name: 'Tunisia', abbr: 'TN', icon: '🇹🇳' },
    { name: 'Turkey', abbr: 'TR', icon: '🇹🇷' },
    { name: 'Turkmenistan', abbr: 'TM', icon: '🇹🇲' },
    { name: 'Turks and Caicos Islands', abbr: 'TC', icon: '🇹🇨' },
    { name: 'Tuvalu', abbr: 'TV', icon: '🇹🇻' },
    { name: 'Uganda', abbr: 'UG', icon: '🇺🇬' },
    { name: 'Ukraine', abbr: 'UA', icon: '🇺🇦' },
    { name: 'United Arab Emirates', abbr: 'AE', icon: '🇦🇪' },
    { name: 'United Kingdom', abbr: 'GB', icon: '🇬🇧' },
    { name: 'United States', abbr: 'US', icon: '🇺🇸' },
    { name: 'United States Minor Outlying Islands', abbr: 'UM', icon: '🇺🇲' },
    { name: 'Uruguay', abbr: 'UY', icon: '🇺🇾' },
    { name: 'Uzbekistan', abbr: 'UZ', icon: '🇺🇿' },
    { name: 'Vanuatu', abbr: 'VU', icon: '🇻🇺' },
    { name: 'Venezuela', abbr: 'VE', icon: '🇻🇪' },
    { name: 'Vietnam', abbr: 'VN', icon: '🇻🇳' },
    { name: 'Virgin Islands (British)', abbr: 'VG', icon: '🇻🇬' },
    { name: 'Virgin Islands (U.S.)', abbr: 'VI', icon: '🇻🇮' },
    { name: 'Wallis and Futuna', abbr: 'WF', icon: '🇼🇫' },
    { name: 'Western Sahara', abbr: 'EH', icon: '🇪🇭' },
    { name: 'Yemen', abbr: 'YE', icon: '🇾🇪' },
    { name: 'Zambia', abbr: 'ZM', icon: '🇿🇲' },
    { name: 'Zimbabwe', abbr: 'ZW', icon: '🇿🇼' },
  ];
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("countryInput");
    const countryList = document.getElementById("countryList");
  
    input.addEventListener("input", function () {
      const inputValue = input.value.trim().toLowerCase();
      const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().startsWith(inputValue)
      );
  
      renderCountryList(filteredCountries);
    });
  
    countryList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        input.value = event.target.textContent;
        countryList.innerHTML = ""; // Clear the list after selecting a country
      }
    });
  
    function renderCountryList(countries) {
      countryList.innerHTML = ""; // Clear the list before re-rendering
      countries.forEach(country => {
        const listItem = document.createElement("li");
  
        const iconSpan = document.createElement("span");
        iconSpan.textContent = country.icon;
        listItem.appendChild(iconSpan);
  
        const nameSpan = document.createElement("span");
        nameSpan.textContent = country.name;
        listItem.appendChild(nameSpan);
  
        const abbrSpan = document.createElement("span");
        abbrSpan.textContent = `(${country.abbr})`;
        listItem.appendChild(abbrSpan);
  
        countryList.appendChild(listItem);
      });
    }
  });
  