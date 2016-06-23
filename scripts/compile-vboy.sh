cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=virtualboy SOURCES=src/mame/drivers/vboy.cpp 
cp mamevirtualboy.js ../../drivers
