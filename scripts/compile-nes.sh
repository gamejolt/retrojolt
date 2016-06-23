cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=nes SOURCES=src/mame/drivers/nes.cpp 
cp mamenes.js ../../drivers
