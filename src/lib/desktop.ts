// Build-time resolution of the latest desktop release. Parses the
// electron-updater feeds published to R2; falls back to a known version so the
// build never breaks. A CF Pages rebuild picks up new releases.

import { DOWNLOADS_BASE } from "../i18n/utils";

export interface DesktopRelease {
  version: string; // macOS release version
  arm64Url: string; // Apple Silicon .pkg
  intelUrl: string; // Intel .pkg
  winVersion: string;
  winUrl: string; // Windows NSIS installer (.exe)
}

// Last resort, only reached when BOTH feeds fail at build time. Keep it at the
// current release: old installers get pruned from R2 (0.1.1's Windows .exe is
// already a 404), so a stale fallback ships dead download links rather than
// merely old ones — and nothing here would tell you.
//
// It went stale once already (sat at 0.1.27 through the 0.1.28 release), so the
// two guards below exist to make that cheap rather than silent: the feeds cover
// for each other, and using this constant logs loudly enough to see in the CF
// Pages build output.
const FALLBACK = "0.1.28";

async function versionFrom(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { headers: { accept: "text/yaml, text/plain" } });
    if (!res.ok) return null;
    const text = await res.text();
    const m = text.match(/^version:\s*(\S+)/m);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

export async function fetchDesktopRelease(): Promise<DesktopRelease> {
  const [mac, win] = await Promise.all([
    versionFrom(`${DOWNLOADS_BASE}/latest-mac.yml`),
    versionFrom(`${DOWNLOADS_BASE}/latest.yml`),
  ]);
  // The two feeds are published by the same release job in the same step, so
  // they always carry the same version. Letting them cover for each other means
  // one flaky fetch no longer reaches FALLBACK.
  const version = mac ?? win ?? FALLBACK;
  const winVersion = win ?? version;
  if (!mac && !win) {
    console.warn(
      `[desktop] both update feeds unreachable under ${DOWNLOADS_BASE}; ` +
        `falling back to hardcoded v${FALLBACK}. If a newer release has shipped, ` +
        `these download links 404 — bump FALLBACK in src/lib/desktop.ts.`,
    );
  }
  return {
    version,
    arm64Url: `${DOWNLOADS_BASE}/Dicta-${version}-arm64.pkg`,
    intelUrl: `${DOWNLOADS_BASE}/Dicta-${version}.pkg`,
    winVersion,
    winUrl: `${DOWNLOADS_BASE}/Dicta-Setup-${winVersion}.exe`,
  };
}
