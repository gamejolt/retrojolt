cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=gba SOURCES=src/mame/drivers/gba.cpp 
cp mamegba.js ../../drivers