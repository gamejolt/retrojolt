cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=cpc6128 SOURCES=src/mame/drivers/amstrad.cpp 
cp mamecpc6128.js ../../drivers
