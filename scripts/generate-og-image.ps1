Add-Type -AssemblyName System.Drawing

$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.Clear([System.Drawing.Color]::FromArgb(255, 11, 15, 20))

$penGrid = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(20, 76, 201, 240), 1)
for ($x = 0; $x -lt $w; $x += 40) { $g.DrawLine($penGrid, $x, 0, $x, $h) }
for ($y = 0; $y -lt $h; $y += 40) { $g.DrawLine($penGrid, 0, $y, $w, $y) }

$accent = [System.Drawing.Color]::FromArgb(255, 76, 201, 240)
$text = [System.Drawing.Color]::FromArgb(255, 233, 239, 244)

$fontBrand = New-Object System.Drawing.Font 'Segoe UI', 72, ([System.Drawing.FontStyle]::Bold)
$fontTag = New-Object System.Drawing.Font 'Segoe UI', 28, ([System.Drawing.FontStyle]::Regular)
$brushBrand = New-Object System.Drawing.SolidBrush $text
$brushAccent = New-Object System.Drawing.SolidBrush $accent
$brushBar = New-Object System.Drawing.SolidBrush $accent

# CONTENT.md §19: minimal text on OG image — wordmark + "Dolazak na adresu" only
$g.FillRectangle($brushBar, 80, 220, 120, 6)
$g.DrawString('MobilKlime', $fontBrand, $brushBrand, 80, 250)
$g.DrawString('Dolazak na adresu', $fontTag, $brushAccent, 80, 360)

$dir = Join-Path $PSScriptRoot '..\public'
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }
$path = Join-Path $dir 'og-image.png'
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$penGrid.Dispose()
$fontBrand.Dispose()
$fontTag.Dispose()
$brushBrand.Dispose()
$brushAccent.Dispose()
$brushBar.Dispose()

Get-Item $path | Select-Object FullName, Length
