Place the Windows installer here with this exact name:

  VEX_Setup.exe

The Download button and pricing card link to /downloads/VEX_Setup.exe.

When a future macOS/Linux build exists, add it here too:
  VEX_Setup.dmg      (macOS)
  VEX_Setup.AppImage (Linux)

Note: the file is served directly by the site once committed/deployed.
Keep the file size below Vercel's file-size limits if deploying there
(they suggest hosting large binaries elsewhere, e.g. a release asset on
GitHub). If you host the exe on GitHub Releases instead, update the link
in src/lib/content.ts (DOWNLOAD.href) — the button auto-detects platform
and will keep working for all three OS targets.