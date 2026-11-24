/**
 * PolarTQR – lansering i Google Play.
 *
 * Så lenge PLAY_URL er tom, viser nettsiden «Kommer snart på Google Play».
 * Når appen er godkjent og publisert: lim inn adressen fra Play Console (Butikkoppføring → «Vis i Google Play»),
 * f.eks. "https://play.google.com/store/apps/details?id=solutions.polarcode.polartqr", og publiser nettsiden på nytt.
 */
export const PLAY_URL = "";

export const PACKAGE_NAME = "solutions.polarcode.polartqr";
export const isLaunched = PLAY_URL.length > 0;
