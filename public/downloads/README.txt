The installer is hosted as a GitHub Release — not in git (it's 395 MB and
git has a 100 MB per-file limit).

Download URL (already wired into the site):
  https://github.com/Ankur3509/Vex-Website/releases/download/v1.9.0/VEX_Setup.exe

To release a new version:
1. Rebuild the installer.
2. Create a release on GitHub (Releases → Draft new release) with a new
   tag (e.g. v1.10.0) and attach the exe.
3. Update DOWNLOAD.href + version + checksum in src/lib/content.ts.
4. Commit and push — the site redeploys automatically.

This folder is intentionally git-ignored (see .gitignore: *.exe) so the
binary never lands in the repository. You can keep a local copy here
for safekeeping.