cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=genesis SOURCES=src/mame/drivers/megadriv.cpp 
cp mamegenesis.js ../../drivers
