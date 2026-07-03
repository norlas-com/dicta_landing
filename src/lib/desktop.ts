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

const FALLBACK = "0.1.1";

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
  const version = mac ?? FALLBACK;
  const winVersion = win ?? version;
  return {
    version,
    arm64Url: `${DOWNLOADS_BASE}/Dicta-${version}-arm64.pkg`,
    intelUrl: `${DOWNLOADS_BASE}/Dicta-${version}.pkg`,
    winVersion,
    winUrl: `${DOWNLOADS_BASE}/Dicta-Setup-${winVersion}.exe`,
  };
}
