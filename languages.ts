const languages = [
  {
    name: "Abkhaz",
    display: "аҧсуа бызшәа",
    emoji: "🇦🇺",
    i18n: "ab",
    rtl: true,
    verified: true,
  },
  {
    name: "Afar",
    display: "Afaraf",
    emoji: "🇦🇫",
    i18n: "aa",
    rtl: true,
    verified: true,
  },
  {
    name: "Afrikaans",
    display: "Afrikaans",
    emoji: "🇿🇦",
    i18n: "af",
    rtl: true,
    verified: true,
  },
  {
    name: "Aja-Gbe",
    display: "አንድጋን",
    emoji: "🇬🇬",
    i18n: "ak",
    rtl: true,
    verified: true,
  },
  {
    name: "Akan (Akuapem Twi, Asante Twi, Fante)",
    display: "Akana",
    emoji: "🇦🇲",
    i18n: "ak",
    rtl: true,
    verified: true,
  },
  {
    name: "Albanian",
    display: "Shqip",
    emoji: "🇦🇱",
    i18n: "sq",
    rtl: true,
    verified: true,
  },
  {
    name: "Amharic",
    display: "አማርኛ",
    emoji: "🇪🇭",
    i18n: "am",
    rtl: true,
    verified: true,
  },
  {
    name: "Anii",
    display: "አንጉን",
    emoji: "🇦🇮",
    i18n: "an",
    rtl: true,
    verified: true,
  },
  {
    name: "Arabic",
    display: "عربي",
    emoji: "🇸🇦",
    i18n: "ar",
    rtl: true,
    verified: true,
  },
  {
    name: "Armenian",
    display: "Հայերեն",
    emoji: "🇦🇲",
    i18n: "hy",
    rtl: true,
    verified: true,
  },
  {
    name: "Assamese",
    display: "অসমীয়া",
    emoji: "🇦🇸",
    i18n: "as",
    rtl: true,
    verified: true,
  },
  {
    name: "Aymara",
    display: "Aymar",
    emoji: "🇦🇲",
    i18n: "ay",
    rtl: true,
    verified: true,
  },
  {
    name: "Azerbaijani",
    display: "Azərbaycan dili",
    emoji: "🇦🇿",
    i18n: "az",
    rtl: true,
    verified: true,
  },
  {
    name: "Balanta",
    display: "Balanta",
    emoji: "🇦🇷",
    i18n: "ba",
    rtl: true,
    verified: true,
  },
  {
    name: "Bambara",
    display: "Bamanankan",
    emoji: "🇦🇹",
    i18n: "bm",
    rtl: true,
    verified: true,
  },
  {
    name: "Bariba",
    display: "Bariba",
    emoji: "🇦🇷",
    i18n: "ba",
    rtl: true,
    verified: true,
  },
  {
    name: "Basque",
    display: "Euskara",
    emoji: "🇪🇸",
    i18n: "eu",
    rtl: true,
    verified: true,
  },
  {
    name: "Bassari",
    display: "Bassari",
    emoji: "🇦🇷",
    i18n: "ba",
    rtl: true,
  },
  {
    name: "Bedik",
    display: "Bedik",
    emoji: "🇦🇷",
    i18n: "be",
    rtl: true,
  },
  {
    name: "Belarusian",
    display: "Беларуская",
    emoji: "🇧🇷",
    i18n: "be",
    rtl: true,
    verified: true,
  },
  {
    name: "Bengali",
    display: "বাংলা",
    emoji: "🇧🇩",
    i18n: "bn",
    rtl: true,
  },
  {
    name: "Berber",
    display: "Berber",
    emoji: "🇦🇷",
    i18n: "ber",
    rtl: true,
  },
  {
    name: "Biali",
    display: "Biali",
    emoji: "🇦🇷",
    i18n: "bi",
    rtl: true,
  },
  {
    name: "Bulgarian",
    display: "Български",
    emoji: "🇷🇺",
    i18n: "bg",
    rtl: false,
    verified: true,
  },
  {
    name: "Catalan",
    display: "Català",
    emoji: "🇨🇦",
    i18n: "ca",
    rtl: false,
    verified: true,
  },
  {
    name: "Chinese Simplified",
    display: "简体中文",
    emoji: "🇨🇳",
    i18n: "zh-CN",
    rtl: false,
    verified: true,
  },
  {
    name: "Chinese Traditional",
    display: "繁體中文",
    emoji: "🇨🇳",
    i18n: "zh-TW",
    rtl: false,
    verified: true,
  },
  {
    name: "Croatian",
    display: "Hrvatski",
    emoji: "🇭🇷",
    i18n: "hr",
    rtl: false,
    verified: true,
  },
  {
    name: "Czech",
    display: "Český",
    emoji: "🇨🇿",
    i18n: "cs",
    rtl: false,
    verified: true,
  },
  {
    name: "Danish",
    display: "Dansk",
    emoji: "🇩🇰",
    i18n: "da",
    rtl: false,
    verified: true,
  },
  {
    name: "Dutch",
    display: "Nederlands",
    emoji: "🇳🇱",
    i18n: "nl",
    rtl: false,
    verified: true,
  },
  {
    name: "English",
    display: "English",
    emoji: "🇺🇸",
    i18n: "en",
    rtl: false,
    verified: true,
  },
  {
    name: "Español",
    display: "Español",
    emoji: "🇪🇸",
    i18n: "es",
    rtl: false,
    verified: true,
  },
  {
    name: "Finnish",
    display: "Suomi",
    emoji: "🇫🇮",
    i18n: "fi",
    rtl: false,
    verified: true,
  },
  {
    name: "French",
    display: "Français",
    emoji: "🇫🇷",
    i18n: "fr",
    rtl: false,
    verified: true,
  },
  {
    name: "German",
    display: "Deutsch",
    emoji: "🇩🇪",
    i18n: "de",
    rtl: false,
    verified: true,
  },
  {
    name: "Greek",
    display: "Ελληνικά",
    emoji: "🇬🇷",
    i18n: "el",
    rtl: false,
    verified: true,
  },
  {
    name: "Hebrew",
    display: "עברית",
    emoji: "🇮🇱",
    i18n: "he",
    rtl: true,
    verified: true,
  },
  {
    name: "Hindi",
    display: "हिन्दी",
    emoji: "🇮🇳",
    i18n: "hi",
    rtl: false,
    verified: true,
  },
  {
    name: "Hungarian",
    display: "Magyar",
    emoji: "🇭🇺",
    i18n: "hu",
    rtl: false,
    verified: true,
  },
  {
    name: "Indonesian",
    display: "Bahasa Indonesia",
    emoji: "🇮🇩",
    i18n: "id",
    rtl: false,
    verified: true,
  },
  {
    name: "Italian",
    display: "Italiano",
    emoji: "🇮🇹",
    i18n: "it",
    rtl: false,
    verified: true,
  },
  {
    name: "Japanese",
    display: "日本語",
    emoji: "🇯🇵",
    i18n: "ja",
    rtl: false,
    verified: true,
  },
  {
    name: "Korean",
    display: "한국어",
    emoji: "🇰🇷",
    i18n: "ko",
    rtl: false,
    verified: true,
  },
  {
    name: "Latvian",
    display: "Latviešu",
    emoji: "🇱🇻",
    i18n: "lv",
    rtl: false,
    verified: true,
  },
  {
    name: "Lithuanian",
    display: "Lietuvių",
    emoji: "🇱🇹",
    i18n: "lt",
    rtl: false,
    verified: true,
  },
  {
    name: "Norwegian",
    display: "Norsk",
    emoji: "🇳🇴",
    i18n: "nb",
    rtl: false,
    verified: true,
  },
  {
    name: "Polish",
    display: "Polski",
    emoji: "🇵🇱",
    i18n: "pl",
    rtl: false,
    verified: true,
  },
  {
    name: "Portuguese",
    display: "Português",
    emoji: "🇵🇹",
    i18n: "pt",
    rtl: false,
    verified: true,
  },
  {
    name: "Romanian",
    display: "Română",
    emoji: "🇷🇴",
    i18n: "ro",
    rtl: false,
    verified: true,
  },
  {
    name: "Russian",
    display: "Русский",
    emoji: "🇷🇺",
    i18n: "ru",
    rtl: false,
    verified: true,
  },
  {
    name: "Serbian",
    display: "Српски",
    emoji: "🇷🇸",
    i18n: "sr",
    rtl: false,
    verified: true,
  },
  {
    name: "Slovak",
    display: "Slovenský",
    emoji: "🇸🇰",
    i18n: "sk",
    rtl: false,
    verified: true,
  },
  {
    name: "Slovenian",
    display: "Slovenščina",
    emoji: "🇸🇮",
    i18n: "sl",
    rtl: false,
    verified: true,
  },
  {
    name: "Swedish",
    display: "Svenska",
    emoji: "🇸🇪",
    i18n: "sv",
    rtl: false,
    verified: true,
  },
  {
    name: "Thai",
    display: "ภาษาไทย",
    emoji: "🇹🇭",
    i18n: "th",
    rtl: false,
    verified: true,
  },
  {
    name: "Turkish",
    display: "Türkçe",
    emoji: "🇹🇷",
    i18n: "tr",
    rtl: false,
    verified: true,
  },
  {
    name: "Ukrainian",
    display: "Українська",
    emoji: "🇺🇦",
    i18n: "uk",
    rtl: false,
    verified: true,
  },
  {
    name: "Vietnamese",
    display: "Tiếng Việt",
    emoji: "🇻🇳",
    i18n: "vi",
    rtl: false,
    verified: true,
  },
];
