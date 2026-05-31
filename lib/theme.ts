export interface ColorTheme {
  primaryBg: string;      // for CTA button background
  primaryText: string;    // for text inside primary CTA (e.g. text-black or text-white)
  textColor: string;      // for accent text links, active highlights
  borderColor: string;    // for borders
  badgeBg: string;        // for header/top badge background
  badgeText: string;      // for header/top badge text
  badgeBorder: string;    // for header/top badge border
  glowClass: string;      // for shadow glows
  focusRing: string;      // for input focus rings
  accentColor: string;    // for auxiliary icons/checkmarks
  hoverBg: string;        // for CTA button hover states
}

const themeVolt: ColorTheme = {
  primaryBg: "bg-[#ccff00]",
  primaryText: "text-black",
  textColor: "text-[#ccff00]",
  borderColor: "border-[#ccff00]",
  badgeBg: "bg-[#ccff00]/10",
  badgeText: "text-[#ccff00]",
  badgeBorder: "border-[#ccff00]/20",
  glowClass: "shadow-[0_0_20px_rgba(204,255,0,0.3)]",
  focusRing: "focus:border-[#ccff00] focus:ring-[#ccff00]",
  accentColor: "text-[#ccff00]",
  hoverBg: "hover:bg-[#b3e600]"
};

const themeYellow: ColorTheme = {
  primaryBg: "bg-yellow-400",
  primaryText: "text-black",
  textColor: "text-yellow-400",
  borderColor: "border-yellow-400",
  badgeBg: "bg-yellow-400/10",
  badgeText: "text-yellow-400",
  badgeBorder: "border-yellow-400/20",
  glowClass: "shadow-[0_0_20px_rgba(250,204,21,0.3)]",
  focusRing: "focus:border-yellow-400 focus:ring-yellow-400",
  accentColor: "text-yellow-400",
  hoverBg: "hover:bg-yellow-500"
};

const themeYellowBlue: ColorTheme = {
  primaryBg: "bg-yellow-400",
  primaryText: "text-blue-900",
  textColor: "text-yellow-400",
  borderColor: "border-blue-600",
  badgeBg: "bg-blue-600/10",
  badgeText: "text-yellow-400",
  badgeBorder: "border-blue-600/20",
  glowClass: "shadow-[0_0_20px_rgba(250,204,21,0.3)]",
  focusRing: "focus:border-blue-600 focus:ring-yellow-400",
  accentColor: "text-blue-500",
  hoverBg: "hover:bg-yellow-500"
};

const themeRed: ColorTheme = {
  primaryBg: "bg-red-600",
  primaryText: "text-white",
  textColor: "text-red-600",
  borderColor: "border-red-600",
  badgeBg: "bg-red-600/10",
  badgeText: "text-red-600",
  badgeBorder: "border-red-600/20",
  glowClass: "shadow-[0_0_20px_rgba(220,38,38,0.3)]",
  focusRing: "focus:border-red-600 focus:ring-red-600",
  accentColor: "text-red-600",
  hoverBg: "hover:bg-red-700"
};

const themeGreen: ColorTheme = {
  primaryBg: "bg-emerald-500",
  primaryText: "text-black",
  textColor: "text-emerald-500",
  borderColor: "border-emerald-500",
  badgeBg: "bg-emerald-500/10",
  badgeText: "text-emerald-500",
  badgeBorder: "border-emerald-500/20",
  glowClass: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
  focusRing: "focus:border-emerald-500 focus:ring-emerald-500",
  accentColor: "text-emerald-500",
  hoverBg: "hover:bg-emerald-600"
};

const themeBlue: ColorTheme = {
  primaryBg: "bg-blue-600",
  primaryText: "text-white",
  textColor: "text-blue-600",
  borderColor: "border-blue-600",
  badgeBg: "bg-blue-600/10",
  badgeText: "text-blue-600",
  badgeBorder: "border-blue-600/20",
  glowClass: "shadow-[0_0_20px_rgba(37,99,235,0.3)]",
  focusRing: "focus:border-blue-600 focus:ring-blue-600",
  accentColor: "text-blue-600",
  hoverBg: "hover:bg-blue-700"
};

const themeOrange: ColorTheme = {
  primaryBg: "bg-orange-500",
  primaryText: "text-white",
  textColor: "text-orange-500",
  borderColor: "border-orange-500",
  badgeBg: "bg-orange-500/10",
  badgeText: "text-orange-500",
  badgeBorder: "border-orange-500/20",
  glowClass: "shadow-[0_0_20px_rgba(249,115,22,0.3)]",
  focusRing: "focus:border-orange-500 focus:ring-orange-500",
  accentColor: "text-orange-500",
  hoverBg: "hover:bg-orange-600"
};

// Map URL parameter values to their respective themes
const teamToThemeMap: Record<string, ColorTheme> = {
  // Yellow Blue Theme
  mta: themeYellowBlue,
  mherzliya: themeYellowBlue,

  // Yellow Theme
  beitar: themeYellow,
  mnetanya: themeYellow,

  // Red Theme
  hapoel: themeRed,
  hapoeltlv: themeRed,
  hbs: themeRed,
  hhaifa: themeRed,
  hjlm: themeRed,
  sakhnin: themeRed,
  ashdod: themeRed,

  // Green Theme
  mhaifa: themeGreen,
  kfs: themeGreen,

  // Blue Theme
  mpt: themeBlue,
  hpt: themeBlue,
  k8: themeBlue,
  jaffa: themeBlue,
  tiberias: themeBlue,

  // Orange Theme
  bneiyehuda: themeOrange,
  rishon: themeOrange,
  nessziona: themeOrange
};

/**
 * Resolves the team name query param into a ColorTheme configuration.
 * Defaults to the Volt Green theme if the param is missing or unrecognized.
 */
export function getTheme(team: string | null): ColorTheme {
  if (!team) return themeVolt;

  const normalized = team.toLowerCase().trim();
  return teamToThemeMap[normalized] || themeVolt;
}
