# One-shot script: copy the 16 photos from the user's OneDrive Thorwell folder
# into /public/images/ with SEO-friendly slugs.

$ErrorActionPreference = 'Stop'

$src = "C:\Users\Billg\OneDrive\Desktop\Thorwell\Website Photos"
$dst = "C:\Users\Billg\OneDrive\Desktop\Monteros Flooring\public\images"

$map = @{
  "DogOnLaminate.webp"          = "dog-on-laminate-flooring.webp"
  "FlooringTeam.webp"           = "monteros-flooring-team.webp"
  "FlooriungTeamInstall.webp"   = "monteros-team-installing-floors.webp"
  "Hardwoodbigspace.webp"       = "hardwood-large-living-space.webp"
  "Hardwoodlivingroom.webp"     = "hardwood-formal-living-room.webp"
  "hardwoodmodernliving.webp"   = "hardwood-modern-open-living.webp"
  "LamaniateSelect.webp"        = "laminate-sample-selection.webp"
  "LaminateInstall.webp"        = "laminate-installation.webp"
  "Laminatebigspace.webp"       = "laminate-large-space.webp"
  "Laminatespace.webp"          = "laminate-living-space.webp"
  "RefnishSander.webp"          = "hardwood-floor-sander.webp"
  "Staircaserefinish.webp"      = "hardwood-staircase-refinishing.webp"
  "VinylChairInCorner.webp"     = "luxury-vinyl-plank-styled-room.webp"
  "VinylLivingRoom.webp"        = "luxury-vinyl-plank-living-room.webp"
  "VinylLowToHigh.webp"         = "luxury-vinyl-plank-perspective.webp"
  "VinylSlect.webp"             = "luxury-vinyl-plank-samples.webp"
}

foreach ($pair in $map.GetEnumerator()) {
  $from = Join-Path $src $pair.Key
  $to   = Join-Path $dst $pair.Value
  if (Test-Path $from) {
    Copy-Item -LiteralPath $from -Destination $to -Force
    $size = (Get-Item $to).Length
    Write-Output ("Copied {0,-32} -> {1,-44} {2,9:N0} bytes" -f $pair.Key, $pair.Value, $size)
  } else {
    Write-Warning "Missing: $from"
  }
}
