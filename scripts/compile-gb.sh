cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=gb SOURCES=src/mame/drivers/gb.cpp 
cp mamegb.js ../../drivers

