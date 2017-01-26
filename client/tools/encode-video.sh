#####
# https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping
#!/bin/bash

fullfilename=$1
filename=$(basename "$fullfilename")
fname="${filename%.*}"
ext="${filename##*.}"

ffmpeg -i "$fullfilename" -an -s 720x406 -filter:v "setpts=0.7*PTS" -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1300k -pix_fmt yuv420p "${fname}_out.mp4"



#ffmpeg -i "Beer Taps Edit.mp4" -an -s 570x320 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Beer Taps Edit-seek-sm.mp4"
#ffmpeg -i "Beer Taps Edit.mp4" -an -s 720x406 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Beer Taps Edit-seek-md.mp4"
#ffmpeg -i "Beer Taps Edit.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Beer Taps Edit-seek-lg.mp4"


#ffmpeg -i "Market Grille Burger.mp4" -an -s 570x320 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Market Grille Burger-seek-sm.mp4"
#ffmpeg -i "Market Grille Burger.mp4" -an -s 720x406 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Market Grille Burger-seek-md.mp4"
#ffmpeg -i "Market Grille Burger.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Market Grille Burger-seek-lg.mp4"


#ffmpeg -i "WinePourWide.mp4" -an -s 570x320 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourWide-seek-sm.mp4"
#ffmpeg -i "WinePourWide.mp4" -an -s 720x406 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourWide-seek-md.mp4"
#ffmpeg -i "WinePourWide.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourWide-seek-lg.mp4"


#ffmpeg -i "WinePourMedium.mp4" -an -s 570x320 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourMedium-seek-sm.mp4"
#ffmpeg -i "WinePourMedium.mp4" -an -s 720x406 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourMedium-seek-md.mp4"
#ffmpeg -i "WinePourMedium.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourMedium-seek-lg.mp4"


#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=570x320,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Beer Taps Edit-seek-sm.mp4"
#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -crf 20 "Beer Taps Edit-seek-md.mp4"
#ffmpeg -i "Beer Taps Edit.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Beer Taps Edit-seek-lg.mp4"


#ffmpeg -i "Market Grille Burger.mp4" -an -vf scale=570x320,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Market Grille Burger-seek-sm.mp4"
#ffmpeg -i "Market Grille Burger.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -crf 20 "Market Grille Burger-seek-md.mp4"
#ffmpeg -i "Market Grille Burger.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "Market Grille Burger-seek-lg.mp4"


#ffmpeg -i "WinePourWide.mp4" -an -vf scale=570x320,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourWide-seek-sm.mp4"
#ffmpeg -i "WinePourWide.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -crf 20 "WinePourWide-seek-md.mp4"
#ffmpeg -i "WinePourWide.mp4" -an -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourWide-seek-lg.mp4"


#ffmpeg -i "WinePourMedium.mp4" -an -vf scale=570x320,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourMedium-seek-sm.mp4"
#ffmpeg -i "WinePourMedium.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -crf 20 "WinePourMedium-seek-md.mp4"
#ffmpeg -i "WinePourMedium.mp4" -an -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart "WinePourMedium-seek-lg.mp4"


#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=720x406,setsar=1:1 -g 30 -bf 10 "Beer Taps Edit-seek.mp4"
#ffmpeg -i "Market Grille Burger.mp4" -an -vf scale=720x406,setsar=1:1 -g 30 -bf 10 "Market Grille Burger-seek.mp4"
#ffmpeg -i "WinePourWide.mp4" -an -vf scale=720x406,setsar=1:1 -g 30 -bf 10 "WinePourWide-seek.mp4"
#ffmpeg -i "WinePourMedium.mp4" -an -vf scale=720x406,setsar=1:1 -g 30 -bf 10 "WinePourMedium-seek.mp4"


#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -crf 20 "Beer Taps Edit-seek-md.mp4"


#ffmpeg -y -i "Beer Taps Edit.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1200k -pass 1 -f mp4 NUL && /
#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=720x406,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1200k -pass 2 "Beer Taps Edit-seek-md2.mp4"


#ffmpeg -y -i "Beer Taps Edit.mp4" -an -vf scale=600x338,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1300k -pass 1 -f mp4 NUL && /
#ffmpeg -i "Beer Taps Edit.mp4" -an -vf scale=600x338,setsar=1:1 -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1300k -pass 2 "Beer Taps Edit-seek-md3.mp4"


#ffmpeg -i "Market Grille Burger.mp4" -an -filter:v "setpts=0.5*PTS" -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 2000k "Market Grille Burger-seek-md4.mp4"

#ffmpeg -i "Beer Taps Edit.mp4" -an -s 720x406 -filter:v "setpts=0.7*PTS" -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1600k "Beer Taps Edit-seek.mp4"

#ffmpeg -i "Market Grille Burger.mp4" -an -s 720x406 -filter:v "setpts=0.7*PTS" -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 2500k "Market Grille Burger-seek.mp4"

#ffmpeg -i "WinePourCU_1080p.mov" -an -s 720x406 -filter:v "setpts=0.7*PTS" -c:v libx264 -g 1 -bf 16 -b_strategy 0 -movflags faststart -preset veryslow -tune zerolatency -b:v 1300k "WinePour-seek.mp4"