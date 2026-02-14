const sharp = require('sharp');
const path = require('path');

async function createOgImage() {
  const W = 1200;
  const H = 630;
  const CX = W / 2;

  // Prepare logo — sized for side-by-side layout
  const logoHeight = 180;
  const logo = await sharp(path.join(__dirname, 'public/legacy-boxing-logo.webp'))
    .resize({ height: logoHeight, fit: 'contain' })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width;

  // --- ROW 1: Logo (left) + Text (right) ---
  const contentPadX = 100;
  const logoBgPad = 16;
  const logoX = contentPadX;
  const logoY = 65;

  // White rounded rect behind logo
  const logoBgW = logoW + logoBgPad * 2;
  const logoBgH = logoHeight + logoBgPad * 2;
  const logoBgX = logoX - logoBgPad;
  const logoBgY = logoY - logoBgPad;

  // Text block starts right of logo
  const textX = logoX + logoW + 50;
  const logoCenterY = logoY + logoHeight / 2;

  // Text positions — vertically centered against logo
  const titleFontSize = 52;
  const subtitleFontSize = 20;
  const taglineFontSize = 26;

  // Stack: title + subtitle + divider + tagline, centered vertically on logo
  const textBlockH = titleFontSize + 16 + subtitleFontSize + 20 + taglineFontSize;
  const textBlockStartY = logoCenterY - textBlockH / 2;

  const titleY = textBlockStartY + titleFontSize;
  const subtitleY = titleY + subtitleFontSize + 16;
  const dividerY = subtitleY + 12;
  const taglineY = dividerY + taglineFontSize + 12;

  // --- ROW 2: Program pills ---
  // Gap above row1 ≈ 61px, gap between rows should match, footer gap slightly larger
  const pillsY = logoY + logoHeight + logoBgPad + 60;
  const pills = ['BOXING', 'MMA', "WOMEN'S BOXING", 'YOUTH PROGRAMS', 'PRIVATE TRAINING'];
  const pillPadX = 30;
  const pillH = 42;
  const pillGap = 16;
  const pillFontSize = 16;
  // ~9.5px per char at size 16 + padding
  const pillWidths = pills.map(t => t.length * 9.8 + pillPadX * 2);
  const totalPillsW = pillWidths.reduce((a, b) => a + b, 0) + pillGap * (pills.length - 1);
  let pillStartX = CX - totalPillsW / 2;

  let pillsSvg = '';
  for (let i = 0; i < pills.length; i++) {
    const pw = pillWidths[i];
    const px = pillStartX;
    pillsSvg += `<rect x="${px}" y="${pillsY}" width="${pw}" height="${pillH}" rx="${pillH / 2}" fill="none" stroke="#c40110" stroke-width="2"/>`;
    pillsSvg += `<text x="${px + pw / 2}" y="${pillsY + pillH / 2 + pillFontSize * 0.35}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-weight="700" font-size="${pillFontSize}" fill="#ffffff">${pills[i]}</text>`;
    pillStartX += pw + pillGap;
  }

  // --- FOOTER: 2 rows ---
  // pillsBottom ≈ 363+42=405, footer gap ≈ 75px (slightly larger than inter-row gap)
  const bottomBarY = 430;
  const bottomBarH = H - bottomBarY; // 200px
  const row1CenterY = bottomBarY + 60;
  const row2CenterY = bottomBarY + 140;
  const iconSize = 20;
  const bottomTextSize = 18;
  const row1TextY = row1CenterY + bottomTextSize * 0.35;
  const row1IconY = row1CenterY - iconSize / 2;

  const overlaySvg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <!-- Top accent line -->
    <rect x="0" y="0" width="${W}" height="4" fill="#c40110"/>

    <!-- White rounded rect behind logo -->
    <rect x="${logoBgX}" y="${logoBgY}" width="${logoBgW}" height="${logoBgH}" rx="18" fill="#ffffff"/>

    <!-- Title -->
    <text x="${textX}" y="${titleY}" font-family="'Segoe UI',Arial,sans-serif" font-weight="800" font-size="${titleFontSize}" fill="#ffffff" letter-spacing="2">LEGACY BOXING</text>

    <!-- Subtitle -->
    <text x="${textX}" y="${subtitleY}" font-family="'Segoe UI',Arial,sans-serif" font-weight="600" font-size="${subtitleFontSize}" fill="#cbd5e1" letter-spacing="6">COMBAT SPORTS ACADEMY</text>

    <!-- Divider -->
    <rect x="${textX}" y="${dividerY}" width="140" height="3" rx="1.5" fill="#c40110"/>

    <!-- Tagline -->
    <text x="${textX}" y="${taglineY}" font-family="'Segoe UI',Arial,sans-serif" font-weight="700" font-size="${taglineFontSize}" fill="#f1f5f9">Train With Purpose. Build Your Legacy.</text>

    <!-- Program pills — row 2 -->
    ${pillsSvg}

    <!-- Footer background -->
    <rect x="0" y="${bottomBarY}" width="${W}" height="${bottomBarH}" fill="#000000" opacity="0.5"/>
    <rect x="0" y="${bottomBarY}" width="${W}" height="2" fill="#c40110" opacity="0.7"/>

    <!-- Footer Row 1: Location, Phone, CTA -->
    <g>
      <svg x="${W * 0.14}" y="${row1IconY}" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="#c40110">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <text x="${W * 0.14 + iconSize + 10}" y="${row1TextY}" font-family="'Segoe UI',Arial,sans-serif" font-weight="500" font-size="${bottomTextSize}" fill="#e2e8f0">State College, PA</text>
    </g>

    <g>
      <svg x="${W * 0.42}" y="${row1IconY}" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="#c40110">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
      <text x="${W * 0.42 + iconSize + 10}" y="${row1TextY}" font-family="'Segoe UI',Arial,sans-serif" font-weight="500" font-size="${bottomTextSize}" fill="#e2e8f0">(814) 599-1682</text>
    </g>

    <rect x="${W * 0.71}" y="${row1CenterY - 22}" width="230" height="44" rx="22" fill="#c40110"/>
    <text x="${W * 0.71 + 115}" y="${row1TextY}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-weight="700" font-size="${bottomTextSize}" fill="#ffffff" letter-spacing="0.5">FIRST CLASS FREE</text>

    <!-- Footer Row 2: Full address, centered -->
    <text x="${CX}" y="${row2CenterY + 6}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-weight="400" font-size="16" fill="#94a3b8">2820 E College Ave, Suite F, State College, PA 16801</text>
  </svg>`;

  const overlay = Buffer.from(overlaySvg);

  const result = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 2, g: 6, b: 23, alpha: 1 }
    }
  })
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logo, top: logoY, left: logoX }
    ])
    .png({ compressionLevel: 6 })
    .toFile(path.join(__dirname, 'public/og-image.png'));

  console.log('OG image created:', result.width + 'x' + result.height, (result.size / 1024).toFixed(1) + 'KB');
}

createOgImage().catch(console.error);
