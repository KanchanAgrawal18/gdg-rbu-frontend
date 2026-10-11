# Visual alignment adjustments

- Replaced the pixel heading font stack with Pixelify Sans (Google Fonts) with local Tiny5 fallback, closer to the rounded pixel look in the supplied Figma screenshots. Internet access is required on the first load to retrieve Pixelify Sans; the existing Tiny5 remains as a fallback.
- Tightened the desktop navigation, event-card spacing, FAQ layout and footer layout.
- Reduced event-card rounding and offset shadows.
- Preserved TypeScript, Next.js, routing, responsive layout and dark/light mode.
- Default remains light for new visitors. If the page still appears dark, click the theme button; theme persists from the browser's prior choice.
- This is a screenshot-based alignment pass, not a verified pixel-perfect comparison against the live Figma source.

After replacing your source project, run `npm.cmd install`, then `npm.cmd run dev`, then `npm.cmd run build`.
