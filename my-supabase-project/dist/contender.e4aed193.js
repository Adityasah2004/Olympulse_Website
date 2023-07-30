// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"contender.js":[function(require,module,exports) {
var countries = [{
  name: 'Afghanistan',
  abbr: 'AF',
  icon: '🇦🇫'
}, {
  name: 'Aland Islands',
  abbr: 'AX',
  icon: '🇦🇽'
}, {
  name: 'Albania',
  abbr: 'AL',
  icon: '🇦🇱'
}, {
  name: 'Algeria',
  abbr: 'DZ',
  icon: '🇩🇿'
}, {
  name: 'American Samoa',
  abbr: 'AS',
  icon: '🇦🇸'
}, {
  name: 'Andorra',
  abbr: 'AD',
  icon: '🇦🇩'
}, {
  name: 'Angola',
  abbr: 'AO',
  icon: '🇦🇴'
}, {
  name: 'Anguilla',
  abbr: 'AI',
  icon: '🇦🇮'
}, {
  name: 'Antarctica',
  abbr: 'AQ',
  icon: '🇦🇶'
}, {
  name: 'Antigua and Barbuda',
  abbr: 'AG',
  icon: '🇦🇬'
}, {
  name: 'Argentina',
  abbr: 'AR',
  icon: '🇦🇷'
}, {
  name: 'Armenia',
  abbr: 'AM',
  icon: '🇦🇲'
}, {
  name: 'Aruba',
  abbr: 'AW',
  icon: '🇦🇼'
}, {
  name: 'Australia',
  abbr: 'AU',
  icon: '🇦🇺'
}, {
  name: 'Austria',
  abbr: 'AT',
  icon: '🇦🇹'
}, {
  name: 'Azerbaijan',
  abbr: 'AZ',
  icon: '🇦🇿'
}, {
  name: 'Bahamas',
  abbr: 'BS',
  icon: '🇧🇸'
}, {
  name: 'Bahrain',
  abbr: 'BH',
  icon: '🇧🇭'
}, {
  name: 'Bangladesh',
  abbr: 'BD',
  icon: '🇧🇩'
}, {
  name: 'Barbados',
  abbr: 'BB',
  icon: '🇧🇧'
}, {
  name: 'Belarus',
  abbr: 'BY',
  icon: '🇧🇾'
}, {
  name: 'Belgium',
  abbr: 'BE',
  icon: '🇧🇪'
}, {
  name: 'Belize',
  abbr: 'BZ',
  icon: '🇧🇿'
}, {
  name: 'Benin',
  abbr: 'BJ',
  icon: '🇧🇯'
}, {
  name: 'Bermuda',
  abbr: 'BM',
  icon: '🇧🇲'
}, {
  name: 'Bhutan',
  abbr: 'BT',
  icon: '🇧🇹'
}, {
  name: 'Bolivia',
  abbr: 'BO',
  icon: '🇧🇴'
}, {
  name: 'Bonaire, Sint Eustatius and Saba',
  abbr: 'BQ',
  icon: '🇧🇶'
}, {
  name: 'Bosnia and Herzegovina',
  abbr: 'BA',
  icon: '🇧🇦'
}, {
  name: 'Botswana',
  abbr: 'BW',
  icon: '🇧🇼'
}, {
  name: 'Bouvet Island',
  abbr: 'BV',
  icon: '🇧🇻'
}, {
  name: 'Brazil',
  abbr: 'BR',
  icon: '🇧🇷'
}, {
  name: 'British Indian Ocean Territory',
  abbr: 'IO',
  icon: '🇮🇴'
}, {
  name: 'Brunei Darussalam',
  abbr: 'BN',
  icon: '🇧🇳'
}, {
  name: 'Bulgaria',
  abbr: 'BG',
  icon: '🇧🇬'
}, {
  name: 'Burkina Faso',
  abbr: 'BF',
  icon: '🇧🇫'
}, {
  name: 'Burundi',
  abbr: 'BI',
  icon: '🇧🇮'
}, {
  name: 'Cabo Verde',
  abbr: 'CV',
  icon: '🇨🇻'
}, {
  name: 'Cambodia',
  abbr: 'KH',
  icon: '🇰🇭'
}, {
  name: 'Cameroon',
  abbr: 'CM',
  icon: '🇨🇲'
}, {
  name: 'Canada',
  abbr: 'CA',
  icon: '🇨🇦'
}, {
  name: 'Cayman Islands',
  abbr: 'KY',
  icon: '🇰🇾'
}, {
  name: 'Central African Republic',
  abbr: 'CF',
  icon: '🇨🇫'
}, {
  name: 'Chad',
  abbr: 'TD',
  icon: '🇹🇩'
}, {
  name: 'Chile',
  abbr: 'CL',
  icon: '🇨🇱'
}, {
  name: 'China',
  abbr: 'CN',
  icon: '🇨🇳'
}, {
  name: 'Christmas Island',
  abbr: 'CX',
  icon: '🇨🇽'
}, {
  name: 'Cocos Islands',
  abbr: 'CC',
  icon: '🇨🇨'
}, {
  name: 'Colombia',
  abbr: 'CO',
  icon: '🇨🇴'
}, {
  name: 'Comoros',
  abbr: 'KM',
  icon: '🇰🇲'
}, {
  name: 'Congo',
  abbr: 'CG',
  icon: '🇨🇬'
}, {
  name: 'Congo, Democratic Republic of the',
  abbr: 'CD',
  icon: '🇨🇩'
}, {
  name: 'Cook Islands',
  abbr: 'CK',
  icon: '🇨🇰'
}, {
  name: 'Costa Rica',
  abbr: 'CR',
  icon: '🇨🇷'
}, {
  name: 'Cote d\'Ivoire',
  abbr: 'CI',
  icon: '🇨🇮'
}, {
  name: 'Croatia',
  abbr: 'HR',
  icon: '🇭🇷'
}, {
  name: 'Cuba',
  abbr: 'CU',
  icon: '🇨🇺'
}, {
  name: 'Curacao',
  abbr: 'CW',
  icon: '🇨🇼'
}, {
  name: 'Cyprus',
  abbr: 'CY',
  icon: '🇨🇾'
}, {
  name: 'Czech Republic',
  abbr: 'CZ',
  icon: '🇨🇿'
}, {
  name: 'Denmark',
  abbr: 'DK',
  icon: '🇩🇰'
}, {
  name: 'Djibouti',
  abbr: 'DJ',
  icon: '🇩🇯'
}, {
  name: 'Dominica',
  abbr: 'DM',
  icon: '🇩🇲'
}, {
  name: 'Dominican Republic',
  abbr: 'DO',
  icon: '🇩🇴'
}, {
  name: 'Ecuador',
  abbr: 'EC',
  icon: '🇪🇨'
}, {
  name: 'Egypt',
  abbr: 'EG',
  icon: '🇪🇬'
}, {
  name: 'El Salvador',
  abbr: 'SV',
  icon: '🇸🇻'
}, {
  name: 'Equatorial Guinea',
  abbr: 'GQ',
  icon: '🇬🇶'
}, {
  name: 'Eritrea',
  abbr: 'ER',
  icon: '🇪🇷'
}, {
  name: 'Estonia',
  abbr: 'EE',
  icon: '🇪🇪'
}, {
  name: 'Eswatini',
  abbr: 'SZ',
  icon: '🇸🇿'
}, {
  name: 'Ethiopia',
  abbr: 'ET',
  icon: '🇪🇹'
}, {
  name: 'Falkland Islands',
  abbr: 'FK',
  icon: '🇫🇰'
}, {
  name: 'Faroe Islands',
  abbr: 'FO',
  icon: '🇫🇴'
}, {
  name: 'Fiji',
  abbr: 'FJ',
  icon: '🇫🇯'
}, {
  name: 'Finland',
  abbr: 'FI',
  icon: '🇫🇮'
}, {
  name: 'France',
  abbr: 'FR',
  icon: '🇫🇷'
}, {
  name: 'French Guiana',
  abbr: 'GF',
  icon: '🇬🇫'
}, {
  name: 'French Polynesia',
  abbr: 'PF',
  icon: '🇵🇫'
}, {
  name: 'French Southern Territories',
  abbr: 'TF',
  icon: '🇹🇫'
}, {
  name: 'Gabon',
  abbr: 'GA',
  icon: '🇬🇦'
}, {
  name: 'Gambia',
  abbr: 'GM',
  icon: '🇬🇲'
}, {
  name: 'Georgia',
  abbr: 'GE',
  icon: '🇬🇪'
}, {
  name: 'Germany',
  abbr: 'DE',
  icon: '🇩🇪'
}, {
  name: 'Ghana',
  abbr: 'GH',
  icon: '🇬🇭'
}, {
  name: 'Gibraltar',
  abbr: 'GI',
  icon: '🇬🇮'
}, {
  name: 'Greece',
  abbr: 'GR',
  icon: '🇬🇷'
}, {
  name: 'Greenland',
  abbr: 'GL',
  icon: '🇬🇱'
}, {
  name: 'Grenada',
  abbr: 'GD',
  icon: '🇬🇩'
}, {
  name: 'Guadeloupe',
  abbr: 'GP',
  icon: '🇬🇵'
}, {
  name: 'Guam',
  abbr: 'GU',
  icon: '🇬🇺'
}, {
  name: 'Guatemala',
  abbr: 'GT',
  icon: '🇬🇹'
}, {
  name: 'Guernsey',
  abbr: 'GG',
  icon: '🇬🇬'
}, {
  name: 'Guinea',
  abbr: 'GN',
  icon: '🇬🇳'
}, {
  name: 'Guinea-Bissau',
  abbr: 'GW',
  icon: '🇬🇼'
}, {
  name: 'Guyana',
  abbr: 'GY',
  icon: '🇬🇾'
}, {
  name: 'Haiti',
  abbr: 'HT',
  icon: '🇭🇹'
}, {
  name: 'Heard Island and McDonald Islands',
  abbr: 'HM',
  icon: '🇭🇲'
}, {
  name: 'Holy See',
  abbr: 'VA',
  icon: '🇻🇦'
}, {
  name: 'Honduras',
  abbr: 'HN',
  icon: '🇭🇳'
}, {
  name: 'Hong Kong',
  abbr: 'HK',
  icon: '🇭🇰'
}, {
  name: 'Hungary',
  abbr: 'HU',
  icon: '🇭🇺'
}, {
  name: 'Iceland',
  abbr: 'IS',
  icon: '🇮🇸'
}, {
  name: 'India',
  abbr: 'IN',
  icon: '🇮🇳'
}, {
  name: 'Indonesia',
  abbr: 'ID',
  icon: '🇮🇩'
}, {
  name: 'Iran',
  abbr: 'IR',
  icon: '🇮🇷'
}, {
  name: 'Iraq',
  abbr: 'IQ',
  icon: '🇮🇶'
}, {
  name: 'Ireland',
  abbr: 'IE',
  icon: '🇮🇪'
}, {
  name: 'Isle of Man',
  abbr: 'IM',
  icon: '🇮🇲'
}, {
  name: 'Israel',
  abbr: 'IL',
  icon: '🇮🇱'
}, {
  name: 'Italy',
  abbr: 'IT',
  icon: '🇮🇹'
}, {
  name: 'Jamaica',
  abbr: 'JM',
  icon: '🇯🇲'
}, {
  name: 'Japan',
  abbr: 'JP',
  icon: '🇯🇵'
}, {
  name: 'Jersey',
  abbr: 'JE',
  icon: '🇯🇪'
}, {
  name: 'Jordan',
  abbr: 'JO',
  icon: '🇯🇴'
}, {
  name: 'Kazakhstan',
  abbr: 'KZ',
  icon: '🇰🇿'
}, {
  name: 'Kenya',
  abbr: 'KE',
  icon: '🇰🇪'
}, {
  name: 'Kiribati',
  abbr: 'KI',
  icon: '🇰🇮'
}, {
  name: 'Korea',
  abbr: 'KR',
  icon: '🇰🇷'
}, {
  name: 'Korea, Democratic People\'s Republic of',
  abbr: 'KP',
  icon: '🇰🇵'
}, {
  name: 'Kosovo',
  abbr: 'XK',
  icon: '🇽🇰'
}, {
  name: 'Kuwait',
  abbr: 'KW',
  icon: '🇰🇼'
}, {
  name: 'Kyrgyzstan',
  abbr: 'KG',
  icon: '🇰🇬'
}, {
  name: 'Lao People\'s Democratic Republic',
  abbr: 'LA',
  icon: '🇱🇦'
}, {
  name: 'Latvia',
  abbr: 'LV',
  icon: '🇱🇻'
}, {
  name: 'Lebanon',
  abbr: 'LB',
  icon: '🇱🇧'
}, {
  name: 'Lesotho',
  abbr: 'LS',
  icon: '🇱🇸'
}, {
  name: 'Liberia',
  abbr: 'LR',
  icon: '🇱🇷'
}, {
  name: 'Libya',
  abbr: 'LY',
  icon: '🇱🇾'
}, {
  name: 'Liechtenstein',
  abbr: 'LI',
  icon: '🇱🇮'
}, {
  name: 'Lithuania',
  abbr: 'LT',
  icon: '🇱🇹'
}, {
  name: 'Luxembourg',
  abbr: 'LU',
  icon: '🇱🇺'
}, {
  name: 'Macao',
  abbr: 'MO',
  icon: '🇲🇴'
}, {
  name: 'Madagascar',
  abbr: 'MG',
  icon: '🇲🇬'
}, {
  name: 'Malawi',
  abbr: 'MW',
  icon: '🇲🇼'
}, {
  name: 'Malaysia',
  abbr: 'MY',
  icon: '🇲🇾'
}, {
  name: 'Maldives',
  abbr: 'MV',
  icon: '🇲🇻'
}, {
  name: 'Mali',
  abbr: 'ML',
  icon: '🇲🇱'
}, {
  name: 'Malta',
  abbr: 'MT',
  icon: '🇲🇹'
}, {
  name: 'Marshall Islands',
  abbr: 'MH',
  icon: '🇲🇭'
}, {
  name: 'Martinique',
  abbr: 'MQ',
  icon: '🇲🇶'
}, {
  name: 'Mauritania',
  abbr: 'MR',
  icon: '🇲🇷'
}, {
  name: 'Mauritius',
  abbr: 'MU',
  icon: '🇲🇺'
}, {
  name: 'Mayotte',
  abbr: 'YT',
  icon: '🇾🇹'
}, {
  name: 'Mexico',
  abbr: 'MX',
  icon: '🇲🇽'
}, {
  name: 'Micronesia',
  abbr: 'FM',
  icon: '🇫🇲'
}, {
  name: 'Moldova',
  abbr: 'MD',
  icon: '🇲🇩'
}, {
  name: 'Monaco',
  abbr: 'MC',
  icon: '🇲🇨'
}, {
  name: 'Mongolia',
  abbr: 'MN',
  icon: '🇲🇳'
}, {
  name: 'Montenegro',
  abbr: 'ME',
  icon: '🇲🇪'
}, {
  name: 'Montserrat',
  abbr: 'MS',
  icon: '🇲🇸'
}, {
  name: 'Morocco',
  abbr: 'MA',
  icon: '🇲🇦'
}, {
  name: 'Mozambique',
  abbr: 'MZ',
  icon: '🇲🇿'
}, {
  name: 'Myanmar',
  abbr: 'MM',
  icon: '🇲🇲'
}, {
  name: 'Namibia',
  abbr: 'NA',
  icon: '🇳🇦'
}, {
  name: 'Nauru',
  abbr: 'NR',
  icon: '🇳🇷'
}, {
  name: 'Nepal',
  abbr: 'NP',
  icon: '🇳🇵'
}, {
  name: 'Netherlands',
  abbr: 'NL',
  icon: '🇳🇱'
}, {
  name: 'New Caledonia',
  abbr: 'NC',
  icon: '🇳🇨'
}, {
  name: 'New Zealand',
  abbr: 'NZ',
  icon: '🇳🇿'
}, {
  name: 'Nicaragua',
  abbr: 'NI',
  icon: '🇳🇮'
}, {
  name: 'Niger',
  abbr: 'NE',
  icon: '🇳🇪'
}, {
  name: 'Nigeria',
  abbr: 'NG',
  icon: '🇳🇬'
}, {
  name: 'Niue',
  abbr: 'NU',
  icon: '🇳🇺'
}, {
  name: 'Norfolk Island',
  abbr: 'NF',
  icon: '🇳🇫'
}, {
  name: 'North Macedonia',
  abbr: 'MK',
  icon: '🇲🇰'
}, {
  name: 'Northern Mariana Islands',
  abbr: 'MP',
  icon: '🇲🇵'
}, {
  name: 'Norway',
  abbr: 'NO',
  icon: '🇳🇴'
}, {
  name: 'Oman',
  abbr: 'OM',
  icon: '🇴🇲'
}, {
  name: 'Pakistan',
  abbr: 'PK',
  icon: '🇵🇰'
}, {
  name: 'Palau',
  abbr: 'PW',
  icon: '🇵🇼'
}, {
  name: 'Palestine',
  abbr: 'PS',
  icon: '🇵🇸'
}, {
  name: 'Panama',
  abbr: 'PA',
  icon: '🇵🇦'
}, {
  name: 'Papua New Guinea',
  abbr: 'PG',
  icon: '🇵🇬'
}, {
  name: 'Paraguay',
  abbr: 'PY',
  icon: '🇵🇾'
}, {
  name: 'Peru',
  abbr: 'PE',
  icon: '🇵🇪'
}, {
  name: 'Philippines',
  abbr: 'PH',
  icon: '🇵🇭'
}, {
  name: 'Pitcairn',
  abbr: 'PN',
  icon: '🇵🇳'
}, {
  name: 'Poland',
  abbr: 'PL',
  icon: '🇵🇱'
}, {
  name: 'Portugal',
  abbr: 'PT',
  icon: '🇵🇹'
}, {
  name: 'Puerto Rico',
  abbr: 'PR',
  icon: '🇵🇷'
}, {
  name: 'Qatar',
  abbr: 'QA',
  icon: '🇶🇦'
}, {
  name: 'Reunion',
  abbr: 'RE',
  icon: '🇷🇪'
}, {
  name: 'Romania',
  abbr: 'RO',
  icon: '🇷🇴'
}, {
  name: 'Russian Federation',
  abbr: 'RU',
  icon: '🇷🇺'
}, {
  name: 'Rwanda',
  abbr: 'RW',
  icon: '🇷🇼'
}, {
  name: 'Saint Barthelemy',
  abbr: 'BL',
  icon: '🇧🇱'
}, {
  name: 'Saint Helena',
  abbr: 'SH',
  icon: '🇸🇭'
}, {
  name: 'Saint Kitts and Nevis',
  abbr: 'KN',
  icon: '🇰🇳'
}, {
  name: 'Saint Lucia',
  abbr: 'LC',
  icon: '🇱🇨'
}, {
  name: 'Saint Martin',
  abbr: 'MF',
  icon: '🇲🇫'
}, {
  name: 'Saint Pierre and Miquelon',
  abbr: 'PM',
  icon: '🇵🇲'
}, {
  name: 'Saint Vincent and the Grenadines',
  abbr: 'VC',
  icon: '🇻🇨'
}, {
  name: 'Samoa',
  abbr: 'WS',
  icon: '🇼🇸'
}, {
  name: 'San Marino',
  abbr: 'SM',
  icon: '🇸🇲'
}, {
  name: 'Sao Tome and Principe',
  abbr: 'ST',
  icon: '🇸🇹'
}, {
  name: 'Saudi Arabia',
  abbr: 'SA',
  icon: '🇸🇦'
}, {
  name: 'Senegal',
  abbr: 'SN',
  icon: '🇸🇳'
}, {
  name: 'Serbia',
  abbr: 'RS',
  icon: '🇷🇸'
}, {
  name: 'Seychelles',
  abbr: 'SC',
  icon: '🇸🇨'
}, {
  name: 'Sierra Leone',
  abbr: 'SL',
  icon: '🇸🇱'
}, {
  name: 'Singapore',
  abbr: 'SG',
  icon: '🇸🇬'
}, {
  name: 'Sint Maarten',
  abbr: 'SX',
  icon: '🇸🇽'
}, {
  name: 'Slovakia',
  abbr: 'SK',
  icon: '🇸🇰'
}, {
  name: 'Slovenia',
  abbr: 'SI',
  icon: '🇸🇮'
}, {
  name: 'Solomon Islands',
  abbr: 'SB',
  icon: '🇸🇧'
}, {
  name: 'Somalia',
  abbr: 'SO',
  icon: '🇸🇴'
}, {
  name: 'South Africa',
  abbr: 'ZA',
  icon: '🇿🇦'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  abbr: 'GS',
  icon: '🇬🇸'
}, {
  name: 'South Sudan',
  abbr: 'SS',
  icon: '🇸🇸'
}, {
  name: 'Spain',
  abbr: 'ES',
  icon: '🇪🇸'
}, {
  name: 'Sri Lanka',
  abbr: 'LK',
  icon: '🇱🇰'
}, {
  name: 'Sudan',
  abbr: 'SD',
  icon: '🇸🇩'
}, {
  name: 'Suriname',
  abbr: 'SR',
  icon: '🇸🇷'
}, {
  name: 'Svalbard and Jan Mayen',
  abbr: 'SJ',
  icon: '🇸🇯'
}, {
  name: 'Sweden',
  abbr: 'SE',
  icon: '🇸🇪'
}, {
  name: 'Switzerland',
  abbr: 'CH',
  icon: '🇨🇭'
}, {
  name: 'Syrian Arab Republic',
  abbr: 'SY',
  icon: '🇸🇾'
}, {
  name: 'Taiwan',
  abbr: 'TW',
  icon: '🇹🇼'
}, {
  name: 'Tajikistan',
  abbr: 'TJ',
  icon: '🇹🇯'
}, {
  name: 'Tanzania',
  abbr: 'TZ',
  icon: '🇹🇿'
}, {
  name: 'Thailand',
  abbr: 'TH',
  icon: '🇹🇭'
}, {
  name: 'Timor-Leste',
  abbr: 'TL',
  icon: '🇹🇱'
}, {
  name: 'Togo',
  abbr: 'TG',
  icon: '🇹🇬'
}, {
  name: 'Tokelau',
  abbr: 'TK',
  icon: '🇹🇰'
}, {
  name: 'Tonga',
  abbr: 'TO',
  icon: '🇹🇴'
}, {
  name: 'Trinidad and Tobago',
  abbr: 'TT',
  icon: '🇹🇹'
}, {
  name: 'Tunisia',
  abbr: 'TN',
  icon: '🇹🇳'
}, {
  name: 'Turkey',
  abbr: 'TR',
  icon: '🇹🇷'
}, {
  name: 'Turkmenistan',
  abbr: 'TM',
  icon: '🇹🇲'
}, {
  name: 'Turks and Caicos Islands',
  abbr: 'TC',
  icon: '🇹🇨'
}, {
  name: 'Tuvalu',
  abbr: 'TV',
  icon: '🇹🇻'
}, {
  name: 'Uganda',
  abbr: 'UG',
  icon: '🇺🇬'
}, {
  name: 'Ukraine',
  abbr: 'UA',
  icon: '🇺🇦'
}, {
  name: 'United Arab Emirates',
  abbr: 'AE',
  icon: '🇦🇪'
}, {
  name: 'United Kingdom',
  abbr: 'GB',
  icon: '🇬🇧'
}, {
  name: 'United States',
  abbr: 'US',
  icon: '🇺🇸'
}, {
  name: 'United States Minor Outlying Islands',
  abbr: 'UM',
  icon: '🇺🇲'
}, {
  name: 'Uruguay',
  abbr: 'UY',
  icon: '🇺🇾'
}, {
  name: 'Uzbekistan',
  abbr: 'UZ',
  icon: '🇺🇿'
}, {
  name: 'Vanuatu',
  abbr: 'VU',
  icon: '🇻🇺'
}, {
  name: 'Venezuela',
  abbr: 'VE',
  icon: '🇻🇪'
}, {
  name: 'Vietnam',
  abbr: 'VN',
  icon: '🇻🇳'
}, {
  name: 'Virgin Islands (British)',
  abbr: 'VG',
  icon: '🇻🇬'
}, {
  name: 'Virgin Islands (U.S.)',
  abbr: 'VI',
  icon: '🇻🇮'
}, {
  name: 'Wallis and Futuna',
  abbr: 'WF',
  icon: '🇼🇫'
}, {
  name: 'Western Sahara',
  abbr: 'EH',
  icon: '🇪🇭'
}, {
  name: 'Yemen',
  abbr: 'YE',
  icon: '🇾🇪'
}, {
  name: 'Zambia',
  abbr: 'ZM',
  icon: '🇿🇲'
}, {
  name: 'Zimbabwe',
  abbr: 'ZW',
  icon: '🇿🇼'
}];
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("countryInput");
  var countryList = document.getElementById("countryList");
  input.addEventListener("input", function () {
    var inputValue = input.value.trim().toLowerCase();
    var filteredCountries = countries.filter(function (country) {
      return country.name.toLowerCase().startsWith(inputValue);
    });
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
    countries.forEach(function (country) {
      var listItem = document.createElement("li");
      var iconSpan = document.createElement("span");
      iconSpan.textContent = country.icon;
      listItem.appendChild(iconSpan);
      var nameSpan = document.createElement("span");
      nameSpan.textContent = country.name;
      listItem.appendChild(nameSpan);
      var abbrSpan = document.createElement("span");
      abbrSpan.textContent = "(".concat(country.abbr, ")");
      listItem.appendChild(abbrSpan);
      countryList.appendChild(listItem);
    });
  }
});
},{}],"../../../../AppData/Roaming/nvm/v18.15.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62883" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/nvm/v18.15.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","contender.js"], null)
//# sourceMappingURL=/contender.e4aed193.js.map